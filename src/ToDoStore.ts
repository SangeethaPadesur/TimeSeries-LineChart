import {autorun, observable} from 'mobx'

class ToDoStore {
    @observable todos = ['MobX','KJH']
}

var store  = (window as any).store =  new ToDoStore
export default store

autorun(()=>{
 console.log(store.todos[0])
}) 