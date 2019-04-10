import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IHit } from '../../shared/interfaces/hit.interface';
import { IResponse } from '../../shared/interfaces/response.interface';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {

  columnsToDisplay = ['title', 'url', 'created_at', 'author'];
  articlesList: IHit[] = [];

  constructor( private homeService: HomeService ) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    setInterval(() =>
      this.homeService.sendRequest()
      .subscribe((data: IResponse) => this.articlesList = data.hits)
    , 1000);
  }
}

// import { Component, OnInit } from '@angular/core';
// import { HomeService } from './home.service';
// import { IHit } from '../../shared/interfaces/hit.interface';
// import { IResponse } from '../../shared/interfaces/response.interface';
// import { MatTableDataSource } from '@angular/material';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   columnsToDisplay = ['title', 'url', 'created_at', 'author'];
//   articlesList: MatTableDataSource<IHit>;
//   constructor(private homeService: HomeService) { }

//   ngOnInit() {
//     this.homeService.getAllData().subscribe(data => {
//       console.log(1223, data);
//       // this.articlesList = data;
//       this.articlesList = new MatTableDataSource(data);
//       // this.list.sort = this.sort;
//     });
//   }

// }
