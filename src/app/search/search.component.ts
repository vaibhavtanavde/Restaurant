import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm='';
  searchItem:string = '';
  constructor(private route:ActivatedRoute, private router:Router) {
    route.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm= params.searchTerm;
    });
  }

  ngOnInit(): void{
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.searchItem=params['searchItem'];
    })  
  }
  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/' + term);
  }

}
