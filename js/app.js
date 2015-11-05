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

var url, source;

function playVideo() {
    url = document.getElementById("url").value;
    //We assume the URL is correct, ok ? ok
    source = document.getElementById("video1");
    console.log(url);
    source.src = "https://ia601702.us.archive.org/11/items/008ClaudeFischler/008-ClaudeFischler.mp4";
}

function jumpTo() {
    var v = document.getElementById("video1");
    v.addEventListener("seeked", function() { v.play(); }, true);
    var s = document.getElementById("timeInteger").value;
    v.currentTime = s;
}

function preview() {
    var v = document.getElementById("video1");
    var c = document.getElementById("previewPhoto");
    var ctx = c.getContext("2d");
    var scale = v.width / v.videoWidth; //I want
    c.setAttribute("width", v.videoWidth * scale);
    c.setAttribute("height", v.videoHeight * scale);
    ctx.drawImage(v, 0, 0, v.videoWidth * scale, v.videoHeight * scale);
}

function rotate() {
    var v = document.getElementById("video1");
    var degree = document.getElementById("degrees").value; //We assume the degree is correct, ok ? ok
    v.setAttribute("style", "-webkit-transform:rotate(" + degree + "deg);");
}

function displayControls() {
    var v = document.getElementById("video1");
    var controls = document.getElementById("controls");
    if(controls.checked) {
        v.setAttribute("controls", "true");
    } else {
        //v.setAttribute("controls", "false");
        v.removeAttribute("controls");
    }
}

function mirror() {
    var v = document.getElementById("video1");
    v.setAttribute("style", "-webkit-transform:rotateY(180deg);");
}





//}
//google.maps.event.addDomListener(window, "load", initialize);
