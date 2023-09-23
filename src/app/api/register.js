import axios from "axios";

export const registerUser = async (data) => {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  const response = await axios.post(
    "https://backend.getlinked.ai/hackathon/registration",
    data, config
  );
  return response;
};