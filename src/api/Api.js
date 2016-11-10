import axios from 'axios';

export default class Api {
  static getClient() {
    var config = {
      baseURL: process.env.API_HOST
    };

    return axios.create(config);
  }
}
