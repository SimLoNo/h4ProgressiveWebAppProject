import { UploadImageDialogComponent } from './../dialog/upload-image-dialog/upload-image-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  imgFile: string = '';

  uploadForm = new FormGroup({
   name: new FormControl('', [Validators.required]),
   file: new FormControl('', [Validators.required]),
   imgSrc: new FormControl('', [Validators.required])
 });
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      uploadedImage: this.imgFile
    };

    this.dialog.open(UploadImageDialogComponent, dialogConfig);
}

  get uf(){
    return this.uploadForm.controls;
  }

  onImageChange(e:any) {
    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          //imgSrc: reader.result
        });
        this.openDialog();

      };
    }
  }

}