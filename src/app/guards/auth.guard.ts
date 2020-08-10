import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.afa.authState.pipe(
      map(user => {
        // If the user moves to the home page via URL
        if (state.url === '/') {
          /* If the user moves to the home page via URL and he is connected to the system,
              we redirect him to the customers page */
          if (user) {
            return this.router.parseUrl('/customers');
          } else {
            // If the user is not connected, we redirect him to the log in page
            return true;
          }
        }

        /* If the user is connected and try to access to other pages via the sidenav,
            we get hit access to all pages - couse he connected*/
        if (user) {
          return true;
        }

        /* If the user is not connected and try to access to other pages via the sidenav,
            we redirect him to the home page*/
        return this.router.parseUrl('/');
      }),
      take(1)
    );
  }

  constructor(private router: Router, private afa: AngularFireAuth) {}
}
