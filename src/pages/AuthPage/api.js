import axios from "axios";

const loginRest = async (username, secret) => {
  return await axios.get("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
      "User-Name": username,
      "User-Secret": secret,
    },
  });
};

const signupRest = async (username, secret, email, first_name, last_name, custom_json) => {
  return await axios.post(
    "https://api.chatengine.io/users/",
    { username, secret, email, first_name, last_name, custom_json },
    { headers: { 'PRIVATE-KEY': import.meta.env.VITE_CHAT_ENGINE_PRIVATE_KEY } }
  );
};

export { loginRest, signupRest };