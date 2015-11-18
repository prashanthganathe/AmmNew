// $(document).ready(function() {
//     function getRandomSize(min, max) {
//         return Math.round(Math.random() * (max - min) + min);
//     }
//     for (var i = 0; i < 25; i++) {
//         var width = getRandomSize(200, 400);
//         var height = getRandomSize(200, 400);
//         $('#photos').append('<img src="http://www.lorempixel.com/' + width + '/' + height + '/cats" alt="pretty kitty">');
//     }
// });

Template.collage2.helpers({
    getpics: function() {
        var images = [];

        for (var i = 0; i < 25; i++) {
            var width = Math.round(Math.random() * (60 - 50) + 50); //getRandomSize(200, 400);
            var height =Math.round(Math.random() * (60 - 50) + 50)// getRandomSize(200, 400);
            images.push('http://www.lorempixel.com/' + width + '/' + height + '/cats');
           // $('#photos').append('<img src="http://www.lorempixel.com/' + width + '/' + height + '/cats" alt="pretty kitty">');
        }
        return images;


    }

})
