import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPost } from './post';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit, OnDestroy {
  post: IPost | undefined
  sub!: Subscription;
  itemId!: number;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  onBack(){
    this.router.navigate(['/home']);
  }

  editPost() {
    this.router.navigate(['/posts/' + this.post?.id + "/edit"]);
  }

  deletePost() {
    if(confirm("Are you sure you want to delete the post?")){
      this.sub = this.postService.deletePostWithId(this.itemId).subscribe();
      alert("Post Succesfully Deleted");
      this.onBack();  
    }
    
  }

  ngOnInit(): void {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.postService.getPostWithId(this.itemId).subscribe({
      next: post => {
        this.post = post
      },
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
