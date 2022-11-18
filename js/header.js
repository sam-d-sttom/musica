import { SvgAssets } from "./svgAssets.js";

export class Header{

    header = document.createElement('header');
    logo = document.createElement('span');
    searchBar = document.createElement('div');
    searchIcon = document.createElement('span');
    searchInput = document.createElement('input');

    constructor(){
        this.header.setAttribute('id', 'header');
        this.logo.setAttribute('id', 'logo');
        this.searchBar.setAttribute('id', 'searchBar');
        this.searchIcon.setAttribute('id', 'searchIcon');
        this.searchInput.setAttribute('id', 'searchInput');
        this.searchInput.setAttribute('placeholder', 'Search artists');
    }

    renderHeader(){
        this.header.appendChild(this.logo);
        this.searchBar.appendChild(this.searchIcon);
        this.searchBar.appendChild(this.searchInput);
        this.header.appendChild(this.searchBar);

        let svgAsset = new SvgAssets();
        this.logo.outerHTML = svgAsset.logoSvg;
        this.searchIcon.outerHTML= svgAsset.searchIconSvg;
    }

}
