import axios from "axios";
import CryptoJS from "crypto-js";

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const encryptData = (data) => {
  const jsonData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(jsonData, secretKey).toString();
};

const ContactFormApi = {
  create: async (formData) => {
    
    try {
      const encryptedPayload = encryptData(formData);

      const response = await axios.post(
        `${apiBaseUrl}/create`,
        { data: encryptedPayload },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to submit form");
    }
  },
};

export default ContactFormApi;
