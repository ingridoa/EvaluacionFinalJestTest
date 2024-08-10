import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    }
  }
});
export default store;