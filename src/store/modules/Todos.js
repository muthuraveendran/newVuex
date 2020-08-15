// import axios form 'axios';
const axios = require('axios')


// state is used to store data
const state = {

    toods:[
    //     {
    //     id:1,
    //     title:"Todo One"
    // },
    // {
    //     id:2,
    //     title:"Todo Two"
    // }
]

};


// getters is used to pass data to the html file
const getters = {
    allTodos : state1 => state1.toods
};


// Make a request and get a response
// commit is used to call mutation
const actions = {
    async fetchToDos({commit}){ //{commit}
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        //In commit first paramter is mutation we need  to call
        // second parameter is reponse we need to pass in
        commit('setTodos', response.data);
        console.log("<<<<<< response of data >>>>>", response.data);
    },

    async addTodo({commit},title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{title
        });

        commit('newTodo', response.data);

    },

    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removeTodo',id)
    }

};


// mutation is used to set state
const mutations = {
    setTodos : (state, todos1) => (state.toods = todos1),
    newTodo: (state, todos1) => state.toods.unshift(todos1),
    removeTodo:(state,id) => state.toods = state.toods.filter(todo => todo.id !==id)
};

export default {
    state,
    getters,
    actions,
    mutations
}