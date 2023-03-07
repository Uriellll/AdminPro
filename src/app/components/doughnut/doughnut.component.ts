import { Component, Input} from '@angular/core';
import {MultiDataSet, Label, Color} from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {
  @Input() title:string= "Sin titulo"
  @Input('labels') doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('data') doughnutChartData: MultiDataSet = [
    
      [ 80, 10, 10 ],

  ];
  public colors: Color[] =[
    {backgroundColor: ['#9E120E','#0e529e', '#0e9e5a']}
  ];


  
}
