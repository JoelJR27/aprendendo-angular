import { Component } from '@angular/core';
import { BackToTopButton } from "../../components/back-to-top-button/back-to-top-button";

@Component({
  selector: 'app-roadmap',
  imports: [BackToTopButton],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css',
})
export class Roadmap {}
