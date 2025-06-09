import { axiosInstance } from "@/lib/axios";
import type { loginSchema } from "@/lib/zod";
import type { z } from "zod";

export type DepartmentResponse = {
	id: number;
	name: string;
};

export const getDepartments = async () =>
	axiosInstance.get<DepartmentResponse[]>("/departments");
