import { Component, OnInit } from '@angular/core';
import {
  faUserTie,
  faUsers,
  faChalkboardTeacher,
  faAddressCard,
  faHistory,
  faFileUpload,
  faImages,
  faSignOutAlt,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavBars } from './nav-bars';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  faUserTie = faUserTie;
  faUsers = faUsers;
  faChalkboardTeacher = faChalkboardTeacher;
  faAddressCard = faAddressCard;
  faHistory = faHistory;
  faFileUpload = faFileUpload;
  faImages = faImages;
  faSignOutAlt = faSignOutAlt;
  faBars = faBars;

  NavBars = NavBars;
  selectedTab = 'personal';
  isActive = true;
  isExpand = false;

  infoSubscription!: Subscription;

  constructor(
    private requestService: RequestService,
    private authService: AuthService,
    private router: Router) {
    this.selectedTab = this.router.url.replace(/\/#?/, '');
    if (!this.selectedTab) {
      this.selectedTab = 'personal';
    }
  }

  ngOnInit(): void {
    this.infoSubscription = this.requestService.getData(`http://localhost:5000/my-info`)
      .subscribe(res => console.log(res))
  }

  ngDoCheck() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnDestroy() {
    this.infoSubscription.unsubscribe();
  }

  openNav() {
    this.isExpand = !this.isExpand
  }

  closeNav() {
    this.isExpand = false;
  }

  handleSelectNav(selectedTab: any) {
    this.selectedTab = selectedTab;
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
