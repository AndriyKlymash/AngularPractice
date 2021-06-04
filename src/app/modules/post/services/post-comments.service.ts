import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class PostCommentsService {

  private url = 'https://jsonplaceholder.typicode.com/comments?postId='

  constructor(private httpClient: HttpClient) {
  }

  getCommentsByPost(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url + id);
  }
}
