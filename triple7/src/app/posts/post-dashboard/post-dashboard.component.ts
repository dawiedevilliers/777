import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Post } from '../post';
import { PostService } from '../post.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage';

@Component({
  selector: 'post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss'],
})
export class PostDashboardComponent implements OnInit, OnDestroy {
  title = '';
  image = '';
  content = '';
  buttonText = 'Create Post';
  uploadSubscription: Subscription | null = null;
  uploadPercent: Observable<number | undefined> = new Observable();
  // downloadUrl : Observable<UploadTaskSnapshot | undefined> = new Observable();
  downloadUrl= '';

  constructor(
    private auth: AuthService,
    private postservice: PostService,
    private storage: AngularFireStorage
  ) {}
  ngOnDestroy(): void {
    this.uploadSubscription?.unsubscribe();
  }

  ngOnInit(): void {}

  createPost() {
    const authState = this.auth.authState;

    const data: Post = {
      author: authState.displayName || authState.email,
      authorId: this.auth.currentUserId,
      title: this.title,
      imageurl: this.downloadUrl,
      content: this.content,
      published: new Date(),
    };

    this.postservice.create(data as Post);
    this.resetForm();
    this.buttonText = 'Post created';
    setTimeout(() => {
      this.buttonText = 'Create Post';
    }, 3000);
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`
    if(file.type.split('/')[0] === 'image') {
      const task = this.storage.upload(path, file);

      this.uploadPercent = task.percentageChanges();

      let completed = this.uploadPercent.subscribe( (value) => {
        console.log("Value: ");
        console.log(value);
      })

      this.uploadSubscription = task.snapshotChanges().subscribe(
        result => {
          if(result){
            result?.ref.getDownloadURL().then(value => {
              this.downloadUrl = value;
              console.log(this.downloadUrl);
             });
          }

       });
    } else {
      return alert('Not an image');
    }
  }

  resetForm() {
    this.title = '';
    this.content = '';
    this.image = '';
    this.downloadUrl = '';
  }
}
