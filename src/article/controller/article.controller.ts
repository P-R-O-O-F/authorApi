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
import { ArticleService } from '../service/article.service';
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
  constructor(private readonly articleService: ArticleService) {}

  // @Get() est un décorateur qui permet de déclarer
  // une route accessible avec la méthode GET
  @Get()
  getAllArticles() {
    return this.articleService.getAllarticles();
  }

  // on peut passer en parametre du décorateur
  // un segment d'url avec éventuellement des paramètres
  // on peut ensuite récupérer sa valeur avec le décorateur @Param
  @Get(':id')
  getOneArticleById(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.getOneArticleById(id);
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
    return this.articleService.getArticlesByAuthor(author);
  }

  @Post()
  // on utilise le décorateur @Body pour récupérer
  // les données du body de la requête
  // on valide les données du body de la requête
  // avec un DTO (Data Transfer Object)
  createArticle(@Body() data: ArticleCreateDto) {
    console.log(data);
    return this.articleService.createArticle(data);
  }

  @Put(':id')
  updateArticle(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ArticleUpdateDto,
  ) {
    return this.articleService.updateArticle(id, data);
  }

  @Delete(':id')
  deleteArticle(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.deleteArticle(id);
  }
}
