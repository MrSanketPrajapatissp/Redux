export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";
export const increment = (amount) => {
  return {
    type: "INCREMENT",
    payload: Number(amount),
  };
};

export const decrement = (amount) => {
  return {
    type: "DECREMENT",
    payload: Number(amount),
  };
};
