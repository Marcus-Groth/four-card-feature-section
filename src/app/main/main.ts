import { Component } from '@angular/core';
import {InfoCard} from "../info-card/info-card";

@Component({
  selector: 'app-main',
    imports: [
        InfoCard
    ],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
