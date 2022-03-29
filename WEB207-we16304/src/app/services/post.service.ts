import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const api = 'http://localhost:3000/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {

   }
   getPost(){
     return this.http.get(api)
   }
   layId(id:undefined|string){
    return this.http.get(`${api}/${id}`)
   }
   deletePost(id:undefined|string){
     return this.http.delete(`${api}/${id}`)
   }
   createPost(obj:any){
     return this.http.post(`${api}`,obj)
   }
   updatePost(id:undefined|string,obj:any){
     return this.http.put(`${api}/${id}`,obj)
   }
}
