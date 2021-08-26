import { Test, TestingModule } from '@nestjs/testing';
import { KoreaService } from './korea.service';

describe('KoreaService', () => {
  let service: KoreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KoreaService],
    }).compile();

    service = module.get<KoreaService>(KoreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
