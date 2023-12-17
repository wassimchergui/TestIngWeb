import { TestBed } from '@angular/core/testing';

import { StagiaireCrudService } from './stagiaire-crud.service';

describe('StagiaireCrudService', () => {
  let service: StagiaireCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagiaireCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
