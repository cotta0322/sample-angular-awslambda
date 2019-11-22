import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageDialogComponent } from './components/molecules/message-dialog/message-dialog.component';
import { MessageDialogModule } from './components/molecules/message-dialog/message-dialog.module';
import { AppStoreModule } from './store';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        HttpClientModule,
        MessageDialogModule,
        AppStoreModule,
        MatProgressSpinnerModule,
        OverlayModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [MessageDialogComponent, MatSpinner]
})
export class AppModule {}
