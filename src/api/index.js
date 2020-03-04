import axios from 'axios';

export default {
  boards: {
    fetchAll() {
      return axios.get('http://localhost:3000/api/boards');
    },
    fetchOne(id) {
      return axios.get(`http://localhost:3000/api/boards/${id}`);
    },
    create() {
      return axios.post('http://localhost:3000/api/boards');
    },
    update(id, data) {
      return axios.put(`http://localhost:3000/api/boards/${id}`, data);
    },
    delete(id) {
      return axios.delete(`http://localhost:3000/api/boards/${id}`);
    }
  },
  lists: {
    async update(id, data) {
      return axios.put(`http://localhost:3000/api/lists/${id}`, data);
    },
    async delete(id) {
      return axios.delete(`http://localhost:3000/api/lists/${id}`);
    }
  },

  cards: {
    create(listId) {
      return axios.post('http://localhost:3000/api/cards', { listId });
    },
    fetchOne(id) {
      return axios.get(`http://localhost:3000/api/cards/${id}`);
    },
    update(id, data) {
      return axios.put(`http://localhost:3000/api/cards/${id}`, data);
    },
    delete(id) {
      return axios.delete(`http://localhost:3000/api/cards/${id}`);
    }
  }
};
