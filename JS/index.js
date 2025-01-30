
  // Función para inicializar el mapa
  function iniciarMap(){
    var coord = {lat:-12.0961197 ,lng: -77.015788};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}