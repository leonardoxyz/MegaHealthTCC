import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adm-page',
  templateUrl: './adm-page.component.html',
  styleUrls: ['./adm-page.component.css']
})
export class AdmPageComponent implements OnInit {

  public AdmForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.AdmForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }



  login() {
    if (this.AdmForm.value.email == "atendimento@mhealth.com" && this.AdmForm.value.password == "admin") {
      localStorage.setItem("idCliente", this.AdmForm.value.id);
      localStorage.setItem("name", "Admin");
      alert("Login realizado com sucesso!");
      this.AdmForm.reset();
      this.router.navigate(['home'])
    }else{
      alert("Dados inválidos")
    }



  }



}
