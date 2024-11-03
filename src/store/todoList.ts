import { writable } from "svelte/store";

interface ITodo {
  id: number
  todo: string
  date?: Date
  description?: string
  isAccepted: boolean
}

const initialState: ITodo[] = []

const todoList = writable(initialState);

todoList.subscribe((value) => value);

export { todoList }