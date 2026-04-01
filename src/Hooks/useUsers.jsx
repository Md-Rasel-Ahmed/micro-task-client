import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export default function useUsers() {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: loginUser, refetch } = useQuery({
    queryKey: ["loginUser", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  return [loginUser, refetch];
}
