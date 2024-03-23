import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';
import { SocialComponent } from '../social/social.component';
import { SocialComponent_1 as SocialComponent } from "../social/social.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [SocialComponent, SocialComponent_1]
})
export class FooterComponent {
  footer!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor()  {
    this.footer = this.configService.getPageByName("footer");
  }
}
