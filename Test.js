class Carousel{

  /**
   * Objet HTMLElement
   * options slidesToScroll = Nb d'éléments à faire défiler
   * options slidesVisible = Nb d'éléments visibles dans un slide
   */
  constructor(element, options = {}){
    this.element = element;
    this.options = Object.assign({}, {
      slidesToScroll: 1,
      slidesVisible: 1
    }, options);

    // this.element = element.children;
    /**
     * Créer un div avec la class carousel qui contiendra ttes les images
     */
    var root = this.createDivWithClass('carousel')
    var container = this.createDivWithClass('carousel__container');
    root.appendChild(container);
    this.element.appendChild(root);
    let root = document.createElement('div');
    let div = document.querySelector('#carousel');
    this.element.appendChild(root)

  }

  /**
   * String className
   * return HTMLElement
   */
  createDivWithClass(className){
    var div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
  }

}

document.addEventListener('DOMContentLoaded', function(){
  new Carousel(document.querySelector('#carousel'), {
    slidesVisible: 3
  });
});
