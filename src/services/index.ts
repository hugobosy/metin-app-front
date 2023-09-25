import axios from "axios";
import { END_POINT } from "@/const/projectURL";
import { RegisterValues } from "@/types/registerValues";

export class ApiService {
  register(values: RegisterValues) {
    console.log(values);
    return axios.post(`http://localhost:3000${END_POINT.register}`, values);
  }

  login(values) {
    console.log(values);
  }
}

export const apiService = new ApiService();
