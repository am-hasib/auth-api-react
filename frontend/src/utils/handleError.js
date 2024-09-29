import { toast } from "react-toastify";

export const handleError = (error) => {
  toast.error(error?.response?.data?.message);
  console.log(error?.response?.data?.message);
};
