import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

interface ContactInfoProps {
  phone?: string;
  email?: string;
  branchesCount?: number;
  openingHours?: string;
}

const ContactInfo = ({
  phone,
  email,
  branchesCount,
  openingHours,
}: ContactInfoProps) => {
  const contactItems = [
    {
      icon: <Phone size={22} />,
      title: "Phone",
      value: phone || "Phone number unavailable",
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: email || "Email unavailable",
    },
    {
      icon: <MapPin size={22} />,
      title: "Branches",
      value:
        branchesCount !== undefined
          ? `${branchesCount} ${branchesCount === 1 ? "location" : "locations"}`
          : "Locations unavailable",
    },
    {
      icon: <Clock3 size={22} />,
      title: "Opening Hours",
      value: openingHours || "Opening hours unavailable",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-10 text-center">
          <span
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-[var(--primary-color)]
            "
          >
            Contact Information
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            We're Here for You
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--text-color)]/60 md:text-base">
            Whether you have a question about an order or simply want
            to learn more about us, we're happy to help.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {contactItems.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-[var(--primary-color)]/10
                bg-[var(--card-color)]
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--primary-color)]/30
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--primary-color)]/10
                  text-[var(--primary-color)]
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold">
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  break-words
                  text-sm
                  leading-6
                  text-[var(--text-color)]/60
                "
              >
                {item.value}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;