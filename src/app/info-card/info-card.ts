import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSmImage, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-info-card',
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardSmImage,
        MatCardTitle
    ],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss',
})
export class InfoCard {
  @Input() title: string = '';
  @Input() bodyText: string = '';
  @Input() iconUrl: string = '';
  @Input() color: string = '';
}
