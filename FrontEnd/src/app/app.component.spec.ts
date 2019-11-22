import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StoreModule, Store, StateObservable } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MessageDialogModule } from './components/molecules/message-dialog/message-dialog.module';
import { AppStoreModule } from './store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
