import { User, IUser } from "../models/UserModels";
import jwt from "jsonwebtoken";

export class AuthService {
  register = async (
    username: string,
    email: string,
    password: string
  ): Promise<IUser> => {
    const user = await User.create({ username, email, password });
    return user;
  };

  login = async (email: string, password: string): Promise<string> => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("user don't exist");
    }

    const isMatched = await user.matchPassword(password);
    if (!isMatched) {
      throw new Error("invalid email or password");
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    return token;
  };
}
