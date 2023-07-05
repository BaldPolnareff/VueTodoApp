<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import type { Todo } from '@/types/Todo';
import { Icon } from '@iconify/vue'; 


const props = defineProps({
    todo: {
        type: Object as () => Todo,
        required: true, 
        default() {
            return {
                id: '',
                body: '',
                invalid: false,
                errMsg: '',
                isCompleted: false,
                isEditing: false
            }
        }
    }, 
    index: {
        type: Number,
        required: true
    }
})

defineEmits(['toggle-complete', 'edit-todo', 'update-todo', 'delete-todo']);

</script>

<template>
    <div>
        <li>
            <input 
                type="checkbox" 
                :checked="todo.isCompleted" 
                @input="$emit('toggle-complete', index)"
            />
            <div class="todo">
                <input 
                    v-if="todo.isEditing" 
                    type="text" 
                    :value="todo.body"
                    @input="$emit('update-todo', index, $event.target.value)"
                >
                <div v-else class="span-wrapper">
                    <span :class="{'completed-todo': todo.isCompleted}">
                        {{ todo.body }}
                    </span>
                </div>
            </div>
            <div class="todo-actions">
                <Icon 
                    v-if="todo.isEditing" 
                    icon="ph:check-circle" 
                    class="icon"  
                    color="#a117c4" 
                    width="30" 
                    @click="$emit('edit-todo', index)"
                />
                <Icon 
                    v-else 
                    icon="ph:pencil-fill"  
                    class="icon"  
                    color="#a117c4" 
                    width="30" 
                    @click="$emit('edit-todo', index)"
                />
                <Icon 
                    icon="ph:trash"       
                    class="icon"  
                    color="red"       
                    width="30"
                    @click="$emit('delete-todo', todo.id)"
                />
            </div>
        </li>
    </div>
</template>

<style lang="scss" scoped>

li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
//   background-color: transparent;
//   background: linear-gradient(150deg, #4F5FB5, #A117C4);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

    border-radius: 10px;
    background-color: #242424;

  &:hover {
    transform: scale(1.02);
    .todo-actions {
      opacity: 1;
    }
  }

  input[type="checkbox"] {
    appearance: none;
    width: 30px;
    height: 30px;
    background-color: whitesmoke;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    &:checked {
    //   background-color: #A117C4;
        background: radial-gradient(#A117C4, #4F5FB5);
    }
  }

  .todo {
    flex: 1;
    padding: 10px;
    gap: 10px;

    .completed-todo {
      text-decoration: line-through;
      color: #A117C4;
    }

    input[type="text"] {
      width: auto;
      padding: 2px 6px;
      border: 2px solid #4F5FB5;
      border-radius: 4px;

        &:focus {
            outline: none;
            border-color: #A117C4;
        }
    }
  }

  .todo-actions {
    display: flex;
    gap: 6px;
    opacity: 0;
    transition: 150ms ease-in-out;
    .icon {
      cursor: pointer;
    }
  }
}

.span-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

span {
  font-size: 1.2rem;
  font-weight: 500;
  color: #4F5FB5;
}

.icon {
  cursor: pointer;

    &:hover {
        transform: scale(1.3);
    }
}

</style>