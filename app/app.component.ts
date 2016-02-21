import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ArtistListComponent} from './artists.component'

@Component({
    selector: 'my-app',
    template:`
        <h1>Welcome to Flint</h1>
        <nav>
            <a [routerLink]="['ArtistList']">Artists</a>
        </nav>
        <router-outlet></router-outlet>`
        ,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/artists', name: 'ArtistList', component: ArtistListComponent}
])
export class AppComponent {}
