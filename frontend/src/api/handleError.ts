import axios from "axios";
import { toast } from "react-toastify";

const handleApiError = (error: unknown) => {
  if (!axios.isAxiosError(error)) {
    toast.error("Something unexpected happened.");
    return null;
  }

  // Validation errors
  if (error.response?.data?.errors) {
    const fieldErrors: Record<string, string> = {};

    error.response.data.errors.forEach((err: any) => {
      fieldErrors[err.field] = err.message;
    });

    return {
      fieldErrors,
    };
  }

  // Backend message
  if (error.response?.data?.message) {
    toast.error(error.response.data.message);
    return null;
  }

  // Network error
  if (!error.response) {
    toast.error(
      "Unable to connect to the server. Please check your internet connection."
    );
    return null;
  }

  // Fallback
  toast.error("Something went wrong. Please try again.");
  return null;
};

export default handleApiError;