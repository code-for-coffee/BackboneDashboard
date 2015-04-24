// creating my namespace
var app = {};

// model!
app.CardModel = Backbone.Model.extend();

// template!
app.CardTemplate = $('#card-template').html();

// model view!
app.CardView = Backbone.View.extend({
  template: _.template(app.CardTemplate),
  initialize: function() {
    console.log("WE HAVE A NEW CARD VIEW!!!!!!!");
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    console.log("I AM RENDERING A CARD VIEW!!!!");
    var data = this.model.attributes;
    this.$el.html(this.template(data));
    $("#cards-container").append(this.$el.html());
  }
});

// collection!
app.CardList = Backbone.Collection.extend({
  url: '/api/cards',
  model: app.CardModel
});

// colleciton view!
app.CardListView = Backbone.View.extend({
  initialize: function() {
    console.log("COLLECTION IS READY");
    this.listenTo(this.collection, "sync", this.render);
  },
  render: function() {
    console.log("COLLECTION IS BEING RENDERED");
    var modelCount = this.collection.models.length;
    for (var i = 0; i < modelCount; i++) {
      console.log("loopin to render a model yo");
      var model = this.collection.models[i];
      var view = new app.CardView({ model: model });
      view.render();
    }
  }
});

// let's get ready to rumble!
$(document).ready(function() {

  // var cardList = new app.CardList();
  app.cardList = new app.CardList();
  app.cardListView = new app.CardListView({
    collection: app.cardList
  });
  app.cardList.fetch();

});
