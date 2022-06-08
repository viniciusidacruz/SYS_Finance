import API from "./api";

class RequestService {
  async registerTransactions(value: {}) {
    await API.post("/transactions.json", value);
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

  async registerBalance(value: {}) {
    await API.patch(
      `/balance/${process.env.NEXT_PUBLIC_BALANCE_ID}.json`,
      value
    );
  }

  async getBalance() {
    const response = await API.get(
      `/balance/${process.env.NEXT_PUBLIC_BALANCE_ID}.json`
    );

    const { data } = response;

    if (data) {
      return data;
    } else {
      throw new Error("Algo deu errado, tenta novamente mais tarde!");
    }
  }
}

export default RequestService;
