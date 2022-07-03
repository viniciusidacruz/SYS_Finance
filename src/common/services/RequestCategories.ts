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

  async deleteCategory(id: string) {
    await API.delete(`/categories/${id}.json`);
  }

  async editCategory(id: string, value: object) {
    await API.patch(`/categories/${id}.json`, value);
  }
}

export default RequestCategories;
