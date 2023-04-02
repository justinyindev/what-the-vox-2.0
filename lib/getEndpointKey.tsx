export default function getEndpointKey() {
  const secret = process.env.API_URL || "http://localhost:3001/graphql";

  if (!secret) {
    throw new Error("Invalid secret");
  }

  return secret;
}
