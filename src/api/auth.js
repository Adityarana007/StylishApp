import { REGISTER } from "./apiUrls";
import apiClient from "./client";

export const register = async (params) => {
    return await apiClient.post(REGISTER, params)
}