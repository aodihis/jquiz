import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabularyListComponent } from './vocabulary-list/vocabulary-list.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  styleUrls: ['./app.component.css'],
  template: `
      <nav>
      <h2>Voc</h2>
        <ul>
          <li><a routerLink="/">Home</a> </li>
          <li><a routerLink="/vocabulary/add">Add Vocabulary</a></li>
          <li><a routerLink="/quiz/kanjimeaning">Quiz Kanji to  Meaning</a></li>
          <li><a routerLink="/quiz/kanjifurigana">Quiz Kanji to  Furigana</a></li>
          <li><a routerLink="/quiz/furiganameaning">Quiz Furigana to  Meaning</a></li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    `
})
export class AppComponent { }