<script setup lang="ts">
import TodoCreator from '../components/TodoCreator.vue'
import { reactive, ref, watch, computed } from 'vue';
import { uid } from 'uid';
import type { Todo } from '@/types/Todo';
import TodoItem from '@/components/TodoItem.vue';
import { Icon } from '@iconify/vue';

const todos = ref<Todo[]>([]);

watch(todos, () => {
  setTodosLocalStorage();
  // console.log('todos changed'); 
}, {
  deep: true // watch deeply nested properties inside objects
});

const todosCompleted = computed(() => {
  return todos.value.every(todo => todo.isCompleted); // returns true if every todo is completed
})

const setTodosLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

const fetchTodos = () => {
  const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]'); // if there are no todos, return an empty array
  if (savedTodos) {
    todos.value = savedTodos;
  }
}

fetchTodos();

const createTodo = (todoString: String) => {
  todos.value.push({
    id: uid(),
    body: todoString,
    invalid: false,
    errMsg: '',
    isCompleted: false,
    isEditing: false
  });
}

const toggleTodoComplete = (todoPos: number) => {
  todos.value[todoPos].isCompleted = !todos.value[todoPos].isCompleted;
}

const toggleEditTodo = (todoPos: number) => {
  todos.value[todoPos].isEditing = !todos.value[todoPos].isEditing;
}

const updateTodo = (todoPos: number, todoString: string) => {
  todos.value[todoPos].body = todoString;
}

const deleteTodo = (todoId: String) => {
  // filter out the todo with the id passed in, which removes it from the array
  todos.value = todos.value.filter(todo => todo.id !== todoId); 
}


</script>

<template>
  <main>
    <div class="wrapper">
      <h1>Create Todos</h1>
      <TodoCreator @create-todo="createTodo"/>
      <ul class="todo-list" v-if="todos.length > 0">
        <TodoItem 
          v-for="(todo, index) in todos" 
          :todo="todo" 
          :index="index"
          @toggle-complete="toggleTodoComplete"
          @edit-todo="toggleEditTodo"
          @update-todo="updateTodo"
          @delete-todo="deleteTodo"
        />
      </ul>
      <p class="todo-msg" v-else>
        <Icon icon="fluent-emoji-high-contrast:sad-but-relieved-face" color="#4F5FB5" width="40" />
        <span>Nothing to do...Add a new task!</span>
      </p>
      <p v-if="todosCompleted && todos.length > 0" class="todo-completed-msg">
        <Icon icon="noto-v1:party-popper" width="40" />
        <span>You completed all your todos! Great job!</span>
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>

main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  // background: linear-gradient(150deg, #4F5FB5, #A117C4);
  padding: 40px 16px;
  background-color: #1f1f1f;
}

h1 {
  margin-bottom: 16px;
  text-align: center;
  color: whitesmoke;
}

.todo-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin-top: 24px;
  gap: 20px;
}

.todo-msg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  color: whitesmoke;
  font-size: 1.6rem;
}

.todo-completed-msg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  color: whitesmoke;
  font-size: 1.6rem;
}
</style>
