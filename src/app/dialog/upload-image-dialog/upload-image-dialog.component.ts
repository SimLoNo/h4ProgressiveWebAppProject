import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-upload-image-dialog',
  templateUrl: './upload-image-dialog.component.html',
  styleUrls: ['./upload-image-dialog.component.scss']
})
export class UploadImageDialogComponent implements OnInit {
  imgFile: string = '';

  uploadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    imgType: new FormControl('', [Validators.required]),
    imgWidth: new FormControl(400, [Validators.required]),
    imgHeight: new FormControl(400, [Validators.required])
  });
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<UploadImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.imgFile = data.uploadedImage;
     }

  ngOnInit(): void {

  }

}
