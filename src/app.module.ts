import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModules } from './shared/infrastructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';

@Module({
  imports: [EnvConfigModules, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
