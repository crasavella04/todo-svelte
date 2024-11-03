<script lang="ts">
  import { todoList } from "../store/todoList";
  import TodoItem from "./TodoItem.svelte";
  import { onMount } from 'svelte';

  let sortedTodo = [ ...$todoList ]

  const sortTodoCallback = () => {
    console.log($todoList)
    sortedTodo = $todoList.sort((a, b) => {
      if (a.isAccepted === b.isAccepted) {
        return 0;
      }
      return a.isAccepted ? 1 : -1;
    }) 
  }

  onMount(() => {
		sortTodoCallback()
	});
</script>


<div class="container">
  {#if $todoList.length !== 0}
    <input placeholder="Название или описание задачи">
  {/if}
  {#each sortedTodo as item}
    <TodoItem 
      id={item.id}
      value={item.todo} 
      deadline={item.date} 
      description={item.description} 
      checked={item.isAccepted} 
      on:filterTodo={sortTodoCallback}
    />
  {:else}
    <p>No tasks today!</p>
  {/each}
</div>

<style>
  .container {
    width: 40vw;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    width: 100%;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #434343;
    transition: border-color 0.3s ease;
    margin-bottom: 12px;
  }

  input:focus-within {
    outline: none;
  }

  input:focus {
    border-color: #868686;
  }
</style>