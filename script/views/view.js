var app = app || {}

app.TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($("#item-template").html()),
  events: {
    'click .destroy': 'clear',
    'click .toggle': "togglecompleted"
  },
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove)
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes))
    return this
  },
  clear: function(){
    this.model.destroy()
    return false
  },
  togglecompleted: function(){
    this.model.toggle()
  }
})
