import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function CartDrawer({ isOpen, setIsOpen }) {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const deliveryCharge = cartTotal >= 5000 || cartTotal === 0 ? 0 : 199;

  const finalTotal = cartTotal + deliveryCharge;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px]
          transition-all duration-300
          ${
            isOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* DRAWER */}
      <aside
        className={`
          fixed right-0 top-0 z-[70]
          flex h-full w-full flex-col
          bg-white
          shadow-2xl
          transition-transform duration-300 ease-out
          sm:max-w-[430px]
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-6">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">
              Your Selection
            </p>

            <h2 className="mt-1 text-xl font-black">
              Shopping Cart
            </h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-black hover:text-white"
            aria-label="Close cart"
          >
            <X size={19} />
          </button>

        </div>


        {/* CART CONTENT */}
        {cartItems.length === 0 ? (

          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-50">
              <ShoppingBag
                size={32}
                strokeWidth={1.4}
                className="text-gray-400"
              />
            </div>

            <h3 className="mt-6 text-lg font-bold">
              Your cart is empty
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-gray-400">
              Looks like you haven't added anything to your cart yet.
            </p>

            <button
              onClick={() => {
                setIsOpen(false);

                setTimeout(() => {
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }, 100);
              }}
              className="mt-6 rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-500"
            >
              Start Shopping
            </button>

          </div>

        ) : (

          <>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">

              <div className="space-y-5">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-4 border-b border-gray-100 pb-5"
                  >

                    {/* IMAGE */}
                    <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>


                    {/* DETAILS */}
                    <div className="min-w-0 flex-1">

                      <div className="flex items-start justify-between gap-3">

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                            {item.category}
                          </p>

                          <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-gray-900">
                            {item.name}
                          </h3>
                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="shrink-0 text-gray-300 transition hover:text-red-500"
                          aria-label="Remove product"
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>


                      <div className="mt-3 flex items-center justify-between">

                        {/* QUANTITY */}
                        <div className="flex items-center rounded-full border border-gray-200">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="flex h-8 w-8 items-center justify-center text-gray-500 transition hover:text-black"
                          >
                            <Minus size={13} />
                          </button>

                          <span className="w-7 text-center text-xs font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="flex h-8 w-8 items-center justify-center text-gray-500 transition hover:text-orange-500"
                          >
                            <Plus size={13} />
                          </button>

                        </div>


                        {/* PRICE */}
                        <p className="text-sm font-black">
                          ₹{(
                            item.price * item.quantity
                          ).toLocaleString("en-IN")}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* SUMMARY */}
            <div className="border-t border-gray-100 bg-gray-50 px-5 py-5 sm:px-6">

              <div className="space-y-3">

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery</span>

                  <span>
                    {deliveryCharge === 0
                      ? "FREE"
                      : `₹${deliveryCharge}`}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex items-center justify-between">

                    <span className="font-bold">
                      Total
                    </span>

                    <span className="text-xl font-black">
                      ₹{finalTotal.toLocaleString("en-IN")}
                    </span>

                  </div>
                </div>

              </div>


              {/* CHECKOUT */}
              <button
                onClick={() => alert("Checkout coming soon!")}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 text-sm font-bold text-white transition hover:bg-orange-500"
              >
                Proceed to Checkout
                <ArrowRight size={17} />
              </button>

              <p className="mt-3 text-center text-[10px] text-gray-400">
                Secure checkout • Easy returns • Premium quality
              </p>

            </div>

          </>

        )}

      </aside>
    </>
  );
}

export default CartDrawer;

