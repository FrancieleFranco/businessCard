export interface usuarioResponse {
  informacoesPessoais: {
    nome: string;
    idade: number;
    telefone: string;
    email: string;
  };
  endereco: {
    numero: string; // ou number, dependendo de como você deseja tratar
    bairro: string;
    cidade: string;
  };
}
