(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about/about.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>About</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"presentPopover($event)\">\r\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"about-header\">\r\n    <img src=\"assets/img/ionic-logo-white.svg\" alt=\"ionic logo\">\r\n  </div>\r\n  <div class=\"about-info\">\r\n    <h4 class=\"ion-padding-start\">Ionic Conference</h4>\r\n\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\r\n        <ion-label position=\"stacked\">Date</ion-label>\r\n        <ion-datetime displayFormat=\"MMM DD, YYYY\" max=\"2056\" [(ngModel)]=\"conferenceDate\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\r\n        <ion-label position=\"stacked\">Location</ion-label>\r\n        <ion-select>\r\n          <ion-select-option value=\"madison\" selected>Madison, WI</ion-select-option>\r\n          <ion-select-option value=\"austin\">Austin, TX</ion-select-option>\r\n          <ion-select-option value=\"chicago\">Chicago, IL</ion-select-option>\r\n          <ion-select-option value=\"seattle\">Seattle, WA</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <p class=\"ion-padding-start ion-padding-end\">\r\n      The Ionic Conference is a one-day conference featuring talks from the Ionic team. It is focused on Ionic applications being\r\n      built with Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2, Angular concepts, Webpack, Sass, and many\r\n      other technologies used in Ionic 2. Tickets are completely sold out, and we’re expecting more than 1000 developers\r\n      – making this the largest Ionic conference ever!\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/map/map.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/map/map.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Map</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div #mapCanvas class=\"map-canvas\"></div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/schedule-filter/schedule-filter.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/schedule-filter/schedule-filter.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\r\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      Filter Sessions\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\r\n    <ion-list-header>Tracks</ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let track of tracks\" [attr.track]=\"track.name | lowercase\">\r\n      <ion-icon *ngIf=\"ios\" slot=\"start\" [name]=\"track.icon\" color=\"medium\"></ion-icon>\r\n      <ion-label>{{track.name}}</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"track.isChecked\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer translucent *ngIf=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"selectAll(false)\">Deselect All</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"selectAll(true)\">Select All</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/schedule/schedule.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/schedule/schedule.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\r\n      <ion-segment-button value=\"all\">\r\n        All\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"favorites\">\r\n        Favorites\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"presentFilter()\">\r\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" placeholder=\"Search\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\r\n    <ion-item-group *ngFor=\"let group of groups\" [hidden]=\"group.hide\">\r\n      <ion-item-divider sticky>\r\n        <ion-label>\r\n          {{group.time}}\r\n        </ion-label>\r\n      </ion-item-divider>\r\n\r\n      <ion-item-sliding *ngFor=\"let session of group.sessions\" #slidingItem [attr.track]=\"session.tracks[0] | lowercase\" [hidden]=\"session.hide\">\r\n        <ion-item routerLink=\"/app/tabs/schedule/session/{{session.id}}\">\r\n          <ion-label>\r\n            <h3>{{session.name}}</h3>\r\n            <p>\r\n              {{session.timeStart}} &mdash; {{session.timeEnd}}: {{session.location}}\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options>\r\n          <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\" *ngIf=\"segment === 'all'\">\r\n            Favorite\r\n          </ion-item-option>\r\n          <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\" *ngIf=\"segment === 'favorites'\">\r\n            Remove\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-item-group>\r\n  </ion-list>\r\n\r\n  <ion-list-header [hidden]=\"shownSessions > 0\">\r\n    No Sessions Found\r\n  </ion-list-header>\r\n\r\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\r\n    <ion-fab-button><ion-icon name=\"share\"></ion-icon></ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"vimeo\" (click)=\"openSocial('Vimeo', fab)\">\r\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"google\" (click)=\"openSocial('Google+', fab)\">\r\n        <ion-icon name=\"logo-googleplus\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"twitter\" (click)=\"openSocial('Twitter', fab)\">\r\n        <ion-icon name=\"logo-twitter\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"facebook\" (click)=\"openSocial('Facebook', fab)\">\r\n        <ion-icon name=\"logo-facebook\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/session-detail/session-detail.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/session-detail/session-detail.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{session?.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"session\" class=\"ion-padding\">\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span>\r\n        </ion-col>\r\n        <ion-col size=\"6\" [ngClass]=\"{'show-favorite': isFavorite}\" class=\"ion-text-right\">\r\n          <ion-icon name=\"heart-empty\" size=\"large\" class=\"icon-heart-empty\" (click)=\"toggleFavorite()\"></ion-icon>\r\n          <ion-icon name=\"heart\" color=\"danger\" size=\"large\" class=\"icon-heart\" (click)=\"toggleFavorite()\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <h1>{{session.name}}</h1>\r\n    <p>{{session.description}}</p>\r\n    <ion-text color=\"medium\">\r\n      {{session.timeStart}} &ndash; {{session.timeEnd}}\r\n      <br /> {{session.location}}\r\n    </ion-text>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item (click)=\"sessionClick('watch')\" button>\r\n      <ion-label color=\"primary\">Watch</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('add to calendar')\" button>\r\n      <ion-label color=\"primary\">Add to Calendar</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('mark as unwatched')\" button>\r\n      <ion-label color=\"primary\">Mark as Unwatched</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('download video')\" button>\r\n      <ion-label color=\"primary\">Download Video</ion-label>\r\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"cloud-download\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('leave feedback')\" button>\r\n      <ion-label color=\"primary\">Leave Feedback</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tabs-page/tabs-page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tabs-page/tabs-page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n    <ion-tab-button tab=\"camera\">\r\n      <ion-icon name=\"camera\"></ion-icon>\r\n      <ion-label>Camera</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"schedule\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"venues\">\r\n      <ion-icon name=\"beer\"></ion-icon>\r\n      <ion-label>Venues</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"map\">\r\n      <ion-icon name=\"map\"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\">\r\n      <ion-icon name=\"information-circle\"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/venue-detail/venue-detail.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/venue-detail/venue-detail.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/venues\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{venue?.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"venue-detail\">\r\n  <div *ngIf=\"venue\" class=\"venue-detail\">\r\n    <img [src]=\"venue.profilePic\" [alt]=\"venue.name\">\r\n    <ion-button fill=\"clear\" size=\"large\" color=\"facebook\">\r\n      <ion-icon name=\"logo-facebook\" slot=\"icon-only\"></ion-icon>\r\n    </ion-button>\r\n    <!-- <ion-button fill=\"clear\" size=\"medium\" color=\"instagram\">\r\n      <ion-icon name=\"logo-instagram\" slot=\"icon-only\"></ion-icon>\r\n    </ion-button> -->\r\n  </div>\r\n\r\n  <p>{{venue?.about}}</p>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/venue-list/venue-list.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/venue-list/venue-list.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Venues</ion-title>\r\n  </ion-toolbar>\r\n  <link\r\n    href=\"https://fonts.googleapis.com/css?family=Merriweather|Montserrat&display=swap\"\r\n    rel=\"stylesheet\"\r\n  />\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-md=\"4\" *ngFor=\"let venue of venues\">\r\n        <ion-card routerLink=\"/app/tabs/venues/venue-details/{{ venue.id }}\">\r\n          <img [src]=\"venue.profilePic\" alt=\"venue profile pic\" />\r\n          <ion-card-header>\r\n            <ion-card-title>{{ venue.name }}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,\r\n            Madison was named the capital of the Wisconsin Territory in 1836.\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/about-popover/about-popover.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PopoverPage = /** @class */ (function () {
    function PopoverPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    PopoverPage.prototype.support = function () {
        // this.app.getRootNavs()[0].push('/support');
        this.popoverCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.popoverCtrl.dismiss();
    };
    PopoverPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <ion-list>\n      <ion-item button (click)=\"close('https://ionicframework.com/getting-started')\">\n        <ion-label>Learn Ionic</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://ionicframework.com/docs/')\">\n        <ion-label>Documentation</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://showcase.ionicframework.com')\">\n        <ion-label>Showcase</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://github.com/ionic-team/ionic')\">\n        <ion-label>GitHub Repo</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"support()\">\n        <ion-label>Support</ion-label>\n      </ion-item>\n    </ion-list>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], PopoverPage);
    return PopoverPage;
}());



/***/ }),

/***/ "./src/app/pages/about/about-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");




var routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
var AboutPageRoutingModule = /** @class */ (function () {
    function AboutPageRoutingModule() {
    }
    AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutPageRoutingModule);
    return AboutPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts");








var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]
            ],
            declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
            entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
            bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]],
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.scss":
/*!****************************************!*\
  !*** ./src/app/pages/about/about.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-header {\n  background-color: var(--ion-color-dark);\n  padding: 16px;\n  width: 100%;\n  height: 30%;\n  text-align: center;\n}\n\n.about-header img {\n  max-height: 100%;\n}\n\n.about-info p {\n  color: var(--ion-color-dark);\n  text-align: left;\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n.ios .about-info {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXFVzZXJzXFxtZXllclxcRG9jdW1lbnRzXFxHaXRIdWJcXFRpcHN5LWRlbW8vc3JjXFxhcHBcXHBhZ2VzXFxhYm91dFxcYWJvdXQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFib3V0LWhlYWRlciBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIHAge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmFib3V0LWluZm8gaW9uLWljb24ge1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xyXG59XHJcblxyXG4uaW9zIC5hYm91dC1pbmZvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmFib3V0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hYm91dC1oZWFkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmFib3V0LWluZm8gcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi5pb3MgLmFib3V0LWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/about/about.ts":
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");




var AboutPage = /** @class */ (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
                            event: event
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-about',
            template: __webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.html"),
            styles: [__webpack_require__(/*! ./about.scss */ "./src/app/pages/about/about.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/pages/map/map-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");




var routes = [
    {
        path: '',
        component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
var MapPageRoutingModule = /** @class */ (function () {
    function MapPageRoutingModule() {
    }
    MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MapPageRoutingModule);
    return MapPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/pages/map/map-routing.module.ts");






var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]
            ],
            declarations: [
                _map__WEBPACK_IMPORTED_MODULE_4__["MapPage"],
            ]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "./src/app/pages/map/map.scss":
/*!************************************!*\
  !*** ./src/app/pages/map/map.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL0M6XFxVc2Vyc1xcbWV5ZXJcXERvY3VtZW50c1xcR2l0SHViXFxUaXBzeS1kZW1vL3NyY1xcYXBwXFxwYWdlc1xcbWFwXFxtYXAuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLDZCQUFBO0VBRUEsVUFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4uc2hvdy1tYXAge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIiwiLm1hcC1jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/map/map.ts":
/*!**********************************!*\
  !*** ./src/app/pages/map/map.ts ***!
  \**********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var MapPage = /** @class */ (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ngAfterViewInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var googleMaps;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getGoogleMaps('AIzaSyDhw6nZUOc_n-CPB9kUcK8IJnPhKfh8Sew')];
                    case 1:
                        googleMaps = _a.sent();
                        this.confData.getMap().subscribe(function (mapData) {
                            var mapEle = _this.mapElement.nativeElement;
                            var map = new googleMaps.Map(mapEle, {
                                center: mapData.find(function (d) { return d.center; }),
                                zoom: 16
                            });
                            mapData.forEach(function (markerData) {
                                var infoWindow = new googleMaps.InfoWindow({
                                    content: "<h5>" + markerData.name + "</h5>"
                                });
                                var marker = new googleMaps.Marker({
                                    position: markerData,
                                    map: map,
                                    title: markerData.name
                                });
                                marker.addListener('click', function () {
                                    infoWindow.open(map, marker);
                                });
                            });
                            googleMaps.event.addListenerOnce(map, 'idle', function () {
                                mapEle.classList.add('show-map');
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.ctorParameters = function () { return [
        { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-map',
            template: __webpack_require__(/*! raw-loader!./map.html */ "./node_modules/raw-loader/index.js!./src/app/pages/map/map.html"),
            styles: [__webpack_require__(/*! ./map.scss */ "./src/app/pages/map/map.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], MapPage);
    return MapPage;
}());

function getGoogleMaps(apiKey) {
    var win = window;
    var googleModule = win.google;
    if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
    }
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&v=3.31";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = function () {
            var googleModule2 = win.google;
            if (googleModule2 && googleModule2.maps) {
                resolve(googleModule2.maps);
            }
            else {
                reject('google maps not available');
            }
        };
    });
}


/***/ }),

/***/ "./src/app/pages/schedule-filter/schedule-filter.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.md {\n  --background: #eee;\n}\n\n.md ion-toolbar {\n  --background: white;\n  --color: #424242;\n}\n\n.md ion-toolbar ion-button {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n\n.md ion-content {\n  --background: #eee;\n}\n\n.md ion-list {\n  background: transparent;\n}\n\n.md ion-checkbox {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n\n.ios ion-list-header {\n  height: 50px;\n  font-size: 22px;\n  letter-spacing: 0;\n  text-transform: capitalize;\n}\n\n.ios ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL0M6XFxVc2Vyc1xcbWV5ZXJcXERvY3VtZW50c1xcR2l0SHViXFxUaXBzeS1kZW1vL3NyY1xcYXBwXFxwYWdlc1xcc2NoZWR1bGUtZmlsdGVyXFxzY2hlZHVsZS1maWx0ZXIuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUNBRjs7QURJRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0FDSEo7O0FETUU7RUFDRSx1QkFBQTtBQ0pKOztBRE9FO0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7QUNMSjs7QURZRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ1RKOztBRFlFO0VBQ0UsK0JBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudC5tZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcblxyXG4ubWQge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWNvbG9yOiAjNDI0MjQyO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tY2hlY2tib3gge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufVxyXG5cclxuLmlvcyB7XHJcbiAgLy8gVE9ETyB0aGlzIG5lZWRzIHRvIGJlIGFkZGVkIHRvIElvbmljOlxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljL3B1bGwvMTY1NzRcclxuICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufSIsImlvbi1jb250ZW50Lm1kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4ubWQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjNDI0MjQyO1xufVxuLm1kIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubWQgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlZWU7XG59XG4ubWQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tZCBpb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5pb3MgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/schedule-filter/schedule-filter.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
  \**********************************************************/
/*! exports provided: ScheduleFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleFilterPage", function() { return ScheduleFilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");




var ScheduleFilterPage = /** @class */ (function () {
    function ScheduleFilterPage(confData, config, modalCtrl, navParams) {
        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
    }
    ScheduleFilterPage.prototype.ionViewWillEnter = function () {
        this.ios = this.config.get('mode') === "ios";
    };
    // TODO use the ionViewDidEnter event
    ScheduleFilterPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.get('excludedTracks');
        this.confData.getTracks().subscribe(function (tracks) {
            tracks.forEach(function (track) {
                _this.tracks.push({
                    name: track.name,
                    icon: track.icon,
                    isChecked: (excludedTrackNames.indexOf(track.name) === -1)
                });
            });
        });
    };
    ScheduleFilterPage.prototype.selectAll = function (check) {
        // set all to checked or unchecked
        this.tracks.forEach(function (track) {
            track.isChecked = check;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    };
    ScheduleFilterPage.ctorParameters = function () { return [
        { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
    ]; };
    ScheduleFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-schedule-filter',
            template: __webpack_require__(/*! raw-loader!./schedule-filter.html */ "./node_modules/raw-loader/index.js!./src/app/pages/schedule-filter/schedule-filter.html"),
            styles: [__webpack_require__(/*! ./schedule-filter.scss */ "./src/app/pages/schedule-filter/schedule-filter.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SchedulePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function() { return SchedulePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule */ "./src/app/pages/schedule/schedule.ts");




var routes = [
    {
        path: '',
        component: _schedule__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }
];
var SchedulePageRoutingModule = /** @class */ (function () {
    function SchedulePageRoutingModule() {
    }
    SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SchedulePageRoutingModule);
    return SchedulePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule */ "./src/app/pages/schedule/schedule.ts");
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ "./src/app/pages/schedule-filter/schedule-filter.ts");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule-routing.module */ "./src/app/pages/schedule/schedule-routing.module.ts");








var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["SchedulePageRoutingModule"]
            ],
            declarations: [
                _schedule__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"],
                _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]
            ],
            entryComponents: [
                _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]
            ]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/schedule/schedule.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvQzpcXFVzZXJzXFxtZXllclxcRG9jdW1lbnRzXFxHaXRIdWJcXFRpcHN5LWRlbW8vc3JjXFxhcHBcXHBhZ2VzXFxzY2hlZHVsZVxcc2NoZWR1bGUuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjRTtFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7QUNiSjs7QURXRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNSSjs7QURNRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURDRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURKRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURURTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNZSjs7QURkRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNpQko7O0FEbkJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ3NCSjs7QUR4QkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDMkJKOztBRDdCRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNnQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhdGVnb3JpZXM6IChcclxuICBpb25pYzogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gIGFuZ3VsYXI6ICNhYzI4MmIsXHJcbiAgY29tbXVuaWNhdGlvbjogIzhlOGQ5MyxcclxuICB0b29saW5nOiAjZmU0YzUyLFxyXG4gIHNlcnZpY2VzOiAjZmQ4YjJkLFxyXG4gIGRlc2lnbjogI2ZlZDAzNSxcclxuICB3b3Jrc2hvcDogIzY5YmI3YixcclxuICBmb29kOiAjM2JjN2M0LFxyXG4gIGRvY3VtZW50YXRpb246ICNiMTZiZTMsXHJcbiAgbmF2aWdhdGlvbjogIzY2MDBjY1xyXG4pO1xyXG5cclxuQGVhY2ggJHRyYWNrLCAkdmFsdWUgaW4gbWFwLXJlbW92ZSgkY2F0ZWdvcmllcykge1xyXG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1pb25pY10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1hbmd1bGFyXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNhYzI4MmI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1jb21tdW5pY2F0aW9uXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM4ZThkOTM7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz10b29saW5nXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZTRjNTI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1zZXJ2aWNlc10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmQ4YjJkO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9ZGVzaWduXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZWQwMzU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz13b3Jrc2hvcF0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjliYjdiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9Zm9vZF0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjM2JjN2M0O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9ZG9jdW1lbnRhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYjE2YmUzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9bmF2aWdhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjYwMGNjO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/schedule/schedule.ts":
/*!********************************************!*\
  !*** ./src/app/pages/schedule/schedule.ts ***!
  \********************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ "./src/app/pages/schedule-filter/schedule-filter.ts");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");







var SchedulePage = /** @class */ (function () {
    function SchedulePage(alertCtrl, confData, loadingCtrl, modalCtrl, router, toastCtrl, user) {
        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ngOnInit = function () {
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
        }
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__["ScheduleFilterPage"],
                            componentProps: { excludedTracks: this.excludeTracks }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            this.excludeTracks = data;
                            this.updateSchedule();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.user.hasFavorite(sessionData.name)) return [3 /*break*/, 1];
                        // woops, they already favorited it! What shall we do!?
                        // prompt them to remove it
                        this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
                        return [3 /*break*/, 4];
                    case 1:
                        // remember this session as a user favorite
                        this.user.addFavorite(sessionData.name);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Favorite Added',
                                buttons: [{
                                        text: 'OK',
                                        handler: function () {
                                            // close the sliding item
                                            slidingItem.close();
                                        }
                                    }]
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        // now present the alert on top of all other content
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        // now present the alert on top of all other content
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: 'Would you like to remove this session from your favorites?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        // they clicked the cancel button, do not remove the session
                                        // close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                },
                                {
                                    text: 'Remove',
                                    handler: function () {
                                        // they want to remove this session from their favorites
                                        _this.user.removeFavorite(sessionData.name);
                                        _this.updateSchedule();
                                        // close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        // now present the alert on top of all other content
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        // now present the alert on top of all other content
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Posting to " + network,
                            duration: (Math.random() * 1000) + 500
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.onWillDismiss()];
                    case 3:
                        _a.sent();
                        fab.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-schedule',
            template: __webpack_require__(/*! raw-loader!./schedule.html */ "./node_modules/raw-loader/index.js!./src/app/pages/schedule/schedule.html"),
            styles: [__webpack_require__(/*! ./schedule.scss */ "./src/app/pages/schedule/schedule.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]])
    ], SchedulePage);
    return SchedulePage;
}());



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SessionDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function() { return SessionDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-detail */ "./src/app/pages/session-detail/session-detail.ts");




var routes = [
    {
        path: '',
        component: _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
    }
];
var SessionDetailPageRoutingModule = /** @class */ (function () {
    function SessionDetailPageRoutingModule() {
    }
    SessionDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SessionDetailPageRoutingModule);
    return SessionDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: SessionDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function() { return SessionDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-detail */ "./src/app/pages/session-detail/session-detail.ts");
/* harmony import */ var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session-detail-routing.module */ "./src/app/pages/session-detail/session-detail-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var SessionDetailModule = /** @class */ (function () {
    function SessionDetailModule() {
    }
    SessionDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SessionDetailPageRoutingModule"]
            ],
            declarations: [
                _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"],
            ]
        })
    ], SessionDetailModule);
    return SessionDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".session-track-ionic {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services {\n  color: var(--ion-color-services);\n}\n\n.session-track-design {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation {\n  color: var(--ion-color-navigation);\n}\n\n.show-favorite {\n  position: relative;\n}\n\n.icon-heart-empty {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.icon-heart {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.show-favorite .icon-heart {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.show-favorite .icon-heart-empty {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvQzpcXFVzZXJzXFxtZXllclxcRG9jdW1lbnRzXFxHaXRIdWJcXFRpcHN5LWRlbW8vc3JjXFxhcHBcXHBhZ2VzXFxzZXNzaW9uLWRldGFpbFxcc2Vzc2lvbi1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQUEsK0JBQUE7RUFBQSw0REFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQUEsK0JBQUE7RUFBQSw0REFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXNzaW9uLXRyYWNrLWlvbmljIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1hbmd1bGFyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWFuZ3VsYXIpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1jb21tdW5pY2F0aW9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbW11bmljYXRpb24pO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay10b29saW5nIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRvb2xpbmcpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1zZXJ2aWNlcyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZXJ2aWNlcyk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWRlc2lnbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kZXNpZ24pO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay13b3Jrc2hvcCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13b3Jrc2hvcCk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWZvb2Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm9vZCk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWRvY3VtZW50YXRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZG9jdW1lbnRhdGlvbik7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLW5hdmlnYXRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbmF2aWdhdGlvbik7XHJcbn1cclxuXHJcbi5zaG93LWZhdm9yaXRlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pY29uLWhlYXJ0LWVtcHR5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5pY29uLWhlYXJ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydC1lbXB0eSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG4iLCIuc2Vzc2lvbi10cmFjay1pb25pYyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWFuZ3VsYXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWFuZ3VsYXIpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1jb21tdW5pY2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb21tdW5pY2F0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stdG9vbGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdG9vbGluZyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXNlcnZpY2VzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZXJ2aWNlcyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRlc2lnbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGVzaWduKTtcbn1cblxuLnNlc3Npb24tdHJhY2std29ya3Nob3Age1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdvcmtzaG9wKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZm9vZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm9vZCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRvY3VtZW50YXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRvY3VtZW50YXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay1uYXZpZ2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1uYXZpZ2F0aW9uKTtcbn1cblxuLnNob3ctZmF2b3JpdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLmljb24taGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.ts ***!
  \********************************************************/
/*! exports provided: SessionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function() { return SessionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");





var SessionDetailPage = /** @class */ (function () {
    function SessionDetailPage(dataProvider, userProvider, route) {
        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
        this.defaultHref = '';
    }
    SessionDetailPage.prototype.sessionClick = function (item) {
        console.log('Clicked', item);
    };
    SessionDetailPage.prototype.toggleFavorite = function () {
        if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
        }
        else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
        }
    };
    SessionDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            var e_1, _a, e_2, _b;
            if (data &&
                data.schedule &&
                data.schedule[0] &&
                data.schedule[0].groups) {
                var sessionId = _this.route.snapshot.paramMap.get('sessionId');
                try {
                    for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data.schedule[0].groups), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var group = _d.value;
                        if (group && group.sessions) {
                            try {
                                for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](group.sessions), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var session = _f.value;
                                    if (session && session.id === sessionId) {
                                        _this.session = session;
                                        _this.isFavorite = _this.userProvider.hasFavorite(_this.session.name);
                                        break;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    SessionDetailPage.prototype.ionViewDidEnter = function () {
        this.defaultHref = "/app/tabs/schedule";
    };
    SessionDetailPage.ctorParameters = function () { return [
        { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"] },
        { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    SessionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-session-detail',
            template: __webpack_require__(/*! raw-loader!./session-detail.html */ "./node_modules/raw-loader/index.js!./src/app/pages/session-detail/session-detail.html"),
            styles: [__webpack_require__(/*! ./session-detail.scss */ "./src/app/pages/session-detail/session-detail.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"],
            _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule/schedule */ "./src/app/pages/schedule/schedule.ts");





var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'camera',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | camera-camera-module */ "camera-camera-module").then(__webpack_require__.bind(null, /*! ../camera/camera.module */ "./src/app/pages/camera/camera.module.ts")).then(function (m) { return m.CameraPageModule; }); }
                    }
                ]
            },
            {
                path: 'schedule',
                children: [
                    {
                        path: '',
                        component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__["SchedulePage"],
                    },
                    {
                        path: 'session/:sessionId',
                        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../session-detail/session-detail.module */ "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) { return m.SessionDetailModule; }); }
                    }
                ]
            },
            {
                path: 'venues',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../venue-list/venue-list.module */ "./src/app/pages/venue-list/venue-list.module.ts")).then(function (m) { return m.VenueListModule; }); }
                    },
                    {
                        path: 'session/:sessionId',
                        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../session-detail/session-detail.module */ "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) { return m.SessionDetailModule; }); }
                    },
                    {
                        path: 'venue-details/:venueId',
                        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../venue-detail/venue-detail.module */ "./src/app/pages/venue-detail/venue-detail.module.ts")).then(function (m) { return m.VenueDetailModule; }); }
                    }
                ]
            },
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../map/map.module */ "./src/app/pages/map/map.module.ts")).then(function (m) { return m.MapModule; }); }
                    }
                ]
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../about/about.module */ "./src/app/pages/about/about.module.ts")).then(function (m) { return m.AboutModule; }); }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/tabs/schedule',
                pathMatch: 'full'
            }
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-page-routing.module */ "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about/about.module */ "./src/app/pages/about/about.module.ts");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map.module */ "./src/app/pages/map/map.module.ts");
/* harmony import */ var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../schedule/schedule.module */ "./src/app/pages/schedule/schedule.module.ts");
/* harmony import */ var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../session-detail/session-detail.module */ "./src/app/pages/session-detail/session-detail.module.ts");
/* harmony import */ var _venue_detail_venue_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../venue-detail/venue-detail.module */ "./src/app/pages/venue-detail/venue-detail.module.ts");
/* harmony import */ var _venue_list_venue_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../venue-list/venue-list.module */ "./src/app/pages/venue-list/venue-list.module.ts");












var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"],
                _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__["ScheduleModule"],
                _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__["SessionDetailModule"],
                _venue_detail_venue_detail_module__WEBPACK_IMPORTED_MODULE_10__["VenueDetailModule"],
                _venue_list_venue_list_module__WEBPACK_IMPORTED_MODULE_11__["VenueListModule"],
                _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [
                _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
            ]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./tabs-page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabs-page/tabs-page.html")
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/pages/venue-detail/venue-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/venue-detail/venue-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VenueDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueDetailPageRoutingModule", function() { return VenueDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _venue_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venue-detail */ "./src/app/pages/venue-detail/venue-detail.ts");




var routes = [
    {
        path: '',
        component: _venue_detail__WEBPACK_IMPORTED_MODULE_3__["VenueDetailPage"]
    }
];
var VenueDetailPageRoutingModule = /** @class */ (function () {
    function VenueDetailPageRoutingModule() {
    }
    VenueDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VenueDetailPageRoutingModule);
    return VenueDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/venue-detail/venue-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/venue-detail/venue-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: VenueDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueDetailModule", function() { return VenueDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _venue_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venue-detail */ "./src/app/pages/venue-detail/venue-detail.ts");
/* harmony import */ var _venue_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./venue-detail-routing.module */ "./src/app/pages/venue-detail/venue-detail-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var VenueDetailModule = /** @class */ (function () {
    function VenueDetailModule() {
    }
    VenueDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _venue_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["VenueDetailPageRoutingModule"]
            ],
            declarations: [
                _venue_detail__WEBPACK_IMPORTED_MODULE_3__["VenueDetailPage"],
            ]
        })
    ], VenueDetailModule);
    return VenueDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/venue-detail/venue-detail.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/venue-detail/venue-detail.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".venue-detail div {\n  position: relative;\n}\n\n.venue-detail img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.venue-detail ion-button {\n  position: absolute;\n  top: 85%;\n  right: 83%;\n}\n\n.venue-detail p {\n  color: #60646b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVudWUtZGV0YWlsL0M6XFxVc2Vyc1xcbWV5ZXJcXERvY3VtZW50c1xcR2l0SHViXFxUaXBzeS1kZW1vL3NyY1xcYXBwXFxwYWdlc1xcdmVudWUtZGV0YWlsXFx2ZW51ZS1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmVudWUtZGV0YWlsL3ZlbnVlLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0FGOztBRElBO0VBQ0UsY0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVudWUtZGV0YWlsL3ZlbnVlLWRldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi52ZW51ZS1kZXRhaWwgZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi52ZW51ZS1kZXRhaWwgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnZlbnVlLWRldGFpbCBpb24tYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4NSU7XHJcbiAgcmlnaHQ6IDgzJTtcclxuICAvL2JhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi52ZW51ZS1kZXRhaWwgcCB7XHJcbiAgY29sb3I6ICM2MDY0NmI7XHJcbn1cclxuIiwiLnZlbnVlLWRldGFpbCBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52ZW51ZS1kZXRhaWwgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4udmVudWUtZGV0YWlsIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODUlO1xuICByaWdodDogODMlO1xufVxuXG4udmVudWUtZGV0YWlsIHAge1xuICBjb2xvcjogIzYwNjQ2Yjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/venue-detail/venue-detail.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/venue-detail/venue-detail.ts ***!
  \****************************************************/
/*! exports provided: VenueDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueDetailPage", function() { return VenueDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");




var VenueDetailPage = /** @class */ (function () {
    function VenueDetailPage(dataProvider, router, route) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.route = route;
    }
    VenueDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            var e_1, _a;
            var venueId = _this.route.snapshot.paramMap.get('venueId');
            if (data && data.venues) {
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data.venues), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var venue = _c.value;
                        if (venue && venue.id === venueId) {
                            _this.venue = venue;
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    VenueDetailPage.ctorParameters = function () { return [
        { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    VenueDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-venue-detail',
            template: __webpack_require__(/*! raw-loader!./venue-detail.html */ "./node_modules/raw-loader/index.js!./src/app/pages/venue-detail/venue-detail.html"),
            styles: [__webpack_require__(/*! ./venue-detail.scss */ "./src/app/pages/venue-detail/venue-detail.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VenueDetailPage);
    return VenueDetailPage;
}());



/***/ }),

/***/ "./src/app/pages/venue-list/venue-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/venue-list/venue-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VenueListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueListPageRoutingModule", function() { return VenueListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _venue_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venue-list */ "./src/app/pages/venue-list/venue-list.ts");




var routes = [
    {
        path: '',
        component: _venue_list__WEBPACK_IMPORTED_MODULE_3__["VenueListPage"]
    }
];
var VenueListPageRoutingModule = /** @class */ (function () {
    function VenueListPageRoutingModule() {
    }
    VenueListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VenueListPageRoutingModule);
    return VenueListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/venue-list/venue-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/venue-list/venue-list.module.ts ***!
  \*******************************************************/
/*! exports provided: VenueListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueListModule", function() { return VenueListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _venue_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./venue-list */ "./src/app/pages/venue-list/venue-list.ts");
/* harmony import */ var _venue_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./venue-list-routing.module */ "./src/app/pages/venue-list/venue-list-routing.module.ts");






var VenueListModule = /** @class */ (function () {
    function VenueListModule() {
    }
    VenueListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _venue_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["VenueListPageRoutingModule"]
            ],
            declarations: [_venue_list__WEBPACK_IMPORTED_MODULE_4__["VenueListPage"]],
        })
    ], VenueListModule);
    return VenueListModule;
}());



/***/ }),

/***/ "./src/app/pages/venue-list/venue-list.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/venue-list/venue-list.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll {\n  background: #ededed;\n}\n\nbody {\n  font-family: \"Montserrat\";\n  margin: 0;\n}\n\n.venue-card {\n  height: 180px;\n  width: 190px;\n  display: inline-block;\n}\n\n#parent {\n  width: 210px;\n  height: 250px;\n  position: relative;\n}\n\n#parent > img {\n  width: 100%;\n  height: 100%;\n}\n\n#parent > ion-text {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVudWUtbGlzdC9DOlxcVXNlcnNcXG1leWVyXFxEb2N1bWVudHNcXEdpdEh1YlxcVGlwc3ktZGVtby9zcmNcXGFwcFxccGFnZXNcXHZlbnVlLWxpc3RcXHZlbnVlLWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvdmVudWUtbGlzdC92ZW51ZS1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbnVlLWxpc3QvdmVudWUtbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zY3JvbGwge1xyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi52ZW51ZS1jYXJkIHtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiNwYXJlbnR7XHJcbiAgd2lkdGg6IDIxMHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbiNwYXJlbnQgPiBpbWd7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuI3BhcmVudCA+IGlvbi10ZXh0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcbiIsIi5zY3JvbGwge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBtYXJnaW46IDA7XG59XG5cbi52ZW51ZS1jYXJkIHtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDE5MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNwYXJlbnQge1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3BhcmVudCA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNwYXJlbnQgPiBpb24tdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/venue-list/venue-list.ts":
/*!************************************************!*\
  !*** ./src/app/pages/venue-list/venue-list.ts ***!
  \************************************************/
/*! exports provided: VenueListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueListPage", function() { return VenueListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");






var VenueListPage = /** @class */ (function () {
    function VenueListPage(actionSheetCtrl, confData, inAppBrowser, router) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
        this.router = router;
        this.venues = [];
    }
    VenueListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.confData.getVenues().subscribe(function (venues) {
            _this.venues = venues;
        });
    };
    VenueListPage.prototype.goToVenueTwitter = function (venue) {
        this.inAppBrowser.create("https://twitter.com/" + venue.twitter, '_blank');
    };
    VenueListPage.prototype.openVenueShare = function (venue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Share ' + venue.name,
                            buttons: [
                                {
                                    text: 'Copy Link',
                                    handler: function () {
                                        console.log('Copy link clicked on https://twitter.com/' + venue.twitter);
                                        if (window['cordova'] &&
                                            window['cordova'].plugins.clipboard) {
                                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + venue.twitter);
                                        }
                                    }
                                },
                                {
                                    text: 'Share via ...'
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VenueListPage.prototype.openContact = function (venue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mode, actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mode = 'ios';
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'Contact ' + venue.name,
                                buttons: [
                                    {
                                        text: "Email ( " + venue.email + " )",
                                        icon: mode !== 'ios' ? 'mail' : null,
                                        handler: function () {
                                            window.open('mailto:' + venue.email);
                                        }
                                    },
                                    {
                                        text: "Call ( " + venue.phone + " )",
                                        icon: mode !== 'ios' ? 'call' : null,
                                        handler: function () {
                                            window.open('tel:' + venue.phone);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VenueListPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    VenueListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-venue-list',
            template: __webpack_require__(/*! raw-loader!./venue-list.html */ "./node_modules/raw-loader/index.js!./src/app/pages/venue-list/venue-list.html"),
            styles: [__webpack_require__(/*! ./venue-list.scss */ "./src/app/pages/venue-list/venue-list.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VenueListPage);
    return VenueListPage;
}());



/***/ }),

/***/ "./src/app/providers/conference-data.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/conference-data.ts ***!
  \**********************************************/
/*! exports provided: ConferenceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferenceData", function() { return ConferenceData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");






var ConferenceData = /** @class */ (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
        }
        else {
            return this.http
                .get('assets/data/data.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking venues to sessions
        this.data = data;
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.venues = [];
                    if (session.venueNames) {
                        session.venueNames.forEach(function (venueName) {
                            var venue = _this.data.venues.find(function (s) { return s.name === venueName; });
                            if (venue) {
                                session.venues.push(venue);
                                venue.sessions = venue.sessions || [];
                                venue.sessions.push(session);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        }));
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segment is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getVenues = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.venues.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        }));
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.tracks.sort();
        }));
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.map;
        }));
    };
    ConferenceData.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"] }
    ]; };
    ConferenceData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])
    ], ConferenceData);
    return ConferenceData;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es5.js.map