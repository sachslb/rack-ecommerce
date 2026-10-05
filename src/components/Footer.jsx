import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  Shop: [
    "All Products",
    "Best Sellers",
    "New Arrivals",
    "Offers",
  ],

  Categories: [
    "Living Room",
    "Bedroom",
    "Storage",
    "Dining & Kitchen",
    "Office",
    "Outdoor",
  ],

  Support: [
    "Contact Us",
    "Shipping & Delivery",
    "Returns & Refunds",
    "FAQs",
  ],
};

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#111111] text-white"
    >
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-10">

          {/* BRAND */}
          <div>
            <a
              href="#"
              className="text-3xl font-black tracking-tight"
            >
              RACK<span className="text-orange-500">.</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
              Thoughtfully designed furniture and storage solutions
              made to bring style, comfort and function to your space.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex items-center gap-2">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-white/60 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-white/60 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-white/60 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                YT
              </a>

            </div>
          </div>

          {/* FOOTER LINK COLUMNS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold">
                {title}
              </h3>

              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#shop"
                      className="group flex w-fit items-center gap-1 text-sm text-white/50 transition hover:text-white"
                    >
                      {link}

                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-bold">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              {/* EMAIL */}
              <a
                href="mailto:hello@rack.com"
                className="flex items-start gap-3 text-sm text-white/50 transition hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-orange-500"
                />

                <span>
                  hello@rack.com
                </span>
              </a>

              {/* PHONE */}
              <a
                href="tel:+919999999999"
                className="flex items-start gap-3 text-sm text-white/50 transition hover:text-white"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-orange-500"
                />

                <span>
                  +91 99999 99999
                </span>
              </a>

              {/* LOCATION */}
              <div className="flex items-start gap-3 text-sm leading-5 text-white/50">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-orange-500"
                />

                <span>
                  Bengaluru,
                  <br />
                  Karnataka, India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} RACK. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a
                href="#"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

