
import { Header } from "./header.js";
import { Navigations } from "./navigations.js";
import { HomeSection } from "./homeSection.js";
import { Player } from "./player.js";


const body = document.querySelector('#body');

let headerSet = new Header();
headerSet.renderHeader();

let navSet = new Navigations();
navSet.renderNavigationsDesktop();

let homeSec = new HomeSection();
homeSec.renderHomeSection();
homeSec.renderHeroSection();
homeSec.renderNewReleasesSection();
homeSec.renderTopChartsSection();

let player = new Player();

body.appendChild(headerSet.header);
body.appendChild(navSet.nav);
body.appendChild(homeSec.homeSection);
body.appendChild(player.player);


body.style.background = '#1E1E1E';


    let newReleaseImgs = document.querySelector('.newReleasesSongs');

console.log(newReleaseImgs);

// newReleaseImgs.forEach(element => {
//     console.log('start');
//     console.log(element.style);
// });


