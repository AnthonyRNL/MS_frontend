var app = app || {}

app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Backbone.LocalStorage("ms-todo")
})

app.Todos = new app.TodoList()
