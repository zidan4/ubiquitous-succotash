export default function ProductDetails({ params }: { params: { productId: string } }) {
  return <h1>this is the details for { param.productId }</h1>
}