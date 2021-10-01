<?php
	class Pessoa {
		protected $nome, $cpf;

		function __construct(string $nome, string $cpf){
			$this->nome 	= $nome;
			$this->cpf 		= $cpf;
		}

		public function getNome(){
			return $this->nome;
		}

		public function setNome($nome){
			if(!is_string($nome)){
				echo "Não é um valor de entrada Válida !!";
				return;
			}
			$this->nome = $nome;
		}

		public function getCpf(){
			return $this->cpf;
		}

		public function setCpf($cpf){
			if(!is_string($cpf)){
				echo "Não é um valor de entrada Válida !!";
				return;
			}
			$this->cpf = $cpf;
		}

		public function detalhes(): void{
			echo "Nome: {$this->nome} ";
			echo "Cpf: {$this->cpf}\n";

		}

	}

?>
