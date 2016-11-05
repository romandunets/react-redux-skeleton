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

  static createUser(user) {
    return this.getClient().post(`/users`, user);
  }
}

export default UserApi;
