import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { ArticleContainer } from "./components/article-container/article-container";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, ArticleContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estudando-angular');
}
