import { Directive, OnInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

@Directive({
  selector: '[appAos]',
  standalone: true
})
export class AosDirective implements OnInit, OnDestroy {
  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 100,
      anchorPlacement: 'top-bottom'
    });
    AOS.refresh();
  }

  ngOnDestroy() {
    // AOS doesn't have a formal destroy
  }
}
