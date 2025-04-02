import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userResquest } from '../model/userRequest.interface';
import { UserCardService } from 'src/service/userCard.service';
import { userResponse } from 'src/model/userResponse.interface';

@Component({
  selector: 'app-formCard',
  templateUrl: './formCard.component.html',
  styleUrls: ['./formCard.component.css'],
})
export class FormCardComponent implements OnInit {
  formCard: FormGroup;

  users: userResponse[] = [];

  constructor(
    private fb: FormBuilder,
    private userCardService: UserCardService
  ) {
    this.formCard = this.fb.group({
      informacoesPessoais: this.fb.group({
        nome: ['', [Validators.required]],
        idade: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        telefone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      }),
      endereco: this.fb.group({
        endereco: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
      }),
    });
  }

  ngOnInit(): void {}

  carregarUsuarios(): void {
    this.userCardService.getUser().subscribe((data: userResponse[]) => {
      this.users = data;
    });
  }

  createUser(): void {
    if (this.formCard.valid) {
      const novoUsuario: userResponse = this.formCard.value;
      this.userCardService
        .createUser(novoUsuario)
        .subscribe((usuarioCriado: userResponse) => {
          this.users.push(usuarioCriado);
          this.formCard.reset();
        });
      console.log(novoUsuario);
    }
  }
}
