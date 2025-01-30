export const fetchOnlineStatus = async () => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Online"), 5000)
  );
  return data;
};