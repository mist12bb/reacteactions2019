import jsonServer from "../../../../util/api/json-server";

export  const  mountlyEntrings = async () => {
  let sum = 0;
  const res = await jsonServer.get("dailys");
  const data = await res.data;
  [...data].forEach(dayEnt=>{
    sum += dayEnt["amount"];
  })

  return sum;
}