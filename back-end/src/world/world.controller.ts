import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { WorldService } from './world.service';

@Controller('api/world')
@ApiTags('전세계 API')
export class WorldController {
  constructor(private readonly worldService: WorldService) {}

  @Get()
  @ApiOperation({
    summary: '코로나 전세계 데이터 API',
    description: '코로나 전세계 데이터 API.',
  })
  @ApiResponse({
    description: '전세계에 대한 시도별 사망자, 확진자를 보여준다.',
  })
  getWorld(): any {
    return this.worldService.getWorld();
  }
}
