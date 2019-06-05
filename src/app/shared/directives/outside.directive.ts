import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appOutside]'
})
export class OutsideDirective {

  @Output()
  clickedOutside = new EventEmitter<void>();

  @HostListener('document:click') onClick($event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.clickedOutside.emit();
    }
  }

  constructor(private elementRef: ElementRef) { }

}

