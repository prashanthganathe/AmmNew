General = new SimpleSchema({
            prefix:           {  type: String,    optional: true,     label: "Prefix",                 max: 2000  },
            fname:            {  type: String,    optional: true,     label: "First name",            max: 20000 },
            lname:            {  type: String,    optional: true,     label: "Last name",              max: 200   },            
            profileurl:       {  type: String,    optional: true,                                        },
            gender:           {  type: String,    optional: true,     label: "Gender",      max: 200   },
        
            dob:              {  type: String,     optional: true,     label: "DOB"            },
            email:            {  type: String,                        label: "Email"               },
            phone:            {  type: String,    optional: true,     label: "Contact No."                                 },
            address1:         {  type: String,    optional: true,     label: "AddressLine1"                                },
            address2:         {  type: String,    optional: true,     label: "AddressLine2"                                   },           
            city:             {  type: String,    optional: true,     label: "City"                                  },
            state:            {  type: String,    optional: true,     label: "State"                                  },
            country:          {  type: String,    optional: true,     label: "Country"                                   }
        });


Skills = new SimpleSchema({
            title:           {  type: String,    optional: true,     label: "Title",                 max: 200  },
            experience:      {  type: String,    optional: true,     label: "Expereince",              max: 200  },
            rating:          {  type: String,    optional: true,     label: "Rating",              max: 200  }    
        });


Experience = new SimpleSchema({
            title:           {  type: String,    optional: true,     label: "Tite",         max: 2000  },
            desc:            {  type: String,    optional: true,     label: "Desc",         max: 20000 }, 
            Role:            {  type: String,    optional: true,     label: "Role",         max: 20000 }, 
            from:            {  type: String,    defaultValue:new Date()                                        },
            to:              {  type: String,    defaultValue:new Date()                                        }
        });

Feedback = new SimpleSchema({
            title:           {  type: String,    optional: true,     label: "Title",                 max: 2000  },
            desc:            {  type: String,    optional: true,     label: "Question",              max: 20000 },
            rating:          {  type: String,    optional: true,     label: "Category",              max: 200   },   
            feedbackby:      {  type: String,    optional: true,     label: "Category",              max: 200   },           
            createdAt:       {  type: String,    defaultValue:new Date()                                        }
        });

Availability = new SimpleSchema({
            from:          {  type: String,    optional: true,     label: "Title",                 max: 2000  },
            to:            {  type: String,    optional: true,     label: "Question",              max: 20000 },
            regularly:     {  type: String,    optional: true,     label: "Question",              max: 20000 }                               
        });


Profile = new SimpleSchema({
		  userId:       {type: String,            label: "Userid",        max: 200 },
		  general:      {type: General,           label: "general",       max: 2000 ,    optional: true,  },
		  skills:       {type: [Skills],          label: "Skills",        max: 2000 ,    optional: true,  },
		  experience:   {type: [Experience],      label: "Experience",    max: 2000 ,    optional: true,  },
		  feedback:     {type: [Feedback],        label: "Feedback",      max: 2000 ,    optional: true,  },
		  availability: {type: [Availability],    label: "Availability",  max: 2000 ,    optional: true,  }

		});

Profiles  = new Mongo.Collection("profiles");
Profiles.attachSchema(Profile);



if (Meteor.isServer) {
    Profiles.allow({
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

    Profiles.deny({
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