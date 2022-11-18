

export class Player{
    player = document.createElement('div');
    songDetails = document.createElement('div');
    controlAndProgress = document.createElement('div');
    volume = document.createElement('div');
    songImg = document.createElement('img');
    songTitleAndArtist = document.createElement('div');
    songTitle = document.createElement('span');
    songArtist = document.createElement('span');
    playerControls = document.createElement('div');
    playerProgressBar = document.createElement('div');

    constructor(){
        this.player.setAttribute('id', 'player');
        this.songDetails.setAttribute('id', 'songDetails');
        this.controlAndProgress.setAttribute('id', 'controlAndProgress');
        this.volume.setAttribute('id', 'volume');
        this.songImg.setAttribute('id', 'songImg');
        this.songTitleAndArtist.setAttribute('id', 'songTitleAndArtist');
        this.songTitle.setAttribute('id', 'songTitle');
        this.songArtist.setAttribute('id', 'songArtist');
        this.playerControls.setAttribute('id', 'playerControls');
        this.playerProgressBar.setAttribute('id', 'playerProgressBar');

        
    }
}