const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'La Nona'

const subtitle = document.createElement('div');
subtitle.classList.add('subtitle');
subtitle.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium eros nec ipsum placerat tristique eu id ex. Mauris in mattis purus. Vestibulum ut feugiat lorem, congue ornare risus. Aliquam. ';

const content = document.getElementById('content');

const titleWrapper = document.createElement('div');
titleWrapper.classList.add('title-wrapper');

titleWrapper.append(title, subtitle);

const loadHome = ()=>{
  content.append(titleWrapper);
  setTimeout(()=>{
    titleWrapper.classList.add('show-title');
    title.classList.add('title-centered');
    subtitle.classList.add('title-centered');
  }, 1000);
}

export default loadHome;