import { GraphQLClient } from "graphql-request";
import getEndpointKey from "./getEndpointKey";

interface IArticleType {
  startDate: string | null;
  endDate: string | null;
  titles: string[];
  page: number;
  limit: number;
}

export default async function getArticles({
  startDate,
  endDate,
  titles,
  page,
  limit,
}: IArticleType) {
  const client = new GraphQLClient(getEndpointKey());
  if (startDate && endDate) {
    startDate = new Date(startDate).toISOString();
    endDate = new Date(endDate).toISOString();
  }

  const query = `
  query GetHeadlines($startDate: String, $endDate: String, $titles: [String], $page: Int, $limit: Int) {
    headlines(startDate: $startDate, endDate: $endDate, titles: $titles, page: $page, limit: $limit) {
      headlines {
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
      pageInfo {
        currentPage
        totalPages
      }
    }
  }
`;

  const variables = {
    startDate,
    endDate,
    titles,
    page,
    limit,
  };

  const data: any = await client.request(query, variables);
  return data.headlines;
}
