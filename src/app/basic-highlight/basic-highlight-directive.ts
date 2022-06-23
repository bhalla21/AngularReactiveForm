import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
   

    constructor(private el: ElementRef) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
     }

     ngOnInit(){
        this.el.nativeElement.style.backgroundColor = 'green';
     }


}


