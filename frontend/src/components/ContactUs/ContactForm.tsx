import { useState } from "react";
import type { FormEvent } from "react";
import { Loader2, Mail, MessageSquare, Phone, User } from "lucide-react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    try {
      setLoading(true);

      // TODO:
      // Connect this to your backend contact-message endpoint
      // once that endpoint exists.

      console.log("Contact form submission:", formData);

      await new Promise((resolve) => setTimeout(resolve, 700));

      toast.success("Your message has been received!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5">

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left Content */}
          <div
            className="
              rounded-3xl
              border
              border-[var(--primary-color)]/10
              bg-[var(--card-color)]
              p-7
              shadow-lg
              md:p-9
            "
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-[var(--primary-color)]/20
                bg-[var(--primary-color)]/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[var(--primary-color)]
              "
            >
              Send a Message
            </span>

            <h2 className="mt-5 text-3xl font-black md:text-4xl">
              Let's Talk
            </h2>

            <p
              className="
                mt-4
                max-w-md
                text-sm
                leading-7
                text-[var(--text-color)]/60
                md:text-base
              "
            >
              Have a question about our food, orders, deals, or
              restaurant? Send us a message and we'll be happy to
              help.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--primary-color)]/10
                    text-[var(--primary-color)]
                  "
                >
                  <MessageSquare size={18} />
                </div>

                <div>
                  <p className="font-semibold">
                    Have a question?
                  </p>

                  <p className="mt-1 text-sm text-[var(--text-color)]/50">
                    We're here to help.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--primary-color)]/10
                    text-[var(--primary-color)]
                  "
                >
                  <Phone size={18} />
                </div>

                <div>
                  <p className="font-semibold">
                    Need quick help?
                  </p>

                  <p className="mt-1 text-sm text-[var(--text-color)]/50">
                    Give us a call.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-3xl
              border
              border-[var(--primary-color)]/10
              bg-[var(--card-color)]
              p-7
              shadow-lg
              md:p-9
            "
          >
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[var(--text-color)]/40
                    "
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--primary-color)]/15
                      bg-[var(--background-color)]
                      py-3.5
                      pl-11
                      pr-4
                      outline-none
                      transition
                      placeholder:text-[var(--text-color)]/30
                      focus:border-[var(--primary-color)]
                      focus:ring-2
                      focus:ring-[var(--primary-color)]/10
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[var(--text-color)]/40
                    "
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--primary-color)]/15
                      bg-[var(--background-color)]
                      py-3.5
                      pl-11
                      pr-4
                      outline-none
                      transition
                      placeholder:text-[var(--text-color)]/30
                      focus:border-[var(--primary-color)]
                      focus:ring-2
                      focus:ring-[var(--primary-color)]/10
                    "
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Phone Number
                  <span className="ml-2 font-normal text-[var(--text-color)]/40">
                    Optional
                  </span>
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[var(--text-color)]/40
                    "
                  />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--primary-color)]/15
                      bg-[var(--background-color)]
                      py-3.5
                      pl-11
                      pr-4
                      outline-none
                      transition
                      placeholder:text-[var(--text-color)]/30
                      focus:border-[var(--primary-color)]
                      focus:ring-2
                      focus:ring-[var(--primary-color)]/10
                    "
                  />
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="How can we help you?"
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[var(--primary-color)]/15
                    bg-[var(--background-color)]
                    px-4
                    py-3.5
                    outline-none
                    transition
                    placeholder:text-[var(--text-color)]/30
                    focus:border-[var(--primary-color)]
                    focus:ring-2
                    focus:ring-[var(--primary-color)]/10
                  "
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[var(--button-color)]
                    px-5
                    py-3.5
                    font-bold
                    text-[var(--button-text-color)]
                    shadow-lg
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[var(--primary-color)]
                    hover:text-[var(--background-color)]
                    active:scale-[0.98]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading && <Loader2 size={18} className="animate-spin" />}

                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;