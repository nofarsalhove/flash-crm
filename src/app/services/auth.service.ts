import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
// This service deals with users - log in/log out
export class AuthService {
  user$: Observable<firebase.User> = null;
  user: firebase.User = null;
  isLogged = false;

  constructor(private afa: AngularFireAuth) {
    this.user$ = this.afa.authState.pipe(shareReplay(1));
    this.user$.subscribe(user => {
      this.user = user;
      this.isLogged = Boolean(user);
    });
  }

  createUser(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  loginWithEmail(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    this.afa.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afa.signOut();
  }
}
