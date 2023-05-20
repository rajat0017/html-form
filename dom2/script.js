const titlehead= document.getElementById('header-title');
titlehead.textContent='List your item';
document.title='Listing';
const mainheader= document.getElementById('main-header');
mainheader.style.border= 'solid 2px #000';

const additem=document.getElementsByClassName('title');
additem[0].style.color='green';
additem[0].style.fontWeight='900';