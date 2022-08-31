import { TestBed } from '@angular/core/testing';

import { PorteAnimalService } from './porte-animal.service';

describe('PorteAnimalService', () => {
  let service: PorteAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorteAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
