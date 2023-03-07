import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {
  titleChart1:string = "Sales"
  labels1: string[]=[ 'Download Sales', 'In-Store Sales', 'Purchases' ];
  data1 = [
    [ 80, 10, 10 ]
  ];
  

  

}
