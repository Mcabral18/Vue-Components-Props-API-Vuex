// create an external call to the api
const API_URL = "http://localhost:3000/rockets";

export default {
  async getRockets() {
    const res = await fetch(API_URL);
    return res.json();
  },
};
