import axios from "axios";
import { END_POINT } from "@/const/projectURL";
import { RegisterValues } from "@/types/registerValues";
import { LoginValues } from "@/types/loginValues";

export class ApiService {
  register(values: RegisterValues) {
    console.log(values);
    return axios.post(`http://localhost:5000${END_POINT.register}`, values);
  }

  login(values: LoginValues) {
    console.log(values);
    return axios.post(`http://localhost:5000${END_POINT.login}`);
  }
}

export const apiService = new ApiService();
