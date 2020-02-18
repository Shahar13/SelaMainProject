import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { PostService } from '../service/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  uploadedFile: File = null;

  data: any = {
    postTitle: '',
    postText: '',
  };

  constructor(private http: HttpClient, public postService: PostService) { }

  checkValid(element: NgModel) {
    if (!element.pristine && element.touched && element.errors && element.errors.required) {
        return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.uploadedFile = <File>event.target.files[0];      
    }
  }

  onSubmit() {
    if(!this.uploadedFile){
      alert("Uploading a picture is mandatory. Please upload a picture.");
      return
    }
    const formData: FormData = new FormData();
    formData.append('postPicture', this.uploadedFile);
    //collection of ALL other fields BUT the uploaded file field.
    formData.append('userData', JSON.stringify(this.data));
    this.postService.sendPost(formData);
  }

}
