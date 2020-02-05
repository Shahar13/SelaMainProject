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

  data: any = {
    userName: '',
    userPassword: '',
    userPicture: '',
    userEmail: '',
    userBirth: '',
    userWorkAddress: '',
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
    this.onUploadFile();
    /////////////////////////////////////
    /////////////////////////////////////
    /////////////////////////////////////
    const tempImgName: string = this.data.userPicture;
    const extractImageName: string =  tempImgName.replace(/^.*[\\\/]/, '');

    this.data = {
      userName: this.data.userName,
      userPassword: this.data.userPassword,
      userPicture: extractImageName,
      userEmail: this.data.userEmail,
      userBirth: this.data.userBirth,
      userWorkAddress: this.data.userWorkAddress
    };
    this.registUserSrv.registUser(this.data);
    /////////////////////////////////////
    /////////////////////////////////////
    /////////////////////////////////////

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
    if(this.data.userPicture != null && this.data.userPicture !== '') {
      console.log('uploadedFile ==>');
      console.log(this.uploadedFile);
      console.log('form input type file string value ==>');
      console.log(this.data.userPicture);

      const fb = this.uploadedFile;
      // this.http.post('TO_WHICH_URL_TO_SEND', fb)
      this.upImageSrv.uploadImage(fb)
      .subscribe( res => {
        console.log('regist comp onUploadFile server response => ');
        console.log(res);
      });
    }
  }

}
