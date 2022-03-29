import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm:FormGroup;

  constructor(
    private pv: PostService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.postForm=new FormGroup({
      title:new FormControl('',Validators.required),
      content:new FormControl('',[Validators.required,
        Validators.minLength(6)
      ]),
      status:new FormControl(0),
    })
  }

  ngOnInit(): void {
  }
onSubmit(data:object){
console.log(data)


 this.pv.createPost(data).subscribe(data => {
  this.router.navigate(['/post']);
});
}

}
