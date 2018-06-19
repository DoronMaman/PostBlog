import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { of } from 'rxjs/observable/of';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { HttpClient } from '@angular/common/http';
import { Post } from './post-modal';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DetailsDataService {
  private posts: Post[];
  private postsSubject: Subject<Post[]>;
  
  public posts$: Observable<Post[]>;

  constructor(private http: HttpClient) {
    this.postsSubject = new Subject<Post[]>();
    this.posts$ = this.postsSubject.asObservable();
    this.posts = [];
  }

  getAll(): void {
    this.http.get<Post[]>('../../assets/data.json')
      .catch(err => {
        console.error(err);
        return Observable.throw(err);
      }).subscribe(posts => {
        this.posts = posts;
        this.postsSubject.next(this.posts);
      });
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.postsSubject.next(this.posts);
  }
}