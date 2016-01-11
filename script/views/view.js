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
    this.listenTo(this.model, 'visible', this.toggleVisible)
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes))
    this.$el.toggleClass('completed', this.model.get('completed'))
    this.toggleVisible()
    return this
  },
  clear: function(){
    this.model.destroy()
  },
  togglecompleted: function(){
    this.model.toggle()
  },
  toggleVisible: function(){
    this.$el.toggleClass('hidden', this.isHidden())
  },
  isHidden: function(){
    var isComplete = this.model.get('completed')
    return (
      !isComplete
    )
  }
})
