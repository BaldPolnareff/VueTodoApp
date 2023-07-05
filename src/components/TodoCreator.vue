<script setup lang="ts">
import TodosView from '@/views/TodosView.vue';
import TodoButton from '@/components/TodoButton.vue';
// import { defineEmits, ref, reactive } from 'vue';
import { ref, reactive } from 'vue';
import type { Todo } from '@/types/Todo';

const todoState = reactive<Todo>({
        id: '',
        body: '',
        invalid: false,
        errMsg: '',
        isCompleted: false,
        isEditing: false
});

const emit = defineEmits<{ (event: 'create-todo', todo: String): void }>();

const createTodo = () => {
    todoState.invalid = false;
    if (todoState.body !== '' && todoState.body.trim() !== '' && todoState.body.trim().length > 10) {
        emit('create-todo', todoState.body);
        todoState.body = '';
        return;
    }
    todoState.invalid = true;
    todoState.errMsg = 'Todo cannot be shorter than 10 characters.';
}

</script>

<template>
    <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
        <input type="text" placeholder="Start typing..." v-model="todoState.body"/>
        <!--button @click="createTodo">Add Todo</button-->
        <TodoButton @click="createTodo" />
    </div>
    <div class="todo-error-msg" v-if="todoState.invalid">
        <p>{{ todoState.errMsg }}</p>
    </div>
</template>

<style lang="scss" scoped>

.input-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    transition: 250ms ease;
    border: 2px solid #4F5FB5;
    border-radius: 10px;

    &.input-err {
        border: 2px solid red;
        transform: rotate(2deg);
    }

    &:focus-within {
        border: 2px solid #A117C4;
    }

    &:hover {
        border: 2px solid #A117C4;
        transform: scale(1.01);
    }
}

input {
    width: 100%;
    padding: 8px 6px;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    color: #4F5FB5;
    background-color: transparent;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #7A7C83;
        font-weight: 500;
    }
} 


.todo-error-msg {
    color: red;
}

</style>