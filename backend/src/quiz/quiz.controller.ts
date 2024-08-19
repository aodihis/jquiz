import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private readonly quizService: QuizService) {}

    @Get('kanjitomeaning')
    getKanjitoMeaning() {
        return this.quizService.getKanjitoMeaningQuiz()
    }

    @Get('kanjitofurigana')
    getKanjitoFurigana() {
        return this.quizService.getKanjitoFurigana()
    }

    @Get('furiganatomeaning')
    getFuriganatoMeaning() {
        return this.quizService.getFuriganatoMeaning()
    }
}
