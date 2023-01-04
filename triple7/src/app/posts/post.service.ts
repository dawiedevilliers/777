import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction,
} from '@angular/fire/compat/firestore';
import { map, Observable, Subscription } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: AngularFirestoreCollection<Post> | undefined = undefined ;
  postDoc: AngularFirestoreDocument<Post> | null = null;

  constructor(private afs: AngularFirestore) {
    this.posts = this.afs.collection('articles', (ref) =>
      ref.orderBy('published', 'desc')
    );
  }

  getPosts(): any {
    return this.posts!.snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          a => {
            let tempdata = a.payload.doc.data() as any;
            tempdata.published = tempdata.published.toDate();

            let data = tempdata as Post;
            data.id =  a.payload.doc.id;
            return { ...data}
          }
        )
      })
    );
  }

  getPostData(id: string) {
     this.postDoc = this.afs.doc<Post>(`articles/${id}`);
     return this.postDoc.valueChanges();
  }

  getPost(id: string) {
    return this.afs.doc<Post>(`articles/${id}`);
  }

  create(data: Post) {
    this.posts?.add(data);
  }

  delete(id: string){
    this.afs.collection('articles').doc(id).delete();
    // let post = this.getPost(id);
    // return post.delete();

    // return this.getPost(id).delete();
  }

  update(id: string, formData: Post){
    return this.getPost(id).update(formData);
  }
}
