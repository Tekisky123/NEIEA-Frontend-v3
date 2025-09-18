import axiosInstance from "./axiosInstance";
import { ContactFormData } from "./contactSchema";

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await axiosInstance.post("/contact", data);
    return response.data;
  } catch (error: any) {
    // Extract error message from response
    const errorMessage = error.response?.data?.message || "Failed to send message. Please try again.";
    throw new Error(errorMessage);
  }
};
