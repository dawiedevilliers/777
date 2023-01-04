import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Post | undefined = new Post();
  editing: boolean = false;

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    public auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    return this.postService.getPostData(id).subscribe( data => this.post = data);
  }

  deletePost() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.postService.delete(id);
    this.router.navigate(["/blog"])
  }

  updatePost() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    let title = this.post?.title || '';
    let content = this.post?.content || '';

    const formData = {
      title: title ,
      content: content
    }
    this.postService.update(id, formData);
    this.editing = false;
  }

}
