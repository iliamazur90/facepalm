import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '69f8793e-5fc2-4fed-9841-d1df82f7c7ed' },
});
export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
};

export const followAPI = {
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
      return instance.delete(`follow/${userId}`);
  },
};

