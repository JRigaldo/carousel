class Carousel{
  constructor(element){
    this.element = element;

    /**
      * Petit hack
      * Permet d'enlever divRoot. Il ne s'ajoutera que lorsque le script
      * sera executé lors de l'action. Va le convertir en tableau au lieu de la node liste
      * Cette ligne de code est placée au début pour respecter la hierarchie des element.
    **/
    this.children = [].slice.call(element.children);

    /* Ajoute la class div.carousel */
    let divRoot = this.createDivNClass('carousel');
    let divContainer = this.createDivNClass('carousel-container');
    divRoot.appendChild(divContainer);
    this.element.appendChild(divRoot);


    /* Mettre les slides "enfants" dans le divContainer */
    this.children.forEach((elementChild) => {
      let item = this.createDivNClass('carousel-item');
      item.appendChild(elementChild);
      divContainer.appendChild(item);
    });
  }

  createDivNClass(className){
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div
  }
}


document.addEventListener('DOMContentLoaded', function(){
  new Carousel(document.querySelector('#carousel'));
})
