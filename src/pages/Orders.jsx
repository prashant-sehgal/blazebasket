import React, { useEffect, useState } from 'react'
import { CompleteMyOrder, getMyOrders, getProductImage } from '../API'
import { formatIndianPrice } from '../Utils'
import { NavLink } from 'react-router-dom'

export default function Orders({ loginInfo }) {
  const [orders, setOrders] = useState()

  async function orderCompleted(id) {
    try {
      const response = await CompleteMyOrder(id, loginInfo.jwt)
      if (response.data.status === 'success') loadOrders()
    } catch (error) {}
  }
  async function loadOrders() {
    try {
      const response = await getMyOrders(loginInfo.jwt)
      const orderWithPaymentsCompleted = response.data.data.documents.filter(
        (order) => order.paymentStatus === 'completed'
      )

      setOrders(orderWithPaymentsCompleted.reverse())
    } catch (error) {}
  }

  useEffect(
    function () {
      async function loadOrders() {
        try {
          const response = await getMyOrders(loginInfo.jwt)
          const orderWithPaymentsCompleted =
            response.data.data.documents.filter(
              (order) => order.paymentStatus === 'completed'
            )

          setOrders(orderWithPaymentsCompleted.reverse())
        } catch (error) {}
      }
      if (loginInfo.isLogedIn) loadOrders()
    },
    [loginInfo]
  )

  return (
    <div className="orders">
      <div className="page-title">My Orders</div>
      <div className="container">
        {' '}
        {orders ? (
          orders.map((order) => (
            <OrderPreview
              order={order}
              key={order._id}
              onCompleteOrder={orderCompleted}
            />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  )
}

function OrderPreview({ order, onCompleteOrder }) {
  return (
    <div className="order-preview">
      <div className="header">
        <span className="text-secondary-blue"># Order Id:</span> {order._id}
      </div>

      <div className="main">
        {order.products.map((item) => (
          <NavLink
            to={`/product?id=${item.product._id}`}
            key={item.product._id}
          >
            <ProudctItemPreview item={item} />
          </NavLink>
        ))}
      </div>

      <div className="footer">
        <div className="payment-section">
          <p>
            <span className="text-secondary-blue font-bold-600">Amount: </span>
            <span className="text-warn">
              {formatIndianPrice(`${order.amount}`)}
            </span>
          </p>
          <p>
            <span className="text-secondary-blue font-bold-600">
              Payment Status:{' '}
            </span>
            <span className="text-success font-bold-600">Success</span>
          </p>
        </div>
        <div className="product-status">
          <span className="text-secondary-blue font-bold-600">
            Order Status:{' '}
          </span>
          {order.completed ? (
            <span className="text-success">Delivered</span>
          ) : (
            <>
              <span className="text-red font-bold-600">Pending</span>
              <div className="btn">
                <button onClick={() => onCompleteOrder(order._id)}>
                  I Recieved My Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function ProudctItemPreview({ item }) {
  return (
    <div className="product-item-preview">
      <div className="img">
        <img
          src={getProductImage(item.product.images[0])}
          alt={getProductImage(item.product.images[0])}
        />
      </div>
      <div className="title">{`${item.product.title.slice(0, 150)}...`}</div>
      <div className="quantity">
        <span className="text-secondary-blue font-bold-600">Quantity: </span>
        {item.quantity}
      </div>
    </div>
  )
}
