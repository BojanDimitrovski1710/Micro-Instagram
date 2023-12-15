import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { IPost } from './post';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, OnDestroy {
  itemId!: number;
  post!: IPost;
  sub!: Subscription

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  onBack() {
    this.router.navigate(['/posts', this.itemId]);
  }

  onSave(){
    this.sub = this.postService.savePostWithId(this.post, this.itemId).subscribe();
    alert("Post sucessfully updated");
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.postService.getPostWithId(this.itemId).subscribe({
      next: post => {
        this.post = post;
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
