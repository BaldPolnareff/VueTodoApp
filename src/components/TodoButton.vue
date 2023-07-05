<script lang="ts" setup>

</script>

<template>
    <div>
        <button>
            <slot>Add Todo</slot>
        </button>
    </div>
</template>

<style lang="scss" scoped>

button {
    padding: 8px 16px;
    border: none;
    border-radius: 7px;
    background: linear-gradient(150deg, #4F5FB5, #A117C4);
    color: whitesmoke;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #A117C4;
    }
}

</style>