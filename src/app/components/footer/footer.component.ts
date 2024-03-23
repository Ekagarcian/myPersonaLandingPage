import { Component,inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';
import { SocialComponent } from "../../social/social.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [SocialComponent]
})
export class FooterComponent {
 
    footer!: ConfigItem | undefined;
    configService: ConfigService = inject(ConfigService);
  
    constructor(){
      this.footer = this.configService.getPageByName("footer");
      }
  }
    
}
