Answer = new SimpleSchema({
            title:           {  type: String,    optional: true,     label: "Title",                 max: 2000  },
            questionid:      {  type: String,    optional: true,     label: "Question",              max: 20000 },
            userid:          {  type: String,    optional: true,     label: "Question",              max: 20000 },
            category:        {  type: String,    optional: true,     label: "Category",              max: 200   },
            subcategory:     {  type: String,    optional: true,     label: "Sub category",          max: 200   },
            categoryparent:  {  type: String,    optional: true,     label: "CategoryParentID",      max: 200   },
            isanonymous:     {  type: Boolean,   optional: true,     label: "IsAnonymous"            },
           
            createdby:       {  type: String,    optional: true,     label: "UserId"                  },
            originalquestion:{  type: String,    optional: true,     label: "Orginal Question"                  },
           
            updatedAt:       {  type: String,    defaultValue:new Date()                                        },
            createdAt:       {  type: String,    defaultValue:new Date()                                        }
        });


Answers  = new Mongo.Collection("answers");
Answers.attachSchema(Answer);


if (Meteor.isServer) {
    Answers.allow({
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

    Answers.deny({
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