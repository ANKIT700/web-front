const axios = require("axios");

axios.interceptors.request.use((req) => {
  req.headers.authorization = "my secret token";
  console.log(`${req.method} ${req.url}`);
  debugger;
  // Important: request interceptors **must** return the request.
  return req;
});

// axios.interceptors.response.use((res) => {
//   console.log(res.data.json);
//   // Important: response interceptors **must** return the response.
//   return res;
// });

axios.interceptors.response.use(
  (res) => {
    console.log(res.data.json);
    debugger
    // Important: response interceptors **must** return the response.
    return res;
  },
  (err) => {
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  }
);
