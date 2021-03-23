import { Api } from "./Api";

const query = async (data: string) => {
  let q = await Api.Post(
    "hasura-endpoint",
    { query: String(data) },
    {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": "your-secret",
    }
  );

  if (!!q && q.data) {
    return q.data;
  }
};

export { query };
