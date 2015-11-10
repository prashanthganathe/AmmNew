


Template.profilecard.onRendered(function() {
    this.$('.datetimepicker').datetimepicker({format: 'MM/DD/YYYY'});
});


Template.profilecard.events({
  'submit form': function(e, b){

  	var profile={};
  	profile.userId= Meteor.userId();

  	var general = {};
  	general.prefix =$('#prefix').val();
    general.fname=$('#first-name').val();
    general.lname =$('#last-name').val();       
    general.profileurl=$('#picurl').val();
    general.gender=$('#').val();
    general.dob=$('#dob').val();
    general.email=$('#email').val();
    general.phone=$('#phone').val();
    general.address1=$('#address1').val();
    general.address2=$('#address2').val();
    general.city=$('#city').val();
    general.state=$('#state').val();
    general.country=$('#country').val();

  	profile.general= general;
    
    
    Profiles.insert(profile, {validationContext: 'insertForm'}, function(error, result) {
      if(!error){
        // $('#addItemForm').find('input:text').val('');
        // $('#itemStore').focus();
        conso
      }
    });
    
    return false;
  }
});