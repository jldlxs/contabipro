import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSplitPane, IonMenu, IonMenuToggle, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSplitPane, IonMenu, IonMenuToggle, IonRouterOutlet]
})
export class ManagerPage implements OnInit {

  constructor() { }

  showFolha: boolean = false
  showNFSe: boolean = false
  showNFe: boolean = false

  // menus = [
  //   {menu:'NFe', status: 2},
  //   {menu:'NFSe', status: 2},
  //   {menu:'Folha', status: 2},
  // ]
  opened: string

  changeOpened(menu: string) {
    switch (menu) {
      case 'NFe':
        this.showFolha = this.showNFSe = false
        this.showNFe = !this.showNFe
        break;
        case 'Folha':
        this.showNFe = this.showNFSe = false
        this.showFolha = !this.showFolha
        break;
        case 'NFSe':
        this.showNFe = this.showFolha = false
        this.showNFSe = !this.showNFSe
        break;

      default:
        break;
    }
  }

  ngOnInit() {
  }

}
