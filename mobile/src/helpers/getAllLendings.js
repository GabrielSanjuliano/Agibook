import { api } from "../libs/api";

export async function getAllLendings(setLendings) {
  await api
    .get("/lendings")
    .then((res) => {
      setLendings(res.data);
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err);
    });
}
