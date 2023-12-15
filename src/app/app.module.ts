import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PostPreviewComponent } from './posts/post-preview.component';
import { PostGuard } from './services/post-guard';
import { PostEditComponent } from './posts/post-edit.component';
import { FormsModule } from '@angular/forms';
import { PostUploadComponent } from './posts/post-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostPreviewComponent,
    PostEditComponent,
    PostUploadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent},
      { path: "", redirectTo: "home", pathMatch: "full"},
      { path: "posts/upload", component: PostUploadComponent},
      { path: "posts/:id", component: PostPreviewComponent, canActivate: [PostGuard]},
      { path: "posts/:id/edit", component: PostEditComponent, canActivate: [PostGuard]}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
