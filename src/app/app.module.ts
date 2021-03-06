import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from '@ngx-progressbar/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ExampleModule } from './containers/example/example.module';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { ReviewsModule } from './containers/reviews/reviews.module';
import { FeedModule } from './containers/feed/feed.module';
import { SearchPageModule } from './containers/search/search-page.module';
import { CategoryPageModule } from './containers/category/category-page.module';
import { BookmarksPageModule } from './containers/bookmarks/bookmarks-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    // Module import
    SharedModule,
    ExampleModule,
    ReviewsModule,
    FeedModule,
    SearchPageModule,
    CategoryPageModule,
    BookmarksPageModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
