import { SvgAssets } from "./svgAssets.js";

export class Navigations{
    //creating the needed html elements to be used to build the navigations.
    nav = document.createElement('nav');
    navSecOne = document.createElement('ul');
    navSecTwo = document.createElement('ul');
    homeIcon = document.createElement('li');
    musicLibrary = document.createElement('li');
    radioIcon = document.createElement('li');
    videoIcon = document.createElement('li');
    profileIcon = document.createElement('li');
    logoutIcon = document.createElement('li');

    constructor(){
        //Setting the neccessary attributes for each elements on initialization of the class.
        this.nav.setAttribute('id', 'nav');
        this.navSecOne.setAttribute('id', 'navSecOne');
        this.navSecTwo.setAttribute('id', 'navSecTwo');
        this.homeIcon.setAttribute('id', 'homeIcon');
        this.musicLibrary.setAttribute('id', 'musicLibrary');
        this.radioIcon.setAttribute('id', 'radioIcon');
        this.videoIcon.setAttribute('id', 'videoIcon');
        this.profileIcon.setAttribute('id', 'profileIcon');
        this.logoutIcon.setAttribute('id', 'logoutIcon');

        
        
    }

    //Method for structuring and building the navigation for desktop mode.
    renderNavigationsDesktop(){
        this.nav.appendChild(this.navSecOne);
        this.nav.appendChild(this.navSecTwo);

        this.navSecOne.appendChild(this.homeIcon);
        this.navSecOne.appendChild(this.musicLibrary);
        this.navSecOne.appendChild(this.radioIcon);
        this.navSecOne.appendChild(this.videoIcon);

        this.navSecTwo.appendChild(this.profileIcon);
        this.navSecTwo.appendChild(this.logoutIcon);

        this.loadSvg();
        
    }

    //Loading (from the SvgAssets class) and setting svg vectors for each navigation icons.
    loadSvg(){
        let svgAsset = new SvgAssets();

        this.homeIcon.innerHTML = svgAsset.homeIconSvg;
        this.musicLibrary.innerHTML = svgAsset.musicLibrarySvg
        this.radioIcon.innerHTML = svgAsset.radioIconSvg
        this.videoIcon.innerHTML = svgAsset.videoIconSvg
        this.profileIcon.innerHTML = svgAsset.profileIconSvg
        this.logoutIcon.innerHTML = svgAsset.logoutIconSvg
    }

}
