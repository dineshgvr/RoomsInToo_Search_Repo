import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  imageObject: Array<object> = [{
    image: '../../assets/images/hotel-photos/photo-5.jpeg',
    thumbImage: '../../assets/images/hotel-photos/photo-5.jpeg',
    alt: 'alt of image',
    title: 'title of image'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
