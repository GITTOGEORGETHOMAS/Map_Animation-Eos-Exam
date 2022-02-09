
const busStops = [
    [77.597783693529,12.97608935861465],
    [77.67100586855825, 12.855395427232079],
    [78.19174531314025, 12.546969105051298],
    [78.71248475772224, 12.810062145909786],
    [79.59588202978097, 12.897699106468087],
    [79.83765391476547, 12.921869428158253],
    [80.16001642807812, 13.048725146008424],
    [80.26540417281495, 13.097034052119255]
  ];
   
  
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l0dG9nZW9yZ2V0aG9tYXMiLCJhIjoiY2t4NzVydHNxMmxqaDJ5cHphMWc1dGI5OCJ9.aCE6yhLf6UWWul-yRNBspg';
   
  
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [77.597783693529,12.97608935861465],
    zoom: 14,
  });
   
  
  let counter = 0;
 const marker= new mapboxgl.Marker()
 .setLngLat(busStops[counter])
 .addTo(map);

  
  function move() {
   
    marker.setLngLat(busStops[counter])
    marker.addTo(map)
    counter ++
    setTimeout(move,1000)
}

 