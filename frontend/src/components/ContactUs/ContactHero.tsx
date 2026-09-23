import { Mail, MapPin, Phone } from "lucide-react";

interface ContactHeroProps {
  restaurantName: string;
}

const ContactHero = ({
  restaurantName,
}: ContactHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-[var(--primary-color)]/10">

      {/* Background glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-[var(--primary-color)]/10
          blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-5
          py-16
          text-center
          md:py-20
        "
      >

        {/* Label */}
        <span
          className="
            inline-flex
            rounded-full
            border
            border-[var(--primary-color)]/20
            bg-[var(--card-color)]
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[var(--primary-color)]
          "
        >
          Get In Touch
        </span>

        {/* Heading */}
        <h1
          className="
            mt-6
            text-4xl
            font-black
            leading-tight
            sm:text-5xl
            md:text-6xl
          "
        >
          We'd Love To
          <span className="block text-[var(--primary-color)]">
            Hear From You.
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-8
            text-[var(--text-color)]/65
            md:text-lg
          "
        >
          Have a question, feedback, or just want to say hello?
          Get in touch with{" "}
          <span className="font-semibold text-[var(--text-color)]">
            {restaurantName}
          </span>
          . We're always happy to hear from our customers.
        </p>

        {/* Quick contact */}
        <div className="mt-8 flex flex-col mx-auto sm:mx-1 sm:flex-row justify-center gap-2">

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[var(--primary-color)]/10
              bg-[var(--card-color)]
              px-4
              py-3
              text-sm
              font-semibold
            "
          >
            <Phone
              size={17}
              className="text-[var(--primary-color)]"
            />

            <span>Call Us</span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[var(--primary-color)]/10
              bg-[var(--card-color)]
              px-4
              py-3
              text-sm
              font-semibold
            "
          >
            <Mail
              size={17}
              className="text-[var(--primary-color)]"
            />

            <span>Email Us</span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[var(--primary-color)]/10
              bg-[var(--card-color)]
              px-4
              py-3
              text-sm
              font-semibold
            "
          >
            <MapPin
              size={17}
              className="text-[var(--primary-color)]"
            />

            <span>Visit Us</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactHero;