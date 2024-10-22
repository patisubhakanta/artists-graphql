import { GET_PRODUCTS } from "@/lib/graphql/queries";
import client from "@/lib/apolloClient";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { ProductDTO } from "@/types/Types";

export default async function Home() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  const products = data.products.edges.map(
    ({ node }: { node: ProductDTO }) => node
  );
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Saleor Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: ProductDTO) => (product) && (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product}  />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}