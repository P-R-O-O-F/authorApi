/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteArticleService } from '../use-case/delete-article.service';
import { CreateArticleService } from '../use-case/create-article.service';
import { UpdateArticleService } from '../use-case/update-article.service';
import { GetAllArticleService } from '../use-case/get-all-article.service';
import { GetArticleByIdService } from '../use-case/get-article-ById.service';
import { GetArticleByAuthorService } from '../use-case/get-articles-ByAuthor.service';
import { ArticleCreateDto } from '../dto/article-create.dto';
import { ArticleUpdateDto } from '../dto/article-update.dto';

// @Controller('articles')
// est un décorateur qui permet de déclarer un controller
// donc une classe qui va contenir des routes (url accessible)
@Controller('articles')
export class ArticleController {
  // injection de dépendance
  // permet d'instancier la classe ArticleService
  // dans la propriété articleService
  constructor(private readonly DeleteArticleService: DeleteArticleService,private readonly CreateArticleService: CreateArticleService,private readonly UpdateArticleService: UpdateArticleService, private readonly GetAllArticleService: GetAllArticleService,private readonly GetArticleByIdService: GetArticleByIdService,private readonly GetArticleByAuthorService: GetArticleByAuthorService) {}

  // @Get() est un décorateur qui permet de déclarer
  // une route accessible avec la méthode GET
  @Get()
  getAllArticles() {
    return this.GetAllArticleService.getAllarticles();
  }

  // on peut passer en parametre du décorateur
  // un segment d'url avec éventuellement des paramètres
  // on peut ensuite récupérer sa valeur avec le décorateur @Param
  @Get(':id')
  getOneArticleById(@Param('id', ParseIntPipe) id: number) {
    return this.GetArticleByIdService.getOneArticleById(id);
  }
  // on peut passer en parametre du décorateur
  // un segment d'url avec éventuellement des paramètres
  // on peut ensuite récupérer sa valeur avec le décorateur @Param
  @Get('author/:author')
  getArticlesByAuthor(@Param('author') author: string) {
    /*la méthode `getArticlesByAuthor` fait appel à la méthode `getArticlesByAuthor` 
    du service `articleService` avec `author` comme argument. Dans `articleService`, 
    l'ORM (Object-Relational Mapping) est utilisé pour interagir avec la base de données. 
    La méthode `getArticlesByAuthor` de `articleService` utilise l'ORM pour créer et exécuter une requête 
    SQL qui récupère tous les articles de la base de données écrits par l'auteur spécifié. 
    L'ORM convertit ensuite les résultats de la requête SQL en objets Article, qui sont renvoyés par la méthode 
    `getArticlesByAuthor` du service. Ces objets Article sont ensuite renvoyés par la méthode `getArticlesByAuthor` 
    du contrôleur en réponse à la requête HTTP initiale.*/
    return this.GetArticleByAuthorService.getArticlesByAuthor(author);
  }

  @Post()
  // on utilise le décorateur @Body pour récupérer
  // les données du body de la requête
  // on valide les données du body de la requête
  // avec un DTO (Data Transfer Object)
  createArticle(@Body() data: ArticleCreateDto) {
    console.log(data);
    return this.CreateArticleService.createArticle(data);
  }

  @Put(':id')
  updateArticle(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ArticleUpdateDto,
  ) {
    return this.UpdateArticleService.updateArticle(id, data);
  }

  @Delete(':id')
  deleteArticle(@Param('id', ParseIntPipe) id: number) {
    return this.DeleteArticleService.deleteArticle(id);
  }
}
