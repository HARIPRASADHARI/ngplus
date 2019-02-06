import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private cookie: CookieService) { }

  localStorage(){
  	try{
  		localStorage.setItem('key','value');
  	}
  	catch(e){
  		if(e.code ==22){
  			alert('clear your browser memory')
  		}
  		return false;
  	}
  	delete window.localStorage['key'];
  	return true;

  }
  setData(key:string,value){
  	this.localStorage() ? window.localStorage[key]= value:this.cookie.set(key,value); 	
  }
  getData(key:string){
  	if(this.localStorage()){
  		return window.localStorage[key];
  	}
  	else{
  		return this.cookie.get(key) || null;
  	}
  }
  removeData(key:string){
  	this.localStorage() ? delete window.localStorage[key] : this.cookie.delete(key);
  }
  removeAllData(){
  	this.localStorage() ? window.localStorage.clear() : this.cookie.deleteAll();
  }
}
