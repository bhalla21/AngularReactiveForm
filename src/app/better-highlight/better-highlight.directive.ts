import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string='transparent';
  @Input('appBetterHighlight') highlightColor: string= 'blue';
@HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elref: ElementRef,private renderer: Renderer2 ) {}

  ngOnInit() {
      // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
      this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventdata: Event){
    //this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventdata: Event){
   // this.renderer.setStyle(this.elref.nativeElement,'background-color','transparent');
   this.backgroundColor=this.defaultColor;
  }

}
