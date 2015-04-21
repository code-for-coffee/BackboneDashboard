/**
 * Created by jamest on 4/20/15.
 */


$(document).ready(function(event){

    var card = Backbone.Model.extend({
        initialize: function(){
            console.log("Hey, a Card Model (no." + this.get("id") + ") was just created!");
            // fetch from the server
            this.fetch();
        }
    });

    var cardList = Backbone.Collection.extend({
        model: card,
        url: "/api/cards",
        initialize: function() {
            console.log("Collection is a go!");
        }
    });

    var list = new cardList();

    // create will create a new item on the API
    list.create({
        title: "Hello", message: "from backbone.js!"
    });

    // refresh postman
    list.create({
        title: "Good morning!", message: "Your cat says meow."
    });

    // refresh postman
    list.create({
        title: "Weather", message: "It is currently 32C outside."
    });

    // find models that have a title of where
    list.where({title: "Hello"});

    // or by id
    list.at(1);




});
