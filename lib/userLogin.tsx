import { GraphQLClient } from "graphql-request";

const ENDPOINT = process.env.URL_API || "http://localhost:3001/graphql";

export default async function userLogin(username: string, password: string) {
  const client = new GraphQLClient(ENDPOINT);
  const mutation = `
    mutation Login($username: String!, $password: String!){
      login(username: $username, password: $password){
        user_id
        token
        tokenExpiration,
        username,
        bookmarks
      }
    }`;

  const variables = {
    username,
    password,
  };

  const data: any = await client.request(mutation, variables);

  return data.login;
}
