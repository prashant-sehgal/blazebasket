import axios from 'axios'

const url = 'http://192.168.1.9:5500'
const host = `${url}/api/v1`

const categories = [
  'smartphone',
  'laptop',
  'smartwatch',
  'speaker',
  'headphone',
]

export async function getUserData(uid) {
  try {
    const res = await axios.post(`${host}/users/${uid}`, {
      appId: process.env.REACT_APP_APPLICATION_ID,
    })

    return res.data.data.document
  } catch (error) {
    console.log(error)
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post(`${host}/users/login`, {
      email,
      password,
    })
    return response.data
  } catch (error) {
    if (error.response.data.status === 'fail') return error.response.data
  }
}

export function getUserImage(img) {
  return `${url}/public/images/profile/${img}`
}

export async function searchProducts(search) {
  try {
    const response = await axios.get(`${host}/products/search/${search}`)
    return response.data.data.products
  } catch (error) {}
}

export async function getProductReviews(id) {
  try {
    const response = await axios.get(`${host}/reviews/product/${id}`)
    const reviews = response.data.data.documents

    return reviews
  } catch (error) {
    console.log(error)
  }
}

export async function findProductById(productId) {
  const response = await axios.get(`${host}/products/${productId}`)
  return response.data.data.document
}

export async function categoryPicks(category) {
  const result = await axios.get(
    `${host}/products?category=${category}&fields=title,price,ratingsAverage,images`
  )
  const data = flattenAndShuffle(result.data.data.documents)
  return data
}

export async function getNewProducts() {
  const result = await Promise.all(
    categories.map(async function (category) {
      const response = await axios.get(
        `${host}/products?category=${category}&fields=title,price,ratingsAverage,images`
      )
      return response.data.data.documents.slice(-4)
    })
  )
  const data = flattenAndShuffle(result)
  return data
}

export async function getTopPicks() {
  const result = await Promise.all(
    categories.map(async function (category) {
      const response = await axios.get(
        `${host}/products?category=${category}&fields=title,price,ratingsAverage,images`
      )
      return response.data.data.documents.slice(0, 4)
    })
  )
  const data = flattenAndShuffle(result)
  return data
}

function flattenAndShuffle(arr2D) {
  // Flatten the 2D array into a 1D array
  const flatArray = arr2D.flat()

  // Shuffle the elements randomly
  for (let i = flatArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[flatArray[i], flatArray[j]] = [flatArray[j], flatArray[i]]
  }

  return flatArray
}

export function getProductImage(image) {
  return `${url}/public/images/products/${image}`
}