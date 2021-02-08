import pageInit from './modules/page-load.js';
import loadHome from './modules/home.js';
import loadMenu from './modules/menu.js';

pageInit();
loadHome();

const tabs = Array.from(document.getElementsByClassName('tab'));
const [home, menu, contact] = tabs;

const clearPage = ()=>{
  const content = document.getElementById('content');
  content.removeChild(content.lastElementChild);
}

tabs.forEach(tab=>{
  const tabName = tab.innerHTML;
  if (tabName == 'home'){
    tab.addEventListener('click', ()=>{
      clearPage();
      loadHome()
    })
  } else if(tabName == 'menu'){
    tab.addEventListener('click', ()=>{
      clearPage();
      loadMenu();
    })
  } else if (tabName == 'contact'){
    tab.addEventListener('click', ()=>{
      clearPage();
      loadContact();
    })
  }
});
