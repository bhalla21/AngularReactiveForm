import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Directive({
  selector: '[appMarkAsterisk]'
})
export class MarkAsteriskDirective implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const isRequired = this.formGroup.controls[this.controlName]?.errors?.required;
    if (isRequired) {
      this.elementRef.nativeElement.innerHTML+= '<span class="required-asterisk">*</span>';
    }else{
      this.elementRef.nativeElement.innerHTML = '';
    }
  }
}