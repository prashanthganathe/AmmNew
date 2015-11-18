Template.addrole.events({
    "click #btnrole": function(e) {
        var role={};
        role.name= $('#txtrole').val();
        var status =Meteor.call('createRole',role.name);// Roles.insert(role);
            }

});