// src/api/handleApiError.ts

import { toast } from "react-toastify";

const handleApiError = (error: any) => {

  // Backend Validation Errors
  if (error.response?.data?.errors) {

    return error.response.data.errors;
  }

  // Normal Backend Errors
  if (error.response?.data?.message) {

    toast.error(
      error.response.data.message
    );

    return;
  }

  // Server Errors
  if (error.response?.status === 500) {

    toast.error(
      "Internal server error"
    );

    return;
  }

  // Network Errors
  if (error.code === "ERR_NETWORK") {

    toast.error(
      "Network error"
    );

    return;
  }

  toast.error(
    "Something went wrong"
  );
};

export default handleApiError;