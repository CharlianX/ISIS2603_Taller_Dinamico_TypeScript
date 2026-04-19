import { Song } from './song.js';
export class Band {
    name;
    debutYear;
    formationYear;
    members;
    membersNames;
    albums;
    description;
    imageUrl;
    topSongs;
    constructor(name, debutYear, formationYear, members, membersNames, albums, description, imageUrl, topSongs) {
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
//# sourceMappingURL=band.js.map