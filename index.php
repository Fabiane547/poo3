<?php
	require_once('classes/Produto.php');
	require_once('classes/Pessoa.php');
	require_once('classes/Atendente.php');

//exemplo de estaciamento do objeto produto e algumas funcionalidades
	echo "exemplo de produto <br>";
	$camiseta = new Produto();
	$camiseta->nome = 'Camiseta php';
	$camiseta->id = 1000;
	$camiseta->preco = 50;

	$camiseta->aumentaPreco(100);
	echo $camiseta->preco.PHP_EOL;;	


	$camiseta->aumentaEstoque(500);
	echo $camiseta->getEstoque().PHP_EOL;

	$camiseta->setEstoque(100);
	echo $camiseta->getEstoque().PHP_EOL;
	
	$camiseta->setEstoque("vinte e cinco camisetas");
	echo $camiseta->getEstoque().PHP_EOL;



// exemplo de estacimaneto da super classe Pessoa
echo "<hr>";
	echo "exemplo de Pessoa <br>";

	$pessoa = new Pessoa("Fabiola Santos", "316.376.801");
	echo $pessoa->getNome();


// exemplo de estacimaneto da classe extendida de pessoa o atendente
echo "<hr>";

echo "exemplo de Atendente <br>";
$atendente = new Atendente('pedro', '111.222.333.-77', 20, 'Feminino');

echo "Ano de Nascimento :{$atendente->get_ano_nascimento(20)}";


