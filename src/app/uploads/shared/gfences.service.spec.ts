import { TestBed } from '@angular/core/testing';

import { GfencesService } from './gfences.service';

describe('GfencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GfencesService = TestBed.get(GfencesService);
    expect(service).toBeTruthy();
  });
});
