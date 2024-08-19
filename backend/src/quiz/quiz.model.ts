export class QuizModel {
    
    question        : string
    choices          : string[]
    correctAnswer   : string

    constructor(question: string, choices: string[], correctAnswer: string) {
        this.question       = question;
        this.choices        = choices;
        this.correctAnswer  = correctAnswer;
    }
}