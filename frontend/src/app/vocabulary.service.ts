import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';


export interface Vocabulary {
  id?: number;
  kanji: string;
  furigana: string;
  romanji: string;
  meaning: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  private apiUrl = '/api/vocabulary';

  constructor(private http: HttpClient) { }

  getVocabulary(): Observable<Vocabulary[]> {
    return this.http.get<Vocabulary[]>(this.apiUrl);
  }

  createVocabulary(vocabulary: Vocabulary): Observable<Vocabulary> {
    return this.http.post<Vocabulary>(this.apiUrl, vocabulary);
  }

  updateVocabulary(id: number, vocabulary: Vocabulary): Observable<Vocabulary> {
    return this.http.put<Vocabulary>(`${this.apiUrl}/${id}`, vocabulary);
  }

  getVocabularyById(id: number): Observable<Vocabulary> {
    return this.http.get<Vocabulary>(`${this.apiUrl}/${id}`);
  }
}