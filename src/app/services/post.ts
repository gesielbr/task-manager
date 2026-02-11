import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, CreatePostDto, ApiResponse } from '../shared/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://codeleap-backend-0bqu.onrender.com/careers/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(data: CreatePostDto): Observable<ApiResponse<Post>> {
    return this.http.post<ApiResponse<Post>>(this.apiUrl, data);
  }

  updatePost(id: number, data: CreatePostDto): Observable<ApiResponse<Post>> {
    return this.http.patch<ApiResponse<Post>>(`${this.apiUrl}${id}/`, data);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
