export interface CreateResturantForm {
  restaurantName: string;
  description: string;
  slug: string;
  logo?:File,
  banner?:File,
  restaurantEmail: string;
  contactNumber: string;
  deliveryFee: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
   theme: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    cardColor: string;
    textColor: string;
    buttonColor: string;
    buttonTextColor: string;
  };
}