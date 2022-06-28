import API from "./api";

class RequestCategories {
  async registerCategory(values: {}) {
    const response = await API.post("/categories.json", values);
    const { data } = response;

    if (data) {
      return data;
    } else {
      throw new Error("Algo deu errado, tenta novamente mais tarde!");
    }
  }

  async requestCategory() {
    const response = await API.get("/categories.json");
    const { data } = response;

    if (data) {
      return data;
    } else {
      throw new Error("Algo deu errado, tenta novamente mais tarde!");
    }
  }
}

export default RequestCategories;
