var app = app || {}

//organizing all Todo items into a collection, drawing from the model, and noting where to store it
app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Backbone.LocalStorage("ms-todo")
})

app.Todos = new app.TodoList()
