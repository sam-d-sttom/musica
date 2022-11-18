import { SvgAssets } from "./svgAssets.js";

let svgAsset = new SvgAssets();

export class HomeSection{
    homeSection = document.createElement('section');
    homeSectionTopDiv = document.createElement('div');
    homeSectionBottomDiv = document.createElement('div');

    //for hero section.
    heroSection = document.createElement('section');
    heroSectionH3 = document.createElement('h3');
    heroSectionDiv = document.createElement('div');
    heroSectionH2 = document.createElement('h2');
    heroSectionP = document.createElement('p');
    heroSectionLikesDiv = document.createElement('div');
    heroSectionImg = document.createElement('img');
    heroSectionSvg = document.createElement('span');

    //for new releases section.
    newReleaseSection = document.createElement('section');
    newReleaseH2 = document.createElement('h2');
    newReleaseContent = document.createElement('div');
    newReleaseContentInnerDiv = document.createElement('div');
    

    //for top charts section.
    topChartSection = document.createElement('section');
    topChartSectionH2 = document.createElement('h2');
    topChartList = document.createElement('div');
    chartLikeBtn = document.createElement('div');
    

    
    //setting attributes of elements and also building the home section on initialization of class.
    constructor(){
        this.homeSection.setAttribute('id', 'homeSection');
        this.homeSectionTopDiv.setAttribute('id', 'homeSectionTopDiv');
        this.homeSectionBottomDiv.setAttribute('id', 'homeSectionBottomDiv');

        //for hero section.
        this.heroSection.setAttribute('id', 'heroSection');
        this.heroSectionH3.setAttribute('id', 'heroSectionH3');
        this.heroSectionDiv.setAttribute('id', 'heroSectionDiv');
        this.heroSectionH2.setAttribute('id', 'heroSectionH2');
        this.heroSectionP.setAttribute('id', 'heroSectionP');
        this.heroSectionLikesDiv.setAttribute('id', 'heroSectionLikesDiv');
        this.heroSectionImg.setAttribute('id', 'heroSectionImg');
        this.heroSectionSvg.setAttribute('id', 'heroSectionSvg');
        this.heroSectionImg.setAttribute('src', 'img/Eric-Esma.png');

        //for top chart section.
        this.topChartSection.setAttribute('id', 'topChartSection');
        this.topChartSectionH2.setAttribute('id', 'topChartSectionH2');
        this.topChartList.setAttribute('id', 'topChartList');
        this.chartLikeBtn.setAttribute('class', 'chartLikeBtn');

        //for new releases section.
        this.newReleaseSection.setAttribute('id', 'newReleaseSection');
        this.newReleaseH2.setAttribute('id', 'newReleaseH2');
        this.newReleaseContent.setAttribute('id', 'newReleaseContent');
        this.newReleaseContentInnerDiv.setAttribute('id', 'newReleaseContentInnerDiv');
        
        
        
    }

    //renders the home body section.
    renderHomeSection(){
        this.homeSection.appendChild(this.homeSectionTopDiv);
        this.homeSection.appendChild(this.homeSectionBottomDiv);
        this.homeSectionTopDiv.appendChild(this.heroSection);
        this.homeSectionTopDiv.appendChild(this.topChartSection);
    }

    //renders the hero section.
    renderHeroSection(){
        this.heroSection.appendChild(this.heroSectionH3);
        this.heroSection.appendChild(this.heroSectionDiv);
        this.heroSectionDiv.appendChild(this.heroSectionH2);
        this.heroSectionDiv.appendChild(this.heroSectionP);
        this.heroSection.appendChild(this.heroSectionLikesDiv);
        this.heroSection.appendChild(this.heroSectionImg);
        this.heroSection.appendChild(this.heroSectionSvg);

        //hero section texts and contents.
        this.heroSectionH3.innerText = 'Currated playlist';
        this.heroSectionH2.innerText = 'R & B Hits';
        this.heroSectionP.innerText = 'All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more';

        
        this.heroSectionSvg.innerHTML = svgAsset.heroSectionSvg
    }

    //renders the top chart section.
    async renderTopChartsSection(){
        this.topChartSection.appendChild(this.topChartSectionH2);
        this.topChartSection.appendChild(this.topChartList);

        //top chart texts and contents.
        this.topChartSectionH2.innerText = 'Top charts';

        //to render what's on the charts list.
        let response = await fetch('js/chartLists.json');
        let result = await response.json();

        for(let i = 0; i < 3; i++){
            this.topChartList.innerHTML += `<div class = "chartListDiv"><img src="${result.chartList[i].PlaylistCover}" alt=""><div class="chartAndLike"><div class="chartContent"><span class="chartTitle">${result.chartList[i].chartTitle}</span><span class="playlistProducer">${result.chartList[i].playlistProducer}</span><span class="playTime">${result.chartList[i].playTime}</span></div><div class="chartLikeBtn"><span class="eclipseChart">${svgAsset.eclipseChart}</span><span class="heartChart">${svgAsset.heartChart}</span></div></div></div>`;
        }
    }

    //renders the new release section.
   async renderNewReleasesSection(){
        this.homeSectionBottomDiv.appendChild(this.newReleaseSection);
        this.newReleaseSection.appendChild(this.newReleaseH2);
        this.newReleaseSection.appendChild(this.newReleaseContent);
        this.newReleaseContent.appendChild(this.newReleaseContentInnerDiv);

        //new release section texts and contents.
        this.newReleaseH2.innerText = 'New releases.';

        let response = await fetch('js/songs.json');
        let result = await response.json();
        // console.log(result.songs[0]);

        //for new releases scroll section.
        for(let i = 0; i < 7; i++){
            let title = result.songs[i].title;
            let artist = result.songs[i].artist;
            let songCover = result.songs[i].songCover;

            // this.newReleaseContentInnerDiv.innerHTML +=`<div class="newReleasesSongs"><div class="newReleaseImg" style="background:url('${songCover}');"></div><span class="newReleasesSongsTitle">${title}</span><span class="newReleasesSongsArtist">${artist}</span></div>`;

           let newReleasesSongs = document.createElement('div');
           let newReleaseImg = document.createElement('div');
           let newReleasesSongsTitle = document.createElement('span');
           let newReleasesSongsArtist = document.createElement('span');

            newReleasesSongs.setAttribute('class', 'newReleasesSongs');
            newReleaseImg.setAttribute('class', 'newReleaseImg');
            newReleasesSongsTitle.setAttribute('class', 'newReleasesSongsTitle');
            newReleasesSongsArtist.setAttribute('class', 'newReleasesSongsArtist');

            newReleasesSongs.appendChild(newReleaseImg);
            newReleasesSongs.appendChild(newReleasesSongsTitle);
            newReleasesSongs.appendChild(newReleasesSongsArtist);

            newReleaseImg.style.background = `url('${songCover}')`;
            newReleasesSongsTitle.innerText = `${title}`;
            newReleasesSongsArtist.innerText = `${artist}`;

            this.newReleaseContentInnerDiv.appendChild(newReleasesSongs);
            
        }
    }

    
}