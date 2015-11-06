
Item = new SimpleSchema({
            name: {
                type: String,
                optional: true,
                label: "Name",
                max: 20000
            },
            desc: {
                type: String,
                optional: true,
                label: "Desc",
                max: 200
            }

        });


Items  = new Mongo.Collection("items");
Items.attachSchema(Item);









if (Meteor.isServer) {
    Items.allow({
        insert: function(userId, doc) {
            return true;
        },

        update: function(userId, doc, fieldNames, modifier) {
            return true;
        },

        remove: function(userId, doc) {
            return true;
        }
    });

    Items.deny({
        insert: function(userId, doc) {
            return false;
        },

        update: function(userId, doc, fieldNames, modifier) {
            return false;
        },

        remove: function(userId, doc) {
            return false;
        }
    });
}