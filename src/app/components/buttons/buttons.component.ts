import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonSpinner} from '@ionic/angular/standalone';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  standalone: true,
  imports: [IonSpinner, NgClass]
})
export class ButtonsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() type: string
  @Input() text: string
  @Input() icon: string
  @Input() active: boolean
  @Input() enabled: boolean = true

}
