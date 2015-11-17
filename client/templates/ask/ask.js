Session.setDefault('prof', 'General');




Template.ask.helpers({
    updatebutton: function(e) {
       return Session.get('prof');
    }

});

Template.ask.events({
    "click #btnprof": function(e) {
        //var selCateogry = e.target.text;
        //$('#tagitem').text(selCateogry);
        
        var questionObj={};
        questionObj.title=$('#qtitle').val();
        questionObj.question=$('#question').val();
        questionObj.category= Session.get('prof');
        questionObj.subcategory= Session.get('prof');
        if($("#isAnnonymous").is(':checked'))
        {
        questionObj.isanonymous= true;
        }
        else
        {
        	questionObj.isanonymous= false;
        }



        //Queries/o\
        var status = Queries.insert(questionObj);

    }

});




