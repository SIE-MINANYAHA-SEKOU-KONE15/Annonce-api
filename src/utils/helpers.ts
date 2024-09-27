import jwt from "jsonwebtoken";

export const formatResponse = (
  statusCode: number,
  errorMessage: string,
  stack?: any
) => {
  return {
    status: statusCode,

    message: errorMessage,
    stack: stack,
  };
};

export const getUserIdFromToken = (token: string): string | null => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    return decoded._id; // Assurez-vous que l'objet décodé contient bien l'ID
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
