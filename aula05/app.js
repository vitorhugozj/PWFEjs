'use strict'

const contatos = [
    {
        nome: 'Neymar',
        mensagem: 'Completa o racha amanhã, eu faço a sua',
        notificacoes: '3',
        tempo: 'Há 44 minutos',
        foto: 'neymar.png',
        contato: 'Vitor Hugo'
    },
    {
        nome: 'Antony',
        mensagem: 'Champions hoje, joga de lateral pra nós fera? ',
        notificacoes: '1',
        tempo: 'Há 2 horas',
        foto: 'antony.png',
        contato: 'Vitor Hugo'
    },
    {
        nome: 'Papai Cris',
        mensagem: 'Esse Messi é um merda',
        notificacoes: '+9',
        tempo: 'Há 6 dias',
        foto: 'cr7.png',
        contato: 'Vitor Hugo'
    },
    {
        nome: 'Messi',
        mensagem: 'Cristiano é um invejoso',
        notificacoes: '3',
        tempo: 'Há 12 dias',
        foto: 'messi.png',
        contato: 'Vitor Hugo'
    }
]

function mostrarCards(contatos){

    const container = document.getElementById('card-container')
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${contatos.foto}`
    img.alt = contatos.nome

    const informacoes = document.createElement('div')
    informacoes.classList.add('info')

    const nomeContato = document.createElement('div')
    nomeContato.classList.add('nomeContato')

    const nomeCtt = document.createElement('h3')
    nomeCtt.classList.add('nomeCtt')
    nomeCtt.textContent = contatos.nome

    const qtdMensagem = document.createElement('p')
    qtdMensagem.classList.add('notificacoes')
    qtdMensagem.textContent = contatos.notificacoes

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = contatos.mensagem

    nomeContato.replaceChildren(nomeCtt, qtdMensagem)

    informacoes.replaceChildren(nomeContato, mensagem)

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = contatos.tempo

    const contato = document.createElement('div')
    contato.classList.add('contato')

    const contato2 = document.createElement('p')
    contato2.textContent = contatos.contato

    contato.replaceChildren(contato2)

    card.replaceChildren(img, informacoes, tempo, contato)

    container.appendChild(card)

}

contatos.forEach(mostrarCards)