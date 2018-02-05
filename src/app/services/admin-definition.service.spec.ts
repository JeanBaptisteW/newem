import { TestBed, inject } from '@angular/core/testing';

import { AdminDefinitionService } from './admin-definition.service';

describe('AdminDefinitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDefinitionService]
    });
  });

  it('should be created', inject([AdminDefinitionService], (service: AdminDefinitionService) => {
    expect(service).toBeTruthy();
  }));
});
