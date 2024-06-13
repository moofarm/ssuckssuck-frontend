export const getCookie = name => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return JSON.parse(cookieValue);
};

export const setCookie = (key, value) => {
  let expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7);

  document.cookie =
    `${key}=` + JSON.stringify(value) + "; expires=" + expirationDate.toUTCString() + "; path=/";
};

export const setAccessToken = () => {
  setCookie(
    "access_token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Indpc2xlbHlAbmF2ZXIuY29tIiwibmFtZSI6IkgiLCJvYXV0aFNlcnZlclR5cGUiOiJLQUtBTyIsImlzRmlyc3QiOnRydWV9.i_NR3LsYyJ5B9xRSsmN5bOM4OTfiur0PxealhIF4CwY",
  );
};
