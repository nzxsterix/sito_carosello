document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('carousel');
    
    if (carousel1) {
       
        var carousel = new bootstrap.Carousel(carousel1, {
            interval: 4000, 
            wrap: true      
        });

        console.log("Carosello fatto con script.js");
    }
});

