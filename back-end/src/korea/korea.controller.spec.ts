import { Test, TestingModule } from '@nestjs/testing';
import { KoreaController } from './korea.controller';

describe('KoreaController', () => {
  let controller: KoreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KoreaController],
    }).compile();

    controller = module.get<KoreaController>(KoreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
