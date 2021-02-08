const content = document.getElementById('content');

const Item = class {
  constructor(image, ingredients){
    this.image = image;
    this.ingredients = ingredients;
  }
}

const pizza = new Item('./images/pizza.jpg', ['ingr1', 'ingr2', 'ingr3']);
const pizza2 = new Item('./images/pizza.jpg', ['ingr1', 'ingr2', 'ingr3']);

const items = [pizza, pizza2];

const createList = (items=>{
  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-wrapper');
  content.appendChild(menuWrapper);

  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuWrapper.appendChild(menuItem);

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.classList.add('item-image');
    
    const ingredientsContainer = document.createElement('ul');
    ingredientsContainer.classList.add('ingredients-container');
    
    
    item.ingredients.forEach(el=>{
      console.log(el);
      const ingredient = document.createElement('li');
      ingredient.innerHTML = el;
      console.log(ingredient.innerHTML);
      ingredientsContainer.appendChild(ingredient);
    })
    menuItem.append(itemImage, ingredientsContainer);
    
  });
})



const loadMenu = ()=>{
  createList(items);

}

export default loadMenu;