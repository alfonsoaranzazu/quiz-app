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
    new Question('Java will ignore the whitespace in code', ['true', 'false'], 0),
    new Question('The following expression will evaluate to what value? 5 != 6', ['false', '5', 'true', '6'], 2),
    new Question('The variable endpoint will store what value? int endpoint = 10 % 3 * 2', ['10', '3', '2', '0'], 2),
    new Question('Are there any errors in this line of code? int status = true;', ['Yes, change int to boolean', 'Yes, change int to char', 'Yes, remove the semicolon at the end of the line', 'There are no errors'], 0),
    new Question('What does the following Java code do? System.out.println(8 <= 8);', ['Prints 8', 'Prints false', 'Prints true', 'Prints 0'], 2),
    new Question('The variable gemdas will store what value? int gemdas = (10 / 5) * 3;', ['6', '11', '15', '5'], 0),
    new Question('Boolean "or" is represented in Java by what operator?', ['[[', '!!', '||', 'OR'], 2),
    new Question('Boolean "and" is represented in Java by what operator?', ['||', 'and', '&&', '$$'], 2),
    new Question('The following Boolean expression will be evaluated in what order? !(false) || true && false', ['First ||, then &&, finally !', 'First !, then ||, finally &&', 'First !, then &&, finally ||', 'First &&, then ||, finally !'], 2),
    new Question('The break keyword is important in a switch statement due to which of the following?', ['Without it, the switch statement will not execute', 'Java will return an error if it is not specified', 'Without break, Java will continue to check other cases in the switch statement', 'It is necessary whenever the switch statement contains more than 4 cases'], 2),
    new Question('The variable puzzle will be assigned what value? char puzzle = (20 > 10) ? "A" : "Z";', ['Z', 'A', '10', '20'], 1),
    new Question('The following Boolean expression will evaluate to what value? ( 1 < 8 || !(5 > 2 && 3 < 5))', ['true', 'false', 'error', 'void'], 0),
    new Question('In the following code, which class inherits from another class? class Rapper extends Musician { }', ['Musician inherits the main method from Rapper', 'Musician inherits methods and properties from Rapper', 'Rapper inherits methods and properties from Musician', 'Rapper inherits the main method from Musician'], 2),
    new Question('Are there any errors in the following code? public int jump(int feet) { return true; }', ['The return keyword in Java does not require a semicolon', 'There are no errors', 'Defining return values and parameters of the same type is not allowed in Java', 'The method returns the incorrect data type'], 3),
    new Question('Which of the following is necessary in order to execute Java code?', ['The main method', 'Java packages', 'Instance variables', 'A class constructor'], 0),
    new Question('An object named dalmation belongs to the Spot class. Which of the following correctly calls the run method on dalmation?', ['Spot.run();', 'Spot[run]', 'Spot.dalmation()', 'dalmation.run();'], 3),
    new Question('In the following method definition, miles represents which of the following? public void run(int miles) { }', ['A Java-specific keyword', 'A parameter of type integer', 'An object belonging to the Miles class', 'A constructor'], 1),
    new Question('Are there any errors in the following code? public boolean isAvailable() { return false; }', ['The method is missing a parameter', 'Defining return values and parameters of the same type is not allowed in Java', 'There are no errors', 'The method returns data of incorrect type'], 2),
    new Question('Are there any errors in the following code? public void sleep(int hours) { return 8; }', ['There are no errors', 'Change "int hours" to "int: Hours"', 'The method should not return a data type', 'Sleep is a reserved keyword in Java'], 2),
    new Question('Are there any errors in the following code? public int calculate(boolean roundUp) { return roundUp; }', ['There are no errors', 'The method is missing a parameter', 'roundUp is not defined', 'The method returns data of incorrect type'], 3),
    new Question('Which of the following is NOT a reserved word in Java', ['public', 'protected', 'processed', 'private'], 2),
    new Question('The variable trickyNumber will store what value? int trickyNumber = (100 / 4) % (3) * (4)', ['1', '5', '3', '4'], 3),
    new Question('ages represents an ArrayList object. The following line of code will perform which of the following? ages.add(4, 34);', ['Add 4 and 34 together and return a result of 38', 'Insert the integer 34 into the 4th position of the ArrayList', 'Insert the integer 34 into the 5th position of the ArrayList', 'Insert the integer 4 into the 34th position of the ArrayList'], 2),
    new Question('A HashMap is comprised of what two components?', ['Name and Value', 'Key and Lock', 'List and Array', 'Key and Value'], 3)
];
