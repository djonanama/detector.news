import Vue from "vue";
import axios from "axios";

// const WP_BackEnd_URL = process.env.WebSer_BackEnd_URL || "https://detector.news";
// const WP_BackEnd_PORT = process.env.WebSer_BackEnd_PORT || 80;
// const BackEnd_MODE = process.env.BackEnd_MODE || "prod";
// let baseURL = "/";
// if (BackEnd_MODE == "dev") {
//   baseURL = "http://localhost:5001/";
// }

const baseURL = "/";
// const baseURL = "http://localhost:5001/";
const client = axios.create({
  baseURL: baseURL,
  json: true
});

export default {
  async execute(method, resource, data) {
    // inject the accessToken for each request
    // let accessToken = await Vue.prototype.$auth.getAccessToken();
    return client({
      method,
      url: "api" + resource,
      data: data
      // headers: {
      //   // Authorization: `Bearer ${accessToken}`
      // }
    }).then(req => {
      return req.data;
    });
  },
  getPosts(path = "", body = { p: 0, l: 20 }) {
    return this.execute("post", "/items" + path, body);
  },
  getNavBarElement(path, param = "") {
    return this.execute("get", `${path}${param}`, {});
  },
  getSearch(path, param = "") {
    return this.execute("get", `/search${path}${param}`, {});
  },
  getOnlyPost(id) {
    return this.execute("get", `/item/post/${id}`, {});
  }
};
