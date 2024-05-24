import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: '1',
          title: 'First',
          description: 'Description for first item',
          image:
            'https://images.stockcake.com/public/5/e/5/5e504729-228c-438d-aa41-e53fe84fb52d/joyful-kite-flying-stockcake.jpg',
        },
        {
          id: '2',
          title: 'Second',
          description: 'Description for second item',
          image:
            'https://images.stockcake.com/public/1/9/c/19cea122-477e-4066-9241-c07e719d0b72_large/tranquil-lakeside-retreat-stockcake.jpg',
        },
        {
          id: '3',
          title: 'Third',
          description: 'Description for third item',
          image:
            'https://images.stockcake.com/public/4/2/e/42ed6ade-e342-460c-904c-527d59efd155_large/serene-lake-view-stockcake.jpg',
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((x) => x.id === memoryId);
      };
    },
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        ...memoryData,
      };

      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    },
  },
});

export default store;
