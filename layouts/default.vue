<template>
    <div>
        <header>
            <nav class="navbar bg-blue-chill-800 shadow-lg">
                <div class="navbar-start">
                    <NuxtLink to="/" class="mx-4 btn font-bold !text-white btn-ghost
                    bg-blue-chill-400">
                        Ender | To Do List
                    </NuxtLink>
                </div>
                <p class="font-bold text-white text-2xl navbar-end">
                        Keep Going
                    </p>
            </nav>
        </header>
        <div class="mx-auto container p-4">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout'
}
</script>

<style scoped>
.router-link-exact-active {
    color: black
}
</style>