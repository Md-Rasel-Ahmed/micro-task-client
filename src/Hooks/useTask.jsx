import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export default function useTask() {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: tasks, refetch: workerRefetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });
  const { data: buyerTask, refetch } = useQuery({
    queryKey: ["buyerTask", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/buyerTask/${user?.email}`);
      return res.data;
    },
  });
  const { data: reviewTask } = useQuery({
    queryKey: ["taskReview", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/taskReview/${user?.email}`);
      return res.data;
    },
  });
  return [tasks, buyerTask, refetch, workerRefetch, reviewTask];
}
