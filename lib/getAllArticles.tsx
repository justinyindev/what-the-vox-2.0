import { GraphQLClient } from "graphql-request";

interface ArticleType {
  startDate: string | null;
  endDate: string | null;
  bookmarks: string[];
  page: number;
  limit: number;
}

const ENDPOINT = "http://localhost:3001/graphql";

export default async function getAllArticles({
  startDate,
  endDate,
  bookmarks,
  page,
  limit,
}: ArticleType) {
  const client = new GraphQLClient(ENDPOINT);
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
