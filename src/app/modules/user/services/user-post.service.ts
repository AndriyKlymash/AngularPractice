import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../post/models/Post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  private url = 'https://jsonplaceholder.typicode.com/posts?userId='

  constructor(private httpClient: HttpClient) {
  }

  getPostsbyUser(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + id);
  }
}
