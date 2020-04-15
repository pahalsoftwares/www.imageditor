function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./apps/app/app-routing.module.ts":
  /*!****************************************!*\
    !*** ./apps/app/app-routing.module.ts ***!
    \****************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function appsAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_editor_components_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/editor/components/editor.component */
    "./apps/app/editor/components/editor.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _app_editor_components_editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
        useValue: '/'
      }],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        enableTracing: false,
        paramsInheritanceStrategy: 'always'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            enableTracing: false,
            paramsInheritanceStrategy: 'always'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
            useValue: '/'
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/app/app.constants.ts":
  /*!***********************************!*\
    !*** ./apps/app/app.constants.ts ***!
    \***********************************/

  /*! exports provided: AppSettings */

  /***/
  function appsAppAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppSettings = function AppSettings() {
      _classCallCheck(this, AppSettings);

      this.isLoggedIn = true;
      this.API_PREFIX = '/';
      this.STATIC_URL = '/';
    };

    AppSettings.ɵfac = function AppSettings_Factory(t) {
      return new (t || AppSettings)();
    };

    AppSettings.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppSettings,
      factory: AppSettings.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSettings, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/app/app.module.ts":
  /*!********************************!*\
    !*** ./apps/app/app.module.ts ***!
    \********************************/

  /*! exports provided: AppModule */

  /***/
  function appsAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./apps/app/app-routing.module.ts");
    /* harmony import */


    var _app_core_components_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/components/app */
    "./apps/app/core/components/app.ts");
    /* harmony import */


    var _app_core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/core/core.module */
    "./apps/app/core/core.module.ts");

    var AppModule = /*#__PURE__*/function () {
      function AppModule(toolTipConfig) {
        _classCallCheck(this, AppModule);

        this.toolTipConfig = toolTipConfig;
        this.browserDocument = document;
        this.toolTipConfig.container = 'body';
      }

      _createClass(AppModule, [{
        key: "ngDoBootstrap",
        value: function ngDoBootstrap(appRef) {
          if (this.browserDocument.getElementsByTagName('app-root').length > 0) {
            appRef.bootstrap(_app_core_components_app__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]);
          }
        }
      }]);

      return AppModule;
    }();

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipConfig"]));
      },
      providers: [],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientXsrfModule"].withOptions({
        cookieName: 'csrftoken',
        headerName: 'X-CSRFToken'
      }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
        closeButton: true,
        enableHtml: true,
        progressBar: true,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _app_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientXsrfModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _app_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientXsrfModule"].withOptions({
            cookieName: 'csrftoken',
            headerName: 'X-CSRFToken'
          }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
            closeButton: true,
            enableHtml: true,
            progressBar: true,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _app_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"].forRoot()],
          providers: [],
          entryComponents: [_app_core_components_app__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipConfig"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/app/core/components/app.ts":
  /*!*****************************************!*\
    !*** ./apps/app/core/components/app.ts ***!
    \*****************************************/

  /*! exports provided: AppComponent */

  /***/
  function appsAppCoreComponentsAppTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/events */
    "./apps/app/core/services/events.ts");
    /* harmony import */


    var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-loading-bar/core */
    "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm2015/ngx-loading-bar-core.js");
    /* harmony import */


    var _preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./preloader */
    "./apps/app/core/components/preloader.ts");
    /* harmony import */


    var _header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header */
    "./apps/app/core/components/header/header.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(toast, appEvents) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.toast = toast;
        this.appEvents = appEvents;

        this.onSdError = function (error) {
          var header = error.header;
          var text = error.message;

          if (error.error != null && error.error.error instanceof Array) {
            try {
              header = error.error.statusText;
              text = error.error.error.join(' ');
            } catch (e) {
              header = error.header;
              text = error.message;
            }
          }

          _this.toast.error(text, header);
        };

        this.appEvents.sdError.subscribe(this.onSdError);
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_events__WEBPACK_IMPORTED_MODULE_2__["EventService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-loading-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-preloader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarComponent"], _preloader__WEBPACK_IMPORTED_MODULE_4__["PreloaderComponent"], _header_header__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <main>\n      <ngx-loading-bar></ngx-loading-bar>\n      <app-preloader></app-preloader>\n      <app-header></app-header>\n      <router-outlet></router-outlet>\n    </main>\n  "
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }, {
          type: _services_events__WEBPACK_IMPORTED_MODULE_2__["EventService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/app/core/components/header/header.ts":
  /*!***************************************************!*\
    !*** ./apps/app/core/components/header/header.ts ***!
    \***************************************************/

  /*! exports provided: AppHeaderComponent */

  /***/
  function appsAppCoreComponentsHeaderHeaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function () {
      return AppHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/app.constants */
    "./apps/app/app.constants.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AppHeaderComponent = /*#__PURE__*/function () {
      function AppHeaderComponent(appSettings) {
        _classCallCheck(this, AppHeaderComponent);

        this.appSettings = appSettings;
        this.observer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.staticUrl = this.appSettings.STATIC_URL;
      }

      _createClass(AppHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.observer.unsubscribe();
        }
      }, {
        key: "path",
        get: function get() {
          return window.location.pathname;
        }
      }]);

      return AppHeaderComponent;
    }();

    AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) {
      return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]));
    };

    AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppHeaderComponent,
      selectors: [["app-header"]],
      decls: 6,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand", "navbar-dark", "flex-column", "flex-md-row", "app-navbar"], ["href", "/", "aria-label", "Bootstrap", 1, "navbar-brand", "mr-0", "mr-md-2"], ["src", "/assets/images/logo/logo.png"], [1, "navbar-nav-scroll"], [1, "navbar-nav", "bd-navbar-nav", "flex-row"], [1, "navbar-nav", "flex-row", "ml-md-auto", "d-none", "d-md-flex"]],
      template: function AppHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"]],
      styles: [".app-navbar[_ngcontent-%COMP%] {\n  min-height: 55px;\n  background-color: #ffbb3b;\n  box-shadow: inset 0 0.5rem 1rem rgba(0, 0, 0, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.1);\n}\n.app-navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.app-navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2ltYWdlLWVkaXRvci9hcHBzL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5zY3NzIiwiYXBwcy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzRkFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7QUNDTiIsImZpbGUiOiJhcHBzL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1uYXZiYXJ7XG4gIG1pbi1oZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJiM2I7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gIC5uYXZiYXItYnJhbmR7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgIH1cbiAgfVxufSIsIi5hcHAtbmF2YmFyIHtcbiAgbWluLWhlaWdodDogNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmIzYjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uYXBwLW5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZzogMDtcbn1cbi5hcHAtbmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.html',
          styleUrls: ['./header.scss']
        }]
      }], function () {
        return [{
          type: _app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/app/core/components/preloader.ts":
  /*!***********************************************!*\
    !*** ./apps/app/core/components/preloader.ts ***!
    \***********************************************/

  /*! exports provided: PreloaderComponent */

  /***/
  function appsAppCoreComponentsPreloaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function () {
      return PreloaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_core_services_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/core/services/events */
    "./apps/app/core/services/events.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreloaderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PreloaderComponent = /*#__PURE__*/function () {
      function PreloaderComponent(appEvents) {
        _classCallCheck(this, PreloaderComponent);

        this.appEvents = appEvents;
        this.appLoaded = false;
      }

      _createClass(PreloaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.subs = this.appEvents.appLoaded.subscribe(function (event) {
            return _this2.appLoaded = event;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }]);

      return PreloaderComponent;
    }();

    PreloaderComponent.ɵfac = function PreloaderComponent_Factory(t) {
      return new (t || PreloaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_events__WEBPACK_IMPORTED_MODULE_1__["EventService"]));
    };

    PreloaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreloaderComponent,
      selectors: [["app-preloader"]],
      decls: 1,
      vars: 1,
      consts: [["class", "app-loader-wrapper preloader", 4, "ngIf"], [1, "app-loader-wrapper", "preloader"], [1, "app-loader"], [1, "logo"], ["src", "/assets/images/logo/pahal-soft.png", "alt", "Pahal Soft"], ["viewBox", "25 25 50 50", 1, "circular"], ["cx", "50", "cy", "50", "r", "20", "fill", "none", "stroke-width", "2", "stroke-miterlimit", "10", 1, "path"]],
      template: function PreloaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PreloaderComponent_div_0_Template, 6, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.appLoaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preloader',
          template: "\n    <div *ngIf=\"!appLoaded\" class=\"app-loader-wrapper preloader\">\n      <div class=\"app-loader\">\n        <span class=\"logo\"><img src=\"/assets/images/logo/pahal-soft.png\" alt=\"Pahal Soft\" /></span>\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n        </svg>\n      </div>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _app_core_services_events__WEBPACK_IMPORTED_MODULE_1__["EventService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/app/core/core.module.ts":
  /*!**************************************!*\
    !*** ./apps/app/core/core.module.ts ***!
    \**************************************/

  /*! exports provided: CoreModule */

  /***/
  function appsAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-loading-bar/http-client */
    "./node_modules/@ngx-loading-bar/http-client/__ivy_ngcc__/fesm2015/ngx-loading-bar-http-client.js");
    /* harmony import */


    var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-loading-bar/router */
    "./node_modules/@ngx-loading-bar/router/__ivy_ngcc__/fesm2015/ngx-loading-bar-router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/events */
    "./apps/app/core/services/events.ts");
    /* harmony import */


    var _app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/app.constants */
    "./apps/app/app.constants.ts");
    /* harmony import */


    var _services_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/http */
    "./apps/app/core/services/http.ts");
    /* harmony import */


    var _services_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/error */
    "./apps/app/core/services/error.ts");
    /* harmony import */


    var _components_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/app */
    "./apps/app/core/components/app.ts");
    /* harmony import */


    var _components_preloader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/preloader */
    "./apps/app/core/components/preloader.ts");
    /* harmony import */


    var _components_header_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/header/header */
    "./apps/app/core/components/header/header.ts");
    /* harmony import */


    var _app_editor_editor_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/editor/editor.module */
    "./apps/app/editor/editor.module.ts");

    var COMPONENTS = [_components_app__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _components_preloader__WEBPACK_IMPORTED_MODULE_13__["PreloaderComponent"], _components_header_header__WEBPACK_IMPORTED_MODULE_14__["AppHeaderComponent"]];

    var CoreModule = /*#__PURE__*/function () {
      function CoreModule() {
        _classCallCheck(this, CoreModule);
      }

      _createClass(CoreModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: CoreModule,
            providers: [_app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"], _services_events__WEBPACK_IMPORTED_MODULE_8__["EventService"], _services_error__WEBPACK_IMPORTED_MODULE_11__["AppError"], _services_http__WEBPACK_IMPORTED_MODULE_10__["HttpService"], {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"],
              useClass: _services_error__WEBPACK_IMPORTED_MODULE_11__["AppError"]
            }]
          };
        }
      }]);

      return CoreModule;
    }();

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_5__["LoadingBarHttpClientModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__["LoadingBarRouterModule"], _app_editor_editor_module__WEBPACK_IMPORTED_MODULE_15__["EditorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_components_app__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _components_preloader__WEBPACK_IMPORTED_MODULE_13__["PreloaderComponent"], _components_header_header__WEBPACK_IMPORTED_MODULE_14__["AppHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_5__["LoadingBarHttpClientModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__["LoadingBarRouterModule"], _app_editor_editor_module__WEBPACK_IMPORTED_MODULE_15__["EditorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: COMPONENTS,
          entryComponents: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_5__["LoadingBarHttpClientModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__["LoadingBarRouterModule"], _app_editor_editor_module__WEBPACK_IMPORTED_MODULE_15__["EditorModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/app/core/services/error.ts":
  /*!*****************************************!*\
    !*** ./apps/app/core/services/error.ts ***!
    \*****************************************/

  /*! exports provided: AppError */

  /***/
  function appsAppCoreServicesErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppError", function () {
      return AppError;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./events */
    "./apps/app/core/services/events.ts");

    var MIXPANEL_ERRORS = 0;
    var mixpanel = window['mixpanel'];

    var AppError = /*#__PURE__*/function () {
      function AppError(appEvents) {
        _classCallCheck(this, AppError);

        this.appEvents = appEvents;
      }

      _createClass(AppError, [{
        key: "handleError",
        value: function handleError(err) {
          if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            if (err.status === 401) {
              this.appEvents.error401.next(true);
              return void 0;
            }

            if (err.status === -1) {
              // We can ignore errors for when the user doesn't have internet connectivity.
              // Usually caused by a computer waking up from sleep and making a request before
              // network connected.
              return void 0;
            }

            var ref;
            var data = {
              url: err.url,
              status: err.status,
              statusText: err.statusText,
              data: (ref = err.message) != null ? ref.toString().substr(0, 2000) : void 0
            };
            var win = window;

            if (win.Rollbar != null && window.location.hostname.indexOf('spryng.io') > -1) {
              win.Rollbar.error('Server call failed: ' + err.url, data);
            }

            if (err.status === 403) {
              this.appEvents.sdError.next({
                message: 'You don\'t have permission to perform this action.',
                header: 'Access Denied.'
              });
            } else {
              var msg;
              var header;

              if (err.status === 0) {
                msg = 'Looks like you are experiencing low or no internet connectivity - please check your connection';
                header = 'Connectivity issue';
              } else {
                if (typeof err.error === 'object') {
                  try {
                    header = err.error.join(' ');
                    msg = "Unsuccessful request: ".concat(err.url);
                  } catch (e) {
                    header = 'Unsuccessful request';
                    msg = '';

                    for (var k in err.error) {
                      if (err.error.hasOwnProperty(k)) {
                        msg += err.error[k].join(' ');
                      }
                    }
                  }
                } else {
                  msg = err.url + ' has failed with error ' + err.status + ' ' + err.statusText;
                  header = 'An error has occurred.';
                }
              }

              this.appEvents.sdError.next({
                message: msg,
                header: header,
                error: err
              });
            }

            if (typeof mixpanel !== 'undefined' && mixpanel !== null) {
              MIXPANEL_ERRORS += 1;

              if (MIXPANEL_ERRORS < 5) {
                mixpanel.track('Had Network Error');
              }
            }

            if ('error' in console) {
              console.error(err.url + ' has failed with error ' + err.status + ' ' + err.statusText);
            }
          } else {
            if ('error' in console) {
              console.error(err);
            }
          }
        }
      }]);

      return AppError;
    }();

    AppError.ɵfac = function AppError_Factory(t) {
      return new (t || AppError)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_events__WEBPACK_IMPORTED_MODULE_2__["EventService"]));
    };

    AppError.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppError,
      factory: AppError.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppError, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _events__WEBPACK_IMPORTED_MODULE_2__["EventService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/app/core/services/events.ts":
  /*!******************************************!*\
    !*** ./apps/app/core/services/events.ts ***!
    \******************************************/

  /*! exports provided: EventService */

  /***/
  function appsAppCoreServicesEventsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventService = function EventService() {
      _classCallCheck(this, EventService);

      this.appLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.sdError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.error401 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    EventService.ɵfac = function EventService_Factory(t) {
      return new (t || EventService)();
    };

    EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EventService,
      factory: EventService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/app/core/services/http.ts":
  /*!****************************************!*\
    !*** ./apps/app/core/services/http.ts ***!
    \****************************************/

  /*! exports provided: HttpService */

  /***/
  function appsAppCoreServicesHttpTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/app.constants */
    "./apps/app/app.constants.ts");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http, appSettings) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.appSettings = appSettings;
        this.API_PREFIX = this.appSettings.API_PREFIX;
        this.baseApi = "".concat(this.API_PREFIX);
      }

      _createClass(HttpService, [{
        key: "get",
        value: function get(path) {
          var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var options = {
            params: search
          };
          this.prepareOptions(options);
          var url = "".concat(this.baseApi).concat(path);
          return this.http.get(url, options);
        }
      }, {
        key: "post",
        value: function post(path) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var options = {
            headers: {}
          };
          this.prepareOptions(options);
          var body = data;

          if (data instanceof Object) {
            body = JSON.stringify(data);
            options.headers['Content-Type'] = 'application/json';
          }

          var url = "".concat(this.baseApi).concat(path);
          return this.http.post(url, body, options);
        }
      }, {
        key: "delete",
        value: function _delete(path) {
          var options = {};
          this.prepareOptions(options);
          var url = "".concat(this.baseApi).concat(path);
          return this.http["delete"](url, options);
        }
      }, {
        key: "put",
        value: function put(path, data) {
          var options = {
            headers: {}
          };
          this.prepareOptions(options);

          if (data) {
            options.headers['Content-Type'] = 'application/json';
          }

          var url = "".concat(this.baseApi).concat(path);
          return this.http.put(url, JSON.stringify(data), options);
        }
      }, {
        key: "patch",
        value: function patch(path, data) {
          var options = {
            headers: {}
          };
          this.prepareOptions(options);

          if (data) {
            options.headers['Content-Type'] = 'application/json';
          }

          var url = "".concat(this.baseApi).concat(path);
          return this.http.patch(url, JSON.stringify(data), options);
        }
      }, {
        key: "getParam",
        value: function getParam(params, param, value) {
          if (value) {
            return params.set(param, value.toString());
          }

          return params;
        }
      }, {
        key: "prepareOptions",
        value: function prepareOptions(options) {
          if (!options.headers) {
            options.headers = {};
          }

          options.headers['Accept'] = 'application/json';
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _app_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./apps/app/editor/components/editor.component.ts":
  /*!********************************************************!*\
    !*** ./apps/app/editor/components/editor.component.ts ***!
    \********************************************************/

  /*! exports provided: EditorComponent */

  /***/
  function appsAppEditorComponentsEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var tui_image_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tui-image-editor */
    "./node_modules/tui-image-editor/dist/tui-image-editor.js");
    /* harmony import */


    var tui_image_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tui_image_editor__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_core_services_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/events */
    "./apps/app/core/services/events.ts");
    /* harmony import */


    var _app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/app.constants */
    "./apps/app/app.constants.ts");

    var _c0 = ["imageEditor"];

    var EditorComponent = /*#__PURE__*/function () {
      function EditorComponent(router, appEvents, appSettings) {
        _classCallCheck(this, EditorComponent);

        this.router = router;
        this.appEvents = appEvents;
        this.appSettings = appSettings;
      }

      _createClass(EditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.appEvents.appLoaded.next(true);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var W = jquery__WEBPACK_IMPORTED_MODULE_2__(this.editorRef.nativeElement).width();
          var H = jquery__WEBPACK_IMPORTED_MODULE_2__(this.editorRef.nativeElement).height();
          var instance = new tui_image_editor__WEBPACK_IMPORTED_MODULE_1___default.a(this.editorRef.nativeElement, {
            includeUI: {
              initMenu: 'filter',
              menuBarPosition: 'left'
            },
            usageStatistics: false,
            cssMaxWidth: W,
            cssMaxHeight: H,
            selectionStyle: {
              cornerSize: 20,
              rotatingPointOffset: 70
            }
          });
        }
      }]);

      return EditorComponent;
    }();

    EditorComponent.ɵfac = function EditorComponent_Factory(t) {
      return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_events__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]));
    };

    EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditorComponent,
      selectors: [["app-editor"]],
      viewQuery: function EditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editorRef = _t.first);
        }
      },
      decls: 4,
      vars: 0,
      consts: [[1, "editor-wrapper", "app-page"], [1, "page-inner"], [1, "image-editor-wrapper"], ["imageEditor", ""]],
      template: function EditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".image-editor-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2ltYWdlLWVkaXRvci9hcHBzL2FwcC9lZGl0b3IvY29tcG9uZW50cy9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJhcHBzL2FwcC9lZGl0b3IvY29tcG9uZW50cy9lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUNBRiIsImZpbGUiOiJhcHBzL2FwcC9lZGl0b3IvY29tcG9uZW50cy9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWFnZS1lZGl0b3Itd3JhcHBlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4iLCIuaW1hZ2UtZWRpdG9yLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-editor',
          templateUrl: './editor.component.html',
          styleUrls: ['./editor.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _app_core_services_events__WEBPACK_IMPORTED_MODULE_4__["EventService"]
        }, {
          type: _app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
        }];
      }, {
        editorRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['imageEditor', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./apps/app/editor/components/index.ts":
  /*!*********************************************!*\
    !*** ./apps/app/editor/components/index.ts ***!
    \*********************************************/

  /*! exports provided: EditorComponent */

  /***/
  function appsAppEditorComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./editor.component */
    "./apps/app/editor/components/editor.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return _editor_component__WEBPACK_IMPORTED_MODULE_0__["EditorComponent"];
    });
    /***/

  },

  /***/
  "./apps/app/editor/editor.module.ts":
  /*!******************************************!*\
    !*** ./apps/app/editor/editor.module.ts ***!
    \******************************************/

  /*! exports provided: EditorModule */

  /***/
  function appsAppEditorEditorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
      return EditorModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components */
    "./apps/app/editor/components/index.ts");
    /* harmony import */


    var _components_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/editor.component */
    "./apps/app/editor/components/editor.component.ts");

    var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"]];

    var EditorModule = function EditorModule() {
      _classCallCheck(this, EditorModule);
    };

    EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EditorModule
    });
    EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EditorModule_Factory(t) {
        return new (t || EditorModule)();
      },
      providers: [],
      imports: [[_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorModule, {
        declarations: [_components_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"]],
        imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: COMPONENTS,
          exports: [],
          providers: [],
          imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./apps/environments/environment.ts":
  /*!******************************************!*\
    !*** ./apps/environments/environment.ts ***!
    \******************************************/

  /*! exports provided: environment */

  /***/
  function appsEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./apps/main.ts":
  /*!**********************!*\
    !*** ./apps/main.ts ***!
    \**********************/

  /*! no exports provided */

  /***/
  function appsMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./apps/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./apps/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!****************************!*\
    !*** multi ./apps/main.ts ***!
    \****************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /var/www/image-editor/apps/main.ts */
    "./apps/main.ts");
    /***/
  },

  /***/
  1:
  /*!***********************!*\
    !*** jsdom (ignored) ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************************************************!*\
    !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!***************************************!*\
    !*** jsdom/lib/jsdom/utils (ignored) ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map