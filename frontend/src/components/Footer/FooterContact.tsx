import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const FooterContact = () => {
  return (
    <div>

      <h3 className="mb-6 text-lg font-bold text-white">
        Contact
      </h3>

      <div className="space-y-5">

        <div className="flex gap-3">

          <Phone size={18} className="text-[var(--primary-color)]" />

          <span className="text-white/70">
            +92 300 1234567
          </span>

        </div>

        <div className="flex gap-3">

          <Mail size={18} className="text-[var(--primary-color)]" />

          <span className="text-white/70">
            hello@restaurant.com
          </span>

        </div>

        <div className="flex gap-3">

          <MapPin size={18} className="text-[var(--primary-color)]" />

          <span className="text-white/70">
            Lahore, Pakistan
          </span>

        </div>

      </div>

    </div>
  );
};

export default FooterContact;