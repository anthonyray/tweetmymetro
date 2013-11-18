$(function(){
	var canvas = new fabric.StaticCanvas('mapmetro', {backgroundColor: '#454545'});
	
	var station = new fabric.Circle( {radius : 5, left :50, top : 50, fill:'#2ABCA7'} );

	var chatelet = {
    "id":1964,
    "longitude":2.34711940104793,
    "latitude":48.8585195224421,
    "name":"Châtelet",
    "city":"PARIS-01ER",
    "type":"metro", 
    "representation" : station
  }

	canvas.add(station);
	

});