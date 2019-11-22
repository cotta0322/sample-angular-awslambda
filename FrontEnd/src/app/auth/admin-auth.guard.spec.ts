import { TestBed, async, inject } from '@angular/core/testing';

import { AdminAuthGuard } from './admin-auth.guard';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from '../store';

describe('AdminAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuard],
      imports: [
          RouterModule.forRoot([]),
          AppStoreModule,
      ]
    });
  });

  it('should ...', inject([AdminAuthGuard], (guard: AdminAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
