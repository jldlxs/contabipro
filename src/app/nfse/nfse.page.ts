import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nfse',
  templateUrl: './nfse.page.html',
  styleUrls: ['./nfse.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuToggle]
})
export class NfsePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
