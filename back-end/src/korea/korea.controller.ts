import { Controller, Get } from '@nestjs/common';
import { KoreaService } from './korea.service';
// import { Env } from '../../constants/Env';

@Controller('api/korea')
export class KoreaController {
  constructor(private readonly koreaService: KoreaService) {}

  @Get()
  getKorea(): any {
    return this.koreaService.getKorea();
  }

  @Get('/month')
  getKoreaMonth(): any {
    return this.koreaService.getKoreaMonth();
  }
}