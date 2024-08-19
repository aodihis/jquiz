import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { VocabularyService, Vocabulary } from '../vocabulary.service';
import { VocabularyFormComponent } from '../vocabulary-form/vocabulary-form.component';

@Component({
  selector: 'app-vocabulary-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.css']
})

export class VocabularyListComponent implements OnInit {
  vocabulary: Vocabulary[] = [];
  displayedColumns: string[] = ['kanji', 'furigana', 'romanji', 'meaning', 'type'];
  selectedVocabulary: Vocabulary | null = null;

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit(): void {
    this.getVocabulary();
  }

  getVocabulary(): void {
    this.vocabularyService.getVocabulary()
      .subscribe(vocabulary => this.vocabulary = vocabulary);
  }
}