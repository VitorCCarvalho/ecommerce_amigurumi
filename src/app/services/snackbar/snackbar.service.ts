import { DOCUMENT } from '@angular/common';
import { EnvironmentInjector, Inject, Injectable, Injector, createComponent } from '@angular/core';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private injector: EnvironmentInjector,
    @Inject(DOCUMENT) private document: Document
  ) { }

  open(content: string){
    const componentRef = createComponent(SnackbarComponent, {environmentInjector: this.injector})

    componentRef.instance.content = content
    componentRef.hostView.detectChanges();

    const { nativeElement } = componentRef.location;

    this.document.body.appendChild(nativeElement);

    componentRef.instance.afterClose.subscribe(() => {
      componentRef.destroy();
      this.document.body.removeChild(nativeElement);
    });
  }
}
