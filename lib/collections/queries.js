Query = new SimpleSchema({
            title:           {  type: String,    optional: true,     label: "Title",                 max: 2000  },
            question:        {  type: String,    optional: true,     label: "Question",              max: 20000 },
            category:        {  type: String,    optional: true,     label: "Category",              max: 200   },
            subcategory:     {  type: String,    optional: true,     label: "Sub category",          max: 200   },
            categoryparent:  {  type: String,    optional: true,     label: "CategoryParentID",      max: 200   },
            isanonymous:     {  type: Boolean,   optional: true,     label: "IsAnonymous"            },
            
            createdby:       {  type: String,    optional: true,     label: "UserId"                  },
            updatedAt:       {  type: String,    defaultValue:new Date().toString()                                        },
            createdAt:       {  type: String,    defaultValue:new Date().toString()                                      }
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