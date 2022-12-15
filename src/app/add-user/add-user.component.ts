import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router,private active:ActivatedRoute) { }
users=[]
isActiveUser=""
  ngOnInit(): void {
    this.users=(localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[])
    this.active.params.subscribe((param)=>{
      this.isActiveUser=(param?.email)?param?.email:""
      for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email==param?.email){this.userForm.patchValue(this.users[i])
        console.log(this.users[i])}
      }

    })
  }
userForm: FormGroup=this.fb.group({
  name:['',Validators.required],
  email:['',[Validators.required, Validators.email]],
  mobile:['',Validators.required],
})

onSubmit(){
  // console.log(this.userForm.value)
  if(!this.isActiveUser)
{(this.users.filter((u)=>u.email==this.userForm.value.email)).length==0?
this.users.push(this.userForm.value):alert("users already exist")
 }
  else{
  for (let i = 0; i < this.users.length; i++) {
    (this.userForm.value.email == this.users[i].email)?this.users[i]=this.userForm.value:""
  }}
  console.log(this.users)
  localStorage.setItem('users', JSON.stringify(this.users));
  this.router.navigate(["list"])
}
}
