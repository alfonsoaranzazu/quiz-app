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
        console.log('answer: ', answer);

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
        const finalScore = Math.round((this.quizLength / this.score) * 100);
        this.scoreService.setScore(finalScore);
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
    new Question('Which of the following represents a multi-line comment in Java', ['# Comment', '// Comment', '/* Comment */', '<!-- Comment >'], 2),
    new Question('Java will ignore the whitespace in code.', ['True', 'False'], 0)
];