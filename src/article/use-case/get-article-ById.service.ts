/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';

Injectable();
export class GetArticleByIdService {
  constructor(

    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}
  async getOneArticleById(id: number) {
    return await this.articleRepository.findOneBy({ id });
  }
}