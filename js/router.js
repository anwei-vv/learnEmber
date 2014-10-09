/**
 * Created by An Wei on 2014/10/8.
 */
Todos.Router.map(function(){
    this.resource('todos',{path:'/'});
});

Todos.TodosRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('todo');
    }
})