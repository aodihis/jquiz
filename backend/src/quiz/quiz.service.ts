import { Injectable } from '@nestjs/common';
import {VocabularyService} from '../vocabulary/vocabulary.service';
import { QuizModel } from './quiz.model';

@Injectable()
export class QuizService {

    constructor(private readonly vocabularyService: VocabularyService) {}

    randomNumber(length: number, except?: number) {
        const n = Math.floor(Math.random() * length)
        if (except != null && n == except) {
            return this.randomNumber(length, except)
        }
        return n
    }

    shuffle = (array: string[]) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    }; 

    async getKanjitoMeaningQuiz() {
        return this.getQuiz('kanji', 'meaning');
    }
    
    async getKanjitoFurigana() {
        return this.getQuiz('kanji','furigana');
    }

    async getFuriganatoMeaning() {
        return this.getQuiz('furigana', 'meaning')
    }


    async getQuiz(propertyQuestion: 'kanji' | 'furigana', propertyAnswer: 'meaning' | 'furigana') {
        const vocabularies = await this.vocabularyService.findAll();
        
        return vocabularies.map((v, i) => {
            const choices = this.getRandomChoices(vocabularies, i, propertyAnswer);
            choices.splice(this.randomNumber(3), 0, v[propertyAnswer]);
            
            return new QuizModel(v[propertyQuestion], choices, v[propertyAnswer]);
        });
    }

    private getRandomChoices(vocabularies: any[], currentIndex: number, propertyKey: string): string[] {
        return Array(3).fill(null).map(() => 
            vocabularies[this.randomNumber(vocabularies.length, currentIndex)][propertyKey]
        );
    }
}
