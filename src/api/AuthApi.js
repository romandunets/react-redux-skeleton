import axios from 'axios';

class AuthApi {
  static getClient() {
    return axios.create({
      baseURL: process.env.API_HOST
    });
  }

  static login(credentials) {
    return this.getClient().post('/login', credentials);
  }
}

export default AuthApi;