import API from "./api";

class RequestTransactions {
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

  async editTransaction(id: string, value: object) {
    await API.patch(`/transactions/${id}.json`, value);
  }

  async deleteTransaction(id: string) {
    await API.delete(`/transactions/${id}.json`);
  }
}

export default RequestTransactions;
