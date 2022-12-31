import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData = this.formBuilder.group({
    username: '',
    password: ''
  });
  errorMessage: any;
  loginSubscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  onSubmit() {
    const username: any = this.formData.controls.username.value;
    const password: any = this.formData.controls.password.value;
    this.loginSubscription = this.authService.login(username, password)
      .subscribe({
        next: (res) => {
          document.cookie = `access_token=${res.access_token};max-age=3600`;
          document.cookie = `refresh_token=${res.refresh_token}`;
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
  }

  // After the first ngOnChanges
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  // Developer's custom change detection
  ngDoCheck(): void {
    // console.log(this.errorMessage)
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/')
    }
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }
}
