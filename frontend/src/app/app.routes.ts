import { Routes } from '@angular/router';
import { VocabularyListComponent } from './vocabulary-list/vocabulary-list.component';
import { VocabularyFormComponent } from './vocabulary-form/vocabulary-form.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
    { path: '', component: VocabularyListComponent },
    { path: 'vocabulary/add', component: VocabularyFormComponent },
    { path: 'vocabulary/edit/:id', component: VocabularyFormComponent },
    { path: 'quiz/kanjimeaning', component: QuizComponent },
    { path: 'quiz/kanjifurigana', component: QuizComponent },
    { path: 'quiz/furiganameaning', component: QuizComponent },
    { path: '**', redirectTo: '' }
];
