import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  about = {
    title: "SUCCESS",
    description: "How We Help You To Sell Your Product",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    buttontext: "START CREATING TODAY",
    IconBlock: [
      {id: 1, icon:"fa-html5",title: "HTML5 &amp CSS3", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"},
      {id: 2, title:"fa-bolt", "Easy to Use", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"},
      {id: 3, title:"fa-tablet", "Fully Responsive", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"},
      {id: 4, title:"fa-rocket", "Parallax Effect", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"}
  ]
  
}

  }


