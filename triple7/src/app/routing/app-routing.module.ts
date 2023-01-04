import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from '../pages/health/health.component';
import { HomeComponent } from '../pages/home/home.component';
import { MusicComponent } from '../pages/music/music.component';
import { NewsComponent } from '../pages/news/news.component';
import { paths } from './app-paths';

const routes: Routes = [
  {path: '', redirectTo: paths.news, pathMatch: 'full'},
  {
    path: paths.home,
    component: HomeComponent
  },
  {
    path: paths.news,
    loadChildren: () => import('../posts/posts.module').then(mod => mod.PostsModule),
  },
  {
    path: paths.music,
    component: MusicComponent
  },
  {
    path: paths.health,
    component: HealthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
