export const fetchOnlineStatus = async () => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Online"), 5000)
  );
  return data;
};

export const fetchSignup = async (userData) => {
  const response = await fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.accessToken;
};

export const fetchLogin = async (userData) => {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.accessToken;
};

export const fetchRefreshToken = async () => {
  const response = await fetch("http://localhost:3000/auth/refresh", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.accessToken;
};

export const fetchLogout = async () => {
  const response = await fetch("http://localhost:3000/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.message;
};

export const fetchGetProfile = async (token) => {
  const response = await fetch("http://localhost:3000/online", {
    headers: { Authorization: "Bearer" + token },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.userData;
};
