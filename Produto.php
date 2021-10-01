<?php
	class Produto{
		public $id;
		public $nome;
		public $preco;
		private $estoque = 1;

		public function getPreco(){
			return $this->preco;
		}

		public function setPreco($preco){
			if(!is_numeric($preco)){
				echo "Não é um valor de entrada Válida !!";
				return;
			}
			$this->preco = $preco;
		}

		public function getEstoque(){
			return $this->estoque;
		}

		public function setEstoque($qtd){
			if(!is_numeric($qtd)){
				echo "Não é um valor de entrada Válida !!";
				return;
			}
			$this->estoque = $qtd;
		}

		public function aumentaEstoque($qtd){
			$novo_estoque = $this->estoque + $qtd;
			$this->setEstoque($novo_estoque);
		}

		public function aumentaPreco($percentual){
			$novo_preco = $this->getPreco() + ($this->getPreco() * ($percentual / 100)); 
			$this->setPreco($novo_preco);
		}
	}

?>