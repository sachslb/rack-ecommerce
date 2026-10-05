import { ArrowRight } from "lucide-react";

function OfferBanner() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#171717] sm:min-h-[400px] lg:min-h-[450px]">

          {/* BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1800&q=85"
            alt="Premium wooden furniture collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* CONTENT */}
          <div className="relative z-10 flex min-h-[360px] items-center px-6 py-12 sm:min-h-[400px] sm:px-12 lg:min-h-[450px] lg:px-16">

            <div className="max-w-xl">

              {/* SMALL LABEL */}
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-orange-400 sm:text-sm">
                Limited Time Offer
              </p>

              {/* TITLE */}
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Upgrade Your
                <br />
                <span className="text-orange-400">
                  Space With RACK.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-md text-sm leading-6 text-white/70 sm:text-base">
                Discover stylish racks, storage solutions and furniture
                designed to bring function and beauty to your space.
              </p>

              {/* BUTTON */}
              <a
                href="#shop"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:bg-orange-500 hover:text-white"
              >
                Shop Collection

                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OfferBanner;