<?php
	class Atendente extends Pessoa{
		private $idade, $sexo;

		function __construct(string $nome, string $cpf, int $idade, string $sexo){
			parent:: __construct($nome, $cpf);
			$this->idade = $idade;
			$this->sexo = $sexo;
		}

		public function get_ano_nascimento(){
			return date('Y') - $this->idade;
		}		

	}

?>