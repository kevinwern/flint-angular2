import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

export class Artist {
    constructor(public id: number, public name:string) {}
}

@Injectable()
export class ArtistService {
    artists: Artist[];

    constructor(@Inject(Http) private http: Http) {
        this.artists = [
            new Artist(1, 'Kanye'),
            new Artist(2, 'West')
        ];
    }

    getArtists() { return Promise.resolve(this.artists); }

    loadArtists(observer) {
        console.log(this.http.get('http://localhost/api/artists'))
        this.http.get('api/artists').map(responseData => responseData.json()).subscribe(
            data => {
                  this.artists = data.map(item => new Artist(item.id, item.name));
                  observer.onUpdate(this.artists);
            },
            error => console.log('Could not load todos...shit')
        );
    }
}
