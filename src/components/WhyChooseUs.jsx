import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "Thoughtfully designed furniture made with quality materials and attention to detail.",
  },
  {
    id: 2,
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Get your favourite furniture delivered safely and conveniently to your doorstep.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure Shopping",
    description:
      "Shop with confidence through a safe, simple and reliable shopping experience.",
  },
  {
    id: 4,
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is here to help you before, during and after your purchase.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">

          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
            Why RACK
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Made for Better Spaces
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Quality furniture, thoughtful designs and a shopping experience
            built around your space.
          </p>

        </div>


        {/* BENEFITS */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.id}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-gray-200 hover:bg-white hover:shadow-lg sm:p-7"
              >

                {/* ICON */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                  />
                </div>


                {/* TITLE */}
                <h3 className="mt-5 text-sm font-bold text-gray-900 sm:text-base">
                  {benefit.title}
                </h3>


                {/* DESCRIPTION */}
                <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                  {benefit.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;