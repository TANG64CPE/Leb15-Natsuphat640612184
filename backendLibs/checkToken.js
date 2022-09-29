import jwt from "jsonwebtoken";

export default function testTokenRoute(req) {
  if (typeof req.headers.authorization !== "string") return null;

  const splited = req.headers.authorization.split(" ");
  const token = splited[1];
  const secret = process.env.JWT_SECERT;
  try {
    const result = jwt.verify(token, secret);
    return result.username;
  } catch (e) {
    return null;
  }
}
