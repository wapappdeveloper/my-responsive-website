import { Directive, ElementRef, Renderer, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {
  @HostListener('mouseover') onHover(){
    alert('hai');
  }
  @Input() set appMydirective(condition:boolean){
    if(condition){
      this.renderer.setElementStyle(this.elm.nativeElement, 'display', 'block');
    }else{
      this.renderer.setElementStyle(this.elm.nativeElement, 'display', 'none');
    }
    
  }
  @HostBinding('style.color') color:string;
  @HostBinding('style.border-color') borderColor:string;

  constructor(private elm: ElementRef, private renderer: Renderer) {
    //this.renderer.setElementStyle(this.elm.nativeElement, 'backgroundColor', 'gray');
    //this.renderer.setElementStyle(this.elm.nativeElement, 'borderRadius', '10px');
    this.elm.nativeElement.innerHTML = '<b>lional</b>';
  }

}
