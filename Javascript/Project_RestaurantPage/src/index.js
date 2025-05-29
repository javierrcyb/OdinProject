import { loadHome } from './loadHome.js';
import { loadMenu } from './loadMenu.js';
import { loadAbout } from './loadAbout.js';

const buttonHome = document.getElementById('home');
const buttonMenu = document.getElementById('menu');
const buttonAbout = document.getElementById('about');

buttonHome.addEventListener('click', loadHome);
buttonMenu.addEventListener('click', loadMenu);
buttonAbout.addEventListener('click', loadAbout);

loadHome();