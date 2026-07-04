import { useEffect, useState } from "react";
import { authApi } from "../services/api";
import { AuthContext } from "./auth-context";

const SESSION_KEY = "verifly_session";
const KNOWN_USERS_KEY = "verifly_known_users";

function decodeToken(token) {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return {};
  }
}

function getKnownUsers() {
  try {
    return JSON.parse(localStorage.getItem(KNOWN_USERS_KEY)) || {};
  } catch {
    return {};
  }
}

function rememberUserName(email, name) {
  const known = getKnownUsers();
  known[email] = name;
  localStorage.setItem(KNOWN_USERS_KEY, JSON.stringify(known));
}

function fallbackName(email) {
  const prefix = email.split("@")[0];
  return prefix.charAt(0).toUpperCase() + prefix.slice(1);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY));
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [user]);

  const login = async (email, password) => {
    const { token } = await authApi.login(email, password);
    const { role } = decodeToken(token);
    const name = getKnownUsers()[email] || fallbackName(email);

    setUser({ token, email, name, role });
    return { token, name, role };
  };

  const signup = async (name, email, password) => {
    await authApi.signup(name, email, password);
    rememberUserName(email, name);
    return login(email, password);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
