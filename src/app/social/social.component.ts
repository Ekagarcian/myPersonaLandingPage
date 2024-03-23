import { Component,inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';


@Component({
  selector: 'app-social',
  standalone: true,
  imports: [SocialComponent],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  social!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor(){
    this.social = this.configService.getPageByName("social");
    }
}

