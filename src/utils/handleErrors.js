export function handleErrors(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return Promise.reject(error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    if (error.code === "ERR_NETWORK") {
      return Promise.reject({
        error: "Bad Connection",
        msg: "Unfortunately there was an error connecting to the database. Check your internet connection and try again.",
      });
    } else if (error.code === "ERR_CANCELED") {
      return Promise.reject({
        error: "Disconnected",
        msg: "The connection was aborted before the server could respond.",
      });
    } else {
      return Promise.reject({
        error: "Something went wrong",
        msg: "There was an error getting a response from the server.",
      });
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    return Promise.reject({
      error: "Something went wrong",
      msg: "There was an error sending the request.",
    });
  }
}
