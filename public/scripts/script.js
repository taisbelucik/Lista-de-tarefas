const tarefas = []
 // espaço digitar lembrete


function clicar(){ //ao clicar temos que: pegar o valor do input, inserir em um array, interar esse array de tarefas no html
    var txtDigitaLembrete = document.getElementById('txt-lemb').value 


    tarefas.push(txtDigitaLembrete)

    const lista = document.getElementById("lista")
    const tarefa = document.createElement("li")
    tarefa.textContent = txtDigitaLembrete


    const containerBtns = document.createElement("div"); //Criado div para colocar os dois btns
    const botao = document.createElement("button")  //Criado botoes
    const botao1 = document.createElement("button") //Criado botoes


    // add classe e texto nos botoes
    botao.classList.add('btn')
    botao1.classList.add('btn1')
    botao.textContent = 'Excluir'
    botao1.textContent = 'Concluído'

     lista.appendChild(tarefa) //insere o elemento li na ul (lista)
     containerBtns.appendChild(botao) //insere os botoes dentro da div containerBtns
     containerBtns.appendChild(botao1)//insere os botoes dentro da div containerBtns
     tarefa.appendChild(containerBtns) //insere a div containerBtns na li

     

     document.getElementById('txt-lemb').value = ''
   
 
    
}