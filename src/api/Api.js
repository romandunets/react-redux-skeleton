import axios from 'axios';

export default class Api {
  static getClient() {
    var config = {
      baseURL: process.env.API_HOST
    };

    if (localStorage.getItem('token') !== null) {
      let token = localStorage.getItem('token');
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return axios.create(config);
  }
}
