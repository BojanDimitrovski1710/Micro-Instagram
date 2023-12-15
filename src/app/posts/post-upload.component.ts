import { Component, OnInit } from '@angular/core';
import { IPost } from './post';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './post-upload.component.html',
  styleUrls: ['./post-upload.component.css']
})
export class PostUploadComponent implements OnInit {
  itemId!: number;
  post: IPost = {
    albumId: 1,
    id: 1,
    title: "",
    url: "",
    thumbnailUrl: ""
  }
 

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  onBack() {
    this.router.navigate(['/home']);
  }

  onSave(){
    this.postService.uploadPost(this.post);
    alert("Post sucessfully uploaded");
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    
  }

}
