import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getQuestions() {
    return apiClient.get("/questions")
  },

  getPlans(perPage, page) {
    return apiClient.get("/plans?_limit=" + perPage + "&_page=" + page)
  },

  getPlan(id) {
    return apiClient.get("/plans/" + id)
  },

  postPlan(plan) {
    return apiClient.post("/plans", plan)
  },

  getAirports() {
    return apiClient.get("/airports")
  }
}
