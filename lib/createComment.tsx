import { GraphQLClient } from "graphql-request";
import getEndpointKey from "./getEndpointKey";

interface ICommentType {
  headline: string | null;
  userId: string | null;
  content: string;
  timestamp: Date;
}

export default async function createComment({
  headline,
  userId,
  content,
  timestamp,
}: ICommentType) {
  const client = new GraphQLClient(getEndpointKey());

  const mutation = `
  mutation CreateComment($headline: String, $userId: String, $content: String, $timestamp: String) {
    createComment(headline: $headline, userId: $userId, content: $content, timestamp: $timestamp) {
        _id
        title
        url
        date
        image
        summary
        comments{
            user
            user_id
            content
            created_at
        }
    }
  }
`;

  const variables = {
    headline,
    userId,
    content,
    timestamp,
  };

  const data: any = await client.request(mutation, variables);
  return data.createComment;
}
