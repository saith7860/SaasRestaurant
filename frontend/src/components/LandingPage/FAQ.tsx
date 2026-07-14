import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to launch my restaurant website?",
    answer:
      "Most restaurant websites are delivered within 5–10 business days depending on the required features, menu size, and revisions.",
  },
  {
    question: "Can customers place orders online?",
    answer:
      "Yes. We provide a complete online ordering system with cart, checkout, order tracking, payment integration, and admin dashboard.",
  },
  {
    question: "Can I update my menu myself?",
    answer:
      "Absolutely. Every restaurant gets an easy-to-use admin panel where you can manage menu items, categories, pricing, images, and availability.",
  },
  {
    question: "Do you support mobile devices?",
    answer:
      "Yes. Every website is fully responsive and optimized for desktops, tablets, and smartphones.",
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer:
      "Yes. We can help you purchase your domain, configure hosting, SSL certificates, and deploy your restaurant website.",
  },
  {
    question: "What payment methods can customers use?",
    answer:
      "We can integrate Cash on Delivery, Stripe, PayPal, JazzCash, EasyPaisa, or other payment gateways based on your requirements.",
  },
  {
    question: "Can I have multiple restaurant branches?",
    answer:
      "Yes. Our platform supports multiple branches with separate menus, orders, delivery areas, and management.",
  },
  {
    question: "What happens after purchasing?",
    answer:
      "After purchase, we'll contact you to collect your branding, menu, logo, and business information. Then we'll build and launch your website.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[var(--background-color)] py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border border-[var(--primary-color)]/20 bg-[var(--card-color)] px-4 py-2 text-sm font-semibold text-[var(--primary-color)]">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[var(--text-color)] md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-color)]/70">
            Everything you need to know before launching your restaurant
            website.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] transition-all duration-300 hover:border-[var(--primary-color)]/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-[var(--text-color)]">
                  {faq.question}
                </span>

                <div className="text-[var(--primary-color)]">
                  {openIndex === index ? (
                    <ChevronUp size={22} />
                  ) : (
                    <ChevronDown size={22} />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-6 py-5 text-[var(--text-color)]/70 leading-7">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-10 text-center">
          <h3 className="text-2xl font-bold text-[var(--text-color)]">
            Still have questions?
          </h3>

          <p className="mt-3 text-[var(--text-color)]/70">
            Our team is happy to help you choose the perfect solution for your
            restaurant.
          </p>

          <button className="mt-6 rounded-xl bg-[var(--button-color)] px-8 py-3 font-semibold text-[var(--button-text-color)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]">
            Book a Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;