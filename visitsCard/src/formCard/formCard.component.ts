import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioResquest } from '../model/cardRequest.interface';


@Component({
  selector: 'app-formCard',
  templateUrl: './formCard.component.html',
  styleUrls: ['./formCard.component.css']
})
export class FormCardComponent  implements OnInit {

  /*user!: usuarioResquest;*/
  formCard: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCard = this.fb.group({
      informacoesPessoais: this.fb.group({
        nome: ['', [Validators.required]],  // Nome obrigatório
        idade: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Idade obrigatória e numérica
        telefone: ['', [Validators.required]],  // Telefone obrigatório
        email: ['', [Validators.required, Validators.email]]  // E-mail obrigatório
      }),
      endereco: this.fb.group({
        numero: ['', [Validators.required]],  // Número obrigatório
        bairro: ['', [Validators.required]],  // Bairro obrigatório
        cidade: ['', [Validators.required]]  // Cidade obrigatória
      })
    });
  }
 /*formCard = this.fb.group({
    // Seção 1: Dados Pessoais
    dadosPessoais: this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(18)]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }),
    // Seção 2: Endereço
    endereco: this.fb.group({
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required]
    })
  });
-*/

  ngOnInit(): void {

  }
  onSubmit() {
    if (this.formCard.valid) {
      const formValue = this.formCard.value;

      // Criando o objeto de requisição com os dados do formulário
      const usuario: usuarioResquest = {
        informacoesPessoais: {
          nome: formValue.informacoesPessoais.nome,
          idade: +formValue.informacoesPessoais.idade,  // Convertendo para número
          telefone: formValue.informacoesPessoais.telefone,
          email: formValue.informacoesPessoais.email
        },
        endereco: {
          numero: formValue.endereco.numero,
          bairro: formValue.endereco.bairro,
          cidade: formValue.endereco.cidade
        }
      };

      console.log(usuario);  // Aqui você pode usar a variável `usuario` para enviar à API
    } else {
      console.log('Formulário inválido');
    }
  }
}


