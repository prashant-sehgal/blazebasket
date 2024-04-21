import React, { useState } from 'react'
import QuantityEditor from '../components/QuantityEditor'
import PrimaryButton from '../components/Buttons/PrimaryButton'

export default function Cart() {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="cart">
      <div className="title">My Shopping Bag</div>
      <div className="container">
        <div className="products-list">
          <Row type="title">
            <ProductTitle>Product</ProductTitle>
            <ProductQuantity>Quantity</ProductQuantity>
            <ProductPrice>Price</ProductPrice>
            <ProductPrice>Total</ProductPrice>
          </Row>
          <Row>
            <ProductTitle>
              <ProductCell
                title="Samsung Galaxy S24 Ultra 5G Pure Titanium (12GB, 256GB)"
                img="sample-product.webp"
                removeProduct={() => console.log('cliked')}
              />
            </ProductTitle>
            <ProductQuantity>
              <QuantityEditor
                value={quantity}
                setValue={setQuantity}
                style={{ width: 100 }}
                fontSize={15}
              />
            </ProductQuantity>
            <ProductPrice>Rs. 1,29,900</ProductPrice>
            <ProductPrice>Rs. 1,29,900</ProductPrice>
          </Row>
          <Row>
            <ProductTitle>
              <ProductCell
                title="Samsung Galaxy S24 Ultra 5G Pure Titanium (12GB, 256GB)"
                img="sample-product.webp"
                removeProduct={() => console.log('cliked')}
              />
            </ProductTitle>
            <ProductQuantity>
              <QuantityEditor
                value={quantity}
                setValue={setQuantity}
                style={{ width: 100 }}
                fontSize={15}
              />
            </ProductQuantity>
            <ProductPrice>Rs. 1,29,900</ProductPrice>
            <ProductPrice>Rs. 1,29,900</ProductPrice>
          </Row>
          <Row>
            <ProductTitle>
              <ProductCell
                title="Samsung Galaxy S24 Ultra 5G Pure Titanium (12GB, 256GB)"
                img="sample-product.webp"
                removeProduct={() => console.log('cliked')}
              />
            </ProductTitle>
            <ProductQuantity>
              <QuantityEditor
                value={quantity}
                setValue={setQuantity}
                style={{ width: 100 }}
                fontSize={15}
              />
            </ProductQuantity>
            <ProductPrice>Rs. 1,29,900</ProductPrice>
            <ProductPrice>Rs. 1,29,900</ProductPrice>
          </Row>
          <Row>
            <ProductTitle>
              <ProductCell
                title="Samsung Galaxy S24 Ultra 5G Pure Titanium (12GB, 256GB)"
                img="sample-product.webp"
                removeProduct={() => console.log('cliked')}
              />
            </ProductTitle>
            <ProductQuantity>
              <QuantityEditor
                value={quantity}
                setValue={setQuantity}
                style={{ width: 100 }}
                fontSize={15}
              />
            </ProductQuantity>
            <ProductPrice>Rs. 1,29,900</ProductPrice>
            <ProductPrice>Rs. 1,29,900</ProductPrice>
          </Row>
        </div>
        <Summary />
      </div>
    </div>
  )
}

function Summary() {
  return (
    <div className="summary">
      <Section>
        <p className="summary-title">summary</p>
      </Section>
      <Section>
        <PromoCode />
      </Section>
      <Section>
        <Cost title="subtotal" amount="Rs. 1,29,900" />
        <Cost title="shipping" amount="Rs. 0" />
        <Cost title="gst" amount="Rs. 0" />
      </Section>
      <Section>
        <Cost title="estimated total" amount="Rs. 12,29,900" />
      </Section>
      <Section>
        <PrimaryButton style={{ width: '100%', height: 50 }}>
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

function ProductTotal({ children }) {
  return <div className="col product-total-col">{children}</div>
}

function ProductCell({ img, title, removeProduct }) {
  return (
    <div className="product-cell">
      <div className="img">
        <img src={`/${img}`} alt={img} />
      </div>
      <div className="details">
        <p>{title}</p>
        <button onClick={removeProduct}>Remove</button>
      </div>
    </div>
  )
}
