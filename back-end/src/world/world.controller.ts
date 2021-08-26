import { Controller, Get } from '@nestjs/common';
import { WorldService } from './world.service';

@Controller('api/world')
export class WorldController {
  constructor(private readonly worldService: WorldService) {}

  @Get()
  getWorld(): any {
    return this.worldService.getWorld();
  }
}
