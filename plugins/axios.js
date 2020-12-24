export default function({ $axios, store, dispatch, redirect }) {
  $axios.onRequest(config => {
    // $axios.setHeader("Pragma", "no-cache");
    // if (sessionStorage.getItem("X-AUTH-TOKEN")) {
    //   config.headers.common["X-AUTH-TOKEN"] = sessionStorage.getItem(
    //     "X-AUTH-TOKEN"
    //   );
    // }
  });

  $axios.onResponse(res => {
    // if (res.headers["x-refresh-token"]) {
    //   sessionStorage.setItem("X-AUTH-TOKEN", res.headers["x-refresh-token"]);
    // }
  });

  $axios.onError(res => {
    // if (res.response.status === 401) {
    //   redirect("/login");
    // }
  });
}
