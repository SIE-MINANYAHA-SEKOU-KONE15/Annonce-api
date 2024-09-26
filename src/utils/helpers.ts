import jwt from "jsonwebtoken";

export const formatResponse = (
  statusCode: number,
  data: any,
  message: string
) => {
  return {
    status: statusCode,
    data: data,
    message: message,
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
