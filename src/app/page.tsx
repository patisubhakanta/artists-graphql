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
        <div className="w-full rounded flex items-center justify-center bg-blue-700 mb-6 py-2">
        <h1 className="text-3xl font-bold text-center text-gray-100 italic">Saleor Products</h1>
        </div>
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