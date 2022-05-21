import API from "./api";

class RequestService {
  registerTransactions(value: {}) {
    API.post("/transactions.json", value);
  }

  async getTransactions() {
    const response = await API.get("/transactions.json");

    const { data } = response;

    if (data) {
      return data;
    } else {
      throw new Error("Algo deu errado, tenta novamente mais tarde!");
    }
  }
}

export default RequestService;
