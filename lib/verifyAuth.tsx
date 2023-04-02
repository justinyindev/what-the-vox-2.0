import { jwtVerify, SignJWT } from "jose";

export const getJwtSecretKey = () => {
  const secret = process.env.BCRYPT_KEY;

  if (!secret || secret.length === 0) {
    throw new Error("env variable invalid");
  }

  return secret;
};

export default async function verifyAuth(token: string) {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    return verified.payload as any;
  } catch (error) {
    throw new Error("session expired");
  }
}
