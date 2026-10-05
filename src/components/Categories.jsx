const categories = [
  {
    id: 1,
    name: "Display Racks",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Wall Racks",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Shoe Racks",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Storage Racks",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Bookshelves",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Kitchen Racks",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85",
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-8 flex items-end justify-between sm:mb-10">

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              Explore
            </p>

            <h2 className="mt-1.5 text-3xl font-black tracking-tight sm:mt-2 sm:text-4xl">
              Shop by Category
            </h2>
          </div>

          {/* DESKTOP VIEW ALL */}
          <a
            href="#shop"
            className="hidden text-sm font-semibold transition hover:text-orange-500 sm:block"
          >
            View All →
          </a>

        </div>


        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">

          {categories.map((category) => (
            <a
              href="#shop"
              key={category.id}
              className="group"
            >

              {/* IMAGE CARD */}
              <div className="relative aspect-[0.9] overflow-hidden rounded-xl bg-gray-100 sm:aspect-[4/5] sm:rounded-2xl">

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* PREMIUM GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* CATEGORY CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">

                  <h3 className="text-sm font-bold tracking-wide text-white sm:text-lg">
                    {category.name}
                  </h3>

                  <p className="mt-0.5 text-[10px] font-medium text-white/70 sm:text-xs">
                    Explore Collection
                  </p>

                </div>

              </div>

            </a>
          ))}

        </div>


        {/* MOBILE VIEW ALL */}
        <div className="mt-7 flex justify-center sm:hidden">

          <a
            href="#shop"
            className="rounded-full border border-gray-200 px-6 py-3 text-xs font-bold transition duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            View All Categories
          </a>

        </div>

      </div>
    </section>
  );
}

export default Categories;