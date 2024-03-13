(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marquisedeadwiler/dev/angular-weather-app/src/main.ts */"zUnb");


/***/ }),

/***/ "0Vfr":
/*!*****************************************************!*\
  !*** ./src/app/core/api/openweather-api.service.ts ***!
  \*****************************************************/
/*! exports provided: OpenWeatherApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWeatherApiService", function() { return OpenWeatherApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_enums_units_measurement_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/enums/units-measurement.enum */ "pfDZ");
/* harmony import */ var _openweather_mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openweather-mock.data */ "rzXT");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class OpenWeatherApiService {
    constructor(http) {
        this.http = http;
        this.currentWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
        this.airPollutionApiUrl = 'https://api.openweathermap.org/data/2.5/air_pollution?';
        this.reverseGeocoderUrl = 'https://api.openweathermap.org/geo/1.0/reverse?';
    }
    getCurrentAndForecastWeather(lat, lon, units = _shared_enums_units_measurement_enum__WEBPACK_IMPORTED_MODULE_3__["UnitsMeasurement"].imperial) {
        return this.http.get(`${this.currentWeatherApiUrl}lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].openWeatherApiKey}`);
    }
    getStaticCurrentAndForecastWeather(units = _shared_enums_units_measurement_enum__WEBPACK_IMPORTED_MODULE_3__["UnitsMeasurement"].imperial) {
        if (units === _shared_enums_units_measurement_enum__WEBPACK_IMPORTED_MODULE_3__["UnitsMeasurement"].imperial) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_openweather_mock_data__WEBPACK_IMPORTED_MODULE_4__["staticWeatherDataInFahrenheit"]);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_openweather_mock_data__WEBPACK_IMPORTED_MODULE_4__["staticWeatherDataInCelsius"]);
    }
    getAirPollutionInfo(lat, lon) {
        return this.http.get(`${this.airPollutionApiUrl}lat=${lat}&lon=${lon}&appid=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].openWeatherApiKey}`);
    }
    getStaticAirPollutionInfo() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_openweather_mock_data__WEBPACK_IMPORTED_MODULE_4__["staticAirPollutionData"]);
    }
    getLocationNameByCoords(lat, lon) {
        return this.http.get(`${this.reverseGeocoderUrl}lat=${lat}&lon=${lon}&appid=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].openWeatherApiKey}`);
    }
}
OpenWeatherApiService.ɵfac = function OpenWeatherApiService_Factory(t) { return new (t || OpenWeatherApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
OpenWeatherApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OpenWeatherApiService, factory: OpenWeatherApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenWeatherApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "0yAT":
/*!**********************************************!*\
  !*** ./src/app/core/dialog/dialog.module.ts ***!
  \**********************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-dialog/loading-dialog.component */ "mIE2");
/* harmony import */ var _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-dialog/error-dialog.component */ "thP3");
/* harmony import */ var _agreement_dialog_agreement_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agreement-dialog/agreement-dialog.component */ "5zS4");
/* harmony import */ var _app_update_dialog_app_update_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-update-dialog/app-update-dialog.component */ "M3L0");











class DialogModule {
}
DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DialogModule });
DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DialogModule, { declarations: [_loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_6__["LoadingDialogComponent"], _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], _agreement_dialog_agreement_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AgreementDialogComponent"], _app_update_dialog_app_update_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AppUpdateDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_6__["LoadingDialogComponent"], _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], _agreement_dialog_agreement_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AgreementDialogComponent"], _app_update_dialog_app_update_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AppUpdateDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "2o/p":
/*!**************************************************************************!*\
  !*** ./src/app/core/dialog/agreement-dialog/agreement-dialog.service.ts ***!
  \**************************************************************************/
/*! exports provided: AgreementDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementDialogService", function() { return AgreementDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _agreement_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agreement-dialog.component */ "5zS4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class AgreementDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    get dialogReference() {
        return this.dialogRef;
    }
    openDialog() {
        this.dialogRef = this.dialog.open(_agreement_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AgreementDialogComponent"], {
            data: undefined,
            maxHeight: '100vh',
            width: '540px',
            maxWidth: '100vw',
            disableClose: true,
            hasBackdrop: false
        });
    }
}
AgreementDialogService.ɵfac = function AgreementDialogService_Factory(t) { return new (t || AgreementDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
AgreementDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AgreementDialogService, factory: AgreementDialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgreementDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "4QjC":
/*!*******************************************************!*\
  !*** ./src/app/core/errors/http-error.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/error-dialog/error-dialog.service */ "BSic");
/* harmony import */ var _dialog_loading_dialog_loading_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/loading-dialog/loading-dialog.service */ "wSPy");






class HttpErrorInterceptor {
    constructor(errorDialogService, loadingDialogService) {
        this.errorDialogService = errorDialogService;
        this.loadingDialogService = loadingDialogService;
    }
    intercept(req, next) {
        this.loadingDialogService.openDialog();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            var _a;
            this.errorDialogService.openDialog((_a = error.message) !== null && _a !== void 0 ? _a : JSON.stringify(error), error.status);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(() => error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.loadingDialogService.hideDialog();
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ErrorDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dialog_loading_dialog_loading_dialog_service__WEBPACK_IMPORTED_MODULE_4__["LoadingDialogService"])); };
HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ErrorDialogService"] }, { type: _dialog_loading_dialog_loading_dialog_service__WEBPACK_IMPORTED_MODULE_4__["LoadingDialogService"] }]; }, null); })();


/***/ }),

/***/ "5zS4":
/*!****************************************************************************!*\
  !*** ./src/app/core/dialog/agreement-dialog/agreement-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: AgreementDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementDialogComponent", function() { return AgreementDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class AgreementDialogComponent {
}
AgreementDialogComponent.ɵfac = function AgreementDialogComponent_Factory(t) { return new (t || AgreementDialogComponent)(); };
AgreementDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgreementDialogComponent, selectors: [["app-agreement-dialog"]], decls: 14, vars: 2, consts: [["mat-dialog-title", "", 1, "heading-2"], ["src", "assets/icons/global/location-illustration.svg", "alt", "Location illustration agreement", "width", "320", "height", "180"], ["align", "end"], ["mat-stroked-button", "", "color", "warn", 3, "mat-dialog-close"], ["mat-stroked-button", "", "cdkFocusInitial", "", "color", "accent", 3, "mat-dialog-close"]], template: function AgreementDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Location access allows us to serve you with more accurate local forecasts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Regardless of whether or not you allow location access, you can always receive accurate local forecasts by manually entering a location. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " NOT NOW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ACCEPT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["[_nghost-%COMP%] {\n  color: var(--dashboard-dark) !important;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FncmVlbWVudC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0FBREoiLCJmaWxlIjoiYWdyZWVtZW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgY29sb3I6IHZhcigtLWRhc2hib2FyZC1kYXJrKSAhaW1wb3J0YW50O1xuXG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgreementDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agreement-dialog',
                templateUrl: './agreement-dialog.component.html',
                styleUrls: ['./agreement-dialog.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "9AUR":
/*!****************************************************************************!*\
  !*** ./src/app/core/dialog/app-update-dialog/app-update-dialog.service.ts ***!
  \****************************************************************************/
/*! exports provided: AppUpdateDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUpdateDialogService", function() { return AppUpdateDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_update_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-update-dialog.component */ "M3L0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class AppUpdateDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        return this.dialog.open(_app_update_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AppUpdateDialogComponent"], {
            disableClose: true,
            hasBackdrop: true
        });
    }
}
AppUpdateDialogService.ɵfac = function AppUpdateDialogService_Factory(t) { return new (t || AppUpdateDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
AppUpdateDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppUpdateDialogService, factory: AppUpdateDialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppUpdateDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    openWeatherApiKey: '09de6461addb73870ebbe79874fc6e18',
    firebase: {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID"
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


/***/ }),

/***/ "BSic":
/*!******************************************************************!*\
  !*** ./src/app/core/dialog/error-dialog/error-dialog.service.ts ***!
  \******************************************************************/
/*! exports provided: ErrorDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogService", function() { return ErrorDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _error_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-dialog.component */ "thP3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class ErrorDialogService {
    constructor(dialog) {
        this.dialog = dialog;
        this.opened = false;
    }
    openDialog(message, status) {
        if (!this.opened) {
            this.opened = true;
            const dialogRef = this.dialog.open(_error_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ErrorDialogComponent"], {
                data: { message, status },
                maxHeight: '100vh',
                width: '540px',
                maxWidth: '100vw',
                disableClose: true,
                hasBackdrop: true
            });
            dialogRef.afterClosed().subscribe(() => {
                this.opened = false;
            });
            return dialogRef;
        }
    }
}
ErrorDialogService.ɵfac = function ErrorDialogService_Factory(t) { return new (t || ErrorDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ErrorDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorDialogService, factory: ErrorDialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "I6GX":
/*!*****************************************************!*\
  !*** ./src/app/core/snackbar/snackbar.component.ts ***!
  \*****************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SnackbarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Online!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The App will work as usual. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SnackbarComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You are ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Offline!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Some features of the App may not work. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class SnackbarComponent {
    constructor(isConnected) {
        this.isConnected = isConnected;
    }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) { return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])); };
SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackbarComponent, selectors: [["app-snackbar"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "online", "medium-text-semibold"], [1, "offline", "medium-text-semibold"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SnackbarComponent_ng_container_0_Template, 6, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SnackbarComponent_ng_container_1_Template, 6, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isConnected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".online[_ngcontent-%COMP%] {\n  color: #013301;\n}\n\n.offline[_ngcontent-%COMP%] {\n  color: #5c0101;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NuYWNrYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGIiwiZmlsZSI6InNuYWNrYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9ubGluZSB7XG4gIGNvbG9yOiAjMDEzMzAxO1xufVxuLm9mZmxpbmUge1xuICBjb2xvcjogIzVjMDEwMTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-snackbar',
                templateUrl: './snackbar.component.html',
                styleUrls: ['./snackbar.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "M3L0":
/*!******************************************************************************!*\
  !*** ./src/app/core/dialog/app-update-dialog/app-update-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: AppUpdateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUpdateDialogComponent", function() { return AppUpdateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class AppUpdateDialogComponent {
}
AppUpdateDialogComponent.ɵfac = function AppUpdateDialogComponent_Factory(t) { return new (t || AppUpdateDialogComponent)(); };
AppUpdateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppUpdateDialogComponent, selectors: [["app-app-update-dialog"]], decls: 10, vars: 2, consts: [["mat-dialog-title", "", 1, "heading-2"], ["align", "end"], ["mat-stroked-button", "", "color", "warn", 3, "mat-dialog-close"], ["mat-stroked-button", "", "cdkFocusInitial", "", "color", "accent", 3, "mat-dialog-close"]], template: function AppUpdateDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Do you want to update the application with the latest version?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " NOT NOW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " ACCEPT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["[_nghost-%COMP%] {\n  color: var(--dashboard-dark) !important;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC11cGRhdGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7QUFBSiIsImZpbGUiOiJhcHAtdXBkYXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgY29sb3I6IHZhcigtLWRhc2hib2FyZC1kYXJrKSAhaW1wb3J0YW50O1xuXG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppUpdateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-update-dialog',
                templateUrl: './app-update-dialog.component.html',
                styleUrls: ['./app-update-dialog.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "R2Se":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return ["/locations"]; };
const _c2 = function () { return ["/map"]; };
const _c3 = function () { return ["/settings"]; };
class NavbarComponent {
    constructor() {
        this.isOpen = false;
    }
    close() {
        if (this.isOpen) {
            this.isOpen = !this.isOpen;
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 37, vars: 10, consts: [[1, "navbar"], [1, "navbar-nav"], [1, "logo"], [1, "nav-link"], [1, "link-text", "logo-text"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fad", "data-icon", "angle-double-right", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-angle-double-right", "fa-w-14", "fa-5x", 3, "click"], [1, "fa-group"], ["fill", "currentColor", "d", "M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z", 1, "fa-secondary"], ["fill", "currentColor", "d", "M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z", 1, "fa-primary"], ["routerLinkActive", "router-link-active", 1, "nav-item", 3, "click"], ["href", "/dashboard", "aria-label", "Dashboard route", 1, "nav-link", 3, "routerLink"], ["width", "32", "height", "32", "viewBox", "0 0 37 37", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "dashboard-icon"], ["width", "16", "height", "12", "fill", "#333866"], ["d", "M0 17H16V37H0V17Z", "fill", "#333866"], ["x", "21", "width", "16", "height", "20", "fill", "#333866"], ["x", "21", "y", "25", "width", "16", "height", "12", "fill", "#333866"], [1, "link-text"], ["href", "/locations", "aria-label", "Location route", 1, "nav-link", 3, "routerLink"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "location-icon"], ["d", "M16 2C13.0837 2.00344 10.2878 3.16347 8.22564 5.22563C6.16348 7.28778 5.00345 10.0837 5.00001 13C4.99652 15.3832 5.77499 17.7018 7.21601 19.6C7.21601 19.6 7.51601 19.995 7.56501 20.052L16 30L24.439 20.047C24.483 19.994 24.784 19.6 24.784 19.6L24.785 19.597C26.2253 17.6996 27.0034 15.3821 27 13C26.9966 10.0837 25.8365 7.28778 23.7744 5.22563C21.7122 3.16347 18.9163 2.00344 16 2V2ZM19.6 18L16 15.709L12.4 18L13 13.926L10 11.173L14.2 10.666L16 7L17.912 10.667L22 11.173L19 13.926L19.6 18Z", "fill", "#333866"], ["href", "/map", "aria-label", "Map route", 1, "nav-link", 3, "routerLink"], ["width", "32", "height", "32", "viewBox", "0 0 36 36", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "map-icon"], ["d", "M33.31 7.35L25 9.94V14H23V10.29L14 5.68V9H12V5.27L2.33001 9.27C2.23414 9.30904 2.1518 9.3753 2.09316 9.4606C2.03451 9.5459 2.00213 9.6465 2.00001 9.75V30.45C1.99945 30.5381 2.02086 30.625 2.06231 30.7027C2.10375 30.7805 2.16393 30.8466 2.23739 30.8953C2.31085 30.9439 2.39528 30.9735 2.48304 30.9813C2.5708 30.9891 2.65912 30.9749 2.74001 30.94L12 27.12V23H14V27.53L23 32.14V28H25V31.79L33.63 29.09C33.7381 29.0558 33.8324 28.9877 33.899 28.8959C33.9656 28.8041 34.001 28.6934 34 28.58V7.86C34.0008 7.77629 33.9817 7.6936 33.9443 7.6187C33.9069 7.54379 33.8524 7.4788 33.7851 7.42905C33.7177 7.37929 33.6396 7.34619 33.557 7.33245C33.4745 7.31871 33.3898 7.32472 33.31 7.35V7.35ZM14 21H12V17H14V21ZM14 15H12V11H14V15ZM25 26H23V22H25V26ZM25 20H23V16H25V20Z", "fill", "#333866"], ["href", "/settings", "aria-label", "Settings route", 1, "nav-link", 3, "routerLink"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "settings-icon"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11 7L13 6V2H19V6L21 7L24 4L28 8L25 11L26 13H30V19H26L25 21L28 24L24 28L21 25L19 26V30H13V26L11 25L8 28L4 24L7 21L6 19H2V13H6L7 11L4 8L8 4L11 7ZM20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16Z", "fill", "#333866"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Weather");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template__svg_svg_click_6_listener() { return ctx.isOpen = !ctx.isOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_10_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_19_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_25_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_31_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isOpen ? "open" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  height: 4rem;\n  background-color: var(--light-blue);\n  transition: width 200ms ease;\n  overflow: auto;\n  z-index: 1000;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  display: flex;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: none;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--dashboard-dark);\n  background: var(--blue);\n  font-size: 1.5rem;\n  letter-spacing: 0.3ch;\n  width: 100%;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  transition: transform var(--transition-speed);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child {\n  margin-top: 0;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.router-link-active[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border-bottom: 0.2em solid var(--dashboard-dark);\n  border-left: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  color: var(--dashboard-dark);\n  text-decoration: none;\n  filter: grayscale(100%) opacity(0.7);\n  transition: color var(--transition-speed);\n}\n.nav-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2rem;\n  min-width: 2rem;\n  margin: 0 1.5rem;\n  cursor: pointer;\n}\n.nav-link[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 1rem;\n}\n.fa-primary[_ngcontent-%COMP%] {\n  color: var(--vivid-yellow);\n}\n.fa-secondary[_ngcontent-%COMP%] {\n  color: var(--yellow);\n}\n.fa-primary[_ngcontent-%COMP%], .fa-secondary[_ngcontent-%COMP%] {\n  transition: color var(--transition-speed);\n}\n\n@media only screen and (min-width: 600px) {\n  .navbar[_ngcontent-%COMP%] {\n    top: 0;\n    width: 5rem;\n    height: 100vh;\n  }\n  .navbar.open[_ngcontent-%COMP%] {\n    width: 16rem;\n    z-index: 1100;\n  }\n  .navbar.open[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%] {\n    display: block;\n    transition: opacity var(--transition-speed);\n  }\n  .navbar.open[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    transform: rotate(-180deg);\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child {\n    margin-top: auto;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.router-link-active[_ngcontent-%COMP%] {\n    border-left: 0.2em solid var(--dashboard-dark);\n    border-bottom: none;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    height: 5rem;\n  }\n  .nav-link[_ngcontent-%COMP%]:hover {\n    filter: grayscale(0%) opacity(1);\n    background: var(--blue);\n    color: var(--dashboard-dark);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNOO0FBQ007RUFDRSx1QkFBQTtFQUNBLDZDQUFBO0FBQ1I7QUFHSTtFQUNFLFdBQUE7QUFETjtBQUdNO0VBQ0UsYUFBQTtBQURSO0FBSU07RUFDRSw2QkFBQTtFQUNBLGdEQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQVFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7QUFMRjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBTko7QUFVQTtFQUNFLDBCQUFBO0FBUEY7QUFTQTtFQUNFLG9CQUFBO0FBTkY7QUFRQTs7RUFFRSx5Q0FBQTtBQUxGO0FBUUEsa0JBQUE7QUFDQTtFQUNFO0lBQ0UsTUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VBTEY7RUFPRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBTEo7RUFPSTtJQUNFLGNBQUE7SUFDQSwyQ0FBQTtFQUxOO0VBT0k7SUFDRSwwQkFBQTtFQUxOO0VBU0U7SUFDRSxzQkFBQTtFQVBKO0VBU0k7SUFDRSxjQUFBO0VBUE47RUFXTTtJQUNFLGdCQUFBO0VBVFI7RUFXTTtJQUNFLDhDQUFBO0lBQ0EsbUJBQUE7RUFUUjs7RUFlQTtJQUNFLDJCQUFBO0lBQ0EsWUFBQTtFQVpGO0VBY0U7SUFDRSxnQ0FBQTtJQUNBLHVCQUFBO0lBQ0EsNEJBQUE7RUFaSjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDsgLy9cbiAgd2lkdGg6IDEwMHZ3OyAvL1xuICBoZWlnaHQ6IDRyZW07IC8vXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcyBlYXNlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogMTAwMDtcblxuICAubmF2YmFyLW5hdiB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5sb2dvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6IHZhcigtLWRhc2hib2FyZC1kYXJrKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4zY2g7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgc3ZnIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2LWl0ZW0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgICYucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMmVtIHNvbGlkIHZhcigtLWRhc2hib2FyZC1kYXJrKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDRyZW07XG4gIGNvbG9yOiB2YXIoLS1kYXNoYm9hcmQtZGFyayk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgwLjcpO1xuICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcblxuICBzdmcge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIG1pbi13aWR0aDogMnJlbTtcbiAgICBtYXJnaW46IDAgMS41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5saW5rLXRleHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cbn1cblxuLmZhLXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tdml2aWQteWVsbG93KTtcbn1cbi5mYS1zZWNvbmRhcnkge1xuICBjb2xvcjogdmFyKC0teWVsbG93KTtcbn1cbi5mYS1wcmltYXJ5LFxuLmZhLXNlY29uZGFyeSB7XG4gIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xufVxuXG4vKiBsYXJnZSBzY3JlZW5zICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgJi5vcGVuIHtcbiAgICAgIHdpZHRoOiAxNnJlbTtcbiAgICAgIHotaW5kZXg6IDExMDA7XG5cbiAgICAgIC5saW5rLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcbiAgICAgIH1cbiAgICAgIC5sb2dvIGRpdiBzdmcge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2YmFyLW5hdiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgJi5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAwLjJlbSBzb2xpZCB2YXIoLS1kYXNoYm9hcmQtZGFyayk7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogNXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpIG9wYWNpdHkoMSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXNoYm9hcmQtZGFyayk7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/common */ "FWDm");
/* harmony import */ var _core_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/snackbar/snackbar.component */ "I6GX");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _core_dialog_app_update_dialog_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/dialog/app-update-dialog/app-update-dialog.service */ "9AUR");
/* harmony import */ var _core_dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/dialog/error-dialog/error-dialog.service */ "BSic");
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-connection-service */ "36es");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "R2Se");
/* harmony import */ var _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/toolbar/toolbar.component */ "fTgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");












class AppComponent {
    constructor(swUpdate, appUpdateDialog, location, errorDialogService, connectionService, snackBar) {
        this.swUpdate = swUpdate;
        this.appUpdateDialog = appUpdateDialog;
        this.location = location;
        this.errorDialogService = errorDialogService;
        this.connectionService = connectionService;
        this.snackBar = snackBar;
        this.handleSwUpdateAvailable();
        this.handleSwUnrecoverableState();
        this.notifyConnectionStatus();
    }
    handleSwUpdateAvailable() {
        this.swUpdate.available.subscribe(event => {
            this.appUpdateDialog.openDialog().afterClosed().subscribe(agree => {
                if (agree) {
                    this.swUpdate.activateUpdate().then(() => this.location.reload());
                }
            });
        });
    }
    handleSwUnrecoverableState() {
        this.swUpdate.unrecoverable.subscribe(event => {
            this.errorDialogService.openDialog(`An error occurred that we cannot recover from: ${event.reason}. The App will be reloaded.`)
                .afterClosed()
                .subscribe(() => {
                this.location.reload();
            });
        });
    }
    notifyConnectionStatus() {
        this.connectionService.monitor().subscribe(isConnected => {
            this.snackBar.openFromComponent(_core_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"], {
                data: isConnected
            });
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_dialog_app_update_dialog_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_4__["AppUpdateDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__["LOCATION"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ErrorDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_connection_service__WEBPACK_IMPORTED_MODULE_6__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-areas: \"toolbar\" \"body\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUNFO0FBREoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJ0b29sYmFyXCJcbiAgICBcImJvZHlcIjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"] }, { type: _core_dialog_app_update_dialog_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_4__["AppUpdateDialogService"] }, { type: Location, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__["LOCATION"]]
            }] }, { type: _core_dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ErrorDialogService"] }, { type: ng_connection_service__WEBPACK_IMPORTED_MODULE_6__["ConnectionService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "V9d6":
/*!**********************************************************!*\
  !*** ./src/app/core/services/geolocation-api.service.ts ***!
  \**********************************************************/
/*! exports provided: GeolocationApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationApiService", function() { return GeolocationApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_web_apis_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-web-apis/permissions */ "0VHi");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dialog_agreement_dialog_agreement_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/agreement-dialog/agreement-dialog.service */ "2o/p");
/* harmony import */ var _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-web-apis/geolocation */ "ZcsS");
/* harmony import */ var _dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog/error-dialog/error-dialog.service */ "BSic");
/* harmony import */ var _web_storage_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web-storage-api.service */ "WL6p");
/* harmony import */ var _api_openweather_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/openweather-api.service */ "0Vfr");












class GeolocationApiService {
    constructor(agreementDialogService, geolocation$, errorDialogService, webStorageApiService, permissions, openWeatherApiService, permissionsSupport) {
        this.agreementDialogService = agreementDialogService;
        this.geolocation$ = geolocation$;
        this.errorDialogService = errorDialogService;
        this.webStorageApiService = webStorageApiService;
        this.permissions = permissions;
        this.openWeatherApiService = openWeatherApiService;
        this.permissionsSupport = permissionsSupport;
        this.geolocationStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.geolocationPositionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.geolocationNameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.subsNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.geocoder = new google.maps.Geocoder();
        this.geolocationPositionChanged$ = this.geolocationPositionSubject.asObservable();
        this.geolocationStatusChanged$ = this.geolocationStatusSubject.asObservable();
        this.geolocationNameChanged$ = this.geolocationNameSubject.asObservable();
        if (permissionsSupport) {
            this.permissions.state('geolocation').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.subsNotifier), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err))).subscribe(geolocationStatus => {
                this.geolocationStatus = geolocationStatus;
                this.geolocationStatusSubject.next(geolocationStatus);
                this.webStorageApiService.updateLocalStorageItem({ geolocationStatus });
            });
        }
    }
    load() {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const weatherData = this.webStorageApiService.getLocalStorageItem();
            if (weatherData) {
                if (weatherData.coords) {
                    this.setGeolocationPosition(weatherData.coords.lat, weatherData.coords.lng);
                    this.geolocationNameSubject.next(weatherData.geolocationName);
                }
                if (weatherData.geolocationStatus === 'granted') {
                    yield this.setGeolocation();
                }
                resolve(true);
            }
            else {
                this.agreementDialogService.openDialog();
                this.agreementDialogService.dialogReference.afterClosed()
                    .subscribe((agree) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (agree) {
                        yield this.setGeolocation();
                    }
                    resolve(true);
                }));
            }
        }));
    }
    requestGeolocation() {
        this.geolocation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise()
            .then(location => {
            this.saveGeolocationInLocalStorage(location);
            this.setGeolocationNameWithGoogleApi();
            this.geolocationPositionSubject.next();
        })
            .catch((error) => {
            this.showGeolocationErrorDenied(error);
        });
    }
    setGeolocation() {
        return new Promise(resolve => {
            this.geolocation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((location) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.saveGeolocationInLocalStorage(location);
                yield this.setGeolocationNameWithGoogleApi();
                resolve(true);
            }), (error) => {
                this.showGeolocationErrorDenied(error);
                resolve(false);
            });
        });
    }
    setGeolocationPosition(latitude, longitude) {
        this.geolocationPosition = {
            coords: { latitude, longitude },
            timestamp: new Date().getTime()
        };
        this.geolocationPositionSubject.next();
        this.webStorageApiService.updateLocalStorageItem({ coords: { lat: latitude, lng: longitude } });
    }
    getGeolocationPosition() {
        return this.geolocationPosition;
    }
    getGeolocationStatus() {
        return this.geolocationStatus;
    }
    setGeolocationName(locationName) {
        this.geolocationNameSubject.next(locationName);
        this.webStorageApiService.updateLocalStorageItem({ geolocationName: locationName });
    }
    ngOnDestroy() {
        this.subsNotifier.next();
        this.subsNotifier.complete();
    }
    setGeolocationNameWithGoogleApi() {
        return new Promise(resolve => {
            this.geocoder.geocode({
                location: {
                    lat: this.geolocationPosition.coords.latitude,
                    lng: this.geolocationPosition.coords.longitude
                }
            }, (geocoderResult, geocoderStatus) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (geocoderStatus === google.maps.GeocoderStatus.OK) {
                    const locationNameFiltered = geocoderResult.filter(result => result.types.includes('locality') ||
                        result.types.includes('postal_code') ||
                        result.types.includes('administrative_area_level_2'));
                    if (locationNameFiltered.length > 0) {
                        const locationName = locationNameFiltered[0].formatted_address;
                        this.geolocationNameSubject.next(locationName);
                        this.webStorageApiService.updateLocalStorageItem({ geolocationName: locationName });
                    }
                    else {
                        yield this.setGeolocationNameWithOpenWeatherApi();
                    }
                }
                resolve();
            }));
        });
    }
    setGeolocationNameWithOpenWeatherApi() {
        return new Promise(resolve => {
            this.openWeatherApiService.getLocationNameByCoords(this.geolocationPosition.coords.latitude, this.geolocationPosition.coords.longitude).subscribe(reverseGeo => {
                const firstMatch = reverseGeo[0];
                const locationName = firstMatch && firstMatch.state ? `${firstMatch === null || firstMatch === void 0 ? void 0 : firstMatch.name}, ${firstMatch === null || firstMatch === void 0 ? void 0 : firstMatch.state}` : `${firstMatch === null || firstMatch === void 0 ? void 0 : firstMatch.name}`;
                this.geolocationNameSubject.next(locationName);
                this.webStorageApiService.updateLocalStorageItem({ geolocationName: locationName });
                resolve(true);
            }, () => resolve(false));
        });
    }
    saveGeolocationInLocalStorage(location) {
        this.geolocationPosition = location;
        this.webStorageApiService.updateLocalStorageItem({
            geolocationStatus: 'granted',
            coords: { lat: location.coords.latitude, lng: location.coords.longitude }
        });
    }
    showGeolocationErrorDenied(error) {
        if (error.code === 1) { // code 1 - User denied Geolocation
            this.webStorageApiService.updateLocalStorageItem({ geolocationStatus: 'denied' });
        }
        this.errorDialogService.openDialog(error.message);
    }
}
GeolocationApiService.ɵfac = function GeolocationApiService_Factory(t) { return new (t || GeolocationApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_dialog_agreement_dialog_agreement_dialog_service__WEBPACK_IMPORTED_MODULE_5__["AgreementDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_web_storage_api_service__WEBPACK_IMPORTED_MODULE_8__["WebStorageApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ng_web_apis_permissions__WEBPACK_IMPORTED_MODULE_2__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_openweather_api_service__WEBPACK_IMPORTED_MODULE_9__["OpenWeatherApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ng_web_apis_permissions__WEBPACK_IMPORTED_MODULE_2__["PERMISSIONS_SUPPORT"])); };
GeolocationApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GeolocationApiService, factory: GeolocationApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeolocationApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _dialog_agreement_dialog_agreement_dialog_service__WEBPACK_IMPORTED_MODULE_5__["AgreementDialogService"] }, { type: _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"] }, { type: _dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogService"] }, { type: _web_storage_api_service__WEBPACK_IMPORTED_MODULE_8__["WebStorageApiService"] }, { type: _ng_web_apis_permissions__WEBPACK_IMPORTED_MODULE_2__["PermissionsService"] }, { type: _api_openweather_api_service__WEBPACK_IMPORTED_MODULE_9__["OpenWeatherApiService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ng_web_apis_permissions__WEBPACK_IMPORTED_MODULE_2__["PERMISSIONS_SUPPORT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "WL6p":
/*!**********************************************************!*\
  !*** ./src/app/core/services/web-storage-api.service.ts ***!
  \**********************************************************/
/*! exports provided: WebStorageApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageApiService", function() { return WebStorageApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/common */ "FWDm");



class WebStorageApiService {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.WEATHER_DATA = 'WEATHER_APP_DATA';
    }
    getLocalStorageItem() {
        return JSON.parse(this.localStorage.getItem(this.WEATHER_DATA));
    }
    setLocalStorageItem(value) {
        this.localStorage.setItem(this.WEATHER_DATA, JSON.stringify(Object.assign({}, value)));
    }
    updateLocalStorageItem(value) {
        const weatherDataParse = this.getLocalStorageItem();
        this.setLocalStorageItem(Object.assign(Object.assign({}, weatherDataParse), value));
    }
}
WebStorageApiService.ɵfac = function WebStorageApiService_Factory(t) { return new (t || WebStorageApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])); };
WebStorageApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebStorageApiService, factory: WebStorageApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebStorageApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: geoLocationFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoLocationFactory", function() { return geoLocationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/analytics */ "h+eY");
/* harmony import */ var _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-web-apis/geolocation */ "ZcsS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _core_services_geolocation_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/geolocation-api.service */ "V9d6");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");















function geoLocationFactory(geoLocationService) {
    return () => geoLocationService.load();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_7__["POSITION_OPTIONS"],
            useValue: { enableHighAccuracy: false, timeout: 4000, maximumAge: 600000 /* 10 minutes */ },
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: geoLocationFactory,
            deps: [_core_services_geolocation_api_service__WEBPACK_IMPORTED_MODULE_11__["GeolocationApiService"]],
            multi: true
        },
        { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 4000 } }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase) : [],
            _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"] : []
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                    _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase) : [],
                    _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"] : []
                ],
                providers: [
                    {
                        provide: _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_7__["POSITION_OPTIONS"],
                        useValue: { enableHighAccuracy: false, timeout: 4000, maximumAge: 600000 /* 10 minutes */ },
                    },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        useFactory: geoLocationFactory,
                        deps: [_core_services_geolocation_api_service__WEBPACK_IMPORTED_MODULE_11__["GeolocationApiService"]],
                        multi: true
                    },
                    { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 4000 } }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fTgK":
/*!***************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.ts ***!
  \***************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_geolocation_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/geolocation-api.service */ "V9d6");
/* harmony import */ var _dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/error-dialog/error-dialog.service */ "BSic");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");















const _c0 = ["autocomplete"];
function ToolbarComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-bar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ToolbarComponent_ng_container_9_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prediction_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", prediction_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", prediction_r5.place_id ? "location_on" : "not_listed_location", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", prediction_r5.description, " ");
} }
function ToolbarComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " share_location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ToolbarComponent_ng_container_9_mat_option_6_Template, 4, 3, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.gpsPrediction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.searchPredictions);
} }
class ToolbarComponent {
    constructor(ngZone, geolocationApiService, errorDialogService) {
        this.ngZone = ngZone;
        this.geolocationApiService = geolocationApiService;
        this.errorDialogService = errorDialogService;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.isLoading = false;
        this.gpsPrediction = {
            description: 'GPS',
            matched_substrings: undefined,
            place_id: undefined,
            reference: undefined,
            structured_formatting: undefined,
            terms: undefined,
            types: undefined,
        };
    }
    ngAfterViewInit() {
        this.placesService = new google.maps.places.PlacesService(this.autocompleteRef.nativeElement);
        this.autocompleteService = new google.maps.places.AutocompleteService();
        this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(value => {
            if (value.length <= 2) {
                this.searchPredictions = [];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(value => value.length > 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(value => {
            this.isLoading = true;
            this.autocompleteService.getPlacePredictions({ input: value }, this.placePredictionsCallback.bind(this));
        });
    }
    placePredictionsCallback(results, status) {
        /*
         * Google API run outside NgZone because Angular can't detect changes
         * made by async callbacks of third-party libraries
         */
        this.ngZone.run(() => {
            this.isLoading = false;
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                this.searchPredictions = results;
            }
            else {
                this.searchPredictions = [{
                        description: 'No records found',
                        matched_substrings: undefined,
                        place_id: undefined,
                        reference: undefined,
                        structured_formatting: undefined,
                        terms: undefined,
                        types: undefined,
                    }];
            }
        });
    }
    onSelectedOption(selected) {
        if (selected.option.value.description === 'GPS') {
            this.geolocationApiService.requestGeolocation();
        }
        else if (selected.option.value.place_id) {
            this.placeDescriptionSelected = selected.option.value.description;
            const placeRequest = {
                placeId: selected.option.value.place_id,
                fields: ['geometry.location']
            };
            this.placesService.getDetails(placeRequest, this.placeDetailsCallback.bind(this));
        }
        this.searchPredictions = [];
        this.autocompleteRef.nativeElement.value = '';
        this.autocompleteRef.nativeElement.blur(); // remove focus
    }
    placeDetailsCallback(result, status) {
        this.ngZone.run(() => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                this.geolocationApiService.setGeolocationName(this.placeDescriptionSelected);
                this.geolocationApiService.setGeolocationPosition(result.geometry.location.toJSON().lat, result.geometry.location.toJSON().lng);
            }
            else {
                this.errorDialogService.openDialog('There was an error getting the location details');
            }
        });
    }
    displayFn(prediction) {
        return prediction && prediction.description ? prediction.description : '';
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_geolocation_api_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], viewQuery: function ToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autocompleteRef = _t.first);
    } }, decls: 10, vars: 5, consts: [["appearance", "outline"], ["type", "text", "placeholder", "Search", "matInput", "", 3, "formControl", "matAutocomplete"], ["autocomplete", ""], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [4, "ngIf"], ["mode", "indeterminate"], [3, "value"], ["color", "primary", "aria-label", "Share location icon"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "accent", "aria-label", "Place location icon"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ToolbarComponent_Template_mat_autocomplete_optionSelected_6_listener($event) { return ctx.onSelectedOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ToolbarComponent_ng_container_8_Template, 3, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToolbarComponent_ng_container_9_Template, 7, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchControl)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-area: toolbar;\n  grid-template-columns: 1fr;\n  padding: 1rem;\n  max-height: 6em;\n  \n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media only screen and (min-width: 600px) {\n  [_nghost-%COMP%] {\n    margin-left: 5rem;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    max-width: 20em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBTUEsa0JBQUE7QUFMRjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBR0U7RUFiRjtJQWNJLGlCQUFBO0VBQUY7RUFFRTtJQUNFLGVBQUE7RUFBSjtBQUNGIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogdG9vbGJhcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cbiAgcGFkZGluZzogMXJlbTtcbiAgbWF4LWhlaWdodDogNmVtO1xuXG4gIHNlY3Rpb24gLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8qIGxhcmdlIHNjcmVlbnMgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xuXG4gICAgc2VjdGlvbiAubWF0LWZvcm0tZmllbGQge1xuICAgICAgbWF4LXdpZHRoOiAyMGVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _services_geolocation_api_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationApiService"] }, { type: _dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] }]; }, { autocompleteRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autocomplete']
        }] }); })();


/***/ }),

/***/ "llkU":
/*!*****************************************************!*\
  !*** ./src/app/core/errors/global-error-handler.ts ***!
  \*****************************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/error-dialog/error-dialog.service */ "BSic");



class GlobalErrorHandler {
    constructor(errorDialogService, zone) {
        this.errorDialogService = errorDialogService;
        this.zone = zone;
    }
    handleError(error) {
        this.zone.run(() => this.errorDialogService.openDialog(error.message || 'Undefined client error'));
        console.error('Error from global error handler', error);
    }
}
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ErrorDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _dialog_error_dialog_error_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ErrorDialogService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "mIE2":
/*!************************************************************************!*\
  !*** ./src/app/core/dialog/loading-dialog/loading-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: LoadingDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingDialogComponent", function() { return LoadingDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");




class LoadingDialogComponent {
}
LoadingDialogComponent.ɵfac = function LoadingDialogComponent_Factory(t) { return new (t || LoadingDialogComponent)(); };
LoadingDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingDialogComponent, selectors: [["app-loading-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], [1, "loading-spinner"], ["diameter", "40", "strokeWidth", "2"]], template: function LoadingDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please have a moment of patience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  margin-top: -2rem !important;\n  padding-top: 2rem !important;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 3rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvYWRpbmctZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImxvYWRpbmctZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IC0ycmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycmVtICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogM3JlbSBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-dialog',
                templateUrl: './loading-dialog.component.html',
                styleUrls: ['./loading-dialog.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "R2Se");
/* harmony import */ var _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/toolbar/toolbar.component */ "fTgK");
/* harmony import */ var _errors_error_handler_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./errors/error-handler.module */ "vWJI");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog/dialog.module */ "0yAT");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "I6GX");


















class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _errors_error_handler_module__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlerModule"],
            _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"], _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_16__["SnackbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _errors_error_handler_module__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlerModule"],
        _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"], _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_16__["SnackbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _errors_error_handler_module__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlerModule"],
                    _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]
                ],
                exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pfDZ":
/*!********************************************************!*\
  !*** ./src/app/shared/enums/units-measurement.enum.ts ***!
  \********************************************************/
/*! exports provided: UnitsMeasurement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsMeasurement", function() { return UnitsMeasurement; });
var UnitsMeasurement;
(function (UnitsMeasurement) {
    UnitsMeasurement["standard"] = "standard";
    UnitsMeasurement["metric"] = "metric";
    UnitsMeasurement["imperial"] = "imperial";
})(UnitsMeasurement || (UnitsMeasurement = {}));


/***/ }),

/***/ "rzXT":
/*!***************************************************!*\
  !*** ./src/app/core/api/openweather-mock.data.ts ***!
  \***************************************************/
/*! exports provided: staticWeatherDataInFahrenheit, staticWeatherDataInCelsius, staticAirPollutionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticWeatherDataInFahrenheit", function() { return staticWeatherDataInFahrenheit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticWeatherDataInCelsius", function() { return staticWeatherDataInCelsius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticAirPollutionData", function() { return staticAirPollutionData; });
const staticWeatherDataInFahrenheit = {
    lat: 29.7858,
    lon: -95.8244,
    timezone: 'America/Chicago',
    timezone_offset: -21600,
    current: {
        dt: 1611038621,
        sunrise: 1611062309,
        sunset: 1611100163,
        temp: 62.47,
        feels_like: 60.84,
        pressure: 1018,
        humidity: 94,
        dew_point: 60.73,
        uvi: 0,
        clouds: 40,
        visibility: 10000,
        wind_speed: 9.22,
        wind_deg: 150,
        weather: [
            {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03n'
            }
        ]
    },
    hourly: [
        {
            dt: 1611036000,
            temp: 62.47,
            feels_like: 59.34,
            pressure: 1018,
            humidity: 94,
            dew_point: 60.73,
            uvi: 0,
            clouds: 40,
            visibility: 10000,
            wind_speed: 11.86,
            wind_deg: 153,
            weather: [
                {
                    id: 802,
                    main: 'Clouds',
                    description: 'scattered clouds',
                    icon: '03n'
                }
            ],
            pop: 0.39
        },
        {
            dt: 1611039600,
            temp: 62.74,
            feels_like: 60.01,
            pressure: 1018,
            humidity: 91,
            dew_point: 60.08,
            uvi: 0,
            clouds: 69,
            visibility: 10000,
            wind_speed: 10.71,
            wind_deg: 154,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0.64
        },
        {
            dt: 1611043200,
            temp: 62.64,
            feels_like: 60.21,
            pressure: 1018,
            humidity: 91,
            dew_point: 59.97,
            uvi: 0,
            clouds: 87,
            visibility: 10000,
            wind_speed: 10.11,
            wind_deg: 151,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0.84
        },
        {
            dt: 1611046800,
            temp: 62.78,
            feels_like: 60.19,
            pressure: 1018,
            humidity: 91,
            dew_point: 60.12,
            uvi: 0,
            clouds: 96,
            visibility: 10000,
            wind_speed: 10.49,
            wind_deg: 148,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0.88
        },
        {
            dt: 1611050400,
            temp: 62.8,
            feels_like: 60.55,
            pressure: 1018,
            humidity: 91,
            dew_point: 60.13,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 9.89,
            wind_deg: 150,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n'
                }
            ],
            pop: 0.91,
            rain: {
                '1h': 0.26
            }
        },
        {
            dt: 1611054000,
            temp: 62.71,
            feels_like: 60.4,
            pressure: 1019,
            humidity: 91,
            dew_point: 60.3,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 9.93,
            wind_deg: 146,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n'
                }
            ],
            pop: 0.91,
            rain: {
                '1h': 0.21
            }
        },
        {
            dt: 1611057600,
            temp: 62.53,
            feels_like: 59.94,
            pressure: 1019,
            humidity: 91,
            dew_point: 60.1,
            uvi: 0,
            clouds: 98,
            visibility: 10000,
            wind_speed: 10.31,
            wind_deg: 146,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n'
                }
            ],
            pop: 0.88,
            rain: {
                '1h': 0.25
            }
        },
        {
            dt: 1611061200,
            temp: 62.71,
            feels_like: 59.68,
            pressure: 1020,
            humidity: 90,
            dew_point: 59.85,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 11.01,
            wind_deg: 144,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n'
                }
            ],
            pop: 0.88,
            rain: {
                '1h': 0.24
            }
        },
        {
            dt: 1611064800,
            temp: 62.76,
            feels_like: 59.99,
            pressure: 1021,
            humidity: 89,
            dew_point: 59.56,
            uvi: 0.07,
            clouds: 100,
            visibility: 10000,
            wind_speed: 10.38,
            wind_deg: 145,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            pop: 0.88,
            rain: {
                '1h': 0.15
            }
        },
        {
            dt: 1611068400,
            temp: 62.98,
            feels_like: 60.51,
            pressure: 1022,
            humidity: 88,
            dew_point: 59.38,
            uvi: 0.26,
            clouds: 100,
            visibility: 10000,
            wind_speed: 9.78,
            wind_deg: 148,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            pop: 0.85,
            rain: {
                '1h': 0.17
            }
        },
        {
            dt: 1611072000,
            temp: 63.41,
            feels_like: 60.78,
            pressure: 1023,
            humidity: 86,
            dew_point: 59.22,
            uvi: 0.92,
            clouds: 100,
            visibility: 10000,
            wind_speed: 9.91,
            wind_deg: 151,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            pop: 0.81,
            rain: {
                '1h': 0.18
            }
        },
        {
            dt: 1611075600,
            temp: 64.2,
            feels_like: 61.14,
            pressure: 1024,
            humidity: 83,
            dew_point: 59.04,
            uvi: 1.45,
            clouds: 100,
            visibility: 10000,
            wind_speed: 10.54,
            wind_deg: 150,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.78
        },
        {
            dt: 1611079200,
            temp: 65.08,
            feels_like: 61.74,
            pressure: 1024,
            humidity: 80,
            dew_point: 58.87,
            uvi: 1.76,
            clouds: 100,
            visibility: 10000,
            wind_speed: 10.94,
            wind_deg: 149,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.67
        },
        {
            dt: 1611082800,
            temp: 65.52,
            feels_like: 62.64,
            pressure: 1024,
            humidity: 79,
            dew_point: 58.89,
            uvi: 1.14,
            clouds: 99,
            visibility: 10000,
            wind_speed: 10.16,
            wind_deg: 149,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.07
        },
        {
            dt: 1611086400,
            temp: 65.88,
            feels_like: 63.61,
            pressure: 1023,
            humidity: 78,
            dew_point: 58.98,
            uvi: 0.89,
            clouds: 100,
            visibility: 10000,
            wind_speed: 9.08,
            wind_deg: 146,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.02
        },
        {
            dt: 1611090000,
            temp: 67.44,
            feels_like: 65.28,
            pressure: 1023,
            humidity: 74,
            dew_point: 59.23,
            uvi: 0.53,
            clouds: 93,
            visibility: 10000,
            wind_speed: 8.9,
            wind_deg: 141,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.06
        },
        {
            dt: 1611093600,
            temp: 68.49,
            feels_like: 66.56,
            pressure: 1023,
            humidity: 72,
            dew_point: 59.31,
            uvi: 0.41,
            clouds: 91,
            visibility: 10000,
            wind_speed: 8.63,
            wind_deg: 138,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.05
        },
        {
            dt: 1611097200,
            temp: 67.39,
            feels_like: 66.33,
            pressure: 1024,
            humidity: 75,
            dew_point: 59.27,
            uvi: 0.08,
            clouds: 84,
            visibility: 10000,
            wind_speed: 7.18,
            wind_deg: 137,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0.05
        },
        {
            dt: 1611100800,
            temp: 64.47,
            feels_like: 63.28,
            pressure: 1025,
            humidity: 80,
            dew_point: 58.41,
            uvi: 0,
            clouds: 85,
            visibility: 10000,
            wind_speed: 6.76,
            wind_deg: 145,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0.01
        },
        {
            dt: 1611104400,
            temp: 63.39,
            feels_like: 62.24,
            pressure: 1026,
            humidity: 83,
            dew_point: 58.26,
            uvi: 0,
            clouds: 99,
            visibility: 10000,
            wind_speed: 6.67,
            wind_deg: 139,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611108000,
            temp: 61.48,
            feels_like: 60.26,
            pressure: 1026,
            humidity: 87,
            dew_point: 57.76,
            uvi: 0,
            clouds: 88,
            visibility: 10000,
            wind_speed: 6.44,
            wind_deg: 139,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611111600,
            temp: 60.39,
            feels_like: 59.83,
            pressure: 1027,
            humidity: 90,
            dew_point: 57.49,
            uvi: 0,
            clouds: 85,
            visibility: 10000,
            wind_speed: 5.19,
            wind_deg: 128,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611115200,
            temp: 59.77,
            feels_like: 59.72,
            pressure: 1028,
            humidity: 91,
            dew_point: 57.29,
            uvi: 0,
            clouds: 87,
            visibility: 10000,
            wind_speed: 4.09,
            wind_deg: 93,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611118800,
            temp: 59.38,
            feels_like: 58.66,
            pressure: 1028,
            humidity: 92,
            dew_point: 57.09,
            uvi: 0,
            clouds: 85,
            visibility: 10000,
            wind_speed: 5.23,
            wind_deg: 49,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611122400,
            temp: 59.09,
            feels_like: 58.06,
            pressure: 1028,
            humidity: 92,
            dew_point: 56.82,
            uvi: 0,
            clouds: 86,
            visibility: 10000,
            wind_speed: 5.61,
            wind_deg: 48,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611126000,
            temp: 58.46,
            feels_like: 57.33,
            pressure: 1028,
            humidity: 92,
            dew_point: 56.3,
            uvi: 0,
            clouds: 81,
            visibility: 10000,
            wind_speed: 5.44,
            wind_deg: 58,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611129600,
            temp: 58.12,
            feels_like: 57.07,
            pressure: 1028,
            humidity: 93,
            dew_point: 56.14,
            uvi: 0,
            clouds: 78,
            visibility: 10000,
            wind_speed: 5.26,
            wind_deg: 65,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611133200,
            temp: 57.78,
            feels_like: 56.23,
            pressure: 1027,
            humidity: 93,
            dew_point: 55.98,
            uvi: 0,
            clouds: 77,
            visibility: 10000,
            wind_speed: 5.95,
            wind_deg: 64,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611136800,
            temp: 57.6,
            feels_like: 56.1,
            pressure: 1027,
            humidity: 94,
            dew_point: 55.92,
            uvi: 0,
            clouds: 80,
            visibility: 10000,
            wind_speed: 5.91,
            wind_deg: 63,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611140400,
            temp: 56.93,
            feels_like: 55,
            pressure: 1027,
            humidity: 94,
            dew_point: 55.47,
            uvi: 0,
            clouds: 69,
            visibility: 10000,
            wind_speed: 6.29,
            wind_deg: 63,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611144000,
            temp: 56.39,
            feels_like: 54.07,
            pressure: 1027,
            humidity: 95,
            dew_point: 55.17,
            uvi: 0,
            clouds: 60,
            visibility: 10000,
            wind_speed: 6.87,
            wind_deg: 67,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611147600,
            temp: 55.9,
            feels_like: 53.22,
            pressure: 1027,
            humidity: 96,
            dew_point: 54.86,
            uvi: 0,
            clouds: 64,
            visibility: 10000,
            wind_speed: 7.4,
            wind_deg: 73,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611151200,
            temp: 56.25,
            feels_like: 53.13,
            pressure: 1027,
            humidity: 95,
            dew_point: 55.06,
            uvi: 0.22,
            clouds: 69,
            visibility: 10000,
            wind_speed: 8.19,
            wind_deg: 81,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611154800,
            temp: 58.62,
            feels_like: 54.91,
            pressure: 1027,
            humidity: 89,
            dew_point: 55.56,
            uvi: 0.87,
            clouds: 75,
            visibility: 10000,
            wind_speed: 9.55,
            wind_deg: 88,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611158400,
            temp: 61.16,
            feels_like: 57.56,
            pressure: 1027,
            humidity: 83,
            dew_point: 56.03,
            uvi: 1.08,
            clouds: 80,
            visibility: 10000,
            wind_speed: 9.71,
            wind_deg: 92,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611162000,
            temp: 64.78,
            feels_like: 62.04,
            pressure: 1027,
            humidity: 75,
            dew_point: 56.98,
            uvi: 1.71,
            clouds: 71,
            visibility: 10000,
            wind_speed: 8.57,
            wind_deg: 108,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611165600,
            temp: 67.35,
            feels_like: 65.98,
            pressure: 1026,
            humidity: 71,
            dew_point: 57.78,
            uvi: 2.09,
            clouds: 76,
            visibility: 10000,
            wind_speed: 6.71,
            wind_deg: 130,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611169200,
            temp: 68.5,
            feels_like: 66.81,
            pressure: 1025,
            humidity: 70,
            dew_point: 58.55,
            uvi: 4.27,
            clouds: 98,
            visibility: 10000,
            wind_speed: 7.74,
            wind_deg: 147,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611172800,
            temp: 69.12,
            feels_like: 67.23,
            pressure: 1024,
            humidity: 70,
            dew_point: 59.16,
            uvi: 3.33,
            clouds: 98,
            visibility: 10000,
            wind_speed: 8.46,
            wind_deg: 151,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611176400,
            temp: 68.97,
            feels_like: 67.14,
            pressure: 1024,
            humidity: 71,
            dew_point: 59.29,
            uvi: 1.99,
            clouds: 98,
            visibility: 10000,
            wind_speed: 8.52,
            wind_deg: 153,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611180000,
            temp: 68.76,
            feels_like: 67.42,
            pressure: 1023,
            humidity: 72,
            dew_point: 59.61,
            uvi: 0.66,
            clouds: 99,
            visibility: 10000,
            wind_speed: 7.74,
            wind_deg: 149,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611183600,
            temp: 67.21,
            feels_like: 66.87,
            pressure: 1023,
            humidity: 77,
            dew_point: 59.97,
            uvi: 0.14,
            clouds: 99,
            visibility: 10000,
            wind_speed: 6.24,
            wind_deg: 136,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611187200,
            temp: 65.73,
            feels_like: 65.03,
            pressure: 1023,
            humidity: 80,
            dew_point: 59.67,
            uvi: 0,
            clouds: 98,
            visibility: 10000,
            wind_speed: 6.64,
            wind_deg: 133,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611190800,
            temp: 64.33,
            feels_like: 63.3,
            pressure: 1023,
            humidity: 84,
            dew_point: 59.63,
            uvi: 0,
            clouds: 85,
            visibility: 10000,
            wind_speed: 7.25,
            wind_deg: 136,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611194400,
            temp: 62.91,
            feels_like: 61.34,
            pressure: 1024,
            humidity: 88,
            dew_point: 59.32,
            uvi: 0,
            clouds: 90,
            visibility: 10000,
            wind_speed: 8.12,
            wind_deg: 135,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611198000,
            temp: 62.58,
            feels_like: 60.37,
            pressure: 1023,
            humidity: 88,
            dew_point: 59.09,
            uvi: 0,
            clouds: 92,
            visibility: 10000,
            wind_speed: 9.08,
            wind_deg: 142,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611201600,
            temp: 62.58,
            feels_like: 59.88,
            pressure: 1023,
            humidity: 88,
            dew_point: 59.13,
            uvi: 0,
            clouds: 95,
            visibility: 10000,
            wind_speed: 9.95,
            wind_deg: 155,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611205200,
            temp: 62.67,
            feels_like: 60.12,
            pressure: 1022,
            humidity: 89,
            dew_point: 59.43,
            uvi: 0,
            clouds: 95,
            visibility: 10000,
            wind_speed: 9.95,
            wind_deg: 166,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        }
    ],
    daily: [
        {
            dt: 1611079200,
            sunrise: 1611062309,
            sunset: 1611100163,
            temp: {
                day: 65.08,
                min: 59.38,
                max: 68.49,
                night: 59.38,
                eve: 64.47,
                morn: 62.53
            },
            feels_like: {
                day: 61.74,
                night: 58.66,
                eve: 63.28,
                morn: 59.94
            },
            pressure: 1024,
            humidity: 80,
            dew_point: 58.87,
            wind_speed: 10.94,
            wind_deg: 149,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 100,
            pop: 0.91,
            rain: 1.46,
            uvi: 1.76
        },
        {
            dt: 1611165600,
            sunrise: 1611148694,
            sunset: 1611186615,
            temp: {
                day: 67.35,
                min: 55.9,
                max: 69.12,
                night: 62.67,
                eve: 65.73,
                morn: 56.39
            },
            feels_like: {
                day: 65.98,
                night: 60.12,
                eve: 65.03,
                morn: 54.07
            },
            pressure: 1026,
            humidity: 71,
            dew_point: 57.78,
            wind_speed: 6.71,
            wind_deg: 130,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            clouds: 76,
            pop: 0,
            uvi: 4.27
        },
        {
            dt: 1611252000,
            sunrise: 1611235076,
            sunset: 1611273067,
            temp: {
                day: 70.7,
                min: 61.84,
                max: 74.03,
                night: 67.35,
                eve: 69.12,
                morn: 62.15
            },
            feels_like: {
                day: 68.92,
                night: 66.63,
                eve: 69.53,
                morn: 62.47
            },
            pressure: 1017,
            humidity: 78,
            dew_point: 63.66,
            wind_speed: 11.43,
            wind_deg: 208,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 90,
            pop: 0.69,
            rain: 0.81,
            uvi: 3.16
        },
        {
            dt: 1611338400,
            sunrise: 1611321457,
            sunset: 1611359520,
            temp: {
                day: 73.76,
                min: 65.52,
                max: 76.06,
                night: 65.52,
                eve: 69.73,
                morn: 66.74
            },
            feels_like: {
                day: 74.61,
                night: 64.53,
                eve: 69.78,
                morn: 66.04
            },
            pressure: 1013,
            humidity: 73,
            dew_point: 64.8,
            wind_speed: 7.54,
            wind_deg: 289,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 83,
            pop: 1,
            rain: 2.64,
            uvi: 0.54
        },
        {
            dt: 1611424800,
            sunrise: 1611407836,
            sunset: 1611445972,
            temp: {
                day: 60.03,
                min: 56.75,
                max: 61.56,
                night: 59.36,
                eve: 60.1,
                morn: 57.54
            },
            feels_like: {
                day: 54.81,
                night: 55.63,
                eve: 55.83,
                morn: 53.31
            },
            pressure: 1018,
            humidity: 71,
            dew_point: 50.85,
            wind_speed: 9.69,
            wind_deg: 80,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            clouds: 99,
            pop: 0.01,
            uvi: 1
        },
        {
            dt: 1611511200,
            sunrise: 1611494214,
            sunset: 1611532425,
            temp: {
                day: 74.86,
                min: 60.06,
                max: 74.86,
                night: 69.66,
                eve: 70.81,
                morn: 64.06
            },
            feels_like: {
                day: 71.8,
                night: 69.89,
                eve: 70.47,
                morn: 65.17
            },
            pressure: 1013,
            humidity: 79,
            dew_point: 68.25,
            wind_speed: 17.16,
            wind_deg: 187,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 93,
            pop: 0.98,
            rain: 2.76,
            uvi: 1
        },
        {
            dt: 1611597600,
            sunrise: 1611580590,
            sunset: 1611618877,
            temp: {
                day: 73.8,
                min: 60.39,
                max: 73.8,
                night: 60.39,
                eve: 63.63,
                morn: 68.61
            },
            feels_like: {
                day: 70.59,
                night: 57.76,
                eve: 60.49,
                morn: 69.98
            },
            pressure: 1010,
            humidity: 77,
            dew_point: 66.18,
            wind_speed: 15.95,
            wind_deg: 211,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 97,
            pop: 1,
            rain: 2.3,
            uvi: 1
        },
        {
            dt: 1611684000,
            sunrise: 1611666965,
            sunset: 1611705330,
            temp: {
                day: 69.21,
                min: 55.9,
                max: 69.21,
                night: 62.24,
                eve: 63.81,
                morn: 55.9
            },
            feels_like: {
                day: 69.1,
                night: 64.02,
                eve: 64.27,
                morn: 53.73
            },
            pressure: 1012,
            humidity: 70,
            dew_point: 59.04,
            wind_speed: 5.35,
            wind_deg: 67,
            weather: [
                {
                    id: 802,
                    main: 'Clouds',
                    description: 'scattered clouds',
                    icon: '03d'
                }
            ],
            clouds: 36,
            pop: 0.29,
            uvi: 1
        }
    ]
};
const staticWeatherDataInCelsius = {
    lat: 29.7858,
    lon: -95.8244,
    timezone: 'America/Chicago',
    timezone_offset: -21600,
    current: {
        dt: 1611037969,
        sunrise: 1611062309,
        sunset: 1611100163,
        temp: 16.93,
        feels_like: 16.02,
        pressure: 1018,
        humidity: 94,
        dew_point: 15.96,
        uvi: 0,
        clouds: 75,
        visibility: 10000,
        wind_speed: 4.12,
        wind_deg: 150,
        weather: [
            {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n'
            }
        ]
    },
    hourly: [
        {
            dt: 1611036000,
            temp: 16.93,
            feels_like: 15.19,
            pressure: 1018,
            humidity: 94,
            dew_point: 15.96,
            uvi: 0,
            clouds: 75,
            visibility: 10000,
            wind_speed: 5.3,
            wind_deg: 153,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0.39
        },
        {
            dt: 1611039600,
            temp: 17.08,
            feels_like: 15.56,
            pressure: 1018,
            humidity: 91,
            dew_point: 15.6,
            uvi: 0,
            clouds: 87,
            visibility: 10000,
            wind_speed: 4.79,
            wind_deg: 154,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0.64
        },
        {
            dt: 1611043200,
            temp: 17.02,
            feels_like: 15.67,
            pressure: 1018,
            humidity: 91,
            dew_point: 15.54,
            uvi: 0,
            clouds: 95,
            visibility: 10000,
            wind_speed: 4.52,
            wind_deg: 151,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0.84
        },
        {
            dt: 1611046800,
            temp: 17.1,
            feels_like: 15.66,
            pressure: 1018,
            humidity: 91,
            dew_point: 15.62,
            uvi: 0,
            clouds: 98,
            visibility: 10000,
            wind_speed: 4.69,
            wind_deg: 148,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n'
                }
            ],
            pop: 0.88,
        },
        {
            dt: 1611050400,
            temp: 17.11,
            feels_like: 15.86,
            pressure: 1018,
            humidity: 91,
            dew_point: 15.63,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.42,
            wind_deg: 150,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n'
                }
            ],
            pop: 0.91,
        },
        {
            dt: 1611054000,
            temp: 17.06,
            feels_like: 15.78,
            pressure: 1019,
            humidity: 91,
            dew_point: 15.72,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.44,
            wind_deg: 146,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n'
                }
            ],
            pop: 0.91,
        },
        {
            dt: 1611057600,
            temp: 16.96,
            feels_like: 15.52,
            pressure: 1019,
            humidity: 91,
            dew_point: 15.61,
            uvi: 0,
            clouds: 98,
            visibility: 10000,
            wind_speed: 4.61,
            wind_deg: 146,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n'
                }
            ],
            pop: 0.88,
        },
        {
            dt: 1611061200,
            temp: 17.06,
            feels_like: 15.38,
            pressure: 1020,
            humidity: 90,
            dew_point: 15.47,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.92,
            wind_deg: 144,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10n'
                }
            ],
            pop: 0.88,
        },
        {
            dt: 1611064800,
            temp: 17.09,
            feels_like: 15.55,
            pressure: 1021,
            humidity: 89,
            dew_point: 15.31,
            uvi: 0.07,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.64,
            wind_deg: 145,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            pop: 0.88,
        },
        {
            dt: 1611068400,
            temp: 17.21,
            feels_like: 15.84,
            pressure: 1022,
            humidity: 88,
            dew_point: 15.21,
            uvi: 0.26,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.37,
            wind_deg: 148,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            pop: 0.85,
        },
        {
            dt: 1611072000,
            temp: 17.45,
            feels_like: 15.99,
            pressure: 1023,
            humidity: 86,
            dew_point: 15.12,
            uvi: 0.92,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.43,
            wind_deg: 151,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            pop: 0.81,
        },
        {
            dt: 1611075600,
            temp: 17.89,
            feels_like: 16.19,
            pressure: 1024,
            humidity: 83,
            dew_point: 15.02,
            uvi: 1.45,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.71,
            wind_deg: 150,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.78
        },
        {
            dt: 1611079200,
            temp: 18.38,
            feels_like: 16.52,
            pressure: 1024,
            humidity: 80,
            dew_point: 14.93,
            uvi: 1.76,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.89,
            wind_deg: 149,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.67
        },
        {
            dt: 1611082800,
            temp: 18.62,
            feels_like: 17.02,
            pressure: 1024,
            humidity: 79,
            dew_point: 14.94,
            uvi: 1.14,
            clouds: 99,
            visibility: 10000,
            wind_speed: 4.54,
            wind_deg: 149,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.07
        },
        {
            dt: 1611086400,
            temp: 18.82,
            feels_like: 17.56,
            pressure: 1023,
            humidity: 78,
            dew_point: 14.99,
            uvi: 0.89,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.06,
            wind_deg: 146,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.02
        },
        {
            dt: 1611090000,
            temp: 19.69,
            feels_like: 18.49,
            pressure: 1023,
            humidity: 74,
            dew_point: 15.13,
            uvi: 0.53,
            clouds: 93,
            visibility: 10000,
            wind_speed: 3.98,
            wind_deg: 141,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.06
        },
        {
            dt: 1611093600,
            temp: 20.27,
            feels_like: 19.2,
            pressure: 1023,
            humidity: 72,
            dew_point: 15.17,
            uvi: 0.41,
            clouds: 91,
            visibility: 10000,
            wind_speed: 3.86,
            wind_deg: 138,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0.05
        },
        {
            dt: 1611097200,
            temp: 19.66,
            feels_like: 19.07,
            pressure: 1024,
            humidity: 75,
            dew_point: 15.15,
            uvi: 0.08,
            clouds: 84,
            visibility: 10000,
            wind_speed: 3.21,
            wind_deg: 137,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0.05
        },
        {
            dt: 1611100800,
            temp: 18.04,
            feels_like: 17.38,
            pressure: 1025,
            humidity: 80,
            dew_point: 14.67,
            uvi: 0,
            clouds: 85,
            visibility: 10000,
            wind_speed: 3.02,
            wind_deg: 145,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0.01
        },
        {
            dt: 1611104400,
            temp: 17.44,
            feels_like: 16.8,
            pressure: 1026,
            humidity: 83,
            dew_point: 14.59,
            uvi: 0,
            clouds: 99,
            visibility: 10000,
            wind_speed: 2.98,
            wind_deg: 139,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611108000,
            temp: 16.38,
            feels_like: 15.7,
            pressure: 1026,
            humidity: 87,
            dew_point: 14.31,
            uvi: 0,
            clouds: 88,
            visibility: 10000,
            wind_speed: 2.88,
            wind_deg: 139,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611111600,
            temp: 15.77,
            feels_like: 15.46,
            pressure: 1027,
            humidity: 90,
            dew_point: 14.16,
            uvi: 0,
            clouds: 85,
            visibility: 10000,
            wind_speed: 2.32,
            wind_deg: 128,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611115200,
            temp: 15.43,
            feels_like: 15.4,
            pressure: 1028,
            humidity: 91,
            dew_point: 14.05,
            uvi: 0,
            clouds: 87,
            visibility: 10000,
            wind_speed: 1.83,
            wind_deg: 93,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611118800,
            temp: 15.21,
            feels_like: 14.81,
            pressure: 1028,
            humidity: 92,
            dew_point: 13.94,
            uvi: 0,
            clouds: 85,
            visibility: 10000,
            wind_speed: 2.34,
            wind_deg: 49,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611122400,
            temp: 15.05,
            feels_like: 14.48,
            pressure: 1028,
            humidity: 92,
            dew_point: 13.79,
            uvi: 0,
            clouds: 86,
            visibility: 10000,
            wind_speed: 2.51,
            wind_deg: 48,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611126000,
            temp: 14.7,
            feels_like: 14.07,
            pressure: 1028,
            humidity: 92,
            dew_point: 13.5,
            uvi: 0,
            clouds: 81,
            visibility: 10000,
            wind_speed: 2.43,
            wind_deg: 58,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611129600,
            temp: 14.51,
            feels_like: 13.93,
            pressure: 1028,
            humidity: 93,
            dew_point: 13.41,
            uvi: 0,
            clouds: 78,
            visibility: 10000,
            wind_speed: 2.35,
            wind_deg: 65,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611133200,
            temp: 14.32,
            feels_like: 13.46,
            pressure: 1027,
            humidity: 93,
            dew_point: 13.32,
            uvi: 0,
            clouds: 77,
            visibility: 10000,
            wind_speed: 2.66,
            wind_deg: 64,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611136800,
            temp: 14.22,
            feels_like: 13.39,
            pressure: 1027,
            humidity: 94,
            dew_point: 13.29,
            uvi: 0,
            clouds: 80,
            visibility: 10000,
            wind_speed: 2.64,
            wind_deg: 63,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611140400,
            temp: 13.85,
            feels_like: 12.78,
            pressure: 1027,
            humidity: 94,
            dew_point: 13.04,
            uvi: 0,
            clouds: 69,
            visibility: 10000,
            wind_speed: 2.81,
            wind_deg: 63,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611144000,
            temp: 13.55,
            feels_like: 12.26,
            pressure: 1027,
            humidity: 95,
            dew_point: 12.87,
            uvi: 0,
            clouds: 60,
            visibility: 10000,
            wind_speed: 3.07,
            wind_deg: 67,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611147600,
            temp: 13.28,
            feels_like: 11.79,
            pressure: 1027,
            humidity: 96,
            dew_point: 12.7,
            uvi: 0,
            clouds: 64,
            visibility: 10000,
            wind_speed: 3.31,
            wind_deg: 73,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611151200,
            temp: 13.47,
            feels_like: 11.74,
            pressure: 1027,
            humidity: 95,
            dew_point: 12.81,
            uvi: 0.22,
            clouds: 69,
            visibility: 10000,
            wind_speed: 3.66,
            wind_deg: 81,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611154800,
            temp: 14.79,
            feels_like: 12.73,
            pressure: 1027,
            humidity: 89,
            dew_point: 13.09,
            uvi: 0.87,
            clouds: 75,
            visibility: 10000,
            wind_speed: 4.27,
            wind_deg: 88,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611158400,
            temp: 16.2,
            feels_like: 14.2,
            pressure: 1027,
            humidity: 83,
            dew_point: 13.35,
            uvi: 1.08,
            clouds: 80,
            visibility: 10000,
            wind_speed: 4.34,
            wind_deg: 92,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611162000,
            temp: 18.21,
            feels_like: 16.69,
            pressure: 1027,
            humidity: 75,
            dew_point: 13.88,
            uvi: 1.71,
            clouds: 71,
            visibility: 10000,
            wind_speed: 3.83,
            wind_deg: 108,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611165600,
            temp: 19.64,
            feels_like: 18.88,
            pressure: 1026,
            humidity: 71,
            dew_point: 14.32,
            uvi: 2.09,
            clouds: 76,
            visibility: 10000,
            wind_speed: 3,
            wind_deg: 130,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611169200,
            temp: 20.28,
            feels_like: 19.34,
            pressure: 1025,
            humidity: 70,
            dew_point: 14.75,
            uvi: 4.27,
            clouds: 98,
            visibility: 10000,
            wind_speed: 3.46,
            wind_deg: 147,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611172800,
            temp: 20.62,
            feels_like: 19.57,
            pressure: 1024,
            humidity: 70,
            dew_point: 15.09,
            uvi: 3.33,
            clouds: 98,
            visibility: 10000,
            wind_speed: 3.78,
            wind_deg: 151,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611176400,
            temp: 20.54,
            feels_like: 19.52,
            pressure: 1024,
            humidity: 71,
            dew_point: 15.16,
            uvi: 1.99,
            clouds: 98,
            visibility: 10000,
            wind_speed: 3.81,
            wind_deg: 153,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611180000,
            temp: 20.42,
            feels_like: 19.68,
            pressure: 1023,
            humidity: 72,
            dew_point: 15.34,
            uvi: 0.66,
            clouds: 99,
            visibility: 10000,
            wind_speed: 3.46,
            wind_deg: 149,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611183600,
            temp: 19.56,
            feels_like: 19.37,
            pressure: 1023,
            humidity: 77,
            dew_point: 15.54,
            uvi: 0.14,
            clouds: 99,
            visibility: 10000,
            wind_speed: 2.79,
            wind_deg: 136,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            pop: 0
        },
        {
            dt: 1611187200,
            temp: 18.74,
            feels_like: 18.35,
            pressure: 1023,
            humidity: 80,
            dew_point: 15.37,
            uvi: 0,
            clouds: 98,
            visibility: 10000,
            wind_speed: 2.97,
            wind_deg: 133,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611190800,
            temp: 17.96,
            feels_like: 17.39,
            pressure: 1023,
            humidity: 84,
            dew_point: 15.35,
            uvi: 0,
            clouds: 85,
            visibility: 10000,
            wind_speed: 3.24,
            wind_deg: 136,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611194400,
            temp: 17.17,
            feels_like: 16.3,
            pressure: 1024,
            humidity: 88,
            dew_point: 15.18,
            uvi: 0,
            clouds: 90,
            visibility: 10000,
            wind_speed: 3.63,
            wind_deg: 135,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611198000,
            temp: 16.99,
            feels_like: 15.76,
            pressure: 1023,
            humidity: 88,
            dew_point: 15.05,
            uvi: 0,
            clouds: 92,
            visibility: 10000,
            wind_speed: 4.06,
            wind_deg: 142,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611201600,
            temp: 16.99,
            feels_like: 15.49,
            pressure: 1023,
            humidity: 88,
            dew_point: 15.07,
            uvi: 0,
            clouds: 95,
            visibility: 10000,
            wind_speed: 4.45,
            wind_deg: 155,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        },
        {
            dt: 1611205200,
            temp: 17.04,
            feels_like: 15.62,
            pressure: 1022,
            humidity: 89,
            dew_point: 15.24,
            uvi: 0,
            clouds: 95,
            visibility: 10000,
            wind_speed: 4.45,
            wind_deg: 166,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n'
                }
            ],
            pop: 0
        }
    ],
    daily: [
        {
            dt: 1611079200,
            sunrise: 1611062309,
            sunset: 1611100163,
            temp: {
                day: 18.38,
                min: 15.21,
                max: 20.27,
                night: 15.21,
                eve: 18.04,
                morn: 16.96
            },
            feels_like: {
                day: 16.52,
                night: 14.81,
                eve: 17.38,
                morn: 15.52
            },
            pressure: 1024,
            humidity: 80,
            dew_point: 14.93,
            wind_speed: 4.89,
            wind_deg: 149,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 100,
            pop: 0.91,
            rain: 1.73,
            uvi: 1.76
        },
        {
            dt: 1611165600,
            sunrise: 1611148694,
            sunset: 1611186615,
            temp: {
                day: 19.64,
                min: 13.28,
                max: 20.62,
                night: 17.04,
                eve: 18.74,
                morn: 13.55
            },
            feels_like: {
                day: 18.88,
                night: 15.62,
                eve: 18.35,
                morn: 12.26
            },
            pressure: 1026,
            humidity: 71,
            dew_point: 14.32,
            wind_speed: 3,
            wind_deg: 130,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                }
            ],
            clouds: 76,
            pop: 0,
            uvi: 4.27
        },
        {
            dt: 1611252000,
            sunrise: 1611235076,
            sunset: 1611273067,
            temp: {
                day: 21.5,
                min: 16.58,
                max: 23.35,
                night: 19.64,
                eve: 20.62,
                morn: 16.75
            },
            feels_like: {
                day: 20.51,
                night: 19.24,
                eve: 20.85,
                morn: 16.93
            },
            pressure: 1017,
            humidity: 78,
            dew_point: 17.59,
            wind_speed: 5.11,
            wind_deg: 208,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 90,
            pop: 0.69,
            rain: 0.81,
            uvi: 3.16
        },
        {
            dt: 1611338400,
            sunrise: 1611321457,
            sunset: 1611359520,
            temp: {
                day: 23.2,
                min: 18.62,
                max: 24.48,
                night: 18.62,
                eve: 20.96,
                morn: 19.3
            },
            feels_like: {
                day: 23.67,
                night: 18.07,
                eve: 20.99,
                morn: 18.91
            },
            pressure: 1013,
            humidity: 73,
            dew_point: 18.22,
            wind_speed: 3.37,
            wind_deg: 289,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 83,
            pop: 1,
            rain: 2.64,
            uvi: 0.54
        },
        {
            dt: 1611424800,
            sunrise: 1611407836,
            sunset: 1611445972,
            temp: {
                day: 15.57,
                min: 13.75,
                max: 16.42,
                night: 15.2,
                eve: 15.61,
                morn: 14.19
            },
            feels_like: {
                day: 12.67,
                night: 13.13,
                eve: 13.24,
                morn: 11.84
            },
            pressure: 1018,
            humidity: 71,
            dew_point: 10.47,
            wind_speed: 4.33,
            wind_deg: 80,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                }
            ],
            clouds: 99,
            pop: 0.01,
            uvi: 1
        },
        {
            dt: 1611511200,
            sunrise: 1611494214,
            sunset: 1611532425,
            temp: {
                day: 23.81,
                min: 15.59,
                max: 23.81,
                night: 20.92,
                eve: 21.56,
                morn: 17.81
            },
            feels_like: {
                day: 22.11,
                night: 21.05,
                eve: 21.37,
                morn: 18.43
            },
            pressure: 1013,
            humidity: 79,
            dew_point: 20.14,
            wind_speed: 7.67,
            wind_deg: 187,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 93,
            pop: 0.98,
            rain: 2.76,
            uvi: 1
        },
        {
            dt: 1611597600,
            sunrise: 1611580590,
            sunset: 1611618877,
            temp: {
                day: 23.22,
                min: 15.77,
                max: 23.22,
                night: 15.77,
                eve: 17.57,
                morn: 20.34
            },
            feels_like: {
                day: 21.44,
                night: 14.31,
                eve: 15.83,
                morn: 21.1
            },
            pressure: 1010,
            humidity: 77,
            dew_point: 18.99,
            wind_speed: 7.13,
            wind_deg: 211,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d'
                }
            ],
            clouds: 97,
            pop: 1,
            rain: 2.3,
            uvi: 1
        },
        {
            dt: 1611684000,
            sunrise: 1611666965,
            sunset: 1611705330,
            temp: {
                day: 20.67,
                min: 13.28,
                max: 20.67,
                night: 16.8,
                eve: 17.67,
                morn: 13.28
            },
            feels_like: {
                day: 20.61,
                night: 17.79,
                eve: 17.93,
                morn: 12.07
            },
            pressure: 1012,
            humidity: 70,
            dew_point: 15.02,
            wind_speed: 2.39,
            wind_deg: 67,
            weather: [
                {
                    id: 802,
                    main: 'Clouds',
                    description: 'scattered clouds',
                    icon: '03d'
                }
            ],
            clouds: 36,
            pop: 0.29,
            uvi: 1
        }
    ]
};
const staticAirPollutionData = {
    coord: {
        lon: -95.8244,
        lat: 29.7858
    },
    list: [
        {
            main: {
                aqi: 3
            },
            components: {
                co: 257.02,
                no: 0,
                no2: 11.82,
                o3: 45.06,
                so2: 0.15,
                pm2_5: 3.04,
                pm10: 8.16,
                nh3: 1.79
            },
            dt: 1610848800
        }
    ]
};


/***/ }),

/***/ "thP3":
/*!********************************************************************!*\
  !*** ./src/app/core/dialog/error-dialog/error-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function ErrorDialogComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status Code: ", ctx_r0.data.status, "");
} }
class ErrorDialogComponent {
    constructor(data) {
        this.data = data;
    }
}
ErrorDialogComponent.ɵfac = function ErrorDialogComponent_Factory(t) { return new (t || ErrorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ErrorDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorDialogComponent, selectors: [["app-error-dialog"]], decls: 12, vars: 2, consts: [["mat-dialog-content", ""], ["src", "assets/icons/global/global-error.svg", "alt", "Global error icon", "width", "320", "height", "180"], [1, "heading-2"], [4, "ngIf"], [1, "error-message"], ["mat-dialog-actions", ""], ["mat-stroked-button", "", "mat-dialog-close", "", "color", "primary"]], template: function ErrorDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oops!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Something went wrong, please try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ErrorDialogComponent_p_6_Template, 3, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--dashboard-dark) !important;\n}\n[_nghost-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: auto;\n  margin: 1em 0;\n}\n[_nghost-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  background: var(--light-yellow);\n  margin-top: 1em;\n  padding: 1rem;\n  font-family: monospace;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1Q0FBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFOO0FBR0k7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUROIiwiZmlsZSI6ImVycm9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgY29sb3I6IHZhcigtLWRhc2hib2FyZC1kYXJrKSAhaW1wb3J0YW50O1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW46IDFlbSAwO1xuICAgIH1cblxuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LXllbGxvdyk7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-dialog',
                templateUrl: './error-dialog.component.html',
                styleUrls: ['./error-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vWJI":
/*!*****************************************************!*\
  !*** ./src/app/core/errors/error-handler.module.ts ***!
  \*****************************************************/
/*! exports provided: ErrorHandlerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerModule", function() { return ErrorHandlerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_error_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-error-handler */ "llkU");
/* harmony import */ var _http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-error.interceptor */ "4QjC");






class ErrorHandlerModule {
}
ErrorHandlerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErrorHandlerModule });
ErrorHandlerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ErrorHandlerModule_Factory(t) { return new (t || ErrorHandlerModule)(); }, providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
            useClass: _global_error_handler__WEBPACK_IMPORTED_MODULE_3__["GlobalErrorHandler"]
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["HttpErrorInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorHandlerModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
                        useClass: _global_error_handler__WEBPACK_IMPORTED_MODULE_3__["GlobalErrorHandler"]
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["HttpErrorInterceptor"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~locations-locations-module~map-map-module~settings-settings-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardModule)
    },
    {
        path: 'locations',
        loadChildren: () => Promise.all(/*! import() | locations-locations-module */[__webpack_require__.e("default~dashboard-dashboard-module~locations-locations-module~map-map-module~settings-settings-module"), __webpack_require__.e("locations-locations-module")]).then(__webpack_require__.bind(null, /*! ./locations/locations.module */ "KFjf")).then(m => m.LocationsModule)
    },
    {
        path: 'map',
        loadChildren: () => Promise.all(/*! import() | map-map-module */[__webpack_require__.e("default~dashboard-dashboard-module~locations-locations-module~map-map-module~settings-settings-module"), __webpack_require__.e("map-map-module")]).then(__webpack_require__.bind(null, /*! ./map/map.module */ "yX1w")).then(m => m.MapModule)
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() | settings-settings-module */[__webpack_require__.e("default~dashboard-dashboard-module~locations-locations-module~map-map-module~settings-settings-module"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsModule)
    },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wSPy":
/*!**********************************************************************!*\
  !*** ./src/app/core/dialog/loading-dialog/loading-dialog.service.ts ***!
  \**********************************************************************/
/*! exports provided: LoadingDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingDialogService", function() { return LoadingDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loading_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-dialog.component */ "mIE2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class LoadingDialogService {
    constructor(dialog) {
        this.dialog = dialog;
        this.opened = false;
    }
    openDialog() {
        if (!this.opened) {
            this.opened = true;
            this.dialogRef = this.dialog.open(_loading_dialog_component__WEBPACK_IMPORTED_MODULE_1__["LoadingDialogComponent"], {
                data: undefined,
                maxHeight: '100vh',
                width: '400px',
                maxWidth: '100vw',
                disableClose: true,
                hasBackdrop: true
            });
            this.dialogRef.afterClosed().subscribe(() => {
                this.opened = false;
            });
        }
    }
    hideDialog() {
        this.dialogRef.close();
    }
}
LoadingDialogService.ɵfac = function LoadingDialogService_Factory(t) { return new (t || LoadingDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
LoadingDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingDialogService, factory: LoadingDialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map