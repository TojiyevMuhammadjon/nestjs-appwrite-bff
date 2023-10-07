import { ConfigService } from 'src/service/config.service';
import { INestApplication } from '@nestjs/common';
import { Server } from 'http';

export const listen = async (app: INestApplication, server: Server) => {
  const configService = app.get<ConfigService>(ConfigService);

  const { host, port } = configService.globalConfig;

  await app.init();

  server.listen(port, host);
};
