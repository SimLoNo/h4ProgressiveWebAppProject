
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { ImageModel } from 'src/app/_model/image-model';

@Component({
  selector: 'app-upload-image-dialog',
  templateUrl: './upload-image-dialog.component.html',
  styleUrls: ['./upload-image-dialog.component.scss']
})
export class UploadImageDialogComponent{
  imgFile: string = '';
  fileTypes:string[] = ['png','jpg','jpeg'];

  uploadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    imgType: new FormControl('', [Validators.required]),
    imgWidth: new FormControl(400, [Validators.required]),
    imgHeight: new FormControl(400, [Validators.required])
  });

  selectFormControl = new FormControl('', Validators.required);
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<UploadImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.imgFile = data.uploadedImage;
     }


  close(){
    this.dialogRef.close();
   }
   save(){
    let image:ImageModel = {
      mainImage: this.imgFile,
      SmallImage : this.imgFile,
      ImageName: this.uploadForm.get('name').value,
      ImageFileType: this.uploadForm.get('imgType').value,
      MainImageHeight: this.uploadForm.get('imgHeight').value,
      MainImageWidth: this.uploadForm.get('imgWidth').value,
    }
    this.dialogRef.close(image);
   }

}
