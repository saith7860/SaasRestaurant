import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

interface ContactInfoProps {
  phone?: string;
  email?: string;
  address?: string;
  openingHours?: string;
}

const ContactInfo = ({
  phone,
  email,
  address,
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
      title: "Address",
      value: address || "Address unavailable",
    },
    {
      icon: <Clock3 size={22} />,
      title: "Opening Hours",
      value: openingHours || "Opening hours unavailable",
    },
  ];

  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-5">

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