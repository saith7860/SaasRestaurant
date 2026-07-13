import { useState } from "react";
import api from "../../api/api";
import handleApiError from "../../api/handleError";
interface FormData {
  restaurantName: string;
  description: string;
  slug: string;
  restaurantEmail: string;
  contactNumber: string;
  deliveryFee: number | "";
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

const SuperAdmin = () => {
  const [form, setForm] = useState<FormData>({
    restaurantName: "",
    description: "",
    slug: "",
    restaurantEmail: "",
    contactNumber: "",
    deliveryFee: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
     theme: {
    primaryColor: "",
    secondaryColor: "",
    backgroundColor: "",
    cardColor: "",
    textColor: "",
    buttonColor: "",
    buttonTextColor: "",
  },
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? value === ""
            ? ""
            : Number(value)
          : value,
    }));
  };
  const handleThemeChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    theme: {
      ...prev.theme,
      [name]: value,
    },
  }));
};
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/api/super_admin/create-restaurant",
        form
      );

      console.log(response.data);

      alert("Restaurant Created Successfully");

      setForm({
        restaurantName: "",
        description: "",
        slug: "",
        restaurantEmail: "",
        contactNumber: "",
        deliveryFee: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        theme:{
         primaryColor: "",
    secondaryColor: "",
    backgroundColor: "",
    cardColor: "",
    textColor: "",
    buttonColor: "",
    buttonTextColor: ""
        }
      });
    } catch (error) {
      console.log(error);
          const result = handleApiError(error);

            if (result?.fieldErrors) {
                setErrors(result.fieldErrors);
            }
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto p-8 rounded-lg shadow">

        <h1 className="text-2xl font-bold mb-6">
          Create Restaurant
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <h2 className="text-lg font-semibold">
            Restaurant Information
          </h2>

          <input
            type="text"
            name="restaurantName"
            placeholder="Restaurant Name"
            value={form.restaurantName}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
{errors.restaurantName && <p className="text-red-500">{errors.restaurantName}</p>}
          <input
            type="text"
            name="slug"
            placeholder="Slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
{errors.slug && <p className="text-red-500">{errors.slug}</p>}
          <input
            type="email"
            name="restaurantEmail"
            placeholder="Restaurant Email"
            value={form.restaurantEmail}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

{errors.restaurantEmail && <p className="text-red-500">{errors.restaurantEmail}</p>}
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={form.contactNumber}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

{errors.contactNumber && <p className="text-red-500">{errors.contactNumber}</p>}
          <input
            type="number"
            name="deliveryFee"
            placeholder="Delivery Fee"
            value={form.deliveryFee}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
{errors.deliveryFee && <p className="text-red-500">{errors.deliveryFee}</p>}
          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            value={form.description}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
{errors.description && <p className="text-red-500">{errors.description}</p>}
          <hr />

          <h2 className="text-lg font-semibold">
            Owner Information
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Owner Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
{errors.name && <p className="text-red-500">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Owner Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
{errors.email && <p className="text-red-500">{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
{errors.password && <p className="text-red-500">{errors.password}</p>}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
{errors.phone && <p className="text-red-500">{errors.phone}</p>}
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
{errors.address && <p className="text-red-500">{errors.address}</p>}
<hr />

<h2 className="text-lg font-semibold">
  Theme Colors (Optional)
</h2>

<div className="grid grid-cols-2 gap-4">

  <div>
    <label>Primary Color</label>
    <input
      type="color"
      name="primaryColor"
      value={form.theme.primaryColor || "#F4B400"}
      onChange={handleThemeChange}
      className="w-full h-12 border rounded"
    />
  </div>

  <div>
    <label>Secondary Color</label>
    <input
      type="color"
      name="secondaryColor"
      value={form.theme.secondaryColor || "#984447"}
      onChange={handleThemeChange}
      className="w-full h-12 border rounded"
    />
  </div>

  <div>
    <label>Background Color</label>
    <input
      type="color"
      name="backgroundColor"
      value={form.theme.backgroundColor || "#171219"}
      onChange={handleThemeChange}
      className="w-full h-12 border rounded"
    />
  </div>

  <div>
    <label>Card Color</label>
    <input
      type="color"
      name="cardColor"
      value={form.theme.cardColor || "#2A2633"}
      onChange={handleThemeChange}
      className="w-full h-12 border rounded"
    />
  </div>

  <div>
    <label>Text Color</label>
    <input
      type="color"
      name="textColor"
      value={form.theme.textColor || "#FFFFFF"}
      onChange={handleThemeChange}
      className="w-full h-12 border rounded"
    />
  </div>

  <div>
    <label>Button Color</label>
    <input
      type="color"
      name="buttonColor"
      value={form.theme.buttonColor || "#984447"}
      onChange={handleThemeChange}
      className="w-full h-12 border rounded"
    />
  </div>

  <div>
    <label>Button Text Color</label>
    <input
      type="color"
      name="buttonTextColor"
      value={form.theme.buttonTextColor || "#FFFFFF"}
      onChange={handleThemeChange}
      className="w-full h-12 border rounded"
    />
  </div>

</div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Create Restaurant
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdmin;