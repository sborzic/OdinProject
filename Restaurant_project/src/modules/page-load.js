
const pageInit = ()=>{
  const content = document.getElementById('content');

  const header = document.createElement('div');
  header.id = 'header';  
  content.append(header);

  //add header elements 
  addHeaderElements();
}

const addHeaderElements = ()=>{

  const leftTitle = document.createElement('div');
  leftTitle.classList.add('left-title');
  const tabsWrapper = document.createElement('div');
  tabsWrapper.classList.add('tabs-wrapper');
  

  const tabHome = document.createElement('div');
  tabHome.innerText = 'home'
  const tabMenu = document.createElement('div');
  tabMenu.innerText = 'menu'
  const tabContact = document.createElement('div');
  tabContact.innerText = 'contact'

  const headerSections = [leftTitle, tabsWrapper];
  headerSections.forEach(el=>header.append(el))

  const tabs = [tabHome, tabMenu, tabContact];
  tabs.forEach(el=>{
    el.classList.add('tab');
    tabsWrapper.append(el);
  })  

}


export default pageInit;