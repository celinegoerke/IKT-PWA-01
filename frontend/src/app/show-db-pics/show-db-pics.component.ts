
import { Component, OnInit } from '@angular/core';
import { BackendService, Post } from "../backend.service";
import { DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-read',
  templateUrl: './show-db-pics.component.html',
  styleUrls: ['./show-db-pics.component.css']
})
export class ShowDbPicsComponent implements OnInit {
  allPosts!: Post[];

  constructor(
    private bs: BackendService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.bs.readAll()
      .then( posts => {
        this.allPosts = posts;
        console.log(posts);
      })
      .catch( err => {
        console.log(err);
      })
  }
  imageSrc(base64code: string): SafeResourceUrl {
    const src = 'data:image/png;base64,'+base64code;
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
