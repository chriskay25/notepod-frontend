export const signup = (data) => async (dispatch) => {
  let user = data;
  try {
    const response = await fetch("http://localhost:3000/api/v1/signup", {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({ user }),
    });
    const data = await response.json();
    debugger;
    if (data.data) {
      localStorage.setItem("token", data.data.attributes.userJwt);
      dispatch({ type: "SIGNUP", payload: data.data });
    } else {
      alert("Invalid Credentials");
    }
  } catch (err) {
    console.log("Signup error: ", err);
  }
};

export const login = (userData) => async (dispatch) => {
  let user = userData;
  try {
    const response = await fetch("http://localhost:3000/api/v1/login", {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({ user }),
    });
    const data = await response.json();
    if (data.data) {
      localStorage.setItem("token", data.data.attributes.userJwt);
      dispatch({ type: "LOGIN", payload: data.data });
    } else {
      alert("Invalid Credentials");
    }
  } catch (err) {
    console.log("Login error: ", err);
  }
};

export const getCurrentUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/get_current_user",
        {
          headers: { Authorization: token },
        }
      );
      const data = await response.json();
      if (data.error) {
        alert("Stored token does not correspond to user!");
      } else {
        dispatch({ type: "GET_CURRENT_USER", payload: data.data });
      }
    } catch (err) {
      console.log("getCurrentUser error: ", err);
    }
  }
};

export const logout = () => {
  localStorage.clear();
  return (dispatch) => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
  };
};
