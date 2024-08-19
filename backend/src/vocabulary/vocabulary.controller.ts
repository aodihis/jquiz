import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { Vocabulary } from './vocabulary.entity';

@Controller('vocabulary')
export class VocabularyController {
    constructor(private readonly vocabularyService: VocabularyService) {}

    @Post()
    create(@Body() vocabulary: Vocabulary) {
        return this.vocabularyService.create(vocabulary)
    }

    @Get()
    findAll() {
        return this.vocabularyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.vocabularyService.find(+id)
    }

    @Put()
    update(@Body() vocabulary: Vocabulary) {
      return this.vocabularyService.update(vocabulary);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.vocabularyService.remove(+id);
    }
}
