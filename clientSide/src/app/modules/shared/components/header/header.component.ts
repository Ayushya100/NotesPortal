import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchField: string = '';
  searchValue: string = '';
  selectedPage: string = '';

  constructor(private route: Router,
              private sharedService: SharedServiceService) {
    this.sharedService.getHeading().subscribe((value) => {
      this.selectedPage = value;
    })
  }

  ngOnInit(): void {
  }

  searchFunction(clicked: boolean) {
    this.sharedService.sendSearchData({
      param1: this.searchField,
      param2: this.searchValue,
      param3: clicked
    });
  }

}
