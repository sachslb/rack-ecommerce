import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import { useEffect, useState } from "react";

import MobileMenu from "./Mobilemenu";
import CartDrawer from "./CartDrawer";
import { useCart } from "../context/CartContext";
import products from "../data/products";

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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // SEARCH STATES
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { cartCount } = useCart();

  // FILTER PRODUCTS
  const searchResults =
    searchQuery.trim() === ""
      ? []
      : products.filter((product) => {
          const query = searchQuery.toLowerCase();

          return (
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
          );
        });

  // CLOSE SEARCH WITH ESCAPE
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // PREVENT BODY SCROLL WHEN SEARCH IS OPEN
  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  const openSearch = () => {
    setSearchOpen(true);

    setTimeout(() => {
      document.getElementById("rack-search-input")?.focus();
    }, 100);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearchResult = () => {
    closeSearch();

    setTimeout(() => {
      document.getElementById("shop")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">

          {/* LOGO */}
          <a
            href="#"
            className="group flex items-center"
          >
            <span className="text-[25px] font-black tracking-[-0.06em] text-gray-950 transition group-hover:text-orange-500">
              RACK
            </span>

            <span className="ml-0.5 text-[25px] font-black text-orange-500">
              .
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#"
              className="relative py-7 text-[13px] font-semibold text-gray-800 transition hover:text-orange-500"
            >
              Home
            </a>

            <a
              href="#shop"
              className="relative py-7 text-[13px] font-semibold text-gray-800 transition hover:text-orange-500"
            >
              Shop
            </a>

            {/* CATEGORIES */}
            <div
              className="group relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button
                onClick={() =>
                  setCategoriesOpen(!categoriesOpen)
                }
                className="flex items-center gap-1.5 py-7 text-[13px] font-semibold text-gray-800 transition hover:text-orange-500"
              >
                Categories

                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`transition-transform duration-300 ${
                    categoriesOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* MEGA MENU */}
              <div
                className={`
                  absolute left-1/2 top-full
                  w-[850px]
                  -translate-x-1/2
                  rounded-b-2xl
                  border border-gray-100
                  bg-white
                  p-7
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-200
                  ${
                    categoriesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }
                `}
              >
                <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-5">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">
                      Explore
                    </p>

                    <h3 className="mt-1 text-xl font-black tracking-tight">
                      Shop by Category
                    </h3>
                  </div>

                  <a
                    href="#shop"
                    className="text-xs font-semibold text-gray-500 transition hover:text-orange-500"
                  >
                    View All Products →
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-x-10 gap-y-8">

                  {categoryGroups.map((group) => (
                    <div key={group.title}>

                      <h4 className="mb-3 text-sm font-bold">
                        {group.title}
                      </h4>

                      <ul className="space-y-2">

                        {group.items.map((item) => (
                          <li key={item}>

                            <a
                              href="#shop"
                              className="text-sm text-gray-500 transition hover:text-orange-500"
                            >
                              {item}
                            </a>

                          </li>
                        ))}

                      </ul>

                    </div>
                  ))}

                </div>
              </div>
            </div>

            <a
              href="#about"
              className="py-7 text-[13px] font-semibold text-gray-800 transition hover:text-orange-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="py-7 text-[13px] font-semibold text-gray-800 transition hover:text-orange-500"
            >
              Contact
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-1">

            {/* SEARCH */}
            <button
              onClick={openSearch}
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 hover:text-orange-500"
              aria-label="Search"
            >
              <Search
                size={19}
                strokeWidth={1.8}
              />
            </button>

            {/* CART */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 hover:text-orange-500"
              aria-label="Shopping cart"
            >
              <ShoppingBag
                size={19}
                strokeWidth={1.8}
              />

              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-orange-500 px-1 text-[9px] font-black text-white ring-2 ring-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 hover:text-orange-500 md:hidden"
              aria-label="Menu"
            >
              {menuOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <MobileMenu
            setMenuOpen={setMenuOpen}
          />
        )}
      </header>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={cartOpen}
        setIsOpen={setCartOpen}
      />

      {/* SEARCH OVERLAY */}
      <div
        className={`
          fixed inset-0 z-[100]
          bg-black/40
          backdrop-blur-sm
          transition-all duration-300
          ${
            searchOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
        onClick={closeSearch}
      >
        <div
          className={`
            mx-auto w-full max-w-3xl
            px-4 pt-5 sm:px-6 sm:pt-8
            transition-all duration-300
            ${
              searchOpen
                ? "translate-y-0"
                : "-translate-y-5"
            }
          `}
          onClick={(event) =>
            event.stopPropagation()
          }
        >
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)]">

            {/* SEARCH HEADER */}
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4 sm:px-5">

              <Search
                size={21}
                className="shrink-0 text-orange-500"
                strokeWidth={2}
              />

              <input
                id="rack-search-input"
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search racks, storage, bookshelves..."
                className="min-w-0 flex-1 bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-black"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}

              <button
                onClick={closeSearch}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-black"
                aria-label="Close search"
              >
                <X size={19} />
              </button>

            </div>

            {/* SEARCH CONTENT */}
            <div className="max-h-[70vh] overflow-y-auto">

              {/* EMPTY SEARCH */}
              {!searchQuery && (
                <div className="px-5 py-10 text-center sm:py-14">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
                    <Search
                      size={24}
                      className="text-orange-500"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-gray-900">
                    What are you looking for?
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Search for racks, shelves, storage units and more.
                  </p>

                  {/* POPULAR SEARCHES */}
                  <div className="mt-6 flex flex-wrap justify-center gap-2">

                    {[
                      "Display Rack",
                      "Shoe Rack",
                      "Bookshelf",
                      "Kitchen Rack",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() =>
                          setSearchQuery(item)
                        }
                        className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-500"
                      >
                        {item}
                      </button>
                    ))}

                  </div>

                </div>
              )}

              {/* SEARCH RESULTS */}
              {searchQuery && searchResults.length > 0 && (
                <div className="p-4 sm:p-5">

                  <div className="mb-3 flex items-center justify-between px-1">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      Search Results
                    </p>

                    <p className="text-xs text-gray-400">
                      {searchResults.length}{" "}
                      {searchResults.length === 1
                        ? "product"
                        : "products"}
                    </p>

                  </div>

                  <div className="space-y-2">

                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={handleSearchResult}
                        className="group flex w-full items-center gap-4 rounded-xl p-2 text-left transition hover:bg-gray-50"
                      >

                        {/* PRODUCT IMAGE */}
                        <div className="h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-20 sm:w-16">

                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />

                        </div>

                        {/* PRODUCT INFO */}
                        <div className="min-w-0 flex-1">

                          <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                            {product.category}
                          </p>

                          <h3 className="mt-1 line-clamp-1 text-sm font-bold text-gray-900">
                            {product.name}
                          </h3>

                          <div className="mt-1 flex items-center gap-2">

                            <span className="text-sm font-black text-gray-900">
                              ₹{product.price.toLocaleString("en-IN")}
                            </span>

                            <span className="text-[11px] text-gray-400 line-through">
                              ₹{product.oldPrice.toLocaleString("en-IN")}
                            </span>

                          </div>

                        </div>

                        <ArrowRight
                          size={17}
                          className="mr-2 shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-orange-500"
                        />

                      </button>
                    ))}

                  </div>

                </div>
              )}

              {/* NO RESULTS */}
              {searchQuery &&
                searchResults.length === 0 && (
                  <div className="px-5 py-12 text-center sm:py-16">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">

                      <Search
                        size={23}
                        className="text-gray-400"
                        strokeWidth={1.7}
                      />

                    </div>

                    <h3 className="mt-5 text-base font-bold text-gray-900">
                      No products found
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Try searching for a different rack or category.
                    </p>

                    <button
                      onClick={() =>
                        setSearchQuery("")
                      }
                      className="mt-5 rounded-full bg-black px-5 py-2.5 text-xs font-bold text-white transition hover:bg-orange-500"
                    >
                      Clear Search
                    </button>

                  </div>
                )}

            </div>

            {/* SEARCH FOOTER */}
            <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">

              <p className="text-center text-[10px] text-gray-400">
                Press{" "}
                <span className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-semibold text-gray-600">
                  ESC
                </span>{" "}
                to close
              </p>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;