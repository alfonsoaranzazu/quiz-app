import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    currentQuestion: Question;
    currentIndex: number;
    quizLength: number;

    constructor(public router: Router) { }

    ngOnInit() {
        this.currentQuestion = questions[0];
        this.currentIndex = 0;
        this.quizLength = questions.length;
    }

    onBack() {
        this.currentIndex --;
    }

    onNext() {
        this.currentIndex ++;
    }

    onFinish() {
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
    new Question('Which of the following represents a multi-line comment in Java', ['# Comment', '// Comment', '/* Comment */', '<!-- Comment >'], 2)
];