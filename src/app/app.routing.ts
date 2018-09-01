import { SummaryComponent } from './summary/summary.component';
import { StartComponent } from './start/start.component';
import { Routes } from '@angular/router';
import { QuizComponent } from '@app/components/quiz.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: StartComponent
    },
    {
        path: 'quiz',
        component: QuizComponent
    },
    {
        path: 'summary',
        component: SummaryComponent
    }
];
