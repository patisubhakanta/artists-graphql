import client from "@/lib/apolloClient";
import { GET_PRODUCT } from "@/lib/graphql/queries";
import { descriptionFormatter, formatPrice } from "@/utils/commomUtils";
import Image from "next/image";
import { useState, useEffect } from "react";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
    const id: string = params.id;

    const getProductData = async (id: string) => {
        const { data } = await client.query({
            query: GET_PRODUCT,
            variables: { id: decodeURIComponent(id) },
        });
        return data?.product ?? null;
    };

    const product = await getProductData(id);

    if (!product) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <p className="text-red-500">Error loading product</p>
            </div>
        );
    }
    const { amount, currency } = product.pricing.priceRange.start.gross
    return (
        <div className="container mx-auto p-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 border rounded">
                    <Image
                        src={product.images[0].url}
                        alt={product.name || "NA"}
                        width={500}
                        height={500}
                        className="object-contain w-full h-auto max-h-[400px]"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-bold text-gray-700">{product.name}</h1>
                    <p className="text-sm text-gray-500">Category: {product.category.name || "N/A"}</p>
                    <p className="text-xl text-gray-800">
                        Price: {" "}{formatPrice(amount, currency)}

                    </p>
                    <p className="text-gray-600">{descriptionFormatter(product.description || "")}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
