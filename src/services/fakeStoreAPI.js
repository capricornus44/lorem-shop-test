export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?page=${page}&limit=8")

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
