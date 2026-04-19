import { Band } from "./band.js";
import { Song } from "./song.js";

async function cargarBanda(url: string){
    try{
        const respuesta = await fetch(url);

        const banda = await respuesta.json();

        const canciones = banda.topSongs.map((s: { name: string; album: string; plays: string; duration: string; year: string; }) => new Song(s.name, s.album, s.plays, s.duration, s.year) )

        return new Band(banda.name, banda.debutYear, banda.formationYear, banda.members, banda.membersNames, banda.albums,
            banda.description, banda.imageUrl, canciones
        )
    } catch(error){
        console.error("Error al cargar la banda:", error);
    }
    
}

function renderBanda(banda: Band){
    document.getElementById('name')!.textContent = banda.name;
    document.getElementById('debutYear')!.textContent = banda.debutYear.toString();
    document.getElementById('members')!.textContent = banda.members.toString();
    document.getElementById('membersNames')!.textContent = `(${banda.membersNames})`;
    document.getElementById('albums')!.textContent = banda.albums.toString();
    document.getElementById('description')!.textContent = banda.description;
    (document.getElementById('imageUrl') as HTMLImageElement).src = banda.imageUrl;

    const topSongsList = document.getElementById('topSongs')!;
    banda.topSongs.forEach((song) => {
        topSongsList.appendChild(crearEntradaCancion(song));
    });
}

function crearEntradaCancion(song: Song): HTMLElement {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.classList.add("text-start", "ps-4", "fw-medium");
    nameTd.style.background = 'transparent';
    nameTd.textContent = song.name;
    tr.appendChild(nameTd);
    const albumTd = document.createElement('td');
    albumTd.classList.add("text-muted");
    albumTd.style.background = 'transparent';
    albumTd.textContent = song.album;
    tr.appendChild(albumTd);
    const playsTd = document.createElement('td');
    playsTd.style.background = 'transparent';
    playsTd.textContent = song.plays;
    tr.appendChild(playsTd);
    const yearTd = document.createElement('td');
    yearTd.style.background = 'transparent';
    yearTd.textContent = song.year;
    tr.appendChild(yearTd);
    const durationTd = document.createElement('td');
    durationTd.style.background = 'transparent';
    durationTd.textContent = song.duration;
    tr.appendChild(durationTd);
    
    return tr;
}

async function main(){
    const banda = await cargarBanda('./data/info.json');

    if(banda){
        renderBanda(banda);
    } else {
        console.error("No se pudo cargar la banda.");
    } 
}

await main();