import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private router:Router) { }
userData=[]
  ngOnInit(): void {
    this.userData=(localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[])

  }
edit(user:any){
this.router.navigate(['update',user.email])
}
add(){
  this.router.navigate(['add'])
  }
  del(user:any){
    this.userData=this.userData.filter(u=>u.email!==user.email)
    localStorage.setItem('users', JSON.stringify(this.userData))    
  }
}
