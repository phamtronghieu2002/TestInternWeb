import axios from "axios";


axios.defaults.withCredentials = true;


//create aios instance
const instance = axios.create({
  baseURL: "https://apisolfive.app.tranviet.site/v2/api",
});


//confgiure axios instance response
instance.interceptors.response.use(
  function (response) {
    return response.data ? response.data.data.data : response;
  },
  function (error) {
    let res;
    if (error.response) {
      res = {
        status: error.response.status,
        data: error.response.data,
        statusText: error.response.statusText,
        headers: error.response.headers,
        config: error.config,
      };
      const status = res.status;
      if (status === 401) {
        axios
          .post("http://localhost:8080/api/v1/refresh_token")
          .then((response) => {

          })
          .catch((error) => {
            const path = window.location.pathname;
            if (path !== "/login") {
              window.location.href = "/login";
            }
          });
      }
    }
    return Promise.reject(res || error);
  }
);

export default instance