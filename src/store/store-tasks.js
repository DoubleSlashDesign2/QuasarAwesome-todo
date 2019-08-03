//-- data goes here
const state = {

tasks:{
    'ID1':{
           name: "Got to Shop",
           completed: false,
           dueDate: "2019/05/12",
           dueTime: "18:30"
    },
    'ID2':{
           name: "Get bananas",
           completed: false,
           dueDate: "2019/05/13",
           dueTime: "14:00"
    },
    'ID3':{
           name: "Get Apples",
           completed: true,
           dueDate: "2019/05/13",
           dueTime: "16:05"
    },      
}






    // tasks: [
    //     {
    //       id: 1,
    //       name: "Got to Shop",
    //       completed: false,
    //       dueDate: "2019/05/12",
    //       dueTime: "18:30"
    //     },
    //     {
    //       id: 2,
    //       name: "Get bananas",
    //       completed: false,
    //       dueDate: "2019/05/13",
    //       dueTime: "14:00"
    //     },
    //     {
    //       id: 3,
    //       name: "Get Apples",
    //       completed: true,
    //       dueDate: "2019/05/13",
    //       dueTime: "16:05"
    //     }
    //   ]
}

//-- cant be be async - must update instantly and directly
//-- nmanipulate the state
const mutations = {

}

// -- CAN be async can also execute a mutations
const actions = {

}

// -- get and set the data
const getters = {
tasks:(state)=>{return state.tasks;}
}

// -- namespaced: true ... allows you to have multiple store modules in your app
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}