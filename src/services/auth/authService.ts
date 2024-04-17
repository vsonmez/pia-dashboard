import axios from "axios";
import { LoginCredentials } from "../../modal/loginModel/loginModel";

const API_AUTH_URL = "https://dummyjson.com/auth";

export const loginService = async (credential: LoginCredentials) => {
  try {
    const response = await axios.post(
      `${API_AUTH_URL}/login`,
      JSON.stringify(credential),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserByToken = async (token: string) => {
  const response = await axios.get(`${API_AUTH_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
