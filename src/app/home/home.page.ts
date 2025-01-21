import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonInput, IonItem, IonList, IonLabel, IonSegment, IonSegmentButton, MenuController, IonMenu, IonButton} from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonHeader, IonLabel, IonSegment, IonSegmentButton, IonToolbar, IonMenu, IonButton, FormsModule],
})
export class HomePage {
  constructor(private menuCtrl: MenuController) {}

    Altura:number=0;
    Peso:number=0
    resultado:number=0

    calcularIMC(){
      console.log(this.Peso/(this.Altura * this.Altura) )
      this.resultado=this.Peso/(this.Altura * this.Altura)

    }

  openFirstMenu() {

    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {

    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {

    this.menuCtrl.open('end');
  }
}
