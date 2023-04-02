import { GraphQLClient } from "graphql-request";
import getEndpointKey from "./getEndpointKey";

interface IArticleType {
  startDate: string | null;
  endDate: string | null;
  bookmarks: string[];
  page: number;
  limit: number;
}

export default async function getAllArticles({
  startDate,
  endDate,
  bookmarks,
  page,
  limit,
}: IArticleType) {
  const client = new GraphQLClient(getEndpointKey());
  if (startDate && endDate) {
    startDate = new Date(startDate).toISOString();
    endDate = new Date(endDate).toISOString();
  }

  const query = `
  query GetHeadlines($startDate: String, $endDate: String, $bookmarks: [String], $page: Int, $limit: Int) {
    headlines(startDate: $startDate, endDate: $endDate, bookmarks: $bookmarks, page: $page, limit: $limit) {
      headlines {
        _id
        title
        url
        date
        image
        summary
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
    bookmarks,
    page,
    limit,
  };

  const data: any = await client.request(query, variables);
  return data.headlines;
}
