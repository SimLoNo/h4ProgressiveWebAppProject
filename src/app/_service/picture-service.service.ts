
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageModel } from '../_model/image-model';

@Injectable({
  providedIn: 'root'
})
export class PictureServiceService {
  images:ImageModel[] = [];
  constructor() { }

  getAllPictures():ImageModel[]{
    return this.images;
  }
  savePicture(newImage:ImageModel):void{
    this.images.push(newImage);
  }
}
