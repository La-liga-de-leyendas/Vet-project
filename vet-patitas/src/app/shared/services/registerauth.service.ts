import { Injectable, NgZone } from '@angular/core';
import { Router } from  "@angular/router";
import firebase from 'firebase/app'
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from  './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterauthService {
  user: User;

  userState: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/pages']);
    //      console.log('PRUEBAAAAAAAAAAAAAAAAAAAAAAAAA: ', result);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert('Existe un problema con estas credenciales, verifica que sean correctas y estén validadas.')
      })
  }

  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Te enviamos un correo email para que introduzcas tu nueva contraseña, revisa tu bandeja de entrada');
      this.router.navigate(['login']);
    }).catch((error) => {
      window.alert(error)
    })
  }

  recievedVerificationEmail() {
    return this.afAuth.currentUser.then(u => u)
    .then(() => {
      window.alert('Gracias por verificar tu correo con el enlace en tu bandeja de entrada.')
      this.router.navigate(['login']);
      setTimeout(() =>
{
  window.location.reload();
},
100);
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      servicesReserved: user.servicesReserved
    }
    return userRef.set(userState, {
      merge: true
    })
  }


}