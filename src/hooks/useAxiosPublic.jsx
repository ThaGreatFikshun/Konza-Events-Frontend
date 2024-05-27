import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://events.konza.go.ke:8080",
  // baseURL: "http://localhost:8080",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
