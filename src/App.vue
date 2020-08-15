<template>
  <div id="app">
    <div>
      <AddTodo />
    </div>
    <div class="container">
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

export default {
  props: {
  },
  name: 'App',
  components: {
    Todos,
    AddTodo
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
