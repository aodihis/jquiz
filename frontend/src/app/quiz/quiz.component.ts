import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quiz, QuizService } from '../quiz.service';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, MatRadioButton, MatRadioGroup],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})


export class QuizComponent implements OnInit{
  quiz: Quiz[] = []
  selectedAnswer: string[] = []
  type: string = ''
  constructor(public route: ActivatedRoute, private quizService: QuizService) {
    this.route.url.subscribe(params => {
      this.type = params[1].path;
    })
  }

  ngOnInit(): void {
    if (this.type == 'kanjimeaning') {
      this.quizService.getKanjiMeaningQuiz()
      .subscribe( quiz => {
        this.quiz = quiz
        this.selectedAnswer = Array(this.quiz.length).fill('')
      })
    }

    if (this.type == 'kanjifurigana') {
      this.quizService.getKanjiFuriganaQuiz()
      .subscribe( quiz => {
        this.quiz = quiz
        this.selectedAnswer = Array(this.quiz.length).fill('')
      })
    }

    if (this.type == 'furiganameaning') {
      this.quizService.getFuriganaMeaningQuiz()
      .subscribe( quiz => {
        this.quiz = quiz
        this.selectedAnswer = Array(this.quiz.length).fill('')
      })
    }
    
  
  }

  onSelectChangeHandler(selected: string, index: number) {
    this.selectedAnswer[index] = selected
    
  }
}
