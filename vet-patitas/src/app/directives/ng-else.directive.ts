import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  }

}
