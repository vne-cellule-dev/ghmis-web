(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashier-cashier-module"],{

/***/ "C5ry":
/*!**************************************************************!*\
  !*** ./src/app/cashier/add-cashier/add-cashier.component.ts ***!
  \**************************************************************/
/*! exports provided: AddCashierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCashierComponent", function() { return AddCashierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/cashier.service */ "wgfM");
/* harmony import */ var _shared_cashier_cashier_form_cashier_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/cashier/cashier-form/cashier-form.component */ "eGbx");






class AddCashierComponent {
    constructor(router, alertService, cashierService) {
        this.router = router;
        this.alertService = alertService;
        this.cashierService = cashierService;
        /**
        * title to display
        */
        this.title = "Ajouter un caissier";
    }
    ngOnInit() { }
    /**
     * add a new object
     * @param data object
     *
     */
    save(data) {
        let cashier = data.cashier;
        let action = data.action;
        this.cashierService.save(cashier).subscribe(cashier => {
            switch (action) {
                case 'save':
                    this.router.navigate(['/cashier/list']);
                    this.alertService.success('Caissier ajout?? avec succ??s');
                    break;
                case 'save_and_new':
                    this.router.navigate(['/cashier/add']);
                    this.alertService.success('Caissier ajout??e avec succ??s');
                    break;
                default:
                    this.router.navigate(['/cashier/list']);
                    this.alertService.error('Ajout annul??e');
                    break;
            }
        }, error => {
            this.alertService.error(error);
        });
    }
}
AddCashierComponent.??fac = function AddCashierComponent_Factory(t) { return new (t || AddCashierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_3__["CashierService"])); };
AddCashierComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AddCashierComponent, selectors: [["app-add-cashier"]], decls: 1, vars: 1, consts: [[3, "title", "objectEmitter"]], template: function AddCashierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-cashier-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("objectEmitter", function AddCashierComponent_Template_app_cashier_form_objectEmitter_0_listener($event) { return ctx.save($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("title", ctx.title);
    } }, directives: [_shared_cashier_cashier_form_cashier_form_component__WEBPACK_IMPORTED_MODULE_4__["CashierFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2hpZXIvYWRkLWNhc2hpZXIvYWRkLWNhc2hpZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddCashierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-cashier',
                templateUrl: './add-cashier.component.html',
                styleUrls: ['./add-cashier.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_3__["CashierService"] }]; }, null); })();


/***/ }),

/***/ "HksH":
/*!************************************************************************!*\
  !*** ./src/app/_shared/cashier/cashier-list/cashier-list.component.ts ***!
  \************************************************************************/
/*! exports provided: CashierListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierListComponent", function() { return CashierListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_utility_disable_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_utility/disable-item */ "IMzf");
/* harmony import */ var src_app_utility_enable_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_utility/enable-item */ "iHu6");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/cashier.service */ "wgfM");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var src_app_services_cash_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/cash-register.service */ "ruit");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");














function CashierListComponent_ng_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const cashRegister_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", cashRegister_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", cashRegister_r7.name, " ");
} }
function CashierListComponent_ng_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const active_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", active_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", active_r8.value, " ");
} }
function CashierListComponent_ng_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", entry_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entry_r9.value);
} }
const _c0 = function (a0, a1) { return { "text-green": a0, "text-red": a1 }; };
function CashierListComponent_tr_88_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CashierListComponent_tr_88_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r11.onItemChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const cashier_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", cashier_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", cashier_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("for", cashier_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cashier_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cashier_r10.userFirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cashier_r10.userLastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cashier_r10.cashRegister);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cashier_r10.userPhoneContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", cashier_r10.active == "Y" ? "Actif" : "Inactif");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](20, _c0, cashier_r10.active == "Y", cashier_r10.active == "N"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](19, 14, cashier_r10.createdAt, "dd/MM/yyyy H:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cashier_r10.createdByFirstName + " " + cashier_r10.createdByLastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cashier_r10.updatedAt ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](24, 17, cashier_r10.updatedAt, "dd/MM/yyyy H:mm:ss") : "Jamais modifi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cashier_r10.UpdatedByFirstName ? cashier_r10.UpdatedByFirstName + " " + cashier_r10.UpdatedByLastName : "");
} }
function CashierListComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CashierListComponent_span_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CashierListComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.EmptyMessage);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
class CashierListComponent {
    constructor(cashierService, userService, cashRegisterService) {
        this.cashierService = cashierService;
        this.userService = userService;
        this.cashRegisterService = cashRegisterService;
        /**
         * init first page
         */
        this.page = 0;
        /**
         * number of item par page default 10
         */
        this.perPage = 10;
        /**
         * handle the spinner
         */
        this.loading = true;
        /**
         * Define entries options
         */
        this.entries = [
            { id: 10, value: 10 },
            { id: 25, value: 25 },
            { id: 50, value: 50 },
            { id: 100, value: 100 }
        ];
        /**
        * define  states options
        */
        this.actives = [
            { id: "Y", value: "Actif" },
            { id: "N", value: "Inactif" },
        ];
        /**
         *  order direction
         */
        this.order = 'desc';
        /**
         * order column default id
         */
        this.sort = 'id';
        /**
         * description of the order direction
         */
        this.orderDescription = 'decroissant';
    }
    ngOnInit() {
        this.initForm();
        this.userService.getIdAndName().subscribe(res => { this.users = res; });
        this.cashRegisterService.getIdAndName().subscribe(res => { this.cashRegisters = res; });
        this.getCashiers();
    }
    /**
     *  init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            cashRegister: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            phoneContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
        this.entryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            entries: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](10),
        });
    }
    /**
     * get list
     */
    getCashiers() {
        let data = this.form.value;
        data.entries = this.entryForm.get('entries').value;
        data.page = this.page;
        data.order = this.order;
        data.sort = this.sort;
        this.cashierService.findAllByPage(data).subscribe(res => {
            if (res) {
                this.loading = false;
                this.hasNoData = false;
                this.totalItem = res['totalElements'];
                this.pages = res['totalPages'];
                this.cashiers = res['content'];
                this.page = res['pageNumber'] + 1;
            }
            ;
        }, error => {
            this.cashiers = [];
            this.loading = false;
            this.hasNoData = true;
            this.EmptyMessage = error;
        });
    }
    /**
     * search function
     */
    search() {
        this.loading = true;
        this.page = this.page > 0 ? this.page - 1 : 0;
        this.getCashiers();
    }
    /**
     * sort function
     * @param SortColumn
     */
    onSort(SortColumn) {
        this.loading = true;
        if (this.order == 'desc') {
            this.order = 'asc';
            this.orderDescription = 'decroissant';
        }
        else {
            this.orderDescription = 'croissant';
            this.order = 'desc';
        }
        this.orderDescription;
        this.sort = SortColumn;
        this.loading = true;
        this.page = this.page - 1;
        this.getCashiers();
    }
    /**
     * set the current page
     * @param pageNum
     */
    onPageChange(pageNum) {
        this.loading = true;
        this.page = pageNum - 1;
        this.getCashiers();
    }
    /**
     * function to handle the selected number of entries to show
     */
    OnEntryChange() {
        this.loading = true;
        this.perPage = this.entryForm.get('entries').value;
        this.page = this.page - 1;
        this.getCashiers();
    }
    /**
     * set the selected item
     * @param item
     */
    onItemChange(item) {
        this.selectedItem = item;
    }
    /**
     * disable an object
     */
    disable() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Souhaitez-vous vraiment desactiver ce caissier?',
            text: '',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui.',
            cancelButtonText: 'Annul??e'
        }).then((result) => {
            if (result.value) {
                this.cashierService.disable(this.selectedItem).subscribe(result => {
                    //disable item in the DOM
                    if (result)
                        Object(src_app_utility_disable_item__WEBPACK_IMPORTED_MODULE_2__["disableItem"])(this.cashiers, result['id']);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Desactiv??!', 'caissier desactiver avec succ??s.', 'success');
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Annul??e', 'le caissier n\'a pas ??t?? modifi??.', 'error');
            }
        });
    }
    /**
     * enable an object
     */
    enable() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Souhaitez-vous vraiment Activer ce caissier?',
            text: '',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui.',
            cancelButtonText: 'Annul??e'
        }).then((result) => {
            if (result.value) {
                this.cashierService.enable(this.selectedItem).subscribe(result => {
                    //Enable item in the Dom
                    if (result)
                        Object(src_app_utility_enable_item__WEBPACK_IMPORTED_MODULE_3__["enableItem"])(this.cashiers, result['id']);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Actv??!', 'caissier activ?? avec succ??s.', 'success');
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Annul??e', 'Le caissier n\'a pas ??t?? modifi??.', 'error');
            }
        });
    }
}
CashierListComponent.??fac = function CashierListComponent_Factory(t) { return new (t || CashierListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_5__["CashierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cash_register_service__WEBPACK_IMPORTED_MODULE_7__["CashRegisterService"])); };
CashierListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CashierListComponent, selectors: [["app-cashier-list"]], inputs: { title: "title" }, decls: 96, vars: 29, consts: [[1, "card"], [1, "card-header"], [1, "row", "pl-3", "pr-3"], [1, "col-md-7"], [3, "formGroup"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "form-group"], [1, "input-group", "input-group-sm"], ["type", "text", "formControlName", "firstName", "placeholder", "Nom", 1, "form-control"], ["type", "text", "formControlName", "lastName", "placeholder", "prenom", 1, "form-control"], ["type", "text", "formControlName", "phoneContact", "placeholder", "telephone", 1, "form-control"], ["formControlName", "cashRegister", "placeholder", " Caisse ", 2, "width", "100%"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-sm-12"], ["formControlName", "active", "placeholder", " Etat ", 2, "width", "100%"], [1, "col-lg-12", "col-md-12", "col-sm-12", "mb-1"], [1, "btn", "btn-light", "btn-sm", 2, "width", "100%", 3, "click"], [1, "fas", "fa-search"], [1, "col-md-5"], [1, "py-1", "col-lg-3", "col-md-6", "col-sm-12"], ["routerLink", "/cashier/add", 1, "btn", "btn-block", "btn-success", "btn-sm", "font-weight-bold", "text-nowrap", "text-white"], [1, "fas", "fa-list", "mr-2"], [1, "btn", "btn-block", "btn-secondary", "btn-sm", "font-weight-bold", "text-nowrap", "text-white", 3, "routerLink", "ngClass"], [1, "fas", "fa-pen-alt", "mr-2"], [1, "btn", "btn-block", "btn-primary", "btn-sm", "font-weight-bold", "text-nowrap", "text-white", 3, "ngClass", "click"], [1, "fas", "fa-toggle-on", "mr-2"], [1, "btn", "btn-block", "btn-warning", "btn-sm", "font-weight-bold", "text-nowrap", "text-white", 3, "ngClass", "click"], [1, "fas", "fa-toggle-off", "mr-2"], [1, "card-body"], [1, "col-md-10", "text-center", "text-muted"], [1, "col-md-2", "text-right"], ["for", "entries", 1, "col-sm-12", "text-right", "mt-1"], [1, "col-sm-12", "mb-2"], ["formControlName", "entries", 3, "searchable", "clearable", "change"], [1, "table-responsive"], [1, "table", "table-sm", "table-hover", "table-bordered"], [1, "thead-light", "text-center"], ["scope", "col"], [1, "fa", "fa-sort", "ml-2", 3, "ngbTooltip", "click"], [4, "ngFor", "ngForOf"], [1, "text-center", "mb-5", "mt-4"], ["class", "spinner-border text-info", "role", "status", 4, "ngIf"], ["class", "text-muted ml-3 ", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "col-md-7", "offset-md-5"], [3, "collectionSize", "pageSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], [3, "value"], ["scope", "row", 1, "text-center"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "radio-stacked", 1, "custom-control-input", 3, "id", "value", "change"], [1, "custom-control-label", 3, "for"], [1, "text-capitalize"], [1, "text-capitalize", "text-center"], [1, "fas", "fa-circle", 3, "ngClass", "ngbTooltip"], [1, "text-center"], [1, "text-capitalize", "text-nowrap"], [1, "text-center", "text-center", "text-nowrap"], ["role", "status", 1, "spinner-border", "text-info"], [1, "sr-only"], [1, "text-muted", "ml-3"], [1, "mt-3"]], template: function CashierListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, CashierListComponent_ng_option_20_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, CashierListComponent_ng_option_25_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CashierListComponent_Template_span_click_27_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Nouveau ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Modifier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CashierListComponent_Template_a_click_41_listener() { return ctx.enable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Activer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CashierListComponent_Template_a_click_45_listener() { return ctx.disable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Desactiver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Afficher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "ng-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CashierListComponent_Template_ng_select_change_59_listener() { return ctx.OnEntryChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, CashierListComponent_ng_option_60_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "thead", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Prenom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Caisse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Talephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Etat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CashierListComponent_Template_i_click_78_listener() { return ctx.onSort("active"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "cr\u00E9e le ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "cr\u00E9e par");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Derni\u00E8re modif.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Modifi\u00E9 par");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](88, CashierListComponent_tr_88_Template, 27, 23, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](90, CashierListComponent_div_90_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](91, CashierListComponent_span_91_Template, 2, 0, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](92, CashierListComponent_div_92_Template, 3, 1, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "ngb-pagination", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function CashierListComponent_Template_ngb_pagination_pageChange_95_listener($event) { return ctx.page = $event; })("pageChange", function CashierListComponent_Template_ngb_pagination_pageChange_95_listener() { return ctx.onPageChange(ctx.page); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cashRegisters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.actives);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/cashier/update/", ctx.selectedItem, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](23, _c1, !ctx.selectedItem));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](25, _c1, !ctx.selectedItem));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c1, !ctx.selectedItem));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.entryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("searchable", false)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.entries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("ngbTooltip", "trier par ordre ", ctx.orderDescription, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cashiers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hasNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", ctx.totalItem)("pageSize", ctx.perPage)("page", ctx.page)("maxSize", 10)("rotate", true)("boundaryLinks", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPagination"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["??r"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQvY2FzaGllci9jYXNoaWVyLWxpc3QvY2FzaGllci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CashierListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cashier-list',
                templateUrl: './cashier-list.component.html',
                styleUrls: ['./cashier-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_5__["CashierService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: src_app_services_cash_register_service__WEBPACK_IMPORTED_MODULE_7__["CashRegisterService"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IMzf":
/*!******************************************!*\
  !*** ./src/app/_utility/disable-item.ts ***!
  \******************************************/
/*! exports provided: disableItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableItem", function() { return disableItem; });
/**
 * disable object from the DOM whithout refresh the page  after  disabling from the database
 * @param array array of objects
 * @param rowId row to disable
 */
function disableItem(array, rowId) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i].id === rowId) {
            array[i].active = 'N';
        }
    }
}


/***/ }),

/***/ "WoQt":
/*!*******************************************!*\
  !*** ./src/app/cashier/cashier.module.ts ***!
  \*******************************************/
/*! exports provided: CashierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierModule", function() { return CashierModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cashier_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashier-routing.module */ "xoim");
/* harmony import */ var _add_cashier_add_cashier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-cashier/add-cashier.component */ "C5ry");
/* harmony import */ var _update_cashier_update_cashier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-cashier/update-cashier.component */ "jhpB");
/* harmony import */ var _list_cashier_list_cashier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-cashier/list-cashier.component */ "eWMh");
/* harmony import */ var _shared_cashier_cashier_form_cashier_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/cashier/cashier-form/cashier-form.component */ "eGbx");
/* harmony import */ var _shared_cashier_cashier_list_cashier_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/cashier/cashier-list/cashier-list.component */ "HksH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");












class CashierModule {
}
CashierModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CashierModule });
CashierModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CashierModule_Factory(t) { return new (t || CashierModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cashier_routing_module__WEBPACK_IMPORTED_MODULE_2__["CashierRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CashierModule, { declarations: [_add_cashier_add_cashier_component__WEBPACK_IMPORTED_MODULE_3__["AddCashierComponent"],
        _update_cashier_update_cashier_component__WEBPACK_IMPORTED_MODULE_4__["UpdateCashierComponent"],
        _list_cashier_list_cashier_component__WEBPACK_IMPORTED_MODULE_5__["ListCashierComponent"],
        _shared_cashier_cashier_form_cashier_form_component__WEBPACK_IMPORTED_MODULE_6__["CashierFormComponent"],
        _shared_cashier_cashier_list_cashier_list_component__WEBPACK_IMPORTED_MODULE_7__["CashierListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cashier_routing_module__WEBPACK_IMPORTED_MODULE_2__["CashierRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CashierModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _add_cashier_add_cashier_component__WEBPACK_IMPORTED_MODULE_3__["AddCashierComponent"],
                    _update_cashier_update_cashier_component__WEBPACK_IMPORTED_MODULE_4__["UpdateCashierComponent"],
                    _list_cashier_list_cashier_component__WEBPACK_IMPORTED_MODULE_5__["ListCashierComponent"],
                    _shared_cashier_cashier_form_cashier_form_component__WEBPACK_IMPORTED_MODULE_6__["CashierFormComponent"],
                    _shared_cashier_cashier_list_cashier_list_component__WEBPACK_IMPORTED_MODULE_7__["CashierListComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cashier_routing_module__WEBPACK_IMPORTED_MODULE_2__["CashierRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "eGbx":
/*!************************************************************************!*\
  !*** ./src/app/_shared/cashier/cashier-form/cashier-form.component.ts ***!
  \************************************************************************/
/*! exports provided: CashierFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierFormComponent", function() { return CashierFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_utility_form_invalid_form_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_utility/form/invalid-form-controls */ "Y9Bn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/cashier.service */ "wgfM");
/* harmony import */ var src_app_services_cash_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/cash-register.service */ "ruit");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");












function CashierFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CashierFormComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.actionToDo("save_and_new"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Enreg. & nouveau ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CashierFormComponent_ng_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", user_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r9.lastName + " " + user_r9.firstName);
} }
function CashierFormComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " ce champ doit \u00EAtre renseign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CashierFormComponent_ng_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const cashRegister_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", cashRegister_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cashRegister_r10.name);
} }
function CashierFormComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " ce champ doit \u00EAtre renseign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CashierFormComponent_ng_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const active_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", active_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](active_r11.value);
} }
function CashierFormComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " ce champ doit \u00EAtre renseign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class CashierFormComponent {
    constructor(router, alertService, cashierService, cashRegisterService, userService) {
        this.router = router;
        this.alertService = alertService;
        this.cashierService = cashierService;
        this.cashRegisterService = cashRegisterService;
        this.userService = userService;
        /**
        * form submission action, it will get the value of the action to do
        */
        this.formAction = '';
        /**
         * child component output
         */
        this.objectEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
        * define  states options
        */
        this.actives = [
            { id: "Y", value: "Actif" },
            { id: "N", value: "Inactif" },
        ];
        /**
         * action to do for display error msg and redirect
         * @param msg
         * @param redirectTo
         */
        this.errorAction = function (msg, redirectTo) {
            this.router.navigate([redirectTo]);
            this.alertService.error(msg);
        };
    }
    ngOnInit() {
        this.initForm();
        if (this.cashierId)
            this.initUpdateAction();
        this.cashRegisterService.getIdAndName().subscribe(res => { this.cashRegisters = res; });
        this.userService.getIdAndName().subscribe(res => { this.users = res; });
    }
    /**
     *  init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cashRegister: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Y', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    /**
     * init the form value when updating
     */
    initUpdateAction() {
        this.cashierService.findById(this.cashierId).subscribe(res => {
            if (res) {
                this.cashier = res;
                this.form.get("id").setValue(this.cashier['id']);
                this.form.get("user").setValue(this.cashier['userId']);
                this.form.get("cashRegister").setValue(this.cashier['cashRegisterId']);
                this.form.get('active').setValue(this.cashier['active']);
            }
            else {
                this.errorAction("Modification impossible car le caissier n'existe pas", '/cashier/list');
            }
        }, error => {
            this.errorAction("Erreur lors de la modification", '/cashier/list');
        });
    }
    /**
      * fonction called at the form submission action whenever to add or update the object
      */
    save() {
        // reset alerts on submit
        this.alertService.clear();
        //validate form '
        this.invalidFormControls = Object(src_app_utility_form_invalid_form_controls__WEBPACK_IMPORTED_MODULE_2__["invalidformControls"])(this.form);
        this.cashier = this.form.value;
        if (this.form.valid) {
            this.objectEmitter.emit({ cashier: this.cashier, action: this.formAction });
            if (this.formAction == "save_and_new")
                this.initForm();
        }
        else {
            this.alertService.error('Formulaire non valid');
        }
    }
    /**
     * get the form submission action
     * @param action : string
     */
    actionToDo(action) {
        this.formAction = action;
    }
    /**
     * action to Do when  ckick on cancel button
     */
    cancelAction() {
        this.errorAction('Action annul??e', '/cashier/list');
    }
}
CashierFormComponent.??fac = function CashierFormComponent_Factory(t) { return new (t || CashierFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_5__["CashierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cash_register_service__WEBPACK_IMPORTED_MODULE_6__["CashRegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
CashierFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CashierFormComponent, selectors: [["app-cashier-form"]], inputs: { cashierId: "cashierId", title: "title" }, outputs: { objectEmitter: "objectEmitter" }, decls: 51, vars: 9, consts: [[3, "formGroup", "ngSubmit"], [1, "card"], [1, "card-header"], [1, "row"], [1, "mr-auto", "p-2", "col-md-6"], [1, "col-md-5"], [1, "py-1", "col-lg-4", "col-md-6", "col-sm-12", "text-nowrap"], ["type", "submit", "value", "save", 1, "btn", "btn-block", "btn-success", "btn-sm", "font-weight-bold", 3, "click"], ["class", "py-1 col-lg-4  col-md-6 col-sm-12  text-nowrap", 4, "ngIf"], ["value", "cancel", 1, "btn", "btn-block", "btn-danger", "btn-sm", "font-weight-bold", 3, "click"], [1, "card-body"], [1, "text-muted"], [1, "text-danger"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "form-group"], ["for", "user"], [1, "text-red"], ["formControlName", "user", "placeholder", "Caissier"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "col-lg-2", "col-md-6", "col-sm-12"], ["for", "cashRegister"], ["formControlName", "cashRegister", "placeholder", "Caisse"], ["for", "typeactive"], ["formControlName", "active"], ["type", "hidden", "formControlName", "id"], ["type", "submit", "value", "save_and_new", 1, "btn", "btn-block", "btn-info", "btn-sm", "font-weight-bold", 3, "click"], [3, "value"]], template: function CashierFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function CashierFormComponent_Template_form_ngSubmit_0_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CashierFormComponent_Template_button_click_10_listener() { return ctx.actionToDo("save"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Enregistrer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CashierFormComponent_div_12_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CashierFormComponent_Template_span_click_14_listener() { return ctx.cancelAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Annuler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " NB: les champs marqu\u00E9s d'un ast\u00E9risque ( ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " ) sont obligatoire pour la validation du formulare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Caissier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, CashierFormComponent_ng_option_30_Template, 2, 2, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, CashierFormComponent_span_31_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Caisse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, CashierFormComponent_ng_option_39_Template, 2, 2, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, CashierFormComponent_span_40_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Etat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "ng-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, CashierFormComponent_ng_option_48_Template, 2, 2, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, CashierFormComponent_span_49_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.cashierId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.invalidFormControls && ctx.invalidFormControls.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cashRegisters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.invalidFormControls && ctx.invalidFormControls.cashRegister);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.actives);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.invalidFormControls && ctx.invalidFormControls.active);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["??r"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQvY2FzaGllci9jYXNoaWVyLWZvcm0vY2FzaGllci1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CashierFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cashier-form',
                templateUrl: './cashier-form.component.html',
                styleUrls: ['./cashier-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_5__["CashierService"] }, { type: src_app_services_cash_register_service__WEBPACK_IMPORTED_MODULE_6__["CashRegisterService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, { cashierId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], objectEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "eWMh":
/*!****************************************************************!*\
  !*** ./src/app/cashier/list-cashier/list-cashier.component.ts ***!
  \****************************************************************/
/*! exports provided: ListCashierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCashierComponent", function() { return ListCashierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_cashier_cashier_list_cashier_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_shared/cashier/cashier-list/cashier-list.component */ "HksH");



class ListCashierComponent {
    constructor() {
        /**
       * title to display
       */
        this.title = 'Liste des caissiers';
    }
    ngOnInit() {
    }
}
ListCashierComponent.??fac = function ListCashierComponent_Factory(t) { return new (t || ListCashierComponent)(); };
ListCashierComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ListCashierComponent, selectors: [["app-list-cashier"]], decls: 1, vars: 1, consts: [[3, "title"]], template: function ListCashierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-cashier-list", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("title", ctx.title);
    } }, directives: [_shared_cashier_cashier_list_cashier_list_component__WEBPACK_IMPORTED_MODULE_1__["CashierListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2hpZXIvbGlzdC1jYXNoaWVyL2xpc3QtY2FzaGllci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListCashierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-cashier',
                templateUrl: './list-cashier.component.html',
                styleUrls: ['./list-cashier.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iHu6":
/*!*****************************************!*\
  !*** ./src/app/_utility/enable-item.ts ***!
  \*****************************************/
/*! exports provided: enableItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableItem", function() { return enableItem; });
/**
 * enable object from the DOM whithout refresh the page  after  enabling from the database
 * @param array array of objects
 * @param rowId row to enable
 */
function enableItem(array, rowId) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i].id === rowId) {
            array[i].active = 'Y';
        }
    }
}


/***/ }),

/***/ "jhpB":
/*!********************************************************************!*\
  !*** ./src/app/cashier/update-cashier/update-cashier.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdateCashierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCashierComponent", function() { return UpdateCashierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/cashier.service */ "wgfM");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var _shared_cashier_cashier_form_cashier_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/cashier/cashier-form/cashier-form.component */ "eGbx");






class UpdateCashierComponent {
    constructor(router, activatedRoute, cashierService, alertService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cashierService = cashierService;
        this.alertService = alertService;
        /**
         * title to display
         */
        this.title = "Modification d'un caissier";
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.cashierId = params.id;
        });
    }
    /**
     * update existing object
     * @param data object
     */
    save(data) {
        let cashier = data.cashier;
        let action = data.action;
        this.cashierService.update(cashier).subscribe(res => {
            this.router.navigate(['/cashier/list']);
            this.alertService.success('Caissier modifi?? avec succ??s');
        });
    }
}
UpdateCashierComponent.??fac = function UpdateCashierComponent_Factory(t) { return new (t || UpdateCashierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_2__["CashierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
UpdateCashierComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UpdateCashierComponent, selectors: [["app-update-cashier"]], decls: 1, vars: 2, consts: [[3, "cashierId", "title", "objectEmitter"]], template: function UpdateCashierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-cashier-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("objectEmitter", function UpdateCashierComponent_Template_app_cashier_form_objectEmitter_0_listener($event) { return ctx.save($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cashierId", ctx.cashierId)("title", ctx.title);
    } }, directives: [_shared_cashier_cashier_form_cashier_form_component__WEBPACK_IMPORTED_MODULE_4__["CashierFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2hpZXIvdXBkYXRlLWNhc2hpZXIvdXBkYXRlLWNhc2hpZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpdateCashierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-cashier',
                templateUrl: './update-cashier.component.html',
                styleUrls: ['./update-cashier.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_cashier_service__WEBPACK_IMPORTED_MODULE_2__["CashierService"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "ruit":
/*!****************************************************!*\
  !*** ./src/app/_services/cash-register.service.ts ***!
  \****************************************************/
/*! exports provided: CashRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashRegisterService", function() { return CashRegisterService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class CashRegisterService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(cashRegister) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cash-register/add', cashRegister);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cash-register/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cash-register/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cash-register/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cash-register/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cash-register/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cash-register/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cash-register/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cash-register/active_cash_registers_name');
    }
}
CashRegisterService.??fac = function CashRegisterService_Factory(t) { return new (t || CashRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CashRegisterService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: CashRegisterService, factory: CashRegisterService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](CashRegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "wgfM":
/*!**********************************************!*\
  !*** ./src/app/_services/cashier.service.ts ***!
  \**********************************************/
/*! exports provided: CashierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierService", function() { return CashierService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class CashierService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(cashier) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cashier/add', cashier);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cashier/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cashier/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        data['cashRegister'] = (data['cashRegister'] == null) ? '' : data['cashRegister'];
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('firstName', data['firstName'])
                .set('lastName', data['lastName'])
                .set('phoneContact', data['phoneContact'])
                .set('cashRegister', data['cashRegister'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
                .set('page', data['page'])
                .set('size', data['entries'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cashier/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cashier/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cashier/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cashier/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cashier/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cashier/active_cashiers_name');
    }
}
CashierService.??fac = function CashierService_Factory(t) { return new (t || CashierService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CashierService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: CashierService, factory: CashierService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](CashierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "xoim":
/*!***************************************************!*\
  !*** ./src/app/cashier/cashier-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CashierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierRoutingModule", function() { return CashierRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_cashier_add_cashier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-cashier/add-cashier.component */ "C5ry");
/* harmony import */ var _list_cashier_list_cashier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-cashier/list-cashier.component */ "eWMh");
/* harmony import */ var _update_cashier_update_cashier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-cashier/update-cashier.component */ "jhpB");







const routes = [
    { path: "add", component: _add_cashier_add_cashier_component__WEBPACK_IMPORTED_MODULE_2__["AddCashierComponent"] },
    { path: "update/:id", component: _update_cashier_update_cashier_component__WEBPACK_IMPORTED_MODULE_4__["UpdateCashierComponent"] },
    { path: "list", component: _list_cashier_list_cashier_component__WEBPACK_IMPORTED_MODULE_3__["ListCashierComponent"] },
];
class CashierRoutingModule {
}
CashierRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CashierRoutingModule });
CashierRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CashierRoutingModule_Factory(t) { return new (t || CashierRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CashierRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CashierRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cashier-cashier-module.js.map