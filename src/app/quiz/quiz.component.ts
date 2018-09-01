import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../services/score.service';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    currentQuestion: Question;
    currentIndex: number;
    quizLength: number;
    score: number;

    constructor(public router: Router, public scoreService: ScoreService) { }

    ngOnInit() {
        this.currentQuestion = questions[0];
        this.currentIndex = 0;
        this.score = 0;
        this.quizLength = questions.length;
    }

    onAnswerSelect(answer: number) {
        if (answer === this.currentQuestion.answerIndex) {
            this.score++;
        }

        this.currentIndex++;

        if (this.currentIndex === this.quizLength) {
            this.onFinish();
        } else {
            this.currentQuestion = questions[this.currentIndex];
        }
    }

    onFinish() {
        const finalScore = (this.score / this.quizLength) * 100;
        this.scoreService.setScore(+finalScore.toFixed(2));
        this.router.navigate(['/summary']);
    }
}

export class Question {
    question: string;
    answers: string[];
    answerIndex: number;

    constructor(question: string, answers: string[], answerIndex: number) {
        this.question = question;
        this.answers = answers;
        this.answerIndex = answerIndex;
    }
}

export const questions: Question[] = [
    new Question('Which of the following represents a multi-line comment in Java?', ['# Comment', '// Comment', '/* Comment */', '<!-- Comment >'], 2),
    new Question('Java will ignore the whitespace in code', ['True', 'False'], 0),
    new Question('The following expression will evaluate to what value? 5 != 6', ['False', '5', 'True', '6'], 2),
    new Question('The variable endpoint will store what value? int endpoint = 10 % 3 * 2', ['10', '3', '2', '0'], 2),
    new Question('Are there any errors in this line of code? int status = true;', ['Yes, change int to boolean', 'Yes, change int to char', 'Yes, remove the semicolon at the end of the line', 'There are no errors'], 0),
    new Question('What does the following Java code do? System.out.println(8 <= 8);', ['Prints 8', 'Prints false', 'Prints true', 'Prints 0'], 2),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0),
    new Question('', [], 0)
];
