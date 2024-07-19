<template>
    <div class="container mx-auto flex flex-col sm:overflow-hidden">

        <Head>
            <Title>
                Ender | To Do List
            </Title>
        </Head>
        <h1 class="text-6xl font-bold m-auto sm:text-4xl text-white sm:text-center">Task Board</h1>
        <p class="m-auto mt-4 sm:text-xl text-center text-blue-chill-400 text-2xl">
            Create a list of tasks, and start grinding!
        </p>
        <div class="m-auto mt-4 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-6">
            <input type="text"
                class="input input-lg h-12 bg-blue-chill-400 placeholder:text-blue-chill-800 font-bold text-blue-chill-800"
                v-model="newTask" placeholder="add a new task.." @keypress.enter="addTask">
            <button
                class="btn bg-blue-chill-400 hover:bg-blue-chill-500 ml-2 text-blue-chill-900 -translate-y-0.5 hover:text-blue-chill-950 sm:translate-y-0"
                @click="addTask">
                Add
            </button>
        </div>
        <div class="m-auto">
            <ul class="flex gap-4 flex-col items-center justify-between mt-4">
                <li v-for="task in tasks" :class="{ 'opacity-50': task.done }"
                    class="bg-blue-chill-500 p-4 min-w-96 rounded-3xl text-blue-chill-950 sm:min-w-72 sm:max-w-80 flex items-center justify-between sm:p-2 text-balance"
                    :key="task.content">
                    <input type="checkbox" class="checkbox bg-blue-chill-950 mr-4" v-model="task.done">
                    <span class="font-bold text-2xl flex-grow text-center" :class="{ 'line-through': task.done }">{{
                        task.content }}</span>
                    <button @click="removeTask(task)" class="btn bg-blue-chill-950">Remove</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const newTask = ref('');
const tasks = ref([]);

// Function to load tasks from local storage
const loadTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks.value = JSON.parse(storedTasks);
    }
};

// Function to add a task
const addTask = () => {
    if (newTask.value) {
        tasks.value.unshift({ content: newTask.value, done: false });
        newTask.value = '';
        saveTasks();
    }
};

// Function to remove a task
const removeTask = (task) => {
    tasks.value = tasks.value.filter(t => t.content !== task.content);
    saveTasks();
};

// Function to save tasks to local storage
const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
};

// Load tasks when the component is mounted
onMounted(loadTasks);
</script>

<style>
.line-through {
    text-decoration: line-through;
}
</style>