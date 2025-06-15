import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {InfoCard} from './info-card/info-card';
import {Header} from './header/header';
import {Main} from './main/main';

@Component({
  selector: 'app-root',
  imports: [MatCardModule, InfoCard, Header, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'four-card-feature-section';
}
