export default function getEndpointKey() {
  const secret =
    process.env.NEXT_PUBLIC_URL_API ||
    "http://localhost:3001/graphql" ||
    "https://what-the-vox-api.onrender.com";
  if (!secret) {
    throw new Error("Invalid secret");
  }

  return secret;
}
