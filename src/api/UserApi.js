import axios from 'axios';

class UserApi {
  static getClient() {
    return axios.create({
      baseURL: process.env.API_HOST
    });
  }

  static listUsers() {
    return this.getClient().get('/users');
  }
}

export default UserApi;
