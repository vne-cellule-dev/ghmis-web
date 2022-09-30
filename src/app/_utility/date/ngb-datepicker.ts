import { Injectable } from '@angular/core';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter,NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


    const I18N_VALUES = {
        'fr': {
          weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
          months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
        }
        // other languages you would support
      };
      
      // Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
      // use the Angular LOCALE_ID value
      @Injectable()
      export class I18n {
        language = 'fr';
      }
      
      // Define custom service providing the months and weekdays translations
      @Injectable()
      export class CustomDatepickerI18n extends NgbDatepickerI18n {
      
        constructor(private _i18n: I18n) {
          super();
        }
      
        getWeekdayShortName(weekday: number): string {
          return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
        }
        getMonthShortName(month: number): string {
          return I18N_VALUES[this._i18n.language].months[month - 1];
        }
        getMonthFullName(month: number): string {
          return this.getMonthShortName(month);
        }
      
        getDayAriaLabel(date: NgbDateStruct): string {
          return `${date.day}-${date.month}-${date.year}`;
        }
      }
      
      /**
       * This Service handles how the date is represented in scripts i.e. ngModel.
       */
      @Injectable()
      export class CustomAdapter extends NgbDateAdapter<string> {
      
        readonly DELIMITER = '-';
      
        fromModel(value: string | null): NgbDateStruct | null {
          if (value) {
            let date = value.split(this.DELIMITER);
            return {
              day : parseInt(date[0], 10),
              month : parseInt(date[1], 10),
              year : parseInt(date[2], 10)
            };
          }
          return null;
        }
      
        toModel(date: NgbDateStruct | null): string | null {
          return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
        }
      }
      
      /**
       * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
       */
      @Injectable()
      export class CustomDateParserFormatter extends NgbDateParserFormatter {
      
        readonly DELIMITER = '/';
      
        parse(value: string): NgbDateStruct | null {
          if (value) {
            let date = value.split(this.DELIMITER);
            return {
              day : parseInt(date[0], 10),
              month : parseInt(date[1], 10),
              year : parseInt(date[2], 10)
            };
          }
          return null;
        }
      
        format(date: NgbDateStruct | null): string {
          return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
        }
      }
      