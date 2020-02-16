import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { UploadImageService } from '../service/upload-image.service';
import { RegistService } from '../service/regist.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  urlTemp = null;
  uploadedFile: File = null;

  tempImgName: string;
  extractImageName: string;
  
  // userPicture: this.uploadedFile, 
  // userPicture: null, 

  data: any = {
    userName: 'asdasd',
    userPassword: 'asdasd',
    userEmail: 'TEST@gmail.com',
    userBirth: '2020-02-14',
    userWorkAddress: 'TEST',
    userIsAdmin: 0,
  };

  // public upImageSrv: UploadImageService, 
  constructor(private http: HttpClient, public registUserSrv: RegistService) { }

  checkValid(element: NgModel) {
    if (!element.pristine && element.touched && element.errors && element.errors.required) {
        return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
    
  }

  onSubmit() {
    const formData: FormData = new FormData();
    
    formData.append('userPicture', this.uploadedFile);
    //collection of ALL other fields BUT the uploaded file field.
    formData.append('userData', JSON.stringify(this.data));
    // console.log(this.data)
    // this.registUserSrv.registUser(this.data);
    this.registUserSrv.registUser(formData);

  }

  //stand alone routine - user selects a file, it will be shown in the form
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      // change image preview in the fork
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event:any) => {
        this.urlTemp = event.target.result;
      };

      this.uploadedFile = <File>event.target.files[0];
      this.data.userPicture = this.uploadedFile;
    }
  }

  // // upload image
  // onUploadFile() {
  //   console.log('this.uploadedFile ==> ');
  //   console.log(this.uploadedFile);

  //   const formData: FormData = new FormData();
  //   formData.append('userPicture', this.uploadedFile);
  //   // formData.append('extractImageName', this.extractImageName.slice(0,-4));

  //   this.upImageSrv.uploadImage(formData)
  //   .subscribe( res => {
  //     console.log('regist comp onUploadFile server response => ');
  //     console.log(res.imageUniqueName);
  //   });
  // }

}
