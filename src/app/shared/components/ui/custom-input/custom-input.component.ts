import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>CustomInputComponent),
      multi:true,
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
value!:string;
@Input() placeHolder!:string;
@Input() type!:string;

onChange :(value:string) => void =() => {}
onTouched : ()=>void = () => {}
writeValue(value: string): void {
  this.value=value;
}
registerOnChange(fn: any): void {
  this.onChange =fn;
}
registerOnTouched(fn: any): void {
  this.onTouched =fn;
}

}
