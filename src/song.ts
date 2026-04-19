export class Song{
    name: string;
    album: string;
    plays: string;
    duration: string;
    year: string;

    constructor(name: string, album: string, plays: string, duration: string, year: string){
        this.name = name;
        this.album = album;
        this.plays = plays;
        this.duration = duration;
        this.year = year;
    }
}