import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top-button',
  imports: [],
  templateUrl: './back-to-top-button.html',
  styleUrls: ['./back-to-top-button.css'],
})



export class BackToTopButton {

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
