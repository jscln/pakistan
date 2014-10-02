function init(){ 

         var map = new L.Map('map');  

         // Esri tiles via @d3noob, link: http://bl.ocks.org/d3noob/8663620 

      	mapLink = 
            '<a href="http://www.esri.com/">Esri</a>';
         wholink = 
            'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
         L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18
         	}).addTo(map);
         	// map.attributionControl.setPrefix(''); // This would not show the 'Powered by Leaflet' text.

         var Pakistan = new L.LatLng(34, 73.5); 
         map.setView(Pakistan, 7);

         var Asori = L.circle([32.974702, 70.251646], 9500, {
         	color: 'red',
         	fillColor: '#f03',
         	fillOpacity: 0.16
         }).addTo(map).bindPopup("<b>ASORI</b><br><br>Total casualties (minimum reported): 19<br>Civilian casualties (minimum reported): 9<br>Children casualties (minimum reported): 3<br><br>Strikes: 2005, 2010");

         var AzizKhel = L.circle([33.084063, 70.206671], 1500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.33
         }).addTo(map).bindPopup("<b>AZIZ KHEL</b><br><br>Total casualties (minimum reported): 3<br>Civilian casualties (minimum reported): 3<br>Children casualties (minimum reported): 1<br><br>Strike: 2009");

         var Boya = L.circle([32.94419, 69.900169], 10000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.25
         }).addTo(map).bindPopup("<b>BOYA</b><br><br>Total casualties (minimum reported): 20<br>Civilian casualties (minimum reported): 13<br>Children casualties (minimum reported): 5<br><br>Strikes: 2010 (twice)");

         var Damadola = L.circle([34.805556, 71.466667], 53000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.7
         }).addTo(map).bindPopup("<b>DAMADOLA</b><br><br>Total casualties (minimum reported): 106<br>Civilian casualties (minimum reported): 94<br>Children casualties (minimum reported): 74<br><br>Strikes: 2006 (twice), 2008");

         var DandaDarpakhel = L.circle([33.037625, 70.051998], 33500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.16
         }).addTo(map).bindPopup("<b>DANDA DARPAKHEL</b><br><br>Total casualties (minimum reported): 67<br>Civilian casualties (minimum reported): 38<br>Children casualties (minimum reported): 25<br><br>Strikes: 2008 (twice), 2009, 2010 (twice)");

         var DargaMandi = L.circle([33.040435, 70.047863], 7500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.27
         }).addTo(map).bindPopup("<b>DARGA MANDI</b><br><br>Total casualties (minimum reported): 15<br>Civilian casualties (minimum reported): 10<br>Children casualties (minimum reported): 4<br><br>Strikes: 2009, 2010");

         var GankiKhel = L.circle([32.288221, 69.524789], 2500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.6
         }).addTo(map).bindPopup("<b>GANKI KHEL</b><br><br>Total casualties (minimum reported): 5<br>Civilian casualties (minimum reported): 5<br>Children casualties (minimum reported): 3<br><br>Strike: 2009");

         var Ghundikala = L.circle([32.976448, 70.244737], 5500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.22
         }).addTo(map).bindPopup("<b>GHUNDIKALA</b><br><br>Total casualties (minimum reported): 11<br>Civilian casualties (minimum reported): 3<br>Children casualties (minimum reported): 2<br><br>Strikes: 2008 (twice)");

         var Hamzoni = L.circle([32.97364, 69.983339], 2000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.25
         }).addTo(map).bindPopup("<b>HAMZONI</b><br><br>Total casualties (minimum reported): 4<br>Civilian casualties (minimum reported): 1<br>Children casualties (minimum reported): 1<br><br>Strike: 2012");

         var Kaniguram = L.circle([33.037625, 70.051998], 6000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.33
         }).addTo(map).bindPopup("<b>KANIGURAM</b><br><br>Total casualties (minimum reported): 12<br>Civilian casualties (minimum reported): 0<br>Children casualties (minimum reported): 4<br><br>Strike: 2009");

         var KariKot = L.circle([32.326451, 69477754], 3000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.33
         }).addTo(map).bindPopup("<b>KARI KOT</b><br><br>Total casualties (minimum reported): 6<br>Civilian casualties (minimum reported): 2<br>Children casualties (minimum reported): 2<br><br>Strike: 2004");

         var KhadarKhel = L.circle([32.97355, 69.62063], 6500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.23
         }).addTo(map).bindPopup("<b>KHADAR KHEL</b><br><br>Total casualties (minimum reported): 13<br>Civilian casualties (minimum reported): 8<br>Children casualties (minimum reported): 3<br><br>Strike: 2009");

            var Khadezai = L.circle([33.640696, 70.775776], 5000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.3
         }).addTo(map).bindPopup("<b>KHADEZAI</b><br><br>Total casualties (minimum reported): 10<br>Civilian casualties (minimum reported): 5<br>Children casualties (minimum reported): 3<br><br>Strike: 2009");

   var Khushali = L.circle([33.640696, 70.775776], 6000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.167
         }).addTo(map).bindPopup("<b>KHUSHALI</b><br><br>Total casualties (minimum reported): 12<br>Civilian casualties (minimum reported): 4<br>Children casualties (minimum reported): 2<br><br>Strike: 2008");

   var MachiKhel = L.circle([33.030398, 70.247011], 1500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.33
         }).addTo(map).bindPopup("<b>MACHI KHEL</b><br><br>Total casualties (minimum reported): 3<br>Civilian casualties (minimum reported): 3<br>Children casualties (minimum reported): 1<br><br>Strike: 2009");

   var Makeen = L.circle([32.621, 69.839367], 30000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.167
         }).addTo(map).bindPopup("<b>MAKEEN</b><br><br>Total casualties (minimum reported): 60<br>Civilian casualties (minimum reported): 18<br>Children casualties (minimum reported): 10<br><br>Strike: 2009");

   var MiramShah = L.circle([33.00053, 70.065479], 7000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.214
         }).addTo(map).bindPopup("<b>MIRAM SHAH</b><br><br>Total casualties (minimum reported): 14<br>Civilian casualties (minimum reported): 6<br>Children casualties (minimum reported): 3<br><br>Strikes: 2008, 2011");

   var Mohammad = L.circle([32.957221, 69.885192], 10000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.25
         }).addTo(map).bindPopup("<b>MOHAMMAD</b><br><br>Total casualties (minimum reported): 20<br>Civilian casualties (minimum reported): 10<br>Children casualties (minimum reported): 5<br><br>Strikes: 2008 (twice)");

   var Mosaki = L.circle([32.965701, 70274498], 6500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.167
         }).addTo(map).bindPopup("<b>MOSAKI</b><br><br>Total casualties (minimum reported): 13<br>Civilian casualties (minimum reported): 4<br>Children casualties (minimum reported): 3<br><br>Strikes: 2005, 2010");

   var NarsiKhel = L.circle([33.030398, 70.2407011], 12500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.04
         }).addTo(map).bindPopup("<b>NARSI KHEL</b><br><br>Total casualties (minimum reported): 25<br>Civilian casualties (minimum reported): 1<br>Children casualties (minimum reported): 1<br><br>Strike: 2009");

   var Norak = L.circle([32.980948, 70.171738], 1000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 1
         }).addTo(map).bindPopup("<b>NORAK</b><br><br>Total casualties (minimum reported): 2<br>Civilian casualties (minimum reported): 2<br>Children casualties (minimum reported): 2<br><br>Strike: 2011");

   var PirKeley = L.circle([33.074677, 70.144304], 1000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5
         }).addTo(map).bindPopup("<b>PIR KELEY</b><br><br>Total casualties (minimum reported): 2<br>Civilian casualties (minimum reported): 1<br>Children casualties (minimum reported): 1<br><br>Strike: 2010");

   var Sanzali = L.circle([32.963091, 69.593711], 3000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.167
         }).addTo(map).bindPopup("<b>SANZALI</b><br><br>Total casualties (minimum reported): 6<br>Civilian casualties (minimum reported): 1<br>Children casualties (minimum reported): 1<br><br>Strike: 2008");

   var Shaktoi = L.circle([32.6903, 70.0069], 3000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.125
         }).addTo(map).bindPopup("<b>SHAKTOI</b><br><br>Total casualties (minimum reported): 8<br>Civilian casualties (minimum reported): 8<br>Children casualties (minimum reported): 1<br><br>Strike: 2007");

   var Spinwan = L.circle([33.173695, 70.401978], 10000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.15
         }).addTo(map).bindPopup("<b>SPINWAN</b><br><br>Total casualties (minimum reported): 20<br>Civilian casualties (minimum reported): 5<br>Children casualties (minimum reported): 3<br><br>Strike: 2011");

   var Tabbi = L.circle([32.947066, 70.148732], 2500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.2
         }).addTo(map).bindPopup("<b>TABBI</b><br><br>Total casualties (minimum reported): 5<br>Civilian casualties (minimum reported): 5<br>Children casualties (minimum reported): 1<br><br>Strike: 2010");

   var Zeraki = L.circle([32.968491, 70.233437], 3500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.14
         }).addTo(map).bindPopup("<b>ZERAKI</b><br><br>Total casualties (minimum reported): 7<br>Civilian casualties (minimum reported): 9<br>Children casualties (minimum reported): 1<br><br>Strike: 2009");


      }