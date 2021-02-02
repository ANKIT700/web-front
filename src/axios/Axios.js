import axios from "axios";
import { isUndefinedNullOrEmpty } from "../common/validation";

const TOKEN_MISSING = "Identity token is missing";
const TOKEN_INVALID = "Identity token is invalid";

export const api = {
  axios: axios.create(),
};

api.axios.interceptors.request.use((request) => {
  debugger;
  return {
    ...request,
  };
});

// api.axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     const originalRequest = error.config;
//     // Logout if there is a 401 error that's not token related
//     if (isUndefinedNullOrEmpty(error.response)) {
//       // store.dispatch(logout());
//       return Promise.reject(error);
//     }
//     // Handle 403 errors
//     if (error.response.status === 403) {
//       // store.dispatch(logout());
//       return Promise.reject(error);
//     }
//     // Handle 401 errors
//     if (error.response.status === 401 && !originalRequest._retry) {
//       if (
//         !isUndefinedNullOrEmpty(error.response.data.error) &&
//         (error.response.data.error === TOKEN_MISSING ||
//           error.response.data.error === TOKEN_INVALID)
//       ) {
        // store.dispatch(logout());
      //   return Promise.reject(error);
      // } else {
        // const loginStore = store.getState().LoginState;
        // const refreshToken = loginStore.refreshToken;

        // originalRequest._retry = true;
        // return axios({
        //   method: "POST",
        //   url: `${config.API_ENDPOINT}/refresh-token`,
        //   data: { refreshToken },
        // }).then((res) => {
        //   if (res.status === 201) {
        //     store.dispatch(updateTokens(res.data));

        //     return api.axios(originalRequest);
        //   }
        // });
//       }
//     }
//     throw error;
//   }
// );
