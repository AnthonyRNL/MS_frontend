var app = app || {}

app.TodoView = Backbone.View.extend({
  tagName: 'li',//note the tag that it will create
  template: _.template($("#item-template").html()),//each object created will be packaged into the template made on the html file
  events: {
    'click .destroy': 'clear', //event for the 'x' button
    'click .toggle': "togglecompleted" //event for checkbox
  },
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove)
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes))
    return this
  },
  clear: function(){ //x button event and preventin default action
    this.model.destroy()
    return false
  },
  togglecompleted: function(){
    this.model.toggle() //action when checkbox is clicked
  }
})
