import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from "@angular/material";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
    declarations: [
        AppComponent,
        QuizComponent,
        StartComponent,
        SummaryComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTableModule,
        MatToolbarModule,
        MatSelectModule,
        MatSortModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
