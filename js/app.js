//function initialize() {

// automatically generate street, city, country
// https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
// https://developers.google.com/maps/documentation/javascript/geocoding

    window.onload=function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert('Your browser does not support geolocation');
        }
    }

    var mapcanvas = document.getElementById("mapcanvas");

    var map, geocoder;

    function success(position) {
        geocoder = new google.maps.Geocoder();
        console.log(position);
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15, center: latlng,
            mapTypeControl: false, navigationControlOptions:
            {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP};
        map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
        console.log(map);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title:"You are here!"});
    }

    function error(msg) {
        console.log("it's not working");
    }

    function lookup() {
        var address = document.getElementById("address").value;
        //address = "2400 Route des Dolines 06560 Valbonne";
        geocoder.geocode(
            { 'address': address},
            function(results, status) {
                console.log(results);
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map, position: results[0].geometry.location});
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        console.log(geocoder);
    }

//}
//google.maps.event.addDomListener(window, "load", initialize);
