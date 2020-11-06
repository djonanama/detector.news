export default {
  p: {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic ZGpvbmFuYW1hOnF5ZWI0UTN4T0syVyRrcGReMQ==",
      Accept: "*/*"
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer" // no-referrer, *client
  },
  URL: "" //"http://backend-node:3000"
};
