export default function getEndpointKey() {
  const secret =
    process.env.NEXT_PUBLIC_URL_API
  if (!secret) {
    throw new Error("Invalid secret");
  }

  return secret;
}
