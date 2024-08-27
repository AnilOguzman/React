import { Link, useParams } from "react-router-dom"

const ProductDetailPage = () => {
    const params=useParams();   //params.productId ile ulaşabiliriz.
  return (
    <>
    <div>ProductDetail</div>
    <p>Product: {params.productId}</p>
    <Link to=".." relative="path">Back</Link>
    </>

  )
}

export default ProductDetailPage