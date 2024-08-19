import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vocabulary } from './vocabulary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VocabularyService {
    constructor(
        @InjectRepository(Vocabulary)
        private vocabularyRepository: Repository<Vocabulary>
    ){}

    async create(vocabulary: Vocabulary): Promise<Vocabulary> {
        return this.vocabularyRepository.save(vocabulary)
    }

    async findAll(): Promise<Vocabulary[]> {
        return this.vocabularyRepository.find()
    }

    async find(id: number): Promise<Vocabulary> {
        return this.vocabularyRepository.findOne({where : {id}})
    }

    async update(vocabulary: Vocabulary): Promise<Vocabulary> {
        return await this.vocabularyRepository.save(vocabulary);
    }

    async remove(id: number): Promise<void> {
        await this.vocabularyRepository.delete(id);
      }

}
