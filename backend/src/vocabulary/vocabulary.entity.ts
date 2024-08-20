import { Entity, Column, PrimaryGeneratedColumn, BeforeUpdate, BeforeInsert } from 'typeorm';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

@Entity()
export class Vocabulary {


  @IsOptional() // Mark the id as optional in validation
  @IsInt() // Ensure that if provided, it's an integer
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional()
  @IsString()
  @Column({
    nullable: true,
  })
  kanji: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  furigana: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  romanji: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  meaning: string;

  @IsNotEmpty()
  @IsString()
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
