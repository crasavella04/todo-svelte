<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let id: number
  export let value: string;
  export let checked: boolean;
  export let description: string | undefined
  export let deadline: Date | undefined

	const dispatch = createEventDispatcher();

  let isOpen = false

  const toggleOpen = () => {
    isOpen = !isOpen
    dispatch('filterTodo')
  }

</script>

<button 
  class="container" 
  on:click={toggleOpen}
>
  <!-- {#if isOpen}
    opens
  {/if} -->
  <div class="topContainer">
    <h3>
      {value}
    </h3>
    <div class="rightColumn">
      
      {#if checked} <p>✔ Выполнено</p>
      {:else} <p>❌ Не выполнено</p>
      {/if}

      {#if deadline}
              {@const month = deadline.getMonth() >= 10 ? deadline.getMonth() : ('0' + deadline.getMonth())}
              {@const dateString = deadline.getDate() + '.' + month}
        
              <p class="deadline">
                Дедлайн: {dateString}
              </p>
      {/if}

    </div>
  </div>
  {#if isOpen}
    <div class="description">
      {description}
    </div>
    <label class="label" on:click|stopPropagation>
      <input type="checkbox" on:click|stopPropagation bind:checked>
      Отметить 
      {#if checked}
        не выполненным
      {:else} 
        выполненным
      {/if}
    </label>
    <button on:click|stopPropagation class="removeButton">
      Удалить задачу
    </button>
  {/if}
</button>

<style>
  .container {
    border: 1px solid #434343;
    padding: 8px;
    border-radius: 4px;
    transition: scale 0.3s ease;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
  .container:hover {
    scale: 1.02;
  }
  .topContainer {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    text-align: left;
  }
  .rightColumn {
    min-width: 100px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    white-space: nowrap;
    font-size: 12px;
    font-style: italic;
    color: #868686;
  }
  .label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .removeButton {
    font-size: 12px;
    background: #ff3131;
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 4px 8px;
    cursor: pointer;
  }
</style>