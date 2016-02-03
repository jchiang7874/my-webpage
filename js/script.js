/**
 * Created by macpro on 9/1/15.
 */

$(document).ready(function() {
    slideShow();
})

    $(".navbar-nav li a").click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    $('.nav-li').on('click', function() {
        $('.nav-li').removeClass('active');
        $(this).addClass('active');

    });

function initMap() {
    var myLocal = {lat: 37.9063100, lng: -122.0649600}
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLocal,
        zoom: 9
    });

    var marker = new google.maps.Marker({
        position: myLocal,
        map: map,
        title: 'Hello World!'
    });
}

function slideShow() {
    var str, index = 0, result = ["is curious"], elem = document.getElementById('wordSlide');
     $.ajax({
         type: 'GET',
         url: 'words.txt',
         success: function (data) {
         str = data;
         result = str.split('; ');
        }
     });

    function nextWord(){
        index++;
        if(index > (result.length - 1)){
            index = 0;
        }
        return setTimeout(wordSlide, 700);
    }

    function wordSlide(){
        elem.innerHTML = result[index];
        return setTimeout(nextWord, 900);
    }

    wordSlide();
}

