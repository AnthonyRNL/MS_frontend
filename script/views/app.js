var app = app || {}

app.AppView = Backbone.View.extend({
  el: '#todo',
  events: {
    //create on enter item event
    "keypress #new-todo": "createOnEnter",
    //create item on button as well
    'click #addButt': "createOnButt"
  },
  initialize: function(){
    this.$input = $("#new-todo")
    this.listenTo(app.Todos, 'add', this.addNew)//listen to the collections on every added item
    app.Todos.fetch()//loads all the items already in localstorage
  },
  createOnButt: function(){
    if(this.$input.val().trim()){
      app.Todos.create(this.newAttributes())
      this.$input.val("")
    }
  },
  createOnEnter: function(){
    if(event.which !== 13 || !this.$input.val().trim()){ //every instance thats not an enter key or there isn't anything in the input, return
      return
    } else { //else create a new model in a TodoList object using the newAttributes function
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
  addNew: function(todo){     //listening to the collection object, if it encouters an 'add' event, it will create a new TodoView object and add it to the list
    var value = new app.TodoView({model: todo})
    $("#todo-list").append(value.render().el)
  }

})
