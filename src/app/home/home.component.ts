import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost } from '../posts/post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  imageWidth: number = 50;
  imageMargin: number = 2;
  pageTitle: string = "Home Feed";
  errorMessage: string = "";
  sub!: Subscription;
  thumbnails: IPost[] = [];

  constructor(private postService: PostService, private router: Router){}

  openDetails(index: number){
    this.router.navigate(['/posts', index])
  }

  ngOnInit(): void {
    this.sub = this.postService.getThumbnails().subscribe({
      next: thumbnails => {
        this.thumbnails = thumbnails
      },
      error: err => this.errorMessage = err
    });  
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
