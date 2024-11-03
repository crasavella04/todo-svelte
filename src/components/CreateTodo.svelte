<script lang="ts">
  import { todoList } from "../store/todoList";
  let value = ''

  const createTodo = (event: Event) => {
    const form = event.target as HTMLFormElement
    const formData = new FormData(event.target as HTMLFormElement);

    const newTodo = {
      id: new Date().getTime(),
      todo: formData.get('title') as string,
      description: formData.get('description') as string,
      date: formData.get('date') ? new Date(formData.get('date') as string) : undefined, 
      isAccepted: false
    }
    
    todoList.update(prev => [...prev, newTodo])
    form.reset()
  }

</script>

<form on:submit|preventDefault={createTodo}>
  <h2>
    Создать ToDo
  </h2>
  <label for="title">
    <p>Название*</p>
    <input bind:value type="text" name="title" id="title" required>
  </label>
  <label for="description">
    <p>Описание</p>
    <textarea name="description" id="description" />
  </label>
  <label for="date">
    <p>Дата окончания</p>
    <input type="date" name="date" id="date">
  </label>
  <button type="submit" disabled={!value.trim().length}>
    Создать
  </button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 30vw;
    padding-right: 40px;
    border-right: 1px solid #868686;
    justify-content: center;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  input, textarea {
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #434343;
    transition: border-color 0.3s ease;
  }

  input:focus-within, textarea:focus-within {
    outline: none;
  }

  input:focus, textarea:focus {
    border-color: #868686;
  }

  textarea {
    height: 80px;
    resize: none;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label > p {
    font-size: 14px;
  }

  button {
    border: none;
    background: #434343;
    padding: 8px;
    border-radius: 4px;
    color: #fff;
    transition: background 0.3s ease;
  }
  
  button:hover {
    background: #606060;
  }
  
  button:disabled {
    background: #868686;
    cursor: default;
  }
</style>