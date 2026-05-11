import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header-links',
  imports: [RouterLink],
  templateUrl: './header-links.html',
  styleUrl: './header-links.css',
})
export class HeaderLinks {}
