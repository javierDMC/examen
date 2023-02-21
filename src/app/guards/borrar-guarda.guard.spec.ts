import { TestBed } from '@angular/core/testing';

import { BorrarGuardaGuard } from './borrar-guarda.guard';

describe('BorrarGuardaGuard', () => {
  let guard: BorrarGuardaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BorrarGuardaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
