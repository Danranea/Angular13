import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appNumero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor{

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  // implementa o evento keyup para o elemento diretiva,
  // impedindo que letras seja fixadas no input.
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any){
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  //registra a função a ser chamada para atualizar o valor na model.
  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  //registra a função a ser chamada para atualizar o valor na model para o evento Touched
  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }

  //obtem o valor contido na model
  writeValue(value: any): void {
      this.el.nativeElement.value = value;
  }


}
