import axios from "axios";

const url = "http://localhost:5000/api";

axios.defaults.withCredentials = true;

export default class HttpRequests {
  static async registerNewUser(userData) {
    try {
      const response = await axios.post(`${url}/register`, userData);
      return response.data;
    } catch (error) {
      console.error("Error registering new user:", error);
      throw error;
    }
  }

  static async loginUser(userData) {
    try {
      const response = await axios.post(`${url}/login`, userData);
      return response.data;
    } catch (error) {
      console.error("Error Logging in:", error);
      throw error;
    }
  }

  static async getMails(currentUser, selectedEmailCategory) {
    try {
      const response = await axios.get(`${url}/email`, {
        params: {
          currentUserEmail: currentUser.email,
          selectedEmailCategory: selectedEmailCategory,
        },
      });
      return response.data.emails;
    } catch (error) {
      console.error("Error fetching emails:", error);
      throw error;
    }
  }

  static async addNewMail(newMail) {
    try {
      const response = await axios.post(`${url}/email`, newMail);
      return response.data;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  }
}
