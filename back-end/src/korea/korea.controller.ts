import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { KoreaService } from './korea.service';

// import { Env } from '../../constants/Env';

@Controller('api/korea')
@ApiTags('한국 API')
export class KoreaController {
  constructor(private readonly koreaService: KoreaService) {}

  @Get()
  @ApiOperation({
    summary: '코로나 한국 데이터 API',
    description: '코로나 한국 데이터 API.',
  })
  @ApiResponse({
    description: '한국에 대한 시도별 사망자, 확진자, 완치자를 보여준다.',
  })
  getKorea(): any {
    return this.koreaService.getKorea();
  }

  @Get('/month')
  @ApiOperation({
    summary: '코로나 한국 1달간 데이터 API',
    description: '코로나 한국 1달간 데이터 API.',
  })
  @ApiResponse({ description: '한국에 대한 1달간 사망자, 확진자 를 보여준다.' })
  getKoreaMonth(): any {
    return this.koreaService.getKoreaMonth();
  }
}
