import axios from "axios";
import { toast } from "react-toastify";

export const createRequest = async (url, text, user) => {
  await axios({
    method: "post",
    url: url,
    data: {
      text: text,
      user: user,
    },
  })
    .then((response) => {
      toast("Note Added", {
        type: "success",
      });
    })
    .catch((error) => {});
};

export const deleteRequest = async (url, id) => {
  await axios({
    method: "delete",
    url: url,
    data: {
      id: id,
    },
  })
    .then((response) => {
      toast("Note Deleted", {
        type: "warning",
      });
    })
    .catch((error) => {});
};

export const updateRequest = async (url, id, text) => {
  await axios({
    method: "put",
    url: url,
    data: {
      id: id,
      text: text,
    },
  })
    .then((response) => {
      toast("Note edited", {
        type: "success",
      });
    })
    .catch((error) => {});
};
