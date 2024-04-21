import React, { useState } from 'react'
import QuantityEditor from '../components/QuantityEditor'

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
      </div>
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
