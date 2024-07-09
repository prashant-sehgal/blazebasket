export function formatIndianPrice(priceString) {
  const price = parseFloat(priceString.replace(/,/g, '')) // Remove existing commas
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2, // Optional: Set the number of decimal places
  })
  return formatter.format(price)
}

export const CatchAsync = function (fun, runner) {
  return fun.catch((error) => runner)
}
