import {Song} from './song.js';

export class Band{
    name: string;
    debutYear: number;
    formationYear: number;
    members: number;
    membersNames: string;
    albums: number;
    description: string;
    imageUrl: string;
    topSongs: Song[];
    constructor(name: string, debutYear: number, formationYear: number, members: number, membersNames: string, albums: number, description: string, imageUrl: string, topSongs: Song[]){
        this.name = name;
        this.debutYear = debutYear;
        this.formationYear = formationYear;
        this.members = members;
        this.membersNames = membersNames;
        this.albums = albums;
        this.description = description;
        this.imageUrl = imageUrl;
        this.topSongs = topSongs;

        
    }
}