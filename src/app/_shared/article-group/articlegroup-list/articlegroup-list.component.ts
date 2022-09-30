import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import { ArticleGroup } from 'src/app/_models/articleGroup.model';
import { ArticleGroupService } from 'src/app/_services/article-group.service';

@Component({
  selector: 'app-articlegroup-list',
  templateUrl: './articlegroup-list.component.html',
  styleUrls: ['./articlegroup-list.component.css']
})
export class ArticlegroupListComponent implements OnInit {

  
   /**
     * search formGroup
     */
    public form: FormGroup;

    /**
     * entries formGroup
     */
    public entryForm: FormGroup;
  
    /**
     * init first page
     */
    public page = 0;
  
    /**
     * number of item par page default 10
     */
    public perPage = 10;
  
    /**
     * total items
     */
    public totalItem: number;
  
    /**
     * number of page
     */
    public pages: number;
  
    /**
     * handle the spinner
     */
    public loading = true;
  
    /**
     * the selected item a action
     */
    public selectedItem: number;
  
    /**
     * object model
     */
    articleGroup : object;

    /**
     * collection of object
     */
    articleGroups: ArticleGroup[];
  
  
    /**
     * Define entries options
     */
    entries = [
      { id: 10, value: 10 },
      { id: 25, value: 25 },
      { id: 50, value: 50 },
      { id: 100, value: 100 }
    ];

   /**
   * define  states options
   */
  actives = [
    {id: "Y", value: "Actif"},
    {id: "N", value: "Inactif"},
  ]
  
    /**
     *  order direction
     */
    order = 'desc';
  
    /**
     * order column default id
     */
    sort = 'id';
  
    /**
     * description of the order direction
     */
    orderDescription = 'decroissant';

  /**
   * define if request result has datas or no
   */
  hasNoData: boolean;

   /**
    * Msg to display when request result is empty
    */
   EmptyMessage: String;
  
  /**
   * page title
   */
    @Input()
    title: string;

  constructor( private articleGroupService: ArticleGroupService) { }

  ngOnInit() {
    this.initForm();
    this.getArticleGroup();
  }

  /**
     *  init form 
     */
   initForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      active: new FormControl(null),
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })
  }

  /**
   * get articleGroups list
   */
  getArticleGroup() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;
   
    this.articleGroupService.findAllByPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData=false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.articleGroups = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error =>{
            this.articleGroups = [];
            this.loading=false;
            this.hasNoData=true;
            this.EmptyMessage=error;
      })
  }

 
/**
 * search function
 */
search() {
  this.loading = true;
  this.page =this.page > 0 ? this.page - 1: 0;
  this.getArticleGroup();
}

/**
 * sort function
 * @param SortColumn 
 */
onSort(SortColumn) {
  this.loading= true;
  if (this.order == 'desc') {
    this.order = 'asc';
    this.orderDescription = 'decroissant';
  } else {
    this.orderDescription = 'croissant';
    this.order = 'desc';
  }
  this.orderDescription;
  this.sort = SortColumn;
  this.loading = true
  this.page = this.page - 1;
  this.getArticleGroup();
}

/**
 * set the current page
 * @param pageNum 
 */
public onPageChange(pageNum: number): void {
  this.loading = true;
  this.page = pageNum - 1;
  this.getArticleGroup();
}

/**
 * function to handle the selected number of entries to show
 */
OnEntryChange() {
  this.loading = true;
  this.perPage = this.entryForm.get('entries').value;
  this.page = this.page - 1;
  this.getArticleGroup();
}

/**
 * set the selected item 
 * @param item 
 */
onItemChange(item) {
  this.selectedItem = item;
}

/**
 * disable a articleGroup
 */
disable() {
  Swal.fire({
    title: "Souhaitez-vous vraiment desactiver cette famille d'article?",
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui.',
    cancelButtonText: 'Annulée'
  }).then((result) => {
    if (result.value) {

      this.articleGroupService.disable(this.selectedItem).subscribe(result => {
        //disable item in the DOM
        if (result) disableItem(this.articleGroups, result['id']);

        Swal.fire(
          'Desactivé!',
          "famille d'article desactivée avec succès.",
          'success'
        );

      });

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Annulée',
        "la famille d'article n'a pas été modifiée.",
        'error'
      )
    }
  })
}

/**
 * enable a facility
 */
enable() {
  Swal.fire({
    title: "Souhaitez-vous vraiment Activer cette famille d'article?",
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui.',
    cancelButtonText: 'Annulée'
  }).then((result) => {

    if (result.value) {
      this.articleGroupService.enable(this.selectedItem).subscribe(result => {
        //Enable item in the Dom
        if (result) enableItem(this.articleGroups, result['id']);

        Swal.fire(
          'Actvé!',
          "famille d'article activé avec succès.",
          'success'
        );

      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Annulée',
        " La famille d'article n'a pas été modifiée.",
        'error'
      )
    }
  })
}

}
