import { axiosInstance } from "@/lib/axios";
import type { zipcodeSchema } from "@/lib/zod/schema";
import type { z } from "zod";

export type SearchAddressRequest = z.infer<typeof zipcodeSchema>;

type Result = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};

export type SearchAddressResponse = {
  message?: string;
  results?: Result[];
  status: number;
};

export const searchAddress = async (data: SearchAddressRequest) => {
  const res = await axiosInstance.get<SearchAddressResponse>("/search", {
    baseURL: "https://zipcloud.ibsnet.co.jp/api",
    params: data,
  });

  return res.data.results;
};
