import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templates-html-e-data-binding',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './templates-html-e-data-binding.html',
  styleUrl: './templates-html-e-data-binding.css',


})
export class TemplatesHtmlEDataBinding {
  protected name: string = "Joel";
  protected imageUrl: string = "https://github.com/JoelJR27.png";
  protected count: number = 0;
  protected isDisabled: boolean = false;
  protected color: string = "blue";
  protected isActive: boolean = true;

  protected increment(): void {
    this.count++;
  }
  protected decrement(): void {
    this.count--;
  }
  protected toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}
