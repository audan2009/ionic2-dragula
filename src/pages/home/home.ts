import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/components/dragula.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myDataArray: Array<string>;

  constructor(public navCtrl: NavController) {

    this.myDataArray = ['please', 'drag', 'me'];

  }

}
