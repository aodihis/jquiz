import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import {VocabularyModule} from '../vocabulary/vocabulary.module';

@Module({
  imports:[VocabularyModule],
  providers: [QuizService],
  controllers: [QuizController]
})
export class QuizModule {}
