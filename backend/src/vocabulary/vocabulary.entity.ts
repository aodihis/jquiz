import { Entity, Column, PrimaryGeneratedColumn, BeforeUpdate, BeforeInsert } from 'typeorm';

@Entity()
export class Vocabulary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kanji: string;

  @Column()
  furigana: string;

  @Column()
  romanji: string;

  @Column()
  meaning: string;

  @Column()
  type: string;

  @BeforeInsert()
  @BeforeUpdate()
  trimFields() {
    this.kanji = this.kanji.trim();
    this.romanji = this.romanji.trim();
    this.meaning = this.meaning.trim();
    this.type = this.type.trim();
  }
}
