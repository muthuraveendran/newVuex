<template>
    
    <div>
        <h3>Welecome Todos</h3>
        <div class="todos">
            <!-- {{todo}} -->
            <div v-for=" allTodo in allTodos" :key="allTodo.id" class="todo">
                {{allTodo.title}}
                <button @click="deleteTodo(allTodo.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import  { mapGetters, mapActions } from 'vuex'
export default {
    name:"Todos",
    methods :{
        ...mapActions(["fetchToDos","deleteTodo"])
    },
  computed: mapGetters(["allTodos"]),
//   //created is a life cycle method which will load the data before the component calls
  created (){
      this.fetchToDos()
  }
}
</script>