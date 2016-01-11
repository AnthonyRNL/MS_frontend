var app = app || {}

app.AppView = Backbone.View.extend({
  el: '#todo',
  events: {
    //create on enter item event
    "keypress #new-todo": "createOnEnter",
    'click #addButt': "createOnButt"
  },
  initialize: function(){
    this.$input = $("#new-todo")
    this.listenTo(app.Todos, 'add', this.addNew)//listen to the collections on every added item
    app.Todos.fetch()
  },
  createOnButt: function(){
    if(this.$input.val().trim()){
      app.Todos.create(this.newAttributes())
      this.$input.val("")
    }
  },
  createOnEnter: function(){
    if(event.which !== ENTER_KEY || !this.$input.val().trim()){
      return
    } else {
      app.Todos.create(this.newAttributes())
      this.$input.val("")
    }
  },
  newAttributes: function(){
    return {
      title: this.$input.val(),
      completed: false
    }
  },
  addNew: function(todo){
    var value = new app.TodoView({model: todo})
    $("#todo-list").append(value.render().el)
  }

})
