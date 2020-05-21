import { Injectable } from '@angular/core';

@Injectable()
export class TokenService{

    token: string;
    role: string;
    getOption() {  
        return this.token;  
      } 

    constructor(){}
}