import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { API } from "../config";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    loadFromAsyncStorage();
  }, []);

  axios.defaults.baseURL = API;
  axios.defaults.headers.common["Authorization"] = `${auth?.token}`;

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        await AsyncStorage.removeItem("@auth");
        setAuth({ user: null, token: "" });
        alert("Sesion expirada. inicie sesion nuevamente.");
      }
      return Promise.reject(error);
    }
  );

  const loadFromAsyncStorage = async () => {
    let data = await AsyncStorage.getItem("@auth");
    data = JSON.parse(data);
    
    setAuth({ ...auth, user: data.user, token: data.token });
  };

 return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
