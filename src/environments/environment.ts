// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAAN4_fzeWnM4PTNA4j-ZoNF_gJBNQk8tc',
    authDomain: 'potch-map-1566554712889.firebaseapp.com',
    databaseURL: 'https://potch-map-1566554712889.firebaseio.com',
    projectId: 'potch-map-1566554712889',
    storageBucket: 'potch-map-1566554712889.appspot.com',
    messagingSenderId: '439304547193',
    appId: '1:439304547193:web:d6d0c67bcd2f4c5fb39da8'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
