
import {
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";

import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="group">

      {/* PRODUCT IMAGE */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">

        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
        />


        {/* DISCOUNT */}
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-gray-900 shadow-sm">
          {product.discount}
        </span>


        {/* WISHLIST */}
        <button
          onClick={() =>
            setLiked(!liked)
          }
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105"
          aria-label="Add to wishlist"
        >

          <Heart
            size={17}
            strokeWidth={1.8}
            className={
              liked
                ? "fill-orange-500 text-orange-500"
                : "text-gray-700"
            }
          />

        </button>


        {/* ADD TO CART */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-xl bg-black py-3 text-xs font-bold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-orange-500"
        >
          <ShoppingBag size={15} />

          Add to Cart
        </button>

      </div>


      {/* PRODUCT DETAILS */}
      <div className="pt-4">

        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-5 text-gray-900">
          {product.name}
        </h3>


        {/* RATING */}
        <div className="mt-2 flex items-center gap-1.5">

          <div className="flex items-center gap-0.5 rounded-md bg-green-600 px-1.5 py-1 text-[10px] font-bold text-white">

            {product.rating}

            <Star
              size={10}
              className="fill-white"
            />

          </div>

          <span className="text-[11px] text-gray-400">
            ({product.reviews})
          </span>

        </div>


        {/* PRICE */}
        <div className="mt-2 flex items-center gap-2">

          <span className="text-base font-black text-gray-900">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="text-xs text-gray-400 line-through">
            ₹{product.oldPrice.toLocaleString("en-IN")}
          </span>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;

