import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Vocabulary, VocabularyService } from '../vocabulary.service';

@Component({
  selector: 'app-vocabulary-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './vocabulary-form.component.html',
  styleUrls: ['./vocabulary-form.component.css']
})
export class VocabularyFormComponent implements OnInit {
  vocabularyForm: FormGroup;
  isEditMode = false;
  vocabularyId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private vocabularyService: VocabularyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.vocabularyForm = this.fb.group({
      kanji: ['', Validators.required],
      furigana: ['', Validators.required],
      romanji: ['', Validators.required],
      meaning: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.vocabularyId = +id;
      this.vocabularyService.getVocabularyById(this.vocabularyId).subscribe(
        vocabulary => this.vocabularyForm.patchValue(vocabulary)
      );
    }
  }

  onSubmit(): void {
    if (this.vocabularyForm.valid) {
      const vocabularyData = this.vocabularyForm.value;
      if (this.isEditMode && this.vocabularyId) {
        this.vocabularyService.updateVocabulary(this.vocabularyId, vocabularyData)
          .subscribe(() => this.router.navigate(['/']));
      } else {
        this.vocabularyService.createVocabulary(vocabularyData)
          .subscribe(() => this.router.navigate(['/']));
      }
    }
  }
}