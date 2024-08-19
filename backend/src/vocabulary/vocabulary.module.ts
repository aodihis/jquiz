import { Module } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { VocabularyController } from './vocabulary.controller';
import { Vocabulary } from './vocabulary.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vocabulary])],
  providers: [VocabularyService],
  controllers: [VocabularyController],
  exports: [VocabularyService]
})
export class VocabularyModule {}
