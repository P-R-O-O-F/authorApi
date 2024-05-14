import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entity/article.entity';
import { ArticleController } from './controller/article.controller';
import { DeleteArticleService } from './use-case/delete-article.service';
import { CreateArticleService } from './use-case/create-article.service';
import { GetArticleByAuthorService } from './use-case/get-articles-ByAuthor.service';
import { GetAllArticleService } from './use-case/get-all-article.service';
import { GetArticleByIdService } from './use-case/get-article-ById.service';
import { UpdateArticleService } from './use-case/update-article.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [
    CreateArticleService,
    DeleteArticleService,
    GetArticleByIdService,
    GetArticleByAuthorService,
    GetAllArticleService,
    UpdateArticleService,
  ],
})
export class ArticleModule {}
