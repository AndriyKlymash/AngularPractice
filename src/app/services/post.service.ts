import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient:HttpClient) {             // TODO   Не выдокремив ентером зверху
  }

  getPosts():Observable<Post[]>{                           // TODO   Невикористаний код
    return this.httpClient.get<Post[]>(this.url);
  }

  getPostsByUserId(id:number):Observable<Post[]>{
    const headers = new HttpHeaders()
    const params = new HttpParams().append('userId', id);
    return this.httpClient.get<Post[]>(this.url,{headers, params});
}
}
