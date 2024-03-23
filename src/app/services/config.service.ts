import { Injectable } from '@angular/core';
import { ConfigItem} from './config-item';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

configuration = configItem [] = [

    {
      id:1,
      name:"about",
      data:{
      title: "SUCCESS",
      description: "How We Help You To Sell Your Product",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      buttontext: "START CREATING TODAY",
      IconBlock: [
        {id: 1, icon:"fa-html5",title: "HTML5 &amp CSS3", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"},
        {id: 2, icon:"fa-bolt", title: "Easy to Use", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"},
        {id: 3, icon:"fa-tablet", title: "Fully Responsive", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"},
        {id: 4, icon:"fa-rocket", title: "Parallax Effect", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"},
    ]
    
  }
  },
  {id:2,
    name:"client",
    data:{
      title:"TRUST",
      description: "Companies who use our services",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      companyBlocks: [
        {id: 1, Image:"../assets/images/company-images/company-logo1.png" , name:"Tree"},
        {id: 2, Image:"../assets/images/company-images/company-logo2.png" , name:"Fingerprint"},
        {id: 3, Image:"../assets/images/company-images/company-logo3.png" , name:"The Man"},
        {id: 4, Image:"../assets/images/company-images/company-logo4.png" , name:"Mustache"},
        {id: 5, Image:"../assets/images/company-images/company-logo5.png" , name:"Moose"},
        {id: 6, Image:"../assets/images/company-images/company-logo6.png" , name:"Justice"},
        {id: 7, Image:"../assets/images/company-images/company-logo7.png" , name:"Ball"},
        {id: 8, Image:"../assets/images/company-images/company-logo8.png" , name:"Cold"},
        {id: 9, Image:"../assets/images/company-images/company-logo9.png" , name:"Apple"},
      ]
    }
  },
  {id:3,
  name:"Gallery",
  data:{
    title: "Gallery",
    description: "Project images",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    galleryBlocks:[
      {id: 1, url:"../assets/images/gallery-images/gallery-image-1.png" , name:"Tree"},
      {id: 2, url:"../assets/images/gallery-images/gallery-image-2.png" , name:"Fingerprint"}, 
      {id: 3, url:"../assets/images/gallery-images/gallery-image-3.png" , name:"The Man"},
      {id: 4, url:"../assets/images/gallery-images/gallery-image-4.png" , name:"Mustache"},
      {id: 5, url:"../assets/images/gallery-images/gallery-image-5.png" , name:"Moose"},
      {id: 6, url:"../assets/images/gallery-images/gallery-image-6.png" , name:"Justice"},
   ] 
}
},
{id:5,
name:"pricing",
title:"YOUR CHOICE",
description:"We have the right packahe for you",
detail:"lorem ipsum dolor sit ament, consetuiy jol",
pricingBlocks: [
  {id:1,
    description: "lorem ipsum"
    title:"PERSONAL",
    Subtitle:"The stanrd version",
    currency:"=",
    feactured:false,
    Downloads:"9 Downloads",
    Extensions:"2 Extensions",
    Tutorials: "Tutorials",
    Support:"Forum support",
    updates:"1 año frre updates",
    buttonText:"buy now"
  },



  },

]


}

{id:4,
name:"header",
data:{
  title:"A FREE AND SIMPLE LANDING PAGE",
  description: "A FREE AND SIMPLE LANDING PAGE",
  url: "Namari is a free landing page template you can use for your projects. It is free to use for your \ npersonal and commercial projects enjoy!",
  buttontext:"START CREATING TODAY"

}
},
{id:6,
name:"services",
  data:{
  title:"BELIEVING",
  description: "Focusing On what Matter Most",
  detail:'loren ipsum dolro sit amen',
  }
},
{id:7,
  name:"testimonials",
  data:{
    title:"FEEBACK",
    description:"Whar our coaustomer are saying",
    detail:'',
    feedbackBlock:[
      {name: 'John Doe',userimage: '../assets/images/user-images/user-1.jpg',comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'},
      {name: 'Roslyn Doe',userimage: '../assets/images/user-images/user-2.jpg',comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'},
      {name: 'Thomas Doe',userimage: '../assets/images/user-images/user-3.jpg',comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua'},
    ]
  }

},


];

  constructor() { }
  getAllPages():ConfigItem[] {
    return this.configuration;
  }
  getPageByName(pageName: string): ConfigItem | undefined {
    return this.configuration.find({ConfigItem} => ConfigItem.name === pageName);
  }
}
