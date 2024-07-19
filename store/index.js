// store/index.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            tasks: []
        };
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.unshift({ content: task, done: false });
        },
        REMOVE_TASK(state, task) {
            const index = state.tasks.findIndex(t => t.content === task.content);
            if (index !== -1) {
                state.tasks.splice(index, 1);
            }
        },
        TOGGLE_TASK(state, task) {
            const index = state.tasks.findIndex(t => t.content === task.content);
            if (index !== -1) {
                state.tasks[index].done = !state.tasks[index].done;
            }
        }
    }
});

export default store;