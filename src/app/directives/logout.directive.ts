import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appLogout]'
})
export class LogoutDirective {
  @HostListener('click', ['$event']) async clickEvent(e: MouseEvent) {
    e.preventDefault();
    // First we will disconnect the user from the system and then we navigate hom to the home page that is the log in page
    await this.authService.logout();
    this.router.navigate(['/']);
  }

  constructor(private authService: AuthService, private router: Router) {}
}
