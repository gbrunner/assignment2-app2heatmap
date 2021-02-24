require(["esri/config","esri/Map", "esri/views/MapView","esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/layers/FeatureLayer", "esri/WebMap",
         "esri/core/urlUtils","esri/layers/CSVLayer","dojo/domReady!"], 
      
        function (esriConfig, Map, MapView, BasemapToggle, BasemapGallery, FeatureLayer, WebMap, urlUtils, CSVLayer){
  
  //csv files require CORS enabled server if not on same domain as your website - so proxy required//
  var url = "https://raw.githubusercontent.com/gbrunner/Advanced_Python_for_GIS_and_RS/master/Week%202/stl_crime_wgs_84.csv";
  
         esriConfig.request.corsEnabledServers.push('https://rawgit.com');
  
  
  const template = {
    title: "Crime Index", 
  };
  
  const renderer = {
    type: "heatmap",
      colorStops: [
        {ratio:0, color: "rgba(0,255,255,255)"},
        {ratio:0.2, color: "rgba(1,255,255,255)"},
        {ratio:0.5, color: "rgba(1,0,140,255)"},
        {ratio:0.8, color: "rgba(1,0,140,255)"},
        {ratio:1, color: "rgba(1,0,0,255)"}],
    maxPixelIntensity: 500,
    minPixelIntensity: 0
  };
        
  const layer = new CSVLayer({
    url: url,
    title: "STL Crime Heatmap",
    copyright: "STLPD",
    latitudeField: "Lat",
    longitudeField: "Lon",
    popupTemplate: template,
    renderer: renderer
  });
    

  
  var map = new Map({
          basemap: "arcgis-nova", // Basemap layer service
          layers: [layer]
        });
  
  
  var view = new MapView({
    map: map,
    container: "viewDiv",
    zoom: 6,
    center: [-90.1994,38.6270]
    
  });
});
