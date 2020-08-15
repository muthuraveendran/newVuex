<template>
    <div>
        <p>Add To do</p>
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
    </div>
</template>

<script>
import  {  mapActions } from 'vuex'
export default {
    name:"AddTodo",
    data(){
        return {
            title:""
        }
    },
    methods:{
        ...mapActions(['addTodo']),

        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title)
        }
    }

}
</script>

<style scoped>
p {
    color: orange;
}
</style>