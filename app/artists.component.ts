import {Component, OnInit} from 'angular2/core';
import {Artist, ArtistService} from './artist.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
    template:`
        <h2>Artists</h2>
        <ul>
            <li *ngFor="#artist of artists">
                Artist: {{artist.name}}
            </li>
        </ul>
    `,
    providers: [ArtistService]
})
export class ArtistListComponent{
    artists: Artist[];

    constructor(private _service: ArtistService) {}

    ngOnInit() {
        this._service.loadArtists(this);
        this._service.getArtists().then(artists => this.artists = artists);
    }

    onUpdate(artists)
    {
        this.artists = artists;
    }
}
