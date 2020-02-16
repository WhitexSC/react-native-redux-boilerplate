export const newPin = payload => {
  return {
    type: "UPDATE_AUTH_DATA",
    payload
  }
};

export const generatePin = () => ({ type: "CLEAR_AUTH_DATA" });