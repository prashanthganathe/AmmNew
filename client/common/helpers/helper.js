

Template.registerHelper("profileImg", function() {
    if (Meteor.user().services.facebook) {
        return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
    }

});

Template.registerHelper("isAdminUser", function() {
    return Roles.userIsInRole(Meteor.user(), ['admin']);

});



Template.registerHelper('getCategories', function(){
	var proflist = [];

        proflist.push({
            name: 'Business',
            expertise: ['Entrepreneur', 'Ideas', 'Contacts', 'Opportunities', 'Marketing','Sales']
        });

        proflist.push({
            name: 'Design',
            expertise: ['Web', 'PPT', 'Interior', 'Opportunities', 'Marketing','Sales']
        });

        proflist.push({
            name: 'Health & Fitness',
            expertise: ['Web', 'PPT', 'Interior', 'Opportunities', 'Marketing','Sales']
        });

        proflist.push({
            name: 'Teacher Training',
            expertise: ['Forgeign Language', 'Tuition for CBSE', 'BE', 'Mathematics for XII']
        });

        proflist.push({
            name: 'IT and Software',
            expertise: ['NodeJS', 'SQL', 'Python', 'C#' , 'Android' , 'IOS' , 'JS' , 'Big Data' , 'Java']
        });


        proflist.push({
            name: 'Doctor',
            expertise: ['ENT', 'Ortho', 'Cardio']
        });
        proflist.push({
            name: 'Mechanic',
            expertise: ['2 Wheeler', 'Truck', 'Boat']
        });
        proflist.push({
            name: 'Lawyer',
            expertise: ['Civil', 'Criminal', 'Property']
        });

        _.map(proflist,function(item,index) {
        	var val=index<10?'00'+index.toString():'0'+index.toString();

        	item.class="social-item item"+val;
        });
        return proflist;
});

// UI.registerHelper("getImageUser", function (userId) {
//     var user= Meteor.users.findOne(userId);
//     if (user.services)
//     {
//         if (user.services.facebook)
//             return Meteor.user().services.facebook.picture;
//         if (user.services.twitter)
//             return user.services.twitter.profile_image_url;
//         if (user.services.google)
//             return user.services.google.picture;
//     }
//     else
//     {
//         return "images/withOutPhoto.png";
//     }
// });