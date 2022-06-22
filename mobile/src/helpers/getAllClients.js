import { api } from "../libs/api";

export async function getAllClients() {
  return await api.get("/clients");
}
