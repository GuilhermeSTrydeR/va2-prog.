const todo = require('../models/todo')

module.exports = {

    list(req, res){
        
        const todo = {

            title: 'item1',
            description: 'descr1'

        }
    
        todo.create(todo)
        
        const todos = todo.list()
        return res.json(todos)
    }

}