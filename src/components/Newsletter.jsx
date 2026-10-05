import { ArrowRight, Mail } from "lucide-react";

function Newsletter() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-black px-6 py-12 sm:px-10 sm:py-16 lg:px-16">

          {/* DECORATIVE CIRCLE */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">

            {/* ICON */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-orange-400">
              <Mail size={21} strokeWidth={1.8} />
            </div>

            {/* LABEL */}
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
              Stay Updated
            </p>

            {/* TITLE */}
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Get the Latest from RACK
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
              Be the first to know about new collections, exclusive offers
              and exciting updates.
            </p>


            {/* EMAIL FORM */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-7 flex max-w-lg flex-col gap-2 sm:flex-row"
            >

              <div className="relative flex-1">

                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-full border border-white/10 bg-white px-11 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-500"
                  required
                />

              </div>


              <button
                type="submit"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Subscribe

                <ArrowRight size={16} />
              </button>

            </form>


            {/* SMALL TEXT */}
            <p className="mt-4 text-[10px] text-white/40 sm:text-xs">
              No spam. Just useful updates from RACK.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;