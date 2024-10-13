import { TestBed } from '@angular/core/testing';

import { AIServiceService } from './aiservice.service';

describe('AIServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AIServiceService = TestBed.get(AIServiceService);
    expect(service).toBeTruthy();
  });
});
