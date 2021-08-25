import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string
  constructor() {}
  // ngOnInit() {
  //   console.log(this.appState);
  // }
  ngOnChanges() {
    console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }

  //si appState vaut CANCELED => state-canceled
  //si appState vaut CONFIRMED => state-confirmed
  //si appState vaut OPTION => state-option

  //binder ce string avec la propriété 'class' du host element <td>

}
