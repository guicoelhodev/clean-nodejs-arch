import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModules } from './shared/infrastructure/env-config/env-config.module';

@Module({
  imports: [EnvConfigModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
