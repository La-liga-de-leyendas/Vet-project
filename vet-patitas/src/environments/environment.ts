// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapboxKey:'pk.eyJ1Ijoic2NydW1tYXM3M3IiLCJhIjoiY2tvZGNwMDRzMDB4YjJwcG55ZnM3Y2JzdCJ9.veBp1dNJL1FrZdlAUd-sDQ',
  firebase: {
    apiKey: "AIzaSyAUFrEAkZgcxUpviLlbPKx68zaTy6iOa2w",
    authDomain: "vet-website-caa3e.firebaseapp.com",
    databaseURL: "https://vet-website-caa3e-default-rtdb.firebaseio.com",
    projectId: "vet-website-caa3e",
  },
  app: {
    apiBaseUrl: 'https://vet-website-caa3e-default-rtdb.firebaseio.com'
  },
  auth: {
    apiBaseUrl: 'https://identitytoolkit.googleapis.com',
    key: 'AIzaSyAUFrEAkZgcxUpviLlbPKx68zaTy6iOa2w'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
