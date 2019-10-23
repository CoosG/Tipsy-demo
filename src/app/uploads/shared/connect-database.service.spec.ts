import { TestBed } from '@angular/core/testing';

import { ConnectDatabaseService } from './connect-database.service';

describe('ConnectDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectDatabaseService = TestBed.get(ConnectDatabaseService);
    expect(service).toBeTruthy();
  });
});
