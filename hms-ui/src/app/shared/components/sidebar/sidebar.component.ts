import { StorageService } from './../../../common-services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  email!: string;
  constructor(
    private storageService:StorageService
  ) { }

  ngOnInit(): void {
    this.email = this.storageService.get('email');
  }

}
