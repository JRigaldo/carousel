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
    this.currentItem = 0;

    

    /* Ajoute la class div.carousel */
    this.divRoot = this.createDivNClass('carousel');
    this.divContainer = this.createDivNClass('carousel-container');
    this.divRoot.appendChild(this.divContainer);
    this.element.appendChild(this.divRoot);

    

    /* Mettre les slides "enfants" dans le divContainer */
    this.items = children.map((elementChild) => {
      let item = this.createDivNClass('carousel-item');
      item.appendChild(elementChild);
      this.divContainer.appendChild(item);

      return item;
    });

    this.setStyle();
    this.createNavigation();
  }

  setStyle(){
    let ratio = this.items.length / this.options.slidesVisible;
    this.divContainer.style.width = (ratio * 100) + '%';
    this.items.forEach(item => {
      item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%";
    });
  }

  createDivNClass(className){
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div
  }

  createNavigation(){
    let nextButton = this.createDivNClass('carousel-next');
    let prevButton = this.createDivNClass('carousel-prev');

    this.divRoot.appendChild(nextButton);
    this.divRoot.appendChild(prevButton);

    nextButton.addEventListener('click', this.next.bind(this));
    prevButton.addEventListener('click', this.prev.bind(this));
    console.log(nextButton)

  }

  next(){
    this.goToItem(this.currentItem - this.options.slidesToScroll);
  }

  prev(){
    this.goToItem(this.currentItem + this.options.slidesToScroll);
  }

  goToItem(index){
    if (index < 0) {
      index = this.items.length - this.options.slidesVisible;
    }else if(index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] === undefined){
      index = 0
    }
    let translateX = index * -100 / this.items.length;
    this.divContainer.style.transform = 'translate3d('+ translateX  +'%, 0, 0)';
    this.currentItem = index;
  }


}


document.addEventListener('DOMContentLoaded', function(){
  new Carousel(document.querySelector('#carousel'), {
    slidesToScroll: 2,
    slidesVisible: 3
  });
})


































 