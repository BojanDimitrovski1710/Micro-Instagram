import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Observable, Subscription, catchError, filter, tap, throwError } from "rxjs";
import { IPost } from "../posts/post";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class PostService{
    private ApiUrl: string = "http://jsonplaceholder.typicode.com/";
    private posts: IPost[] = [];

    constructor(private http: HttpClient, private router: Router){

    }

    getNumberOfPosts(): number{
        return this.posts.length;
    }
    

    getPostWithId(id: number): Observable<IPost>{
        var endpoint = this.ApiUrl + "photos/" + id;
        return this.http.get<IPost>(endpoint).pipe(
            catchError(this.handleError)
        );
    }

    getThumbnails(): Observable<IPost[]>{
        var endpoint: string = this.ApiUrl + "photos";
        var Obs: Observable<IPost[]> = this.http.get<IPost[]>(endpoint).pipe(
            catchError(this.handleError)
        );
        var sub: Subscription = Obs.subscribe({
            next: thumbnails => {
              this.posts = thumbnails
            }
        });
        return Obs;
    }

    deletePostWithId(id: number){
        var endpoint = this.ApiUrl + "photos/" + id;
        return this.http.delete(endpoint).pipe(
            catchError(this.handleError)
        );
    }

    savePostWithId(post: IPost, id: number){
        var endpoint = this.ApiUrl + "photos/" + id;
        return this.http.put(endpoint, post).pipe(
            catchError(this.handleError)
        );
    }

    uploadPost(post: IPost){
        var endpoint = this.ApiUrl + "photos";
        return this.http.put(endpoint, post).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        }else{
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`; 
        }
        console.error(errorMessage);
        
        return throwError(()=> errorMessage)
    }
}