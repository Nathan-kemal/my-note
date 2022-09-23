import axios from "axios";
import { toast } from "react-toastify";

export const createRequest = async ({ text, user }) => {
  const response = await axios({
    method: "post",
    url: "/api/note/crud",
    data: {
      text: text,
      user: user,
    },
  });
  return response.data;
};

export const deleteRequest = async (id) => {
  const response = await axios({
    method: "delete",
    url: "/api/note/crud",
    data: {
      id: id,
    },
  });

  return response.data;
};

export const updateRequest = async ({ id, text }) => {
  const response = await axios({
    method: "put",
    url: "/api/note/crud",
    data: {
      id: id,
      text: text,
    },
  });

  return response.data;
};
