import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { PostService } from "./post.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PostGuard implements CanActivate{

    constructor(private router: Router, private postService: PostService){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean{
            const id = Number(route.paramMap.get('id'));
            const len = this.postService.getNumberOfPosts();
            if (isNaN(id) || id < 1 || id >= len){
                alert("Invalid product id");
                this.router.navigate(['/home']);
                return false;
            }
            return true;
    }
}