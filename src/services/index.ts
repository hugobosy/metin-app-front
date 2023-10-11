import axios from "axios";
import { END_POINT } from "@/const/projectURL";
import { RegisterValues } from "@/types/registerValues";
import { LoginValues } from "@/types/loginValues";

export class ApiService {
  async register(values: RegisterValues) {
    return await axios.post(
      `http://localhost:5000${END_POINT.register}`,
      values,
    );
  }

  async login(values: LoginValues) {
    const res = await axios.post(
      `http://localhost:5000${END_POINT.login}`,
      values,
    );
    return res.data;
  }

  async checkAuth(jwt: string) {
    const res = await axios.get(`http://localhost:5000${END_POINT.checkAuth}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  }

  async activate(code: string) {
    return await axios.post(
      `http://localhost:5000${END_POINT.activate}/${code}`,
    );
  }
}

export const apiService = new ApiService();
