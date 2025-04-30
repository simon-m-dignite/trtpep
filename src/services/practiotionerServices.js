
const BASE_URL = "http://localhost:8000/api";
import axios from "axios";
const handleResponse = async (response) => {
  try {
    if (response.status === 200) {
      return response?.data;
    }
  } catch (error) {
    throw new Error(response?.statusText);
  }
};


const fetchPractitioner = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/practitioner/get`);
      return handleResponse(response);
    } catch (error) {
      throw new Error(
        error.message ? error.response.data.message : error.message
      );
    }
  };
const fetchPharmacie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/pharmacies/get`);
      return handleResponse(response);
    } catch (error) {
      throw new Error(
        error.message ? error.response.data.message : error.message
      );
    }
  };

  export {fetchPractitioner,fetchPharmacie}