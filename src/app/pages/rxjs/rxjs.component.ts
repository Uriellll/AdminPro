import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {
    let i = 0;
    const obs$ = new Observable(observer=>{
      
      const intervalo =setInterval(()=>{
        i++;
        observer.next(i);
        if(i === 4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i ==2){
          observer.error('i llegó al valor de 2');
        }
      }, 1000)

    });
    obs$.pipe(
      retry(1)
    ).subscribe(
      valor => console.log('Subs: ', valor),
      error => console.warn('Error', error),
      () => console.info('Obs terminado')
    );
   }

  ngOnInit(): void {
  }

}
