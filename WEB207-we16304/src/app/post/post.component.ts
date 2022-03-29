import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
aa:any
  constructor(private pv:PostService) { }

  ngOnInit(): void {
    this.hien()
  }
  hien(){
    this.pv.getPost().subscribe(data=>{
      this.aa=data
    })

  }
  dele(id:any){
    this.pv.deletePost(id).subscribe(data=>{
     this.hien()
    })
  }
  


}
