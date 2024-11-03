<script lang="ts">
  import CreateTodo from "./components/CreateTodo.svelte";
    import TodoList from "./components/TodoList.svelte";
</script>

<main>
  <CreateTodo />
  <TodoList />
</main>

<style>
  main {
    display: flex;
    gap: 40px;
    height: 70vh;
  }
</style>