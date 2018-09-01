import { StartComponent } from './start/start.component';
import { AppComponent } from './app.component';
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
    }
];
