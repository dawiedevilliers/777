import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  posts: Observable<Post[]> = new Observable();

  constructor(private postService: PostService, public auth: AuthService) {

  }

  ngOnInit(): void {
    debugger;
   this.posts = this.postService.getPosts();

    console.log(this);
  }

  deletePost(id: string | undefined) {
    debugger;
    if(id){
      this.postService.delete(id);
    }
  }

}
