import { Component } from '@angular/core';
import { HeaderLinks } from "../header-links/header-links";

@Component({
  selector: 'app-header',
  imports: [HeaderLinks],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
