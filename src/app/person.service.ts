import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { person } from "./person.model";
@Injectable({providedIn:"root"})
export class personService{
    baseUrl = 'https://portfolio1-27f51-default-rtdb.firebaseio.com/'
    

    constructor (private httpClient: HttpClient) {}
    addInfo(newCardInfo: any[]=[]){
        this.httpClient.post(`${this.baseUrl}info.json`,{contacts:newCardInfo},{
        }).subscribe(
            (response) =>{
                console.log(response)
            }
        )
    }
    getInfo():Observable<person[]>{
        
        return this.httpClient.get(`${this.baseUrl}info.json`).pipe(map((response: any)=>{
            if (response) {
                const todoArray = [];
                for (let key in response) {
                  todoArray.push({ ...response[key], key: key });
                }
                return todoArray;
              } else {
                return [];
              }
        }))
    }
}