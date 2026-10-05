import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductSection() {
  return (
    <section
      id="shop"
      className="bg-gray-50 py-16 sm:py-20 lg:py-24"
    >

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-8 flex items-end justify-between sm:mb-10">

          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              Our Collection
            </p>

            <h2 className="mt-1.5 text-3xl font-black tracking-tight sm:text-4xl">
              Best Sellers
            </h2>

            <p className="mt-2 hidden text-sm text-gray-500 sm:block">
              Discover our most popular furniture and storage solutions.
            </p>

          </div>


          {/* VIEW ALL */}
          <button className="flex items-center gap-1.5 text-sm font-semibold transition hover:text-orange-500">

            View All

            <ArrowRight size={16} />

          </button>

        </div>


        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductSection;