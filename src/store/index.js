import Vuex from 'vuex';
import Vue from  'vue';
import Todos from './modules/Todos'; 


//  Load Vuex

Vue.use(Vuex);

// Create Store

export default new Vuex.Store ({
    modules:{
        Todos
    }
})