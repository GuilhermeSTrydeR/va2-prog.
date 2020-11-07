const nodecache = require('node-cache')
const cache = new nodecache()
cache.set('todos', [])

module.exports = class todo{

    static list(){

        return cache.get('todos')


    }

    static create(todo){

        cache.set('todos', [...todo, todo])

    }

}