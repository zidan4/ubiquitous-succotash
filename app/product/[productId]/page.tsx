export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params

  return <h1>this is the details for {productId}</h1>
}