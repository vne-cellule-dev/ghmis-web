import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActCode } from 'src/app/_models/actCode.model';
import { ActCodeService } from 'src/app/_services/act-code.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { ValidateInt } from 'src/app/_utility/CustomValidators/int.Validator';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-act-code-form',
  templateUrl: './act-code-form.component.html',
  styleUrls: ['./act-code-form.component.css']
})
export class ActCodeFormComponent implements OnInit {

   /**
   *   form Group
   */
  form: FormGroup;

  /**
  * form submission action, it will get the value of the action to do
  */
  formAction = '';

  /**
   * invalid from controls
   */
  invalidFormControls: any;


  /**
   * parent component input
   */
  @Input()
  actCodeId: number;

  /**
   * parent component input
   */
  @Input()
  title: string;

  /**
   * child component output
   */
  @Output()
  objectEmitter: EventEmitter<any> = new EventEmitter();

  /**
   * the component model
   */
  actCode: ActCode

   /**
   * define  states options
   */
  actives = [
    {id: "Y", value: "Actif"},
    {id: "N", value: "Inactif"},
  ]

  /**
   * action to do for display error msg and redirect
   * @param msg 
   * @param redirectTo 
   */
  errorAction = function (msg: string, redirectTo: string) {
    this.router.navigate([redirectTo]);
    this.alertService.error(msg);
  };


  constructor(
    private router: Router,
    private alertService : AlertService,
    private actCodeService: ActCodeService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.actCodeId) this.initUpdateAction();
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      value: new FormControl('', [Validators.required, ValidateInt]),
      active: new FormControl('Y', Validators.required),
      
    });
  }
  /**
   * init the form value when updating
   */
  initUpdateAction() {
      this.actCodeService.findById(this.actCodeId).subscribe(
        res => {
          if (res) {
            this.actCode = res;
            this.form.patchValue(this.actCode)
          } else {
            this.errorAction("Modification impossible car le code d'actes n'existe pas", '/act/list-code');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/act/list-code');
        })
  }

  /**
    * fonction called at the form submission action whenever to add or update the object
    */
  save() {
    // reset alerts on submit
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    this.actCode = this.form.value;
  
    if (this.form.valid) {
      this.objectEmitter.emit({ actCode: this.actCode, action: this.formAction })
      if (this.formAction == "save_and_new") this.initForm();
    } else {
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
    this.errorAction('Action annulée', '/act/list-family');
  }
}
