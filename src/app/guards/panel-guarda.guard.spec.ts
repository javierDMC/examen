import { TestBed } from '@angular/core/testing';

import { PanelGuardaGuard } from './panel-guarda.guard';

describe('PanelGuardaGuard', () => {
  let guard: PanelGuardaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PanelGuardaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
