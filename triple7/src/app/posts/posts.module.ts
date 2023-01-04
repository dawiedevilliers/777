import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { Route, RouterModule } from '@angular/router';
import { paths } from '../routing/app-paths';

const routes: Route[] = [
  {path: '', redirectTo: paths.news, pathMatch: 'full'},
  {
    path: paths.news, component: PostListComponent
  },
  {
    path: 'news/:id', component: PostDetailComponent
  },
  {
    path: 'dashboard', component: PostDashboardComponent
  }
]

@NgModule({
  declarations: [
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class PostsModule {}
