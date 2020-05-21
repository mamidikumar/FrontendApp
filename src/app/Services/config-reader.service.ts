import { Injectable } from '@angular/core';
import * as data from '../../assets/DefaultConfig.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigReaderService {

  
  factorySettings :string;
  defaultSettings:string;
  fileContent:any;

  constructor() { 
    
    console.log(data);
    this.fileContent= (data as any).default;
    
    console.log(this.fileContent);

  
  }
 

 GetHeaders(): any{
  return this.fileContent;

  }

}
