
Query = new SimpleSchema({
            question: {
                type: String,
                optional: true,
                label: "Question",
                max: 20000
            },
            category: {
                type: Date,
                optional: true,
                label: "Category",
                max: 200
            },
            subcategory: {
                type: String,
                optional: true,
                label: "Sub category",
                max: 200
            },
            categoryparent: {
                type: String,
                optional: true,
                label: "CategoryParentID",
                max: 200
            },
            updatedAt: {  type: String, defaultValue:new Date()},
            createdAt: {  type: String, defaultValue:new Date()}

        });


Queries  = new Mongo.Collection("queries");
Queries.attachSchema(Query);


if (Meteor.isServer) {
    Queries.allow({
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

    Queries.deny({
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