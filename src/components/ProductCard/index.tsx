import { ProductDTO } from "@/types/Types";
import { descriptionFormatter, formatPrice } from "@/utils/commomUtils";
import Image from "next/image";

export default function ProductCard({ product }: { product: ProductDTO }) {
  const { name, thumbnail, description, pricing } = product;
  const { amount, currency } = pricing.priceRange.start.gross

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 max-w-xs h-full flex flex-col">
      {thumbnail && (
        <div className="w-full h-64 mb-4">
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            width={256}
            height={256}
          />
        </div>
      )}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {name}
      </h2>
      <p className="text-lg font-normal mb-2">
        Price: {" "}{formatPrice(amount, currency)}
      </p>
      <p className="text-gray-600 mb-2 line-clamp-3">{descriptionFormatter(description)}</p>
    </div>
  );
}
