import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TokenService} from "../../service/token.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PopupComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  hidePassword = true;

  @ViewChild('popup') popup!: PopupComponent;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private toastService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({

      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  togglePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  showSuccess(message: string): void {
    this.popup.showPopup(message, 'success');
  }

  showError(message: string): void {
    this.popup.showPopup(message, 'error');
  }

  submitLogin(): void {
    // Check if the form is invalid
    if (this.loginForm.invalid) {
      this.toastService.info('Fill all fields to log in');
      return; // Exit if the form is invalid
    }

    // Call the login method from AuthService
    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        if (response) {


          // Store token and user details using TokenService
          this.tokenService.saveToken=response.token; // Save token
          this.tokenService.saveUser=response.user;
            // Save user details
          this.tokenService.saveShop=response.shop;    // Save shop details

          // Determine success message based on response
          const successMessage = response.responseDto?.statusMessage || 'Login successful';
          this.showSuccess(successMessage);
          this.toastService.success(successMessage); // Show success message only once

          // Navigate based on user role after 2 seconds
          setTimeout(() => {
            const userRole = response.user.role;
            switch (userRole) {
              case 'ADMIN':
                this.router.navigateByUrl('/dash');
                break;
              case 'ATTENDEE':
                this.router.navigateByUrl('/dash');
                break;

              default:
                this.router.navigateByUrl('/');
            }
          }, 2000);
        }
      },
      (error: any) => {
        console.error('Login Error:', error);
        const errorMessage = error.error?.errorMessage || 'Invalid login details';
        this.showError(errorMessage);
        this.toastService.error(errorMessage); // Show error message only once
      }
    );
  }

}
