import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  resultado: any[] = [];

  constructor() { }

  async ngOnInit() {
    this.resultado =await this.getUsuarios();
    console.log(this.resultado);
     /* this.getUsuarios().then(data =>{
      this.resultado = data;
      console.log(this.resultado);
    }) */


    
  }

  async getUsuarios(){
  
  /* return new Promise((resolve)=>{
    fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(body=> resolve(body.data))

  }) */
  const result = await fetch('https://reqres.in/api/users')
  const data = await result.json();
  return data.data;

}
}
