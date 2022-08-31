import { TestBed } from '@angular/core/testing';

import { SexoAnimalService } from './sexo-animal.service';

describe('SexoAnimalService', () => {
  let service: SexoAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SexoAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
