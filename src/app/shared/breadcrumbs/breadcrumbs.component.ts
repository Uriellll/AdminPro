import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnIni, OnDestroy {
  titulo: string = '';
  tituloSubs$!: Subscription;
  constructor(private router: Router) {
    this.tituloSubs$ = this.getDataRow().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
    
  }
  getDataRow() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild == null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
