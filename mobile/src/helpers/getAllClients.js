import { api } from "../libs/api";

export async function getAllClients(setClients) {
  await api
    .get("/clients")
    .then((res) => {
      setClients(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
