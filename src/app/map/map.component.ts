import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
// export class MapComponent implements AfterViewInit {
export class MapComponent implements OnInit {

  // map: any;
  contentString: any = `<div class="info_content" id="content">
    <div id="bodyContent">
    <p><b>Shahar</b>,
    Heritage Site.</p>
    <p>Attribution: Shahar, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
    https://en.wikipedia.org/w/index.php?title=Uluru</a> 
    (last visited TODAY!!).</p>
    </div>
  </div>`;

  constructor() {
    console.log('map.comp: constructor');
  }

  ngOnInit(): void {
    console.log('map.comp: ngOnInit');
    this.myMap();
  }

  ngAfterViewInit(): void {
    console.log('map.comp: ngAfterViewInit');
  }
  
  myMap() {
    let myCenter = {lat: 32.085221, lng: 34.789005} ;

    let mapProp = {
      center: new google.maps.LatLng(32.085221, 34.789005),
      zoom: 15,
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    
    var marker = new google.maps.Marker(
      {
        position: myCenter,
        animation: google.maps.Animation.DROP,
        icon: '../../assets/img/Shahar.png',
        // icon: {
          // url: '../../assets/img/Shahar.png', 
          // size: {width: 50, height: 50}
        // },
        title: 'Shahar',
      }
    );
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: this.contentString,
        maxWidth: 200,
    });

    // OPEN infoWindow
    marker.addListener('mouseover', function() {
      infowindow.open(map, marker);
    });
  }
}