import { Module } from '@nestjs/common';
import { IpfsService } from './ipfs.service';
import { IpfsController } from './ipfs.controller';

@Module({
    controllers: [IpfsService],
    providers: [IpfsController]
})
export class IpfsModule {}
