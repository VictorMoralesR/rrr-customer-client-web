import { Component, OnInit } from '@angular/core';

import { faMapMarkedAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
