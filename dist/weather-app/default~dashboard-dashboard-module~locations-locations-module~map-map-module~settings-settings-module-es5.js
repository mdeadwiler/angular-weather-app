(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~locations-locations-module~map-map-module~settings-settings-module"], {
    /***/
    "+4fB":
    /*!*********************************************************!*\
      !*** ./src/app/shared/constants/empty-states.assets.ts ***!
      \*********************************************************/

    /*! exports provided: emptyStates */

    /***/
    function fB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emptyStates", function () {
        return emptyStates;
      });
      /* harmony import */


      var _enums_empty_states_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums/empty-states.enum */
      "+wVt");

      var emptyStates = [{
        id: _enums_empty_states_enum__WEBPACK_IMPORTED_MODULE_0__["EmptyStateTypes"].GPS,
        imageSrc: 'assets/icons/global/gps-connection-illustration.svg',
        imageAlt: 'GPS illustration',
        title: 'No GPS connection',
        content: 'Please allow for location permission.',
        buttonText: 'Allow'
      }, {
        id: _enums_empty_states_enum__WEBPACK_IMPORTED_MODULE_0__["EmptyStateTypes"].GPS_BLOCKED,
        imageSrc: 'assets/icons/global/gps-connection-illustration.svg',
        imageAlt: 'GPS illustration',
        title: 'GPS Blocked',
        content: 'Use the browser menu options to select Always Ask when a site tries to get the current location.'
      }, {
        id: _enums_empty_states_enum__WEBPACK_IMPORTED_MODULE_0__["EmptyStateTypes"].NOT_IMPLEMENTED,
        imageSrc: 'assets/icons/global/not-implemented.svg',
        imageAlt: 'Feature not implemented',
        buttonText: 'Go to Dashboard'
      }];
      /***/
    },

    /***/
    "+wVt":
    /*!***************************************************!*\
      !*** ./src/app/shared/enums/empty-states.enum.ts ***!
      \***************************************************/

    /*! exports provided: EmptyStateTypes */

    /***/
    function wVt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyStateTypes", function () {
        return EmptyStateTypes;
      });

      var EmptyStateTypes;

      (function (EmptyStateTypes) {
        EmptyStateTypes[EmptyStateTypes["GPS"] = 1] = "GPS";
        EmptyStateTypes[EmptyStateTypes["GPS_BLOCKED"] = 2] = "GPS_BLOCKED";
        EmptyStateTypes[EmptyStateTypes["NOT_IMPLEMENTED"] = 3] = "NOT_IMPLEMENTED";
      })(EmptyStateTypes || (EmptyStateTypes = {}));
      /***/

    },

    /***/
    "1zJs":
    /*!******************************************************!*\
      !*** ./src/app/core/services/empty-state.service.ts ***!
      \******************************************************/

    /*! exports provided: EmptyStateService */

    /***/
    function zJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyStateService", function () {
        return EmptyStateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_constants_empty_states_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/constants/empty-states.assets */
      "+4fB");

      var EmptyStateService = /*#__PURE__*/function () {
        function EmptyStateService() {
          _classCallCheck(this, EmptyStateService);
        }

        _createClass(EmptyStateService, [{
          key: "getEmptyState",
          value: function getEmptyState(emptyStateType) {
            return src_app_shared_constants_empty_states_assets__WEBPACK_IMPORTED_MODULE_1__["emptyStates"].find(function (state) {
              return state.id === emptyStateType;
            });
          }
        }]);

        return EmptyStateService;
      }();

      EmptyStateService.ɵfac = function EmptyStateService_Factory(t) {
        return new (t || EmptyStateService)();
      };

      EmptyStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmptyStateService,
        factory: EmptyStateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmptyStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "7rOj":
    /*!***************************************!*\
      !*** ./src/app/shared/pipes/index.ts ***!
      \***************************************/

    /*! exports provided: CustomDatePipe, ToIntegerPipe, UvIndexPipe, AirPollutionPipe, WindDirectionPipe, HumidityRangePipe */

    /***/
    function rOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _custom_date_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./custom-date.pipe */
      "cUwi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function () {
        return _custom_date_pipe__WEBPACK_IMPORTED_MODULE_0__["CustomDatePipe"];
      });
      /* harmony import */


      var _to_integer_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./to-integer.pipe */
      "OmDW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToIntegerPipe", function () {
        return _to_integer_pipe__WEBPACK_IMPORTED_MODULE_1__["ToIntegerPipe"];
      });
      /* harmony import */


      var _uv_index_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./uv-index.pipe */
      "V+UV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UvIndexPipe", function () {
        return _uv_index_pipe__WEBPACK_IMPORTED_MODULE_2__["UvIndexPipe"];
      });
      /* harmony import */


      var _air_pollution_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./air-pollution.pipe */
      "Z9Oc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AirPollutionPipe", function () {
        return _air_pollution_pipe__WEBPACK_IMPORTED_MODULE_3__["AirPollutionPipe"];
      });
      /* harmony import */


      var _wind_direction_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wind-direction.pipe */
      "kppv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WindDirectionPipe", function () {
        return _wind_direction_pipe__WEBPACK_IMPORTED_MODULE_4__["WindDirectionPipe"];
      });
      /* harmony import */


      var _humidity_range_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./humidity-range.pipe */
      "bC28");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HumidityRangePipe", function () {
        return _humidity_range_pipe__WEBPACK_IMPORTED_MODULE_5__["HumidityRangePipe"];
      });
      /***/

    },

    /***/
    "M/ai":
    /*!**************************************************************!*\
      !*** ./src/app/shared/directives/air-pollution.directive.ts ***!
      \**************************************************************/

    /*! exports provided: AirPollutionDirective */

    /***/
    function MAi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AirPollutionDirective", function () {
        return AirPollutionDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AirPollutionDirective = /*#__PURE__*/function () {
        function AirPollutionDirective(el, renderer) {
          _classCallCheck(this, AirPollutionDirective);

          this.el = el;
          this.renderer = renderer;
          this.airPollution = ['good', 'fair', 'air-moderate', 'poor', 'very-poor'];
        }
        /*
        * Using the lifecycle hook OnChanges on AirPollutionDirective to change data values
        * instead of using a Resolver to wait data from de server before present the view.
        */


        _createClass(AirPollutionDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.airPollutionIndex.currentValue !== undefined) {
              if (!changes.airPollutionIndex.firstChange) {
                this.renderer.removeClass(this.el.nativeElement, this.airPollution[changes.airPollutionIndex.previousValue - 1]);
              }

              this.renderer.addClass(this.el.nativeElement, this.airPollution[changes.airPollutionIndex.currentValue - 1]);
            }
          }
        }]);

        return AirPollutionDirective;
      }();

      AirPollutionDirective.ɵfac = function AirPollutionDirective_Factory(t) {
        return new (t || AirPollutionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      AirPollutionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AirPollutionDirective,
        selectors: [["", "appAirPollution", ""]],
        inputs: {
          airPollutionIndex: ["appAirPollution", "airPollutionIndex"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirPollutionDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appAirPollution]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          airPollutionIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appAirPollution']
          }]
        });
      })();
      /***/

    },

    /***/
    "NI/k":
    /*!*********************************************************!*\
      !*** ./src/app/shared/directives/uv-index.directive.ts ***!
      \*********************************************************/

    /*! exports provided: UvIndexDirective */

    /***/
    function NIK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UvIndexDirective", function () {
        return UvIndexDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UvIndexDirective = /*#__PURE__*/function () {
        function UvIndexDirective(el, renderer) {
          _classCallCheck(this, UvIndexDirective);

          this.el = el;
          this.renderer = renderer;
          this.uvi = ['low', 'low', 'low', 'uv-moderate', 'uv-moderate', 'uv-moderate', 'high', 'high', 'very-high', 'very-high', 'very-high'];
        }

        _createClass(UvIndexDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var uvIndexClass = 'extreme';

            if (this.uvIndex < 11) {
              uvIndexClass = this.uvi[Math.round(this.uvIndex)];
            }

            this.renderer.addClass(this.el.nativeElement, uvIndexClass);
          }
        }]);

        return UvIndexDirective;
      }();

      UvIndexDirective.ɵfac = function UvIndexDirective_Factory(t) {
        return new (t || UvIndexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      UvIndexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: UvIndexDirective,
        selectors: [["", "appUvIndex", ""]],
        inputs: {
          uvIndex: ["appUvIndex", "uvIndex"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UvIndexDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appUvIndex]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          uvIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appUvIndex']
          }]
        });
      })();
      /***/

    },

    /***/
    "OmDW":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/to-integer.pipe.ts ***!
      \*************************************************/

    /*! exports provided: ToIntegerPipe */

    /***/
    function OmDW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToIntegerPipe", function () {
        return ToIntegerPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToIntegerPipe = /*#__PURE__*/function () {
        function ToIntegerPipe() {
          _classCallCheck(this, ToIntegerPipe);
        }

        _createClass(ToIntegerPipe, [{
          key: "transform",
          value: function transform(value) {
            return Math.round(value);
          }
        }]);

        return ToIntegerPipe;
      }();

      ToIntegerPipe.ɵfac = function ToIntegerPipe_Factory(t) {
        return new (t || ToIntegerPipe)();
      };

      ToIntegerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "toInteger",
        type: ToIntegerPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToIntegerPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'toInteger'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pipes/index */
      "7rOj");
      /* harmony import */


      var _directives_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./directives/index */
      "vu/V");
      /* harmony import */


      var _widgets_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./widgets/empty-state/empty-state.component */
      "WyR1");

      var sharedItems = [_pipes_index__WEBPACK_IMPORTED_MODULE_2__["ToIntegerPipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["CustomDatePipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["UvIndexPipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["AirPollutionPipe"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["UvIndexDirective"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["AirPollutionDirective"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["WindDirectionPipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["HumidityRangePipe"], _widgets_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_4__["EmptyStateComponent"]];

      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_pipes_index__WEBPACK_IMPORTED_MODULE_2__["ToIntegerPipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["CustomDatePipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["UvIndexPipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["AirPollutionPipe"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["UvIndexDirective"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["AirPollutionDirective"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["WindDirectionPipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["HumidityRangePipe"], _widgets_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_4__["EmptyStateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_pipes_index__WEBPACK_IMPORTED_MODULE_2__["ToIntegerPipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["CustomDatePipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["UvIndexPipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["AirPollutionPipe"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["UvIndexDirective"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["AirPollutionDirective"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["WindDirectionPipe"], _pipes_index__WEBPACK_IMPORTED_MODULE_2__["HumidityRangePipe"], _widgets_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_4__["EmptyStateComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [].concat(sharedItems),
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [].concat(sharedItems)
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "V+UV":
    /*!***********************************************!*\
      !*** ./src/app/shared/pipes/uv-index.pipe.ts ***!
      \***********************************************/

    /*! exports provided: UvIndexPipe */

    /***/
    function VUV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UvIndexPipe", function () {
        return UvIndexPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UvIndexPipe = /*#__PURE__*/function () {
        function UvIndexPipe() {
          _classCallCheck(this, UvIndexPipe);

          this.uvi = ['Low', 'Low', 'Low', 'Moderate', 'Moderate', 'Moderate', 'High', 'High', 'Very high', 'Very high', 'Very high'];
        }

        _createClass(UvIndexPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value >= 11) {
              return 'Extreme';
            }

            return this.uvi[Math.round(value)];
          }
        }]);

        return UvIndexPipe;
      }();

      UvIndexPipe.ɵfac = function UvIndexPipe_Factory(t) {
        return new (t || UvIndexPipe)();
      };

      UvIndexPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "uvIndex",
        type: UvIndexPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UvIndexPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'uvIndex'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "WyR1":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/widgets/empty-state/empty-state.component.ts ***!
      \*********************************************************************/

    /*! exports provided: EmptyStateComponent */

    /***/
    function WyR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyStateComponent", function () {
        return EmptyStateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = [[["", "empty-state-img", ""]], [["", "empty-state-title", ""]], [["", "empty-state-content", ""]], [["", "empty-state-action", ""]]];
      var _c1 = ["[empty-state-img]", "[empty-state-title]", "[empty-state-content]", "[empty-state-action]"];

      var EmptyStateComponent = /*#__PURE__*/_createClass(function EmptyStateComponent() {
        _classCallCheck(this, EmptyStateComponent);
      });

      EmptyStateComponent.ɵfac = function EmptyStateComponent_Factory(t) {
        return new (t || EmptyStateComponent)();
      };

      EmptyStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmptyStateComponent,
        selectors: [["widget-empty-state"]],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 0,
        consts: [[1, "empty-state"]],
        template: function EmptyStateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-area: main;\n}\n\n[_nghost-%COMP%]     .empty-state {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .empty-state img {\n  max-width: 16em;\n  height: auto;\n}\n\n[_nghost-%COMP%]     .empty-state p {\n  max-width: 22em;\n  margin-bottom: 1em;\n}\n\n[_nghost-%COMP%]     .empty-state button {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VtcHR5LXN0YXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUFKIiwiZmlsZSI6ImVtcHR5LXN0YXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IG1haW47XG59XG46aG9zdCA6Om5nLWRlZXAgLmVtcHR5LXN0YXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxNmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIHAge1xuICAgIG1heC13aWR0aDogMjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICBidXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmptyStateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'widget-empty-state',
            templateUrl: './empty-state.component.html',
            styleUrls: ['./empty-state.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Z9Oc":
    /*!****************************************************!*\
      !*** ./src/app/shared/pipes/air-pollution.pipe.ts ***!
      \****************************************************/

    /*! exports provided: AirPollutionPipe */

    /***/
    function Z9Oc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AirPollutionPipe", function () {
        return AirPollutionPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AirPollutionPipe = /*#__PURE__*/function () {
        function AirPollutionPipe() {
          _classCallCheck(this, AirPollutionPipe);

          this.airPollution = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
        }

        _createClass(AirPollutionPipe, [{
          key: "transform",
          value: function transform(value) {
            return this.airPollution[value - 1];
          }
        }]);

        return AirPollutionPipe;
      }();

      AirPollutionPipe.ɵfac = function AirPollutionPipe_Factory(t) {
        return new (t || AirPollutionPipe)();
      };

      AirPollutionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "airPollution",
        type: AirPollutionPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirPollutionPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'airPollution'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bC28":
    /*!*****************************************************!*\
      !*** ./src/app/shared/pipes/humidity-range.pipe.ts ***!
      \*****************************************************/

    /*! exports provided: HumidityRangePipe */

    /***/
    function bC28(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HumidityRangePipe", function () {
        return HumidityRangePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HumidityRangePipe = /*#__PURE__*/function () {
        function HumidityRangePipe() {
          _classCallCheck(this, HumidityRangePipe);
        }

        _createClass(HumidityRangePipe, [{
          key: "transform",
          value: function transform(value) {
            if (value <= 30) {
              return 'Too Dry';
            } else if (value > 30 && value <= 60) {
              return 'Comfortable';
            } else {
              return 'Too Moist';
            }
          }
        }]);

        return HumidityRangePipe;
      }();

      HumidityRangePipe.ɵfac = function HumidityRangePipe_Factory(t) {
        return new (t || HumidityRangePipe)();
      };

      HumidityRangePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "humidityRange",
        type: HumidityRangePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HumidityRangePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'humidityRange'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cUwi":
    /*!**************************************************!*\
      !*** ./src/app/shared/pipes/custom-date.pipe.ts ***!
      \**************************************************/

    /*! exports provided: CustomDatePipe */

    /***/
    function cUwi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function () {
        return CustomDatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CustomDatePipe = /*#__PURE__*/function () {
        function CustomDatePipe() {
          _classCallCheck(this, CustomDatePipe);
        }

        _createClass(CustomDatePipe, [{
          key: "transform",
          value: function transform(value) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mediumDate';
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(value * 1000, format, 'en-US');
          }
        }]);

        return CustomDatePipe;
      }();

      CustomDatePipe.ɵfac = function CustomDatePipe_Factory(t) {
        return new (t || CustomDatePipe)();
      };

      CustomDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "customDate",
        type: CustomDatePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'customDate'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kppv":
    /*!*****************************************************!*\
      !*** ./src/app/shared/pipes/wind-direction.pipe.ts ***!
      \*****************************************************/

    /*! exports provided: WindDirectionPipe */

    /***/
    function kppv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WindDirectionPipe", function () {
        return WindDirectionPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WindDirectionPipe = /*#__PURE__*/function () {
        function WindDirectionPipe() {
          _classCallCheck(this, WindDirectionPipe);

          this.compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];
        }

        _createClass(WindDirectionPipe, [{
          key: "transform",
          value: function transform(windDeg) {
            if (windDeg > 360) {
              return this.compass[Math.round(windDeg % 360 / 22.5)];
            }

            return this.compass[Math.round(windDeg / 22.5)];
          }
        }]);

        return WindDirectionPipe;
      }();

      WindDirectionPipe.ɵfac = function WindDirectionPipe_Factory(t) {
        return new (t || WindDirectionPipe)();
      };

      WindDirectionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "windDirection",
        type: WindDirectionPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindDirectionPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'windDirection'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vu/V":
    /*!********************************************!*\
      !*** ./src/app/shared/directives/index.ts ***!
      \********************************************/

    /*! exports provided: UvIndexDirective, AirPollutionDirective */

    /***/
    function vuV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _uv_index_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./uv-index.directive */
      "NI/k");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UvIndexDirective", function () {
        return _uv_index_directive__WEBPACK_IMPORTED_MODULE_0__["UvIndexDirective"];
      });
      /* harmony import */


      var _air_pollution_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./air-pollution.directive */
      "M/ai");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AirPollutionDirective", function () {
        return _air_pollution_directive__WEBPACK_IMPORTED_MODULE_1__["AirPollutionDirective"];
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~dashboard-dashboard-module~locations-locations-module~map-map-module~settings-settings-module-es5.js.map