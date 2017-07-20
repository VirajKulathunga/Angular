import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'my.components.html',
  providers: [PostsService]
})
export class MyComponent {
  name = 'REST call From https://jsonplaceholder.typicode.com/photos';
  posts: Post[];

  constructor(private postsService: PostsService) {

    this.postsService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  getme() {

  }
}
interface Post {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
