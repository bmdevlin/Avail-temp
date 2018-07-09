webpackJsonp([19],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCalentryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_calentries_rest_calentries__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
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
 * Generated class for the AddCalentryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCalentryPage = /** @class */ (function () {
    function AddCalentryPage(navCtrl, view, fb) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.fb = fb;
        this.newCalentry = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_calentries_rest_calentries__["a" /* Calentry */]();
        this.inCalentry = this.fb.group({
            title: ['title'],
            description: ['description'],
            person: ['person'],
            date: ['date'],
            time: ['time'],
            duration: ['duration']
        });
    }
    AddCalentryPage.prototype.saveCalentry = function () {
        this.newCalentry.title = this.inCalentry.value.title;
        this.newCalentry.description = this.inCalentry.value.description;
        this.newCalentry.person = this.inCalentry.value.person;
        this.newCalentry.date = this.inCalentry.value.date;
        this.newCalentry.time = this.inCalentry.value.time;
        this.newCalentry.duration = this.inCalentry.value.duration;
        this.view.dismiss(this.newCalentry);
    };
    AddCalentryPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddCalentryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-calentry',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\calentries\add-calentry\add-calentry.html"*/'<!--\n\n  Generated template for the AddCalentryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-toolbar color="secondary">\n\n      <ion-title>\n\n        Add Calendar Entry\n\n      </ion-title>\n\n        <ion-buttons end>\n\n          <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <form [formGroup]="inCalentry" (ngsubmit)="saveCalentry()"  >\n\n      <ion-item>\n\n        <ion-label floating>Title</ion-label>\n\n        <ion-input type="text" formControlName="title"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Description</ion-label>\n\n        <ion-input type="text" formControlName="description"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Person</ion-label>\n\n        <ion-input type="text" formControlName="person"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Date</ion-label>\n\n        <ion-input type="text"  formControlName="date"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Time</ion-label>\n\n        <ion-input type="text"  formControlName="time"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Duration</ion-label>\n\n        <ion-input type="number" formControlName="duration"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n  <button full ion-button color="secondary" (click)="saveCalentry()">Save</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\calentries\add-calentry\add-calentry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AddCalentryPage);
    return AddCalentryPage;
}());

//# sourceMappingURL=add-calentry.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalentryDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_calentries_rest_calentries__ = __webpack_require__(46);
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
 * Generated class for the CalentryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalentryDetailsPage = /** @class */ (function () {
    function CalentryDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calentry = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_calentries_rest_calentries__["a" /* Calentry */]();
    }
    CalentryDetailsPage.prototype.ionViewDidLoad = function () {
        this.calentry = this.navParams.get('calentry');
    };
    CalentryDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calentry-details',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\calentries\calentry-details\calentry-details.html"*/'<!--\n\n  Generated template for the CalentryDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>calentry-details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        Title: {{calentry.title}}\n\n      </ion-card-content>\n\n      <ion-card-content>\n\n         Description:  {{calentry.description}}\n\n      </ion-card-content>\n\n      <ion-card-content>\n\n         Who:  {{calentry.person}}\n\n      </ion-card-content>\n\n      <ion-card-content>\n\n         Date:  {{calentry.date}}\n\n      </ion-card-content>\n\n      <ion-card-content>\n\n        Time:  {{calentry.time}}\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\calentries\calentry-details\calentry-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CalentryDetailsPage);
    return CalentryDetailsPage;
}());

//# sourceMappingURL=calentry-details.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalentriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_calentries_rest_calentries__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calentry_details_calentry_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_calentry_add_calentry__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__update_calentry_update_calentry__ = __webpack_require__(117);
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
 * Generated class for the CalentriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalentriesPage = /** @class */ (function () {
    function CalentriesPage(navCtrl, navParams, modalCtrl, restProvider, mySessionToken) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.mySessionToken = mySessionToken;
        this.calentries = [];
        this.mySessionToken.getMyAuthToken().then(function (stoken) {
            _this.token = stoken;
            _this.restProvider.getCalentries(_this.token).subscribe(function (calentries) {
                _this.calentries = calentries;
            }, function (error) {
                console.log('get calentries failed: ');
            });
        });
    }
    CalentriesPage.prototype.ionViewDidLoad = function () {
    };
    CalentriesPage.prototype.addCalentry = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__add_calentry_add_calentry__["a" /* AddCalentryPage */]);
        addModal.onDidDismiss(function (calentry) {
            if (calentry) {
                _this.restProvider.createCalentry(_this.token, calentry)
                    .subscribe(function (calentry) { return _this.calentries.push(calentry); }, function (error) {
                    console.log('add calentry failed: ', calentry);
                });
            }
        });
        addModal.present();
    };
    CalentriesPage.prototype.updateCalentry = function (calentry) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__update_calentry_update_calentry__["a" /* UpdateCalentryPage */], {
            calentry: calentry, token: this.token
        });
    };
    CalentriesPage.prototype.updateModalCalentry = function (calentry) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__update_calentry_update_calentry__["a" /* UpdateCalentryPage */], { calentry: calentry });
        addModal.onDidDismiss(function (calentry) {
            if (calentry) {
                _this.restProvider.updateCalentry(_this.token, calentry)
                    .subscribe(function (calentry) { return _this.calentries[calentry.id] == calentry; }, function (error) {
                    console.log('update calentry failed: ', calentry);
                });
            }
        });
        addModal.present();
    };
    CalentriesPage.prototype.deleteCalentry = function (id) {
        var _this = this;
        this.restProvider.deleteCalentry(this.token, id)
            .subscribe(function (calentry) { return _this.calentries.splice(id, 1); }, function (error) {
            console.log('delete cal entry failed: ', id);
        });
    };
    CalentriesPage.prototype.viewCalentry = function (calentry) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calentry_details_calentry_details__["a" /* CalentryDetailsPage */], {
            calentry: calentry
        });
    };
    CalentriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calentries',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\calentries\calentries\calentries.html"*/'<!--\n\n  Generated template for the CalentriesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.    {{calentry.title }}\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>calentries</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n       <ion-item *ngFor="let calentry of calentries"  >\n\n           \n\n           {{calentry.date }}\n\n           {{calentry.title }}\n\n           <button ion-button outline  (click)=" viewCalentry(calentry)"> Show </button>\n\n           <button ion-button  (click)="updateModalCalentry(calentry)">Update </button>\n\n           <button ion-button   (click)="deleteCalentry(calentry.id)">Delete </button>\n\n       </ion-item>\n\n    </ion-list>\n\n  \n\n  \n\n     <button ion-button color="primary" (click)="addCalentry()">New calentry </button>\n\n  \n\n  \n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\calentries\calentries\calentries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_calentries_rest_calentries__["b" /* RestCalentriesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_token__["a" /* MySessionToken */]])
    ], CalentriesPage);
    return CalentriesPage;
}());

//# sourceMappingURL=calentries.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCalentryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_calentries_rest_calentries__ = __webpack_require__(46);
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
 * Generated class for the UpdateCalentryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateCalentryPage = /** @class */ (function () {
    function UpdateCalentryPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.newCalentry = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_calentries_rest_calentries__["a" /* Calentry */]();
    }
    UpdateCalentryPage.prototype.ionViewDidLoad = function () {
        this.newCalentry = this.navParams.get('calentry');
    };
    UpdateCalentryPage.prototype.saveCalentry = function () {
        this.view.dismiss(this.newCalentry);
    };
    UpdateCalentryPage.prototype.close = function () {
        this.view.dismiss();
    };
    UpdateCalentryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-calentry',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\calentries\update-calentry\update-calentry.html"*/'<!--\n\n  Generated template for the UpdateCalentryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-toolbar color="secondary">\n\n      <ion-title>\n\n        Update Calendar Entry\n\n      </ion-title>\n\n        <ion-buttons end>\n\n          <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <ion-list>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Title</ion-label>\n\n        <ion-input type="text" [(ngModel)]="newCalentry.title"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Description</ion-label>\n\n        <ion-input type="text" [(ngModel)]="newCalentry.description"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Person</ion-label>\n\n        <ion-input type="text" [(ngModel)]="newCalentry.person"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Date</ion-label>\n\n        <ion-input type="text"  [(ngModel)]="newCalentry.date"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Time</ion-label>\n\n        <ion-input type="text" [(ngModel)]="newCalentry.time"></ion-input>\n\n      </ion-item>\n\n      <ion-item>  \n\n        <ion-label floating>Duration</ion-label>\n\n        <ion-input type="number" [(ngModel)]="newCalentry.duration"></ion-input>\n\n      </ion-item>\n\n  \n\n    </ion-list>\n\n  \n\n    <button full ion-button color="secondary" (click)="saveCalentry()">Save</button>\n\n  \n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\calentries\update-calentry\update-calentry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], UpdateCalentryPage);
    return UpdateCalentryPage;
}());

//# sourceMappingURL=update-calentry.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_tasks_tasks__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userprofiles_user_profiles_user_profiles__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timelines_timelines__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calentries_calentries_calentries__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rest_userprofiles_rest_userprofiles__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userprofiles_update_user_profile_update_user_profile__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainPage = /** @class */ (function () {
    function MainPage(nav, navParams, modalCtrl, restProvider, mySessionToken) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.mySessionToken = mySessionToken;
        this.mySessionToken.getMyAuthToken().then(function (stoken) {
            _this.token = stoken;
            _this.restProvider.getUserProfile(_this.token).subscribe(function (userProfile) {
                _this.userProfile = userProfile;
            }, function (error) {
                console.log('get userProfile failed: ');
            });
        });
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.updateModalUserProfile = function (userProfile) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__userprofiles_update_user_profile_update_user_profile__["a" /* UpdateUserProfilePage */], { userProfile: userProfile });
        addModal.onDidDismiss(function (userProfile) {
            if (userProfile) {
                _this.restProvider.updateUserProfile(_this.token, userProfile)
                    .subscribe(function (userProfile) { return _this.userProfile == userProfile; }, function (error) {
                    console.log('update userProfile failed: ', userProfile);
                });
            }
        });
        addModal.present();
    };
    MainPage.prototype.goToUserProfilesPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__userprofiles_user_profiles_user_profiles__["a" /* UserProfilesPage */]);
    };
    MainPage.prototype.goToChatPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */], {
            userProfile: this.userProfile, token: this.token
        });
    };
    MainPage.prototype.goToTimelinesPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__timelines_timelines__["a" /* TimelinesPage */], {
            userProfile: this.userProfile, token: this.token
        });
    };
    MainPage.prototype.goToTasksPage = function (event) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__tasks_tasks_tasks__["a" /* TasksPage */]);
    };
    MainPage.prototype.goToCalentriesPage = function (event) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__calentries_calentries_calentries__["a" /* CalentriesPage */]);
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mainpage',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\mainpage\mainpage.html"*/'<!--\n\n  Generated template for the MainPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>mainpage</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-content>\n\n          <p>Main page for the Keztra Family Social Networking app </p>\n\n\n\n        </ion-card-content>\n\n\n\n      </ion-card>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button (click)="goToUserProfilesPage()">Family Address Book</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="goToTimelinesPage()">Family Timeline</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="goToChatPage()">Family Chat</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row> \n\n    <ion-col>\n\n      <button ion-button (click)="goToCalentriesPage()">Calendar</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="goToTasksPage()">Tasks</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="updateModalUserProfile(this.userProfile)">Update My Profile</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\mainpage\mainpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_rest_userprofiles_rest_userprofiles__["a" /* RestUserProfilesProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_token__["a" /* MySessionToken */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=mainpage.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_tasks_rest_tasks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_details_task_details__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_task_add_task__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__update_task_update_task__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TasksPage = /** @class */ (function () {
    function TasksPage(navCtrl, navParams, modalCtrl, restProvider, mySessionToken) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.mySessionToken = mySessionToken;
        this.tasks = [];
        this.mySessionToken.getMyAuthToken().then(function (stoken) {
            _this.token = stoken;
            _this.restProvider.getTasks(_this.token).subscribe(function (tasks) {
                _this.tasks = tasks;
            }, function (error) {
                console.log('get tasks failed: ');
            });
        });
    }
    TasksPage.prototype.ionViewDidLoad = function () {
    };
    TasksPage.prototype.addTask = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__add_task_add_task__["a" /* AddTaskPage */]);
        addModal.onDidDismiss(function (task) {
            if (task) {
                _this.restProvider.createTask(_this.token, task)
                    .subscribe(function (task) { return _this.tasks.push(task); }, function (error) {
                    console.log('add task failed: ', task);
                });
            }
        });
        addModal.present();
    };
    TasksPage.prototype.updateTask = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__update_task_update_task__["a" /* UpdateTaskPage */], {
            task: task, token: this.token
        });
    };
    TasksPage.prototype.updateModalTask = function (task) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__update_task_update_task__["a" /* UpdateTaskPage */], { task: task });
        addModal.onDidDismiss(function (task) {
            if (task) {
                _this.restProvider.updateTask(_this.token, task)
                    .subscribe(function (task) { return _this.tasks[task.id] == task; }, function (error) {
                    console.log('update task failed: ', task);
                });
            }
        });
        addModal.present();
    };
    TasksPage.prototype.deleteTask = function (id) {
        var _this = this;
        this.restProvider.deleteTask(this.token, id)
            .subscribe(function (task) { return _this.tasks.splice(id, 1); }, function (error) {
            console.log('delete task failed: ', id);
        });
    };
    TasksPage.prototype.viewTask = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__task_details_task_details__["a" /* TaskDetailsPage */], {
            task: task
        });
    };
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tasks',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\tasks\tasks\tasks.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tasks</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n     <ion-item *ngFor="let task of tasks"  >\n\n        <ion-row>\n\n            <ion-col  col-2> \n\n                {{ task.person }}\n\n            </ion-col>\n\n            <ion-col  col-4> \n\n              {{ task.title }}\n\n            </ion-col>\n\n            <ion-col  col-2> \n\n              <button ion-button outline  (click)=" viewTask(task)"> Show </button>\n\n            </ion-col>\n\n            <ion-col col-2> \n\n              <button ion-button  (click)="updateModalTask(task)">Update </button>\n\n            </ion-col>\n\n            <ion-col col-2> \n\n              <button ion-button   (click)="deleteTask(task.id)">Delete </button>\n\n            </ion-col>\n\n        </ion-row>\n\n     </ion-item> \n\n  </ion-list>\n\n\n\n\n\n   <button ion-button color="primary" (click)="addTask()">New task </button>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\tasks\tasks\tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_tasks_rest_tasks__["a" /* RestTasksProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_token__["a" /* MySessionToken */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySessionToken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MySessionToken = /** @class */ (function () {
    function MySessionToken(storage) {
        this.storage = storage;
        this.mySessionToken = "None";
    }
    MySessionToken.prototype.setMyAuthToken = function (value) {
        this.mySessionToken = value;
        return this.storage.set('token', value);
    };
    MySessionToken.prototype.getMyAuthToken = function () {
        return this.storage.get('token');
    };
    MySessionToken.prototype.getBaseURL = function (value) {
        //return "http://localhost:3000/" + value; 
        return "https://shrouded-harbor-31805.herokuapp.com/" + value;
    };
    MySessionToken = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], MySessionToken);
    return MySessionToken;
}());

//# sourceMappingURL=token.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_tasks_rest_tasks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(55);
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
 * Generated class for the TaskDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskDetailsPage = /** @class */ (function () {
    function TaskDetailsPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.task = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_tasks_rest_tasks__["b" /* Task */]();
    }
    TaskDetailsPage.prototype.ionViewDidLoad = function () {
        this.task = this.navParams.get('task');
    };
    TaskDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task-details',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\tasks\task-details\task-details.html"*/'<!--\n\n  Generated template for the TaskDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Task Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      Title: {{task.title}}\n\n    </ion-card-content>\n\n    <ion-card-content>\n\n       Description:  {{task.description}}\n\n    </ion-card-content>\n\n    <ion-card-content>\n\n       Who:  {{task.person}}\n\n    </ion-card-content>\n\n    <ion-card-content>\n\n       Tag:  {{task.tag}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\tasks\task-details\task-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], TaskDetailsPage);
    return TaskDetailsPage;
}());

//# sourceMappingURL=task-details.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_tasks_rest_tasks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
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
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTaskPage = /** @class */ (function () {
    function AddTaskPage(navCtrl, view, fb) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.fb = fb;
        this.newTask = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_tasks_rest_tasks__["b" /* Task */]();
        this.inTask = this.fb.group({
            title: ['title'],
            description: ['description'],
            person: ['person'],
            tag: ['tag']
        });
    }
    AddTaskPage.prototype.saveTask = function () {
        this.newTask.title = this.inTask.value.title;
        this.newTask.description = this.inTask.value.description;
        this.newTask.person = this.inTask.value.person;
        this.newTask.tag = this.inTask.value.tag;
        this.view.dismiss(this.newTask);
    };
    AddTaskPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-task',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\tasks\add-task\add-task.html"*/'<!--\n\n  Generated template for the AddTaskPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar color="secondary">\n\n    <ion-title>\n\n      Add Task\n\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <form [formGroup]="inTask" (ngsubmit)="saveTask()"  >\n\n      <ion-item>\n\n        <ion-label floating>Title</ion-label>\n\n        <ion-input type="text" formControlName="title"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Description</ion-label>\n\n        <ion-input type="text" formControlName="description"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Person</ion-label>\n\n        <ion-input type="text" formControlName="person"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Tag</ion-label>\n\n        <ion-input type="text" formControlName="tag"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n  <button full ion-button color="secondary" (click)="saveTask()">Save</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\tasks\add-task\add-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AddTaskPage);
    return AddTaskPage;
}());

//# sourceMappingURL=add-task.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_tasks_rest_tasks__ = __webpack_require__(47);
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
 * Generated class for the UpdateTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateTaskPage = /** @class */ (function () {
    function UpdateTaskPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.newTask = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_tasks_rest_tasks__["b" /* Task */]();
    }
    UpdateTaskPage.prototype.ionViewDidLoad = function () {
        this.newTask = this.navParams.get('task');
    };
    UpdateTaskPage.prototype.saveTask = function () {
        this.view.dismiss(this.newTask);
    };
    UpdateTaskPage.prototype.close = function () {
        this.view.dismiss();
    };
    UpdateTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-task',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\tasks\update-task\update-task.html"*/'<!--\n\n  Generated template for the UpdateTaskPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar color="secondary">\n\n    <ion-title>\n\n      Update Task\n\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Title</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newTask.title"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Description</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newTask.description"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Person</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newTask.person"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Tag</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newTask.tag"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button full ion-button color="secondary" (click)="saveTask()">Save</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\tasks\update-task\update-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], UpdateTaskPage);
    return UpdateTaskPage;
}());

//# sourceMappingURL=update-task.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_userprofiles_rest_userprofiles__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_details_user_profile_details__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_user_profile_add_user_profile__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__update_user_profile_update_user_profile__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserProfilesPage = /** @class */ (function () {
    function UserProfilesPage(navCtrl, navParams, modalCtrl, restProvider, mySessionToken) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.mySessionToken = mySessionToken;
        this.userProfiles = [];
        this.mySessionToken.getMyAuthToken().then(function (stoken) {
            _this.token = stoken;
            _this.restProvider.getUserProfiles(_this.token).subscribe(function (userProfiles) {
                _this.userProfiles = userProfiles;
            }, function (error) {
                console.log('get userProfiles failed: ');
            });
        });
    }
    UserProfilesPage.prototype.ionViewDidLoad = function () {
    };
    UserProfilesPage.prototype.getProfiles = function () {
        var _this = this;
        this.mySessionToken.getMyAuthToken().then(function (stoken) {
            _this.token = stoken;
            _this.restProvider.getUserProfiles(_this.token).subscribe(function (userProfiles) {
                _this.userProfiles = userProfiles;
            }, function (error) {
                console.log('get userProfiles failed: ');
            });
        });
    };
    UserProfilesPage.prototype.addUserProfile = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__add_user_profile_add_user_profile__["a" /* AddUserProfilePage */]);
        addModal.onDidDismiss(function (userProfile) {
            if (userProfile) {
                _this.restProvider.createUserProfile(_this.token, userProfile)
                    .subscribe(function (userProfile) { return _this.userProfiles.push(userProfile); }, function (error) {
                    console.log('add UserProfile failed: ', userProfile);
                });
            }
        });
        addModal.present();
    };
    UserProfilesPage.prototype.updateUserProfile = function (userProfile) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__update_user_profile_update_user_profile__["a" /* UpdateUserProfilePage */], {
            userProfile: userProfile, token: this.token
        });
    };
    UserProfilesPage.prototype.updateModalUserProfile = function (userProfile) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__update_user_profile_update_user_profile__["a" /* UpdateUserProfilePage */], { userProfile: userProfile });
        addModal.onDidDismiss(function (userProfile) {
            if (userProfile) {
                _this.restProvider.updateUserProfile(_this.token, userProfile)
                    .subscribe(function (userProfile) { return _this.userProfiles[userProfile.id] == userProfile; }, function (error) {
                    console.log('update userProfile failed: ', userProfile);
                });
            }
        });
        addModal.present();
    };
    UserProfilesPage.prototype.deleteUserProfile = function (id) {
        var _this = this;
        this.restProvider.deleteUserProfile(this.token, id)
            .subscribe(function (userProfile) { return _this.userProfiles.splice(id, 1); }, function (error) {
            console.log('delete userProfile failed: ', id);
        });
    };
    UserProfilesPage.prototype.viewUserProfile = function (userProfile) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_profile_details_user_profile_details__["a" /* UserProfileDetailsPage */], {
            userProfile: userProfile
        });
    };
    UserProfilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-profiles',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\userprofiles\user-profiles\user-profiles.html"*/'<!--\n\n  Generated template for the UserProfilesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Family Address Book</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n     <ion-item *ngFor="let userProfile of userProfiles"  >\n\n        <ion-row>\n\n            <ion-col  col-4>\n\n              {{userProfile.firstname }}\n\n            </ion-col>\n\n            <ion-col  col-4>\n\n              {{userProfile.cellphone }}\n\n            </ion-col>\n\n            <ion-col  col-2>\n\n              <button ion-button outline  (click)=" viewUserProfile(userProfile)"> Show </button>\n\n            </ion-col>\n\n            <ion-col  col-2>\n\n              <button ion-button outline  (click)=" updateModalUserProfile(userProfile)"> Update </button>\n\n            </ion-col>\n\n \n\n        </ion-row>\n\n     </ion-item>\n\n  </ion-list>\n\n\n\n\n\n   <button ion-button color="primary" (click)="addUserProfile()">New User Profile </button>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\userprofiles\user-profiles\user-profiles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_userprofiles_rest_userprofiles__["a" /* RestUserProfilesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_token__["a" /* MySessionToken */]])
    ], UserProfilesPage);
    return UserProfilesPage;
}());

//# sourceMappingURL=user-profiles.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_userprofiles_rest_userprofiles__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileDetailsPage = /** @class */ (function () {
    function UserProfileDetailsPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.userProfile = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_userprofiles_rest_userprofiles__["b" /* UserProfile */]();
    }
    UserProfileDetailsPage.prototype.ionViewDidLoad = function () {
        this.userProfile = this.navParams.get('userProfile');
    };
    UserProfileDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-profile-details',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\userprofiles\user-profile-details\user-profile-details.html"*/'<!--\n\n  Generated template for the UserProfileDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      First Name: {{userProfile.firstname}}\n\n    </ion-card-content>\n\n    <ion-card-content>\n\n       Last Name:  {{userProfile.lastname}}\n\n    </ion-card-content>\n\n    <ion-card-content>\n\n       Cell Phone:  {{userProfile.cellphone}}\n\n    </ion-card-content>\n\n	   <ion-card-content>\n\n       Email:  {{userProfile.email}}\n\n    </ion-card-content>\n\n    <ion-card-content>\n\n       Birthday:  {{userProfile.birthday}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\userprofiles\user-profile-details\user-profile-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], UserProfileDetailsPage);
    return UserProfileDetailsPage;
}());

//# sourceMappingURL=user-profile-details.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_userprofiles_rest_userprofiles__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserProfilePage = /** @class */ (function () {
    function AddUserProfilePage(navCtrl, view, fb) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.fb = fb;
        this.newUserProfile = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_userprofiles_rest_userprofiles__["b" /* UserProfile */]();
        this.inUserProfile = this.fb.group({
            firstname: ['firstname'],
            lastname: ['lastname'],
            cellphone: ['cellphone'],
            email: ['email'],
            birthday: ['birthday']
        });
    }
    AddUserProfilePage.prototype.saveUserProfile = function () {
        this.newUserProfile.firstname = this.inUserProfile.value.firstname;
        this.newUserProfile.lastname = this.inUserProfile.value.lastname;
        this.newUserProfile.cellphone = this.inUserProfile.value.cellphone;
        this.newUserProfile.email = this.inUserProfile.value.email;
        this.newUserProfile.birthday = this.inUserProfile.value.birthday;
        this.view.dismiss(this.newUserProfile);
    };
    AddUserProfilePage.prototype.close = function () {
        this.view.dismiss();
    };
    AddUserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-user-profile',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\userprofiles\add-user-profile\add-user-profile.html"*/'<!--\n\n  Generated template for the AddUserProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar color="secondary">\n\n    <ion-title>\n\n      Add Family Address Book entry\n\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <form [formGroup]="inUserProfile" (ngsubmit)="saveUserProfile()"  >\n\n      <ion-item>\n\n        <ion-label floating>First Name</ion-label>\n\n        <ion-input type="text" formControlName="firstname"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Last Name</ion-label>\n\n        <ion-input type="text" formControlName="lastname"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Cell Number</ion-label>\n\n        <ion-input type="text" formControlName="cellphone"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Birthday</ion-label>\n\n        <ion-input type="text" formControlName="birthday"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n  <button full ion-button color="secondary" (click)="saveUserProfile()">Save</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\userprofiles\add-user-profile\add-user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AddUserProfilePage);
    return AddUserProfilePage;
}());

//# sourceMappingURL=add-user-profile.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_timelines_rest_timelines__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimelinesPage = /** @class */ (function () {
    function TimelinesPage(navCtrl, navParams, modalCtrl, restProvider, mySessionToken) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.mySessionToken = mySessionToken;
        this.timelines = [];
        this.newTimeline = new __WEBPACK_IMPORTED_MODULE_3__providers_rest_timelines_rest_timelines__["b" /* Timeline */];
        this.userProfile = this.navParams.get('userProfile');
        this.token = this.navParams.get('token');
        this.newTimeline.name = this.userProfile.firstname;
        this.restProvider.getTimelines(this.token).subscribe(function (timelines) {
            _this.timelines = timelines;
        }, function (error) {
            console.log('get timelines failed: ');
        });
    }
    TimelinesPage.prototype.ionViewDidLoad = function () {
    };
    TimelinesPage.prototype.resetNewTimeline = function () {
        this.newTimeline.photoURL = "";
        this.newTimeline.videoid = 0;
        this.newTimeline.message = "";
    };
    // add an entry to the time line
    TimelinesPage.prototype.addTimeline = function () {
        var _this = this;
        this.restProvider.createTimeline(this.token, this.newTimeline)
            .subscribe(function (timeline) { return _this.timelines.push(timeline); }, function (error) {
            console.log('add timeline failed: ', _this.newTimeline);
        });
        this.resetNewTimeline();
    };
    TimelinesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timelines',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\timelines\timelines.html"*/' \n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Your Family Timeline</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n     <ion-item *ngFor="let timeline of timelines"  >\n\n        <ion-row>\n\n            <ion-col   *ngIf="timeline.photoURL"> \n\n                {{timeline.name }} has added:\n\n             <a href="{{timeline.photoURL }}" target="blank">{{timeline.photoURL }}</a>\n\n            </ion-col>\n\n\n\n            <ion-col   *ngIf="timeline.message">  \n\n                {{timeline.name }} has added:\n\n                {{timeline.message }}\n\n            </ion-col>\n\n\n\n            <ion-col   *ngIf="timeline.videoid"> \n\n                {{timeline.name }} has added:\n\n                {{timeline.videoid }}\n\n            </ion-col>\n\n        </ion-row>\n\n     </ion-item> \n\n  </ion-list>\n\n     \n\n\n\n  <ion-card>\n\n      <ion-card-header>\n\n          Enter a text comment, add a photo album URL, or a video ID\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          <ion-list>\n\n              <ion-item>\n\n                <ion-label floating>Photo Album</ion-label>\n\n                <ion-input type="text" [(ngModel)]="newTimeline.photoURL"></ion-input>\n\n                <button ion-button color="primary" (click)="addPhotoURL()">Add a Photo URL</button>\n\n          \n\n              </ion-item>\n\n          \n\n              <ion-item>\n\n                <ion-label floating>Comment</ion-label>\n\n                <ion-input type="text" [(ngModel)]="newTimeline.message"></ion-input>\n\n                <button ion-button color="primary" (click)="addMessage()">Add a comment </button>\n\n              </ion-item>\n\n          \n\n              <ion-item>\n\n                <ion-label floating>Video Id</ion-label>\n\n                <ion-input type="text" [(ngModel)]="newTimeline.videoid">Add a video </ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <button ion-button color="primary" (click)="addTimeline()">Add entry </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\timelines\timelines.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_timelines_rest_timelines__["a" /* RestTimelinesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_token__["a" /* MySessionToken */]])
    ], TimelinesPage);
    return TimelinesPage;
}());

//# sourceMappingURL=timelines.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_users_rest_users__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, //private fb: FormBuilder,
        usersProvider, toastCtrl) {
        // this.userGroup = this.fb.group({
        //   members: this.fb.array([
        //     this.getInitialMembers()
        //   ])
        // });
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersProvider = usersProvider;
        this.toastCtrl = toastCtrl;
        //userGroup: FormGroup;
        this.userCreds = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_users_rest_users__["b" /* UserCredentials */]();
        this.token = navParams.get('token');
    }
    RegisterPage.prototype.submitRegistration = function () {
        var _this = this;
        // this.userCreds.created   -> rails fills in these two fields
        // this.userCreds.updated  
        this.userCreds.customer = 9001; //dummy value
        this.usersProvider.createUser(this.userCreds).subscribe(function (authToken) {
            var toast = _this.toastCtrl.create({
                message: 'User was added successfully',
                duration: 3000
            });
            toast.present();
            _this.navCtrl.pop();
        }, function (error) {
            console.log('registration failed: ', _this.userCreds);
        });
    };
    RegisterPage.prototype.gotologin = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\register\register.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form (ngSubmit)="submitRegistration()" #registerForm="ngForm">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="userCreds.name" required></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="userCreds.email" required></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="userCreds.password" required></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <button ion-button color="primary" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n\n  </form>\n\n\n\n \n\n  <button ion-button color="primary" click="gotologin()" >Login</button>\n\n\n\n</ion-content>\n\n\n\n<!--<ion-content>\n\n  <form [formGroup]="userGroup" (ngSubmit)="submitRegistration(userGroup)">\n\n    <ion-list>\n\n  <ion-list formArrayName="members" no-lines>\n\n    <div *ngFor="let member of userGroup.controls.members.controls; let i=index">\n\n      <div [formGroupName]="i">\n\n          <ion-item>\n\n            <ion-label stacked>Member {{ i + 1 }}</ion-label>\n\n            <ion-input type="text" formControlName="name" placeholder="Tara"></ion-input>\n\n            <ion-input type="text" formControlName="email" placeholder="taradevlin8@gmail.com"></ion-input>\n\n            <ion-input type="text" formControlName="password" placeholder="Enter a password"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="member.controls.name.invalid && member.controls.name.dirty" no-lines>\n\n            <p>Please enter a valid name for this member.</p>\n\n          </ion-item>\n\n          <ion-item *ngIf="member.controls.email.invalid && member.controls.name.dirty" no-lines>\n\n              <p>Please enter a valid email for this member.</p>\n\n            </ion-item>\n\n          <button ion-button outline full (click)="removeMember(i)" color="danger" type="button">Remove Member</button>\n\n        </div>\n\n    </div>\n\n  </ion-list>\n\n  <button ion-button outline full (click)="addMember()" color="secondary" type="button">Add Member</button>\n\n</ion-list>\n\n  <button ion-button full type="submit" [disabled]="userGroup.invalid">Submit</button>\n\n  </form>\n\n</ion-content>-->'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_users_rest_users__["a" /* RestUsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

// export interface UserGroup {
//   name: string;
//   email: string;
//   password: string;
// } 
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-chat/add-chat.module": [
		310,
		1
	],
	"../pages/add-timeline/add-timeline.module": [
		311,
		0
	],
	"../pages/calentries/add-calentry/add-calentry.module": [
		312,
		18
	],
	"../pages/calentries/calentries/calentries.module": [
		314,
		17
	],
	"../pages/calentries/calentry-details/calentry-details.module": [
		313,
		16
	],
	"../pages/calentries/update-calentry/update-calentry.module": [
		315,
		15
	],
	"../pages/chat/chat.module": [
		316,
		14
	],
	"../pages/groups/groups.module": [
		317,
		13
	],
	"../pages/mainpage/mainpage.module": [
		318,
		12
	],
	"../pages/register/register.module": [
		319,
		11
	],
	"../pages/tasks/add-task/add-task.module": [
		320,
		10
	],
	"../pages/tasks/task-details/task-details.module": [
		321,
		9
	],
	"../pages/tasks/tasks/tasks.module": [
		322,
		8
	],
	"../pages/tasks/update-task/update-task.module": [
		323,
		7
	],
	"../pages/timelines/timelines.module": [
		325,
		6
	],
	"../pages/userprofiles/add-user-profile/add-user-profile.module": [
		324,
		5
	],
	"../pages/userprofiles/update-user-profile/update-user-profile.module": [
		326,
		4
	],
	"../pages/userprofiles/user-profile-details/user-profile-details.module": [
		327,
		3
	],
	"../pages/userprofiles/user-profiles/user-profiles.module": [
		328,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 179;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestGroupsProvider; });
/* unused harmony export Chat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestGroupsProvider = /** @class */ (function () {
    function RestGroupsProvider(httpClient, sessionToken) {
        this.httpClient = httpClient;
        console.log('Hello RestChatsProvider ');
        this.baseUrl = sessionToken.getBaseURL("chats");
    }
    /** GET chats from the server */
    RestGroupsProvider.prototype.getChats = function (sToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.get(this.baseUrl, { headers: headers });
    };
    // Sending a GET request to /chats/:id
    RestGroupsProvider.prototype.getChatById = function (sToken, chatId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var chatUrl = this.baseUrl + "/" + chatId;
        return this.httpClient.get(chatUrl, { headers: headers });
    };
    RestGroupsProvider.prototype.createChat = function (sToken, chat) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.post(this.baseUrl, chat, { headers: headers });
    };
    // Sending a PUT request to /chats/:id
    RestGroupsProvider.prototype.updateChat = function (sToken, chat) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var chatUrl = this.baseUrl + "/" + chat.id;
        return this.httpClient.put(chatUrl, chat, { headers: headers });
    };
    /** DELETE: delete the chat from the server */
    RestGroupsProvider.prototype.deleteChat = function (sToken, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var delurl = this.baseUrl + "/" + id;
        return this.httpClient.delete(delurl, { headers: headers });
    };
    RestGroupsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__token__["a" /* MySessionToken */]])
    ], RestGroupsProvider);
    return RestGroupsProvider;
}());

var Chat = /** @class */ (function () {
    function Chat() {
    }
    return Chat;
}());

//# sourceMappingURL=rest-groups.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestUsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserCredentials = /** @class */ (function () {
    function UserCredentials() {
    }
    return UserCredentials;
}());

var RestUsersProvider = /** @class */ (function () {
    function RestUsersProvider(httpClient, sessionToken) {
        this.httpClient = httpClient;
        console.log('Hello RestUsersProvider Provider');
        this.baseUsersUrl = sessionToken.getBaseURL("users");
        this.baseRegisterURL = sessionToken.getBaseURL("register");
    }
    RestUsersProvider.prototype.getAllUsers = function (sToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var getUrl = "" + this.baseUsersUrl;
        return this.httpClient.get(getUrl, { headers: headers });
    };
    RestUsersProvider.prototype.createUser = function (userCreds) {
        return this.httpClient.post(this.baseRegisterURL, userCreds);
    };
    RestUsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__token__["a" /* MySessionToken */]])
    ], RestUsersProvider);
    return RestUsersProvider;
}());

//# sourceMappingURL=rest-users.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainpage_mainpage__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(nav, restProvider, mySessionToken, formBuilder) {
        this.nav = nav;
        this.restProvider = restProvider;
        this.mySessionToken = mySessionToken;
        this.formBuilder = formBuilder;
        this.savedToken = "none";
        this.nav = nav; // barrydev@mail.com
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    }
    HomePage.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
            var myData = '{"email": "' + value.username + '", "password": "' + value.password + '"}';
            //  var myData = '{"email": "example@mail.com", "password": "123123123"}' ;
            this.restProvider.getAuthToken(myData)
                .subscribe(function (authToken) {
                //this.savedToken = authToken.auth_token;
                _this.mySessionToken.setMyAuthToken(authToken.auth_token).then(function (res) { _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__mainpage_mainpage__["a" /* MainPage */], {}); });
            }, function (error) {
                console.log('auth failed: ', myData);
            });
        }
    };
    HomePage.prototype.register = function (event) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.goToMain = function (event) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__mainpage_mainpage__["a" /* MainPage */], {});
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Keztra Family\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <h1>Welcome to Keztra Family Social Networking App</h1>\n\n      <p>  </p>\n\n      <h2>The private and secure social networking app for families  </h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n      <ion-card-content>\n\n        <p>If you are new to Keztra, please register</p>\n\n        <p>  </p>\n\n        <button ion-button color="primary" (click)="register()">Register </button>\n\n        <p>  </p>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n      <ion-card-content>\n\n        <h2>Login </h2>\n\n        <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n            <ion-item>\n\n                <ion-label floating>Email</ion-label>\n\n                <ion-input formControlName="username" type="text"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input formControlName="password" type="password"></ion-input>\n\n            </ion-item>\n\n\n\n            <button ion-button full color="primary" [disabled]="!authForm.valid" style="margin-top: 20px;" type="submit">Authorize</button>\n\n        </form>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_token__["a" /* MySessionToken */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_groups_rest_groups__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AddChatPage } from '../add-chat/add-chat';



var GroupsPage = /** @class */ (function () {
    function GroupsPage(navCtrl, modalCtrl, restProvider, mySessionToken) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.mySessionToken = mySessionToken;
        this.chats = [];
        this.mySessionToken.getMyAuthToken().then(function (stoken) {
            _this.token = stoken;
            _this.restProvider.getChats(_this.token).subscribe(function (chats) {
                _this.chats = chats;
            }, function (error) {
                console.log('get chatgroups failed: ');
            });
        });
    }
    GroupsPage.prototype.addGroup = function () {
        //this.navCtrl.push(AddChatPage, {token: this.token});
    };
    GroupsPage.prototype.joinGroup = function (chat) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], {
            chat: chat, token: this.token
        });
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\groups\groups.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Group Chats</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addGroup()">\n\n        <ion-icon name="add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let chat of chats">\n\n      {{chat.description}}\n\n      <ion-icon name="chatboxes" item-end (click)="joinGroup(chat)"></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\groups\groups.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_groups_rest_groups__["a" /* RestGroupsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_token__["a" /* MySessionToken */]])
    ], GroupsPage);
    return GroupsPage;
}());

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mainpage_mainpage__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tasks_tasks_tasks__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tasks_task_details_task_details__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tasks_add_task_add_task__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tasks_update_task_update_task__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_userprofiles_user_profiles_user_profiles__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_userprofiles_user_profile_details_user_profile_details__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_userprofiles_add_user_profile_add_user_profile__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_userprofiles_update_user_profile_update_user_profile__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_timelines_timelines__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_calentries_calentries_calentries__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_calentries_calentry_details_calentry_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_calentries_add_calentry_add_calentry__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_calentries_update_calentry_update_calentry__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_rest_tasks_rest_tasks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_groups_groups__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_rest_chats_rest_chats__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_rest_groups_rest_groups__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_rest_users_rest_users__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_rest_timelines_rest_timelines__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_rest_userprofiles_rest_userprofiles__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_rest_calentries_rest_calentries__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { AddChatPage } from '../pages/add-chat/add-chat';


















//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mainpage_mainpage__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tasks_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tasks_task_details_task_details__["a" /* TaskDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tasks_add_task_add_task__["a" /* AddTaskPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tasks_update_task_update_task__["a" /* UpdateTaskPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_calentries_calentries_calentries__["a" /* CalentriesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_calentries_calentry_details_calentry_details__["a" /* CalentryDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_calentries_add_calentry_add_calentry__["a" /* AddCalentryPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_calentries_update_calentry_update_calentry__["a" /* UpdateCalentryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_userprofiles_user_profiles_user_profiles__["a" /* UserProfilesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_userprofiles_user_profile_details_user_profile_details__["a" /* UserProfileDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_userprofiles_add_user_profile_add_user_profile__["a" /* AddUserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_userprofiles_update_user_profile_update_user_profile__["a" /* UpdateUserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_timelines_timelines__["a" /* TimelinesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
                //AddChatPage,
                __WEBPACK_IMPORTED_MODULE_30__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_userprofiles_user_profiles_user_profiles__["a" /* UserProfilesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_userprofiles_user_profile_details_user_profile_details__["a" /* UserProfileDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_userprofiles_add_user_profile_add_user_profile__["a" /* AddUserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_userprofiles_update_user_profile_update_user_profile__["a" /* UpdateUserProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-chat/add-chat.module#AddChatPageModule', name: 'AddChatPage', segment: 'add-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-timeline/add-timeline.module#AddTimelinePageModule', name: 'AddTimelinePage', segment: 'add-timeline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calentries/add-calentry/add-calentry.module#AddCalentryPageModule', name: 'AddCalentryPage', segment: 'add-calentry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calentries/calentry-details/calentry-details.module#CalentryDetailsPageModule', name: 'CalentryDetailsPage', segment: 'calentry-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calentries/calentries/calentries.module#CalentriesPageModule', name: 'CalentriesPage', segment: 'calentries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calentries/update-calentry/update-calentry.module#UpdateCalentryPageModule', name: 'UpdateCalentryPage', segment: 'update-calentry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groups/groups.module#ChatPageModule', name: 'GroupsPage', segment: 'groups', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mainpage/mainpage.module#MainpagePageModule', name: 'MainPage', segment: 'mainpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasks/add-task/add-task.module#AddTaskPageModule', name: 'AddTaskPage', segment: 'add-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasks/task-details/task-details.module#TaskDetailsPageModule', name: 'TaskDetailsPage', segment: 'task-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasks/tasks/tasks.module#TasksPageModule', name: 'TasksPage', segment: 'tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasks/update-task/update-task.module#UpdateTaskPageModule', name: 'UpdateTaskPage', segment: 'update-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofiles/add-user-profile/add-user-profile.module#AddUserProfilePageModule', name: 'AddUserProfilePage', segment: 'add-user-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timelines/timelines.module#TimelinesPageModule', name: 'TimelinesPage', segment: 'timelines', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofiles/update-user-profile/update-user-profile.module#UpdateUserProfilePageModule', name: 'UpdateUserProfilePage', segment: 'update-user-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofiles/user-profile-details/user-profile-details.module#UserProfileDetailsPageModule', name: 'UserProfileDetailsPage', segment: 'user-profile-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofiles/user-profiles/user-profiles.module#UserProfilesPageModule', name: 'UserProfilesPage', segment: 'user-profiles', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
                //AddChatPage,
                __WEBPACK_IMPORTED_MODULE_30__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mainpage_mainpage__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tasks_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tasks_task_details_task_details__["a" /* TaskDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tasks_add_task_add_task__["a" /* AddTaskPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tasks_update_task_update_task__["a" /* UpdateTaskPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_calentries_calentries_calentries__["a" /* CalentriesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_calentries_calentry_details_calentry_details__["a" /* CalentryDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_calentries_add_calentry_add_calentry__["a" /* AddCalentryPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_calentries_update_calentry_update_calentry__["a" /* UpdateCalentryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_userprofiles_user_profiles_user_profiles__["a" /* UserProfilesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_userprofiles_user_profile_details_user_profile_details__["a" /* UserProfileDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_userprofiles_add_user_profile_add_user_profile__["a" /* AddUserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_userprofiles_update_user_profile_update_user_profile__["a" /* UpdateUserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_timelines_timelines__["a" /* TimelinesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_rest_tasks_rest_tasks__["a" /* RestTasksProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_31__providers_rest_chats_rest_chats__["b" /* RestChatsProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_rest_groups_rest_groups__["a" /* RestGroupsProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_rest_users_rest_users__["a" /* RestUsersProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_rest_userprofiles_rest_userprofiles__["a" /* RestUserProfilesProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_rest_timelines_rest_timelines__["a" /* RestTimelinesProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_rest_calentries_rest_calentries__["b" /* RestCalentriesProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_token__["a" /* MySessionToken */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, alertCtrl, onesignal, statusBar, splashScreen) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.onesignal = onesignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (platform.is('cordova')) {
                _this.setupPush();
            }
        });
    }
    MyApp.prototype.setupPush = function () {
        var _this = this;
        //changed to onesignal app id found on onesignal.com and project number from console.cloud.google.com (android only)
        this.onesignal.startInit('8437b527-c7fe-4d62-9edd-2cb0aee564b0', '475578412140');
        this.onesignal.handleNotificationOpened().subscribe(function (data) {
            console.log('We opened a push', data);
            var message = data.notification.payload.body;
            var title = data.notification.payload.title;
            var alert = _this.alertCtrl.create({
                title: title,
                subTitle: message,
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel'
                    }
                ]
            });
            alert.present();
        });
        this.onesignal.handleNotificationReceived().subscribe(function (data) {
            console.log('We received a push', data);
        });
        this.onesignal.endInit();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

// restAPIkey:  'NDY5ZDJhZmQtZGFlOC00MzFlLWFmYjktYTQ3MzZjN2RmMjYw' 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestUserProfilesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestUserProfilesProvider = /** @class */ (function () {
    function RestUserProfilesProvider(httpClient, sessionToken) {
        this.httpClient = httpClient;
        console.log('Hello RestUserProfilesProvider Provider');
        this.baseUserProfileUrl = sessionToken.getBaseURL("userinfos");
    }
    /** GET tasks from the server */
    RestUserProfilesProvider.prototype.getUserProfiles = function (sToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.get(this.baseUserProfileUrl, { headers: headers });
    };
    // Get the user profile of the logged-in user.
    RestUserProfilesProvider.prototype.getUserProfile = function (sToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var taskUrl = this.baseUserProfileUrl + "/999";
        return this.httpClient.get(taskUrl, { headers: headers });
    };
    // Sending a GET request to /tasks/:id
    RestUserProfilesProvider.prototype.getUserProfileById = function (sToken, userProfileId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var taskUrl = this.baseUserProfileUrl + "/" + userProfileId;
        return this.httpClient.get(taskUrl, { headers: headers });
    };
    RestUserProfilesProvider.prototype.createUserProfile = function (sToken, userProfile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.post(this.baseUserProfileUrl, userProfile, { headers: headers });
    };
    // Sending a PUT request to /tasks/:id
    RestUserProfilesProvider.prototype.updateUserProfile = function (sToken, userProfile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var taskUrl = this.baseUserProfileUrl + "/" + userProfile.id;
        return this.httpClient.put(taskUrl, userProfile, { headers: headers });
    };
    /** DELETE: delete the task from the server */
    RestUserProfilesProvider.prototype.deleteUserProfile = function (sToken, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var delurl = this.baseUserProfileUrl + "/" + id;
        return this.httpClient.delete(delurl, { headers: headers });
    };
    RestUserProfilesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__token__["a" /* MySessionToken */]])
    ], RestUserProfilesProvider);
    return RestUserProfilesProvider;
}());

var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());

//# sourceMappingURL=rest-userprofiles.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RestCalentriesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calentry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestCalentriesProvider = /** @class */ (function () {
    function RestCalentriesProvider(httpClient, sessionToken) {
        this.httpClient = httpClient;
        console.log('Hello RestCalentriesProvider Provider');
        this.baseCalentryUrl = sessionToken.getBaseURL("calentries");
    }
    /** GET calentries from the server */
    RestCalentriesProvider.prototype.getCalentries = function (sToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.get(this.baseCalentryUrl, { headers: headers });
    };
    // Sending a GET request to /calentries/:id
    RestCalentriesProvider.prototype.getCalentryById = function (sToken, calentryId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var calentryUrl = this.baseCalentryUrl + "/" + calentryId;
        return this.httpClient.get(calentryUrl, { headers: headers });
    };
    RestCalentriesProvider.prototype.createCalentry = function (sToken, calentry) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.post(this.baseCalentryUrl, calentry, { headers: headers });
    };
    // Sending a PUT request to /calentries/:id
    RestCalentriesProvider.prototype.updateCalentry = function (sToken, calentry) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var calentryUrl = this.baseCalentryUrl + "/" + calentry.id;
        return this.httpClient.put(calentryUrl, calentry, { headers: headers });
    };
    /** DELETE: delete the calentry from the server */
    RestCalentriesProvider.prototype.deleteCalentry = function (sToken, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var delurl = this.baseCalentryUrl + "/" + id;
        return this.httpClient.delete(delurl, { headers: headers });
    };
    RestCalentriesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__token__["a" /* MySessionToken */]])
    ], RestCalentriesProvider);
    return RestCalentriesProvider;
}());

var Calentry = /** @class */ (function () {
    function Calentry() {
    }
    return Calentry;
}());

//# sourceMappingURL=rest-calentries.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestTasksProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Task; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestTasksProvider = /** @class */ (function () {
    function RestTasksProvider(httpClient, sessionToken) {
        this.httpClient = httpClient;
        console.log('Hello RestTasksProvider Provider');
        this.baseTaskUrl = sessionToken.getBaseURL("tasks");
    }
    /** GET tasks from the server */
    RestTasksProvider.prototype.getTasks = function (sToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.get(this.baseTaskUrl, { headers: headers });
    };
    // Sending a GET request to /tasks/:id
    RestTasksProvider.prototype.getTaskById = function (sToken, taskId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var taskUrl = this.baseTaskUrl + "/" + taskId;
        return this.httpClient.get(taskUrl, { headers: headers });
    };
    RestTasksProvider.prototype.createTask = function (sToken, task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.post(this.baseTaskUrl, task, { headers: headers });
    };
    // Sending a PUT request to /tasks/:id
    RestTasksProvider.prototype.updateTask = function (sToken, task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var taskUrl = this.baseTaskUrl + "/" + task.id;
        return this.httpClient.put(taskUrl, task, { headers: headers });
    };
    /** DELETE: delete the task from the server */
    RestTasksProvider.prototype.deleteTask = function (sToken, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var delurl = this.baseTaskUrl + "/" + id;
        return this.httpClient.delete(delurl, { headers: headers });
    };
    RestTasksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__token__["a" /* MySessionToken */]])
    ], RestTasksProvider);
    return RestTasksProvider;
}());

var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());

//# sourceMappingURL=rest-tasks.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* unused harmony export AuthToken */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
  tutorial on sqlite
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(httpClient, sessionToken) {
        this.httpClient = httpClient;
        this.myAuthToken = 'no value';
        this.keztraAuthURL = sessionToken.getBaseURL("authenticate");
    }
    /** POST credentials to get auth token from the server */
    RestProvider.prototype.getAuthToken = function (body) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this.httpClient.post(this.keztraAuthURL, body, httpOptions);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__token__["a" /* MySessionToken */]])
    ], RestProvider);
    return RestProvider;
}());

var AuthToken = /** @class */ (function () {
    function AuthToken() {
    }
    return AuthToken;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_chats_rest_chats__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, modalCtrl, chatsProvider, mySessionToken) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.chatsProvider = chatsProvider;
        this.mySessionToken = mySessionToken;
        this.messages = [];
        this.userProfile = this.navParams.get('userProfile');
        this.token = this.navParams.get('token');
        this.newPost = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_chats_rest_chats__["a" /* Post */];
        this.newPost.customer = this.userProfile.customer;
        this.newPost.userid = this.userProfile.id;
        this.newPost.name = this.userProfile.firstname;
        this.chatsProvider.getPosts(this.userProfile.customer, this.token).subscribe(function (posts) {
            _this.messages = posts;
        }, function (error) {
            console.log('get posts failed: ');
        });
    }
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        this.chatsProvider.createPost(this.token, this.newPost).subscribe(function (post) {
            _this.messages.push(post);
            _this.newPost.message = '';
            // this.content.scrollToBottom();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\chat\chat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title> Family Chat</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n \n\n<ion-content #content padding>\n\n  <ion-grid>\n\n    <!--<ion-row *ngFor="let message of messages | async">-->\n\n    <ion-row *ngFor="let message of messages">\n\n      <ion-col col-9 col-md-6 *ngIf="message.customer !== currentUserId" class="message other-message">\n\n        <span> {{ message.name }}:</span>\n\n        <span>  {{ message.message }}</span>\n\n        <div class="time">{{ message.created_at| date:\'short\' }}</div>\n\n      </ion-col>\n\n\n\n      <ion-col offset-3 offset-md-6 col-9 col-md-6 *ngIf="message.customer === currentUserId" class="message my-message">\n\n        <span>{{  message.name }}:</span>\n\n        <span>{{ message.message }}</span>\n\n        <div class="time">{{ message.created_at | date:\'short\' }}</div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<!-- TODO: ADD EXITCHAT() call-->\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-row no-padding align-items-center>\n\n      <ion-col col-10>\n\n        <ion-item no-lines>\n\n          <ion-input type="text" placeholder="Message" [(ngModel)]="newPost.message"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2 text-center>\n\n        <button ion-button full icon-only clear color="primary" [disabled]="newPost.message === \'\'" class="msg-btn" (click)="sendMessage()">\n\n          <ion-icon name="ios-send"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_chats_rest_chats__["b" /* RestChatsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_token__["a" /* MySessionToken */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_userprofiles_rest_userprofiles__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateUserProfilePage = /** @class */ (function () {
    function UpdateUserProfilePage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.newUserProfile = new __WEBPACK_IMPORTED_MODULE_2__providers_rest_userprofiles_rest_userprofiles__["b" /* UserProfile */]();
    }
    UpdateUserProfilePage.prototype.ionViewDidLoad = function () {
        this.newUserProfile = this.navParams.get('userProfile');
    };
    UpdateUserProfilePage.prototype.saveUserProfile = function () {
        this.view.dismiss(this.newUserProfile);
    };
    UpdateUserProfilePage.prototype.close = function () {
        this.view.dismiss();
    };
    UpdateUserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-user-profile',template:/*ion-inline-start:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\userprofiles\update-user-profile\update-user-profile.html"*/'<ion-header>\n\n  <ion-toolbar color="secondary">\n\n    <ion-title> Update User Profile</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>First Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newUserProfile.firstname"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Last Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newUserProfile.lastname"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Address</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newUserProfile.address"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Cell Number</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newUserProfile.cellphone"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newUserProfile.email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Birthday</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newUserProfile.birthday"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>userid</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newUserProfile.userid"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>customer</ion-label>\n\n      <ion-input type="text" [(ngModel)]="newUserProfile.customer"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button full ion-button color="secondary" (click)="saveUserProfile()">Save</button>\n\n\n\n</ion-content>\n\n\n\n '/*ion-inline-end:"C:\Users\Barry\Documents\ionicProjects\SocialApp\src\pages\userprofiles\update-user-profile\update-user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], UpdateUserProfilePage);
    return UpdateUserProfilePage;
}());

//# sourceMappingURL=update-user-profile.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RestChatsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestChatsProvider = /** @class */ (function () {
    function RestChatsProvider(httpClient, sessionToken) {
        this.httpClient = httpClient;
        console.log('Hello RestChatsProvider Provider');
        this.baseChatUrl = sessionToken.getBaseURL("posts");
    }
    RestChatsProvider.prototype.getPosts = function (chatId, sToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var getUrl = this.baseChatUrl + "?chatid=" + chatId;
        return this.httpClient.get(getUrl, { headers: headers });
    };
    RestChatsProvider.prototype.getChatMessages = function (sToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.get(this.baseChatUrl, { headers: headers });
    };
    RestChatsProvider.prototype.getChatMessageById = function (sToken, chatId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var chatURL = this.baseChatUrl + "/" + chatId;
        return this.httpClient.get(chatURL, { headers: headers });
    };
    RestChatsProvider.prototype.createPost = function (sToken, post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.post(this.baseChatUrl, post, { headers: headers });
    };
    RestChatsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__token__["a" /* MySessionToken */]])
    ], RestChatsProvider);
    return RestChatsProvider;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());

//# sourceMappingURL=rest-chats.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestTimelinesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestTimelinesProvider = /** @class */ (function () {
    function RestTimelinesProvider(httpClient, sessionToken) {
        this.httpClient = httpClient;
        console.log('Hello RestTimelinesProvider Provider');
        this.baseTimelineUrl = sessionToken.getBaseURL("timelines");
    }
    RestTimelinesProvider.prototype.getTimelines = function (sToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.get(this.baseTimelineUrl, { headers: headers });
    };
    // Sending a GET request to /timelines/:id
    RestTimelinesProvider.prototype.getTimelineById = function (sToken, timelineId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var timelineUrl = this.baseTimelineUrl + "/" + timelineId;
        return this.httpClient.get(timelineUrl, { headers: headers });
    };
    RestTimelinesProvider.prototype.createTimeline = function (sToken, timeline) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        return this.httpClient.post(this.baseTimelineUrl, timeline, { headers: headers });
    };
    // Sending a PUT request to /timelines/:id
    RestTimelinesProvider.prototype.updateTimeline = function (sToken, timeline) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var timelineUrl = this.baseTimelineUrl + "/" + timeline.id;
        return this.httpClient.put(timelineUrl, timeline, { headers: headers });
    };
    /** DELETE: delete the timeline from the server */
    RestTimelinesProvider.prototype.deleteTimeline = function (sToken, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', sToken);
        var delurl = this.baseTimelineUrl + "/" + id;
        return this.httpClient.delete(delurl, { headers: headers });
    };
    RestTimelinesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__token__["a" /* MySessionToken */]])
    ], RestTimelinesProvider);
    return RestTimelinesProvider;
}());

var Timeline = /** @class */ (function () {
    function Timeline() {
    }
    return Timeline;
}());

//# sourceMappingURL=rest-timelines.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map