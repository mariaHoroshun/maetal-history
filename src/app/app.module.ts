import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GanrePageComponent } from './ganre-page/ganre-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlackComponent } from './black/black.component';
import { ThrashComponent } from './thrash/thrash.component';
import { DeathComponent } from './death/death.component';
import { DoomComponent } from './doom/doom.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { RouterModule } from '@angular/router';
import { AlbumTimelineComponent } from './album-timeline/album-timeline.component';
import { TimelineItemsComponent } from './timeline-items/timeline-items.component';
import { CountryTabComponent } from './country-tab/country-tab.component';
import { SpellingInfoComponent } from './spelling-info/spelling-info.component';
import { DescriptionComponent } from './description/description.component';
import { SoundComponent } from './sound/sound.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { AlbumBlockComponent } from './album-block/album-block.component';
import { GanreAlbumComponent } from './ganre-album/ganre-album.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes = [
  { path: '', component: HomePageComponent },
  { path: 'albums', component: AlbumPageComponent },
  { path: 'black', component: BlackComponent },
  { path: 'doom', component: DoomComponent },
  { path: 'death', component: DeathComponent },
  { path: 'thrash', component: GanrePageComponent } //change to thrash back!!!!
]

@NgModule({
  declarations: [
    AppComponent,
    GanrePageComponent,
    HomePageComponent,
    BlackComponent,
    ThrashComponent,
    DeathComponent,
    DoomComponent,
    AlbumPageComponent,
    AlbumTimelineComponent,
    TimelineItemsComponent,
    CountryTabComponent,
    SpellingInfoComponent,
    DescriptionComponent,
    SoundComponent,
    LyricsComponent,
    AlbumBlockComponent,
    GanreAlbumComponent,
    NavigationComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
