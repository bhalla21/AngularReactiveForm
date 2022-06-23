import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'FirstProject';
  elements=["mobile","Smart Mobile"];
  onlyOdd=false;
  oddNumber=[1,3,5];
evenNumber=[2,4,6];
value=100;
genders=['Male', 'Female'];
signupForm:FormGroup;
result=[];
ngOnInit(): void {
  this.signupForm=new FormGroup({
    'userData':new FormGroup({
      'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    }),
    'gender':new FormControl('Male'),
    'hobbies': new FormArray([])
});
}
 onSubmit(){
  console.log(this.signupForm);
  this.result.push(this.signupForm.value);
 }

 addHobbies(){
  const control= new FormControl(null,Validators.required);
  (<FormArray>this.signupForm.get('hobbies')).push(control);
 }

 get controls(){
  return (this.signupForm.get('hobbies') as FormArray).controls;
 }
  
}
