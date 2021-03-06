import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
 
@NgModule(
{
    imports: [BrowserModule],
    declarations: [AppComponent],
    // entryComponents: [AppComponent],
    providers: [ErrorHandler],
    bootstrap: [AppComponent]
}
)

export class AppModule {}