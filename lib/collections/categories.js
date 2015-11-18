Category = new SimpleSchema({
    name:           {  type: String,    optional: true,     label: "Name",        max: 2000  },
    desc:           {  type: String,    optional: true,     label: "Desc",        max: 20000 },
    count:          {  type: Number,    optional: true,     label: "Count",       max: 20000 },
    createdby:      {  type: String,    optional: true,     label: "UserId"                  },
    updatedAt:      {  type: String,    defaultValue:new Date().toString()                   },
    createdAt:      {  type: String,    defaultValue:new Date().toString()                   }

});


Categories = new Mongo.Collection("categories");
Categories.attachSchema(Category);
if (Meteor.isServer) {
    Categories.allow({
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

    Categories.deny({
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