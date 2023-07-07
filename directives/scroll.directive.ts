import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @Input() appScroll:any;

  constructor(private el: ElementRef) { }

  @HostListener("click") 
  onClick():void{
      
      let temp=this.el.nativeElement.parentNode;
      console.log(temp);
       temp=temp.children[3];
      temp.scrollTo({ left: (temp.scrollLeft + this.appScroll), behavior: 'smooth' });
      
      console.log(temp);
      console.log();
  }
}

