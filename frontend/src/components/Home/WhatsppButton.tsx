import { useRestaurant } from "../../context/RestaurantContext";

const WhatsAppButton = () => {
  const { restaurantData } = useRestaurant();



  if (!restaurantData?.branches[0].contactNumber) {
    return null;
  }
  const whatsappNumber = restaurantData?.branches[0].contactNumber;

  const message = `Hello ${restaurantData?.restaurantData?.restaurantName}, I want to place an order.`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-[#25D366] text-white border-2 border-[var(--primary-color)]/40 shadow-2xl shadow-[var(--primary-color)]/20 transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A] hover:shadow-[var(--primary-color)]/40 active:scale-95"
      title="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.43 0 .06 5.37.06 11.98c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.94 11.94 0 0 0 5.84 1.49h.01c6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.51-8.4ZM12.05 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.98c-.01 5.45-4.44 9.86-9.89 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;