// import jwt from "jsonwebtoken";

const usersData = {
  user: process.env.BackEnd_API_USER,
  password: process.env.BackEnd_API_PASSWORD
};

export const authenticate = async (req, res, next) => {
  const auth = req.headers["authorization"];

  if (!auth) {
    return res.status(401).json({ message: "no auth header" });
  }

  const [type, credentials] = auth.split(" ");
  const [user, password] = Buffer.from(credentials, "base64")
    .toString()
    .split(":");
  if (
    type === "Basic" &&
    user === usersData.user &&
    password === usersData.password
  ) {
    return next();
  }

  return res.status(401).json({ message: "credentials are not valid" });
};
