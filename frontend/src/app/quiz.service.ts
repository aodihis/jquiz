import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';


export interface Quiz {
  question  : string,
  choices   : string[],
  correctAnswer   :string
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = '/api/quiz';
  constructor(private http: HttpClient) { }

  getKanjiMeaningQuiz() {
    return this.http.get<Quiz[]>(this.apiUrl + '/kanjitomeaning');
  }

  getKanjiFuriganaQuiz() {
    return this.http.get<Quiz[]>(this.apiUrl + '/kanjitofurigana');
  }

  getFuriganaMeaningQuiz() {
    return this.http.get<Quiz[]>(this.apiUrl + '/furiganatomeaning');
  }
}
