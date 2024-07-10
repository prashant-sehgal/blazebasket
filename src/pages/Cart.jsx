import React from 'react'
import QuantityEditor from '../components/QuantityEditor'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import { checkout, getProductImage } from '../API'
import { formatIndianPrice } from '../Utils'
import { NavLink } from 'react-router-dom'

export default function Cart({ cart, updateCart, loginInfo }) {
  function changeQuantity(index, value) {
    let newCart = Object.create(cart)

    if (newCart[index].quantity + value < 1) return

    newCart[index].quantity += value
    updateCart(newCart)
  }

  function removeProductFromCart(index) {
    let newCart = Object.create(cart)
    newCart.splice(index, 1)
    updateCart(newCart)
  }

  async function createCheckoutSession() {
    try {
      if (!cart.length) return

      const products = cart.map((item) => {
        return { id: item.product._id, quantity: item.quantity }
      })

      const response = await checkout(products, loginInfo.jwt)
      window.location.href = response.data.session.url
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="cart">
      <div className="page-title">My Shopping Bag</div>
      <div className="container">
        <div className="products-list">
          <Row type="title">
            <ProductTitle>Product</ProductTitle>
            <ProductQuantity>Quantity</ProductQuantity>
            <ProductPrice>Price</ProductPrice>
            <ProductPrice>Total</ProductPrice>
          </Row>

          {cart
            ? cart.map((item, i) => (
                <Row key={`${item.product._id + Math.random()}`}>
                  <ProductTitle>
                    <ProductCell
                      title={item.product.title}
                      id={item.product._id}
                      img={getProductImage(item.product.images[0])}
                      removeProduct={() => removeProductFromCart(i)}
                    />
                  </ProductTitle>
                  <ProductQuantity>
                    <QuantityEditor
                      value={item.quantity}
                      style={{ width: 100 }}
                      setValue={(amount) => changeQuantity(i, amount)}
                      fontSize={15}
                    />
                  </ProductQuantity>
                  <ProductPrice>
                    {formatIndianPrice(item.product.price.toString())}
                  </ProductPrice>
                  <ProductPrice>
                    {formatIndianPrice(
                      (item.quantity * item.product.price).toString()
                    )}
                  </ProductPrice>
                </Row>
              ))
            : ''}
        </div>
        <Summary cart={cart} onCheckout={createCheckoutSession} />
      </div>
    </div>
  )
}

function Summary({ cart, onCheckout }) {
  let subtotal = 0

  cart.forEach((item) => {
    subtotal += item.quantity * item.product.price
  })

  return (
    <div className="summary">
      <Section>
        <p className="summary-title">summary</p>
      </Section>
      <Section>
        <PromoCode />
      </Section>
      <Section>
        <Cost title="subtotal" amount={formatIndianPrice(`${subtotal}`)} />
        <Cost title="shipping" amount={formatIndianPrice(`${0}`)} />
        <Cost title="gst" amount="Included" />
      </Section>
      <Section>
        <Cost
          title="estimated total"
          amount={formatIndianPrice(`${subtotal}`)}
        />
      </Section>
      <Section>
        <PrimaryButton
          style={{ width: '100%', height: 50 }}
          onPress={onCheckout}
        >
          CHECKOUT
        </PrimaryButton>
      </Section>
    </div>
  )
}

function Section({ children }) {
  return <div className="section">{children}</div>
}

function PromoCode() {
  return (
    <div className="promo-code">
      <p>Do you have a promo code ?</p>
      <input type="text" />
      <button>Apply</button>
    </div>
  )
}

function Cost({ title, amount, styles }) {
  return (
    <div className="cost">
      <p className="cost-title">{title}</p>
      <p className="cost-amount">{amount}</p>
    </div>
  )
}

function Row({ children, type = '' }) {
  return <div className={`row ${type}`}>{children}</div>
}

function ProductTitle({ children }) {
  return <div className="col product-title-col">{children}</div>
}

function ProductQuantity({ children }) {
  return <div className="col product-quantity-col">{children}</div>
}

function ProductPrice({ children }) {
  return <div className="col product-price-col">{children}</div>
}

function ProductCell({ img, title, id, removeProduct }) {
  return (
    <div className="product-cell">
      <div className="img">
        <img src={img} alt={img} />
      </div>
      <div className="details">
        <NavLink to={`/product?id=${id}`}>
          <p>{title}</p>
        </NavLink>
        <button onClick={removeProduct}>Remove</button>
      </div>
    </div>
  )
}
