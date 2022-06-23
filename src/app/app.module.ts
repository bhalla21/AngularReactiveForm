
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight-directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnLessDirective } from './un-less.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkAsteriskDirective } from './mark-asterisk.directive';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnLessDirective,
    MarkAsteriskDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
