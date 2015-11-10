Template.modalproflist.helpers({
    getproflist: function() {
        var proflist = [];

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
        return proflist;
    }
});

Template.modalproflist.events({
    "click .prof": function(e) {
    	var prof= e.target.text;
    	Session.set('prof',prof);
    	$('#modal-dialog').modal('hide');
    },
     "click .subprof": function(e) {
     	var prof= e.target.text;
     	Session.set('prof',prof);

     	$('#modal-dialog').modal('hide');

    },
});

