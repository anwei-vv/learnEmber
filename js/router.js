/**
 * Created by An Wei on 2014/10/8.
 */
Todos.Router.map(function(){
    this.resource('todos',{path:'/'});
});

Todos.TodosIndexRoute = Ember.Route.extend({
    model: function(){
        return this.modelFor('todos');
    }
});

Todos.TodosRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('todo');
    }
});