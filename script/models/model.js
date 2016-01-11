var app = app || {}

app.Todo = Backbone.Model.extend({
  //each item only has its title and completion status
  defaults: {
    title: "",
    completed: false
  },
  //function to persist the completion status of an item
  toggle: function(){
    this.save({
      completed: !this.get("completed")
    })
  }
})
