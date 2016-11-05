import axios from 'axios';

class UserApi {
  static getClient() {
    return axios.create({
      baseURL: process.env.API_HOST
    });
  }

  static listUsers() {
    return this.getClient().get(`/users`);
  }

  static getUser(id) {
    return this.getClient().get(`/users/${id}`);
  }
}

export default UserApi;
