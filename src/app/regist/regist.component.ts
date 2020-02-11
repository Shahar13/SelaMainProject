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

  data: any = {
    userName: '',
    userPassword: '',
    userPicture: '',
    userEmail: 'TEST@gmail.com',
    userBirth: '01/01/2000',
    userWorkAddress: 'TEST',
    userIsAdmin: 0,
  };

  constructor(private http: HttpClient, public upImageSrv: UploadImageService, public registUserSrv: RegistService) { }

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

    /////////////////////////////////////
    /////////////////////////////////////
    // TRY TO USE MULTIPART file upload AND data in a single request
    // const file: any;
    // const formData = new FormData();
    // formData.append('file', file.data);
    // this,uploadService.upload(formData).pipe(..... ETC)


    // this.registUserSrv.registUser(this.data);

    this.tempImgName = this.data.userPicture;
    this.extractImageName = this.tempImgName.replace(/^.*[\\\/]/, '');
    this.onUploadFile();
    
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      // change image preview in the fork
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event:any) => {
        this.urlTemp = event.target.result;
      };

      // upload routine
      this.uploadedFile = <File>event.target.files[0];

    }
  }

  // upload image
  onUploadFile() {
    console.log('this.uploadedFile ==> ');
    console.log(this.uploadedFile);

    const formData: FormData = new FormData();
    formData.append('userPicture', this.uploadedFile);
    // formData.append('extractImageName', this.extractImageName.slice(0,-4));


    this.upImageSrv.uploadImage(formData)
    .subscribe( res => {
      console.log('regist comp onUploadFile server response => ');
      console.log(res);
    });
  }

}
