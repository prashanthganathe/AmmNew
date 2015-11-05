Template.landing.events({

    'click #logout': function(event) {
        Meteor.logout(function(err) {
            // callback
            // Session.set("ses",false);
        });
    }

    });



