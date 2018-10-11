class Carousel{
  
  constructor(element, options = {}){
    this.element = element;

    this.options = Object.assign({}, {
      slidesToScroll: 1,
      slidesVisible: 3
    }, options);

    /**
      * Petit hack
      * Permet d'enlever divRoot. Il ne s'ajoutera que lorsque le script
      * sera executé lors de l'action. Va le convertir en tableau au lieu de la node liste
      * Cette ligne de code est placée au début pour respecter la hierarchie des element.
    **/
    let children = [].slice.call(element.children);

    

    /* Ajoute la class div.carousel */
    let divRoot = this.createDivNClass('carousel');
    this.divContainer = this.createDivNClass('carousel-container');
    divRoot.appendChild(divContainer);
    this.element.appendChild(divRoot);

    

    /* Mettre les slides "enfants" dans le divContainer */
    this.items = children.Map((elementChild) => {
      let item = this.createDivNClass('carousel-item');
      item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%";
      item.appendChild(elementChild);
      this.divContainer.appendChild(item);

      return item;
    });
  }

  setStyle(){
    let ratio = this.children.length / this.options.slidesVisible;
    this.divContainer.style.width = (ratio * 100) + '%';
  }

  createDivNClass(className){
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div
  }
}


document.addEventListener('DOMContentLoaded', function(){
  new Carousel(document.querySelector('#carousel'), {
    slidesToScroll: 1,
    slidesVisible: 3
  });
})


































 