import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const categoryGroups = [
  {
    title: "Living Room",
    items: [
      "Sofas",
      "TV Units",
      "Coffee Tables",
      "Side Tables",
      "Display Racks",
    ],
  },
  {
    title: "Bedroom",
    items: [
      "Beds",
      "Wardrobes",
      "Bedside Tables",
      "Dressing Tables",
      "Bedroom Racks",
    ],
  },
  {
    title: "Storage",
    items: [
      "Shoe Racks",
      "Storage Racks",
      "Bookshelves",
      "Wall Shelves",
      "Utility Racks",
    ],
  },
  {
    title: "Dining & Kitchen",
    items: [
      "Dining Tables",
      "Dining Chairs",
      "Crockery Units",
      "Kitchen Racks",
      "Kitchen Storage",
    ],
  },
  {
    title: "Office",
    items: [
      "Office Tables",
      "Office Chairs",
      "File Storage",
      "Office Racks",
      "Study Tables",
    ],
  },
  {
    title: "Outdoor",
    items: [
      "Outdoor Chairs",
      "Garden Tables",
      "Balcony Furniture",
      "Outdoor Racks",
      "Planters",
    ],
  },
];

function MobileMenu({ setMenuOpen }) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">

      <nav className="flex flex-col">

        {/* HOME */}
        <a
          href="#"
          onClick={closeMenu}
          className="border-b border-gray-100 py-4 text-sm font-semibold transition hover:text-orange-500"
        >
          Home
        </a>


        {/* SHOP */}
        <a
          href="#shop"
          onClick={closeMenu}
          className="border-b border-gray-100 py-4 text-sm font-semibold transition hover:text-orange-500"
        >
          Shop
        </a>


        {/* CATEGORIES */}
        <button
          onClick={() => setCategoriesOpen(!categoriesOpen)}
          className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-left text-sm font-semibold"
        >

          <span>Categories</span>

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              categoriesOpen ? "rotate-180" : ""
            }`}
          />

        </button>


        {/* MOBILE CATEGORIES */}
        {categoriesOpen && (
          <div className="border-b border-gray-100 py-3">

            {categoryGroups.map((group) => (

              <div
                key={group.title}
                className="border-b border-gray-50 py-3 last:border-0"
              >

                {/* CATEGORY TITLE */}
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-900">
                  {group.title}
                </p>


                {/* ITEMS */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">

                  {group.items.map((item) => (

                    <a
                      key={item}
                      href="#shop"
                      onClick={closeMenu}
                      className="flex items-center gap-1 py-1.5 text-xs text-gray-500 transition hover:text-orange-500"
                    >

                      <ChevronRight size={12} />

                      {item}

                    </a>

                  ))}

                </div>

              </div>

            ))}

          </div>
        )}


        {/* ABOUT */}
        <a
          href="#about"
          onClick={closeMenu}
          className="border-b border-gray-100 py-4 text-sm font-semibold transition hover:text-orange-500"
        >
          About
        </a>


        {/* CONTACT */}
        <a
          href="#contact"
          onClick={closeMenu}
          className="border-b border-gray-100 py-4 text-sm font-semibold transition hover:text-orange-500"
        >
          Contact
        </a>


        {/* SHOP BUTTON */}
        <a
          href="#shop"
          onClick={closeMenu}
          className="mt-5 flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-500"
        >
          Start Shopping
        </a>

      </nav>

    </div>
  );
}

export default MobileMenu;