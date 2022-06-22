import { api } from "../libs/api";

export async function getAllLendings() {
  return await api.get("/lendings");
}
