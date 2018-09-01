import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
    score: number;

  constructor(public scoreService: ScoreService) { }

  ngOnInit() {
      this.score = this.scoreService.getScore();
  }

}
