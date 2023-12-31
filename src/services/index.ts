import axios from "axios";
import { END_POINT } from "@/const/projectURL";
import { RegisterValues } from "@/types/registerValues";
import { LoginValues } from "@/types/loginValues";
import { RevenuesValues } from "@/types/revenuesValues";
import { ExpansesValues } from "@/types/expansesValues";
import { ObjectiveValues } from "@/types/objectiveValues";
import { BalanceValues } from "@/types/balanceValues";
import { ConverterValues } from "@/types/converterValues";

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

  async getExpenses(idUser: string) {
    return await axios.post(`http://localhost:5000${END_POINT.getExpenses}`, {
      idUser,
    });
  }

  async getRevenues(idUser: string) {
    return await axios.post(`http://localhost:5000${END_POINT.getRevenues}`, {
      idUser,
    });
  }

  async getObjective(idUser: string) {
    return await axios.post(`http://localhost:5000${END_POINT.getObjective}`, {
      idUser,
    });
  }

  async getOneObjective(id: string | null) {
    const res = await axios.get(
      `http://localhost:5000${END_POINT.getOneObjective}/${id}`,
    );

    return res.data;
  }

  async editObjective(values: ObjectiveValues) {
    return await axios.put(
      `http://localhost:5000${END_POINT.editObjective}`,
      values,
    );
  }

  async addRevenues(values: RevenuesValues) {
    return await axios.post(
      `http://localhost:5000${END_POINT.addRevenues}`,
      values,
    );
  }

  async addExpenses(values: ExpansesValues) {
    return await axios.post(
      `http://localhost:5000${END_POINT.addExpenses}`,
      values,
    );
  }

  async addObjective(values: ObjectiveValues) {
    return await axios.post(
      `http://localhost:5000${END_POINT.addObjective}`,
      values,
    );
  }

  async setCompleteObjective(id: string) {
    return await axios.patch(
      `http://localhost:5000${END_POINT.setCompleteObjective}/${id}`,
    );
  }

  async deleteObjective(id?: string) {
    return await axios.delete(
      `http://localhost:5000${END_POINT.deleteObjective}/${id}`,
    );
  }

  async getBalance(id: string) {
    return await axios.get(
      `http://localhost:5000${END_POINT.getBalance}/${id}`,
    );
  }

  async updateBalance(values: BalanceValues) {
    return await axios.put(
      `http://localhost:5000${END_POINT.updateBalance}`,
      values,
    );
  }

  async convertWonToYang(values: ConverterValues) {
    return await axios.post(
      `http://localhost:5000${END_POINT.convertWonToYang}`,
      values,
    );
  }

  async convertYangToWon(values: ConverterValues) {
    return await axios.post(
      `http://localhost:5000${END_POINT.convertYangToWon}`,
      values,
    );
  }

  async getTransactions(id: string) {
    return await axios.get(
      `http://localhost:5000${END_POINT.getTransactions}/${id}`,
    );
  }
}

export const apiService = new ApiService();
