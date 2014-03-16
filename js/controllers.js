function ComicListController($scope) {

  $scope.comics = [
    {number: 1, label: '#1. Por que lutamos?', title: '#1. Por que lutamos?', image: './img/strips/1.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=1'},
    {number: 2, label: '#2. Entediado?', title: '#2. Entediado?', image: './img/strips/2.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=2'}/*,
     {number: 3, title: '#3. Ordens?', image: './img/strips/3.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=3'},
     {number: 4, title: '#4. É um rato', image: './img/strips/4.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=4'},
     {number: 5, title: '#5. Amarelos', image: './img/strips/5.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=5'},
     {number: 6, title: '#6. Bate essa', image: './img/strips/6.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=6'},
     {number: 7, title: '#7. Avião vai explodir', image: './img/strips/7.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=7'},
     {number: 8, title: '#8. Vamos sair dessa cidade', image: './img/strips/8.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=8'},
     {number: 9, title: '#9. Mundo queimando', image: './img/strips/9.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=9'},
     {number: 10, title: '#10. Me dê sua arma', image: './img/strips/10.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=10'},
     {number: 11, title: '#11. ...', image: './img/strips/11.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=11'},
     {number: 12, title: '#12. Rir de pessoas mortas', image: './img/strips/12.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=12'},
     {number: 13, title: '#13. Legal', image: './img/strips/13.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=13'},
     {number: 14, title: '#14. Meio depressivo', image: './img/strips/14.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=14'},
     {number: 15, title: '#15. Melhor que nós', image: './img/strips/15.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=15'},
     {number: 16, title: '#16. Defeituoso', image: './img/strips/16.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=16'},
     {number: 17, title: '#17. Deus ex machina', image: './img/strips/17.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=17'},
     {number: 18, title: '#18. Tanque', image: './img/strips/18.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=18'},
     {number: 19, title: '#19. Resto do rebanho', image: './img/strips/19.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=19'},
     {number: 20, title: '#20. Perdido?', image: './img/strips/20.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=20'},
     {number: 21, title: '#21. Fogo amigo', image: './img/strips/21.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=21'},
     {number: 22, title: '#22. Zumbis', image: './img/strips/22.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=22'},
     {number: 23, title: '#23. Uma saída', image: './img/strips/23.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=23'},
     {number: 24, title: '#24. Mariposa', image: './img/strips/24.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=24'},
     {number: 25, title: '#25. Explosivos', image: './img/strips/25.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=25'},
     {number: 26, title: '#26. Trabalho de equipe', image: './img/strips/26.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=26'},
     {number: 27, title: '#27. Tanque 2', image: './img/strips/27.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=27'},
     {number: 28, title: '#28. Tanque 3', image: './img/strips/28.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=28'},
     {number: 29, title: '#29. Nenhum homem deixado para trás', image: './img/strips/29.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=29'},
     {number: 30, title: '#30. Cascalho', image: './img/strips/30.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=30'},
     {number: 31, title: '#31. Desejo de morte', image: './img/strips/31.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=31'},
     {number: 32, title: '#32. Resto do rebanho 2', image: './img/strips/32.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=32'},
     {number: 33, title: '#33. Parte maior do exército', image: './img/strips/33.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=33'},
     {number: 34, title: '#34. É isso', image: './img/strips/34.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=34'},
     {number: 35, title: 'Azuis são estúpidos', image: './img/strips/35.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=35'},
     {number: 36, title: '#35. Foi isso', image: './img/strips/36.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=36'},
     {number: 37, title: '#36. Limpo!', image: './img/strips/37.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=37'},
     {number: 38, title: '#37. Ideias', image: './img/strips/38.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=38'},
     {number: 39, title: 'Descansando', image: './img/strips/39.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=39'},
     {number: 40, title: '#38. Nada', image: './img/strips/40.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=40'},
     {number: 41, title: '#39. A ponte', image: './img/strips/41.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=41'},
     {number: 42, title: 'GWTB 250K', image: './img/strips/42.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=42'},
     {number: 43, title: '#40. Não, de verdade', image: './img/strips/43.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=43'},
     {number: 44, title: '#41. Espírito de time', image: './img/strips/44.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=44'},
     {number: 45, title: '#42. Amarelos 2', image: './img/strips/45.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=45'},
     {number: 46, title: '#43. Ninguém se importa', image: './img/strips/46.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=46'},
     {number: 47, title: '#44. Lança-chamas', image: './img/strips/47.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=47'},
     {number: 48, title: '#45. Café', image: './img/strips/48.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=48'},
     {number: 49, title: '#46. De novo não', image: './img/strips/49.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=49'},
     {number: 50, title: 'Puro filler', image: './img/strips/50.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=50'},
     {number: 51, title: 'GWTB 250K - A megaestrutura', image: './img/strips/51.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=51'},
     {number: 52, title: '#47. O jogo', image: './img/strips/52.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=52'},
     {number: 53, title: '#48. Novos recrutas', image: './img/strips/53.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=53'},
     {number: 54, title: '#49. Impressionante', image: './img/strips/54.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=54'},
     {number: 55, title: 'Miau', image: './img/strips/55.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=55'},
     {number: 56, title: '#50. Arte', image: './img/strips/56.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=56'},
     {number: 57, title: '#51. Deja vu', image: './img/strips/57.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=57'},
     {number: 58, title: '#52. Irmãos de armas', image: './img/strips/58.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=58'},
     {number: 59, title: '#53. Inveja do rifle', image: './img/strips/59.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=59'},
     {number: 60, title: '#54. Altas apostas', image: './img/strips/60.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=60'},
     {number: 61, title: 'Lendas GWTB', image: './img/strips/61.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=61'},
     {number: 62, title: '#55. Favores especiais', image: './img/strips/62.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=62'},
     {number: 63, title: '#56. Mistérios', image: './img/strips/63.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=63'},
     {number: 64, title: '#57. Posto avançado', image: './img/strips/64.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=64'},
     {number: 65, title: '#58. Visões do futuro', image: './img/strips/65.png', original: 'www.blastwave-comic.com/index.php?p=comic&nro=65'}*/
  ];

  $scope.showTitle = function(selectedElement) {
    return selectedElement > 0;
  };
  $scope.showImage = function(selectedElement) {
    return selectedElement > 0;
  };

  $scope.selectedElement = 0;

  $scope.checkSelected = function(option) {
    if (option === $scope.selectedElement) {
      return true;
    }
  };

}

function ComicListCtrl(Comic) {

  this.comics = Comic.query();

}

function ComicDetailCtrl(Comic) {

  this.comic = Comic.get({comicId: this.params.comicId});

  this.saveComic = function() {
    if (this.comic.id > 0) {
      this.comic.$update({comicId: this.comic.id});
    } else {
      this.comic.$save();
      window.location = "#/comics";
    }
  };

  this.deleteComic = function() {
    this.comic.$delete({comicId: this.comic.id}, function() {
      alert('Tira ' + comic.name + ' removida');
      window.location = "#/comics";
    });
  };

}

function RouteCtrl($route) {

  var self = this;

  $route.when('/comics', {template: 'tpl/welcome.html'});

  $route.when('/comic/:comicId', {template: 'tpl/comic-details.html', controller: ComicDetailCtrl});

  $route.otherwise({redirectTo: '/comics'});

  $route.onChange(function() {
    self.params = $route.current.params;
  });

  $route.parent(this);

  this.addComic = function() {
    window.location = "#/comics/add";
  };

}