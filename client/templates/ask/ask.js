Template.ask.events({
	"click .master": function(e) {
	 var selCateogry = e.target.text;	   
	   $('#tagitem').text(selCateogry);
	}

});