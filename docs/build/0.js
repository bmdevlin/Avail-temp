webpackJsonp([0],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimelinePageModule", function() { return AddTimelinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_timeline__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddTimelinePageModule = /** @class */ (function () {
    function AddTimelinePageModule() {
    }
    AddTimelinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_timeline__["a" /* AddTimelinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_timeline__["a" /* AddTimelinePage */]),
            ],
        })
    ], AddTimelinePageModule);
    return AddTimelinePageModule;
}());

//# sourceMappingURL=add-timeline.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTimelinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddTimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTimelinePage = /** @class */ (function () {
    function AddTimelinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddTimelinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTimelinePage');
    };
    AddTimelinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-timeline',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\add-timeline\add-timeline.html"*/'<!--\n  Generated template for the AddTimelinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>addTimeline</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label floating>Photo Album</ion-label>\n          <ion-input type="text" [(ngModel)]="newTimeline.photoURL"></ion-input>\n          <button ion-button color="primary" (click)="addPhotoURL()">Add Photo URL</button>\n    \n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating>Message</ion-label>\n          <ion-input type="text" [(ngModel)]="newTimeline.message"></ion-input>\n          <button ion-button color="primary" (click)="addMessage()">Add comment </button>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating>Vodep</ion-label>\n          <ion-input type="text" [(ngModel)]="newTimeline.videoid"></ion-input>\n        </ion-item>\n\n        \n    \n      </ion-list>\n       <button ion-button color="primary" (click)="addPhotoURL()">Add Photo URL</button>\n    \n       \n       <button ion-button color="primary" (click)="addMessage()">Add comment </button>\n    \n       \n       <button ion-button color="primary" (click)="addVideoid()">Add video ID </button>\n    \n    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\add-timeline\add-timeline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddTimelinePage);
    return AddTimelinePage;
}());

//# sourceMappingURL=add-timeline.js.map

/***/ })

});
//# sourceMappingURL=0.js.map