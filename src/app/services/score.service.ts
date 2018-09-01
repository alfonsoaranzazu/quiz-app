import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    private score: number;

    constructor() { }

    getScore() {
        return this.score;
    }

    setScore(score: number) {
        this.score = score;
    }
}
