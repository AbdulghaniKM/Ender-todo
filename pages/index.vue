<template>
    <div class="container mx-auto flex flex-col">
        <h1 class="text-6xl font-bold m-auto text-white">Task Board</h1>
        <p class="m-auto mt-4 text-center text-blue-chill-400 text-2xl">
            Create a list of tasks, and start grinding!
        </p>
        <div class="m-auto mt-4">
            <input type="text" class="input input-lg h-12 bg-blue-chill-400 placeholder:text-blue-chill-800 font-bold text-blue-chill-800"
                v-model="newTask" placeholder="add a new task.." @keypress.enter="addTask">
            <button
                class="btn bg-blue-chill-400 hover:bg-blue-chill-500 ml-2 text-blue-chill-900 -translate-y-0.5 hover:text-blue-chill-950"
                @click="addTask">
                Add
            </button>
        </div>
        <div class="m-auto">
            <ul class="flex gap-4 flex-col items-center justify-between mt-4">
                <li v-for="task in tasks" :class="{'opacity-50' : task.done}"
                    class="bg-blue-chill-500 p-4 min-w-96 rounded-3xl text-blue-chill-950 flex items-center justify-between"
                    :key="task.content" >
                    <input type="checkbox" class="checkbox bg-blue-chill-950 mr-4" v-model="task.done">
                    <span class="font-bold text-2xl flex-grow text-center" :class="{ 'line-through': task.done }">{{ task.content }}</span>
                    <button @click="removeTask(task)" class="btn bg-blue-chill-950">Remove</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref([]);

// Function to add a task
const addTask = () => {
    if (newTask.value) {
        tasks.value.unshift({ content: newTask.value, done: false });
        newTask.value = '';
    }
};

// Function to remove a task
const removeTask = (task) => {
    tasks.value = tasks.value.filter(t => t.content !== task.content);
};
</script>

<style>
.line-through {
    text-decoration: line-through;
}
</style>