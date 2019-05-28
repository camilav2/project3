import axios from "axios";

class AuthService {
  service = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
  });

  signup = (username, password) => {
    return this.service
      .post("/auth/signup", { username: username, password: password })
      .then(response => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/auth/login", { username: username, password: password })
      .then(response => response.data);
  };

  currentUser = () => {
    return this.service
      .get("/currentuser")
      .then(response => response.data);
  };
  
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }
}

export default AuthService;