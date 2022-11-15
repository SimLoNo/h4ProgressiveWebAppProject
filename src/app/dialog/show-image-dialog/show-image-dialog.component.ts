
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageModel } from 'src/app/_model/image-model';

@Component({
  selector: 'app-show-image-dialog',
  templateUrl: './show-image-dialog.component.html',
  styleUrls: ['./show-image-dialog.component.scss']
})
export class ShowImageDialogComponent{
  imageModel:ImageModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) data:any) {
      console.log("ShownData ", data);
      console.log("Type is: ",typeof data.ImageName)
      console.log("imageName: ",data.ImageName);
      this.imageModel ={
        mainImage:data.mainImage,
        ImageName:data.imageName,
        ImageFileType:data.imageFileType,
        MainImageHeight:data.mainImageHeight,
        MainImageWidth:data.mainImageWidth,
        SmallImage:null}
        console.log("NameValue: ",this.imageModel.ImageName);
     }




}
