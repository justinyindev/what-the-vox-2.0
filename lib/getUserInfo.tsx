import { GraphQLClient } from "graphql-request";
import getEndpointKey from "./getEndpointKey";

export default async function getUserInfo(userId: string) {
  const client = new GraphQLClient(getEndpointKey());

  const query = `
    query UserInfo($userId: String){
      userInfo(userId: $userId){
        username
        bookmarks
      }
    }`;

  const variables = {
    userId,
  };

  const data: any = await client.request(query, variables);

  return data;
}
