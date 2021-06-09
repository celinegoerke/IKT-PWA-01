import {Component, OnInit} from '@angular/core';
import {BackendService} from '../backend.service';
import {FormBuilder} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import { Buffer } from 'buffer';



@Component({
  selector: 'app-show-db-pics',
  templateUrl: './show-db-pics.component.html',
  styleUrls: ['./show-db-pics.component.css']
})
export class ShowDbPicsComponent implements OnInit {


  constructor(private bs: BackendService, private _sanitizer: DomSanitizer) {
  }

  response: any;
  loading: boolean = false;
  values: any;
  titles: any;
  imagePath: any;



  ngOnInit(): void {
  }



  public getPosts() {
    this.bs.getPost().subscribe(
      (response1) => {
        console.log("response received")
        var keys = Object.keys(response1);
        var values = keys.map(function (key){
          return response1[key];
        });
        var pictures;
        for(var i in values){
          pictures = (values[i].image)
        }
        console.log(typeof pictures.data)

        var buffer = Buffer.from(pictures.data)
        var binary = '';
        var bytes = new Uint8Array( buffer);
        var len = bytes.byteLength;
        for (var j = 0; j < len; j++) {
          binary += String.fromCharCode( bytes[ j ] );
        }
        console.log(window.btoa(binary))

        var base64 = btoa(String.fromCharCode(...new Uint8Array(pictures)));

        this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
          + base64);


        },






      (error) => {                              //error() callback
        console.error('Request failed with error')
        this.loading = false;
      },
      () => {                          //This is actually not needed
        this.loading = false;
      })


  }


}
