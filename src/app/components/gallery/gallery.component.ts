import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  gallery = {
    title: "Gallery",
    description: "Project images",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    GalleryImages: [
      {id: 1, url:"../assets/images/gallery-images/gallery-image-1.png" , name:"Tree"},
      {id: 2, url:"../assets/images/gallery-images/gallery-image-2.png" , name:"Fingerprint"}, 
      {id: 3, url:"../assets/images/gallery-images/gallery-image-3.png" , name:"The Man"},
      {id: 4, url:"../assets/images/gallery-images/gallery-image-4.png" , name:"Mustache"},
      {id: 5, url:"../assets/images/gallery-images/gallery-image-5.png" , name:"Moose"},
      {id: 6, url:"../assets/images/gallery-images/gallery-image-6.png" , name:"Justice"},
   ] 
}
}
