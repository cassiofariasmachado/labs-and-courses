<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link v-for="number in 5" :key="number" tag="li" :to="`/user/${number}`" class="list-group-item" style="cursor: pointer">User {{number}}</router-link >
        </ul>
    </div>
</template>