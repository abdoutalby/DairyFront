import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToAdd(){
    this.router.navigate(['/formAdd'])
  }
  goEdit(){
    this.router.navigate(['/formEdit'])

  }

}
