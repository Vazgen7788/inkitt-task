const TIMEOUT = 2000;

export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), TIMEOUT);
  });
};
