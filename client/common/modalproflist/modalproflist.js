Template.modalproflist.helpers({
    getproflist: function() {
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

