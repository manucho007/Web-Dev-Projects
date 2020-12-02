export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
export const incrementNr = (nr) => {
  return {
    type: 'INCREMENTNR',
    payload: nr,
  };
};
