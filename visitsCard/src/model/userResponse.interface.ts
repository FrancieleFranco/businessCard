export interface userResponse {
  id: number;
  informacoesPessoais: {
    nome: string;
    idade: number;
    telefone: string;
    email: string;
  };
  endereco: {
    endereco: string
    numero: string;
    bairro: string;
    cidade: string;
  };
}
