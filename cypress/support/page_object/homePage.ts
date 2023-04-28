/// <reference types="Cypress" />
import HomeElements from '../../fixtures/elementos';
import { format } from '../commands';

export class HomePage {
    static acessarSite() {
        cy.visit('https://maratona-discover-devfinance.netlify.app/#');
    }

    static btnTransacao(tipo){
        if (tipo == 'adicionar') {
            cy.get(HomeElements.botaoNew()).click();
        } else if (tipo == 'editar'){
            cy.get(HomeElements.botaoEditar()).first().click();
        } else if(tipo =='deletar'){
            //opção 1: cria um elemento
            //cy.get(HomeElements.botaoDeletar()).first().click();
            //opção 2: pega um elemento, pega o elemento irmao
            cy.get(HomeElements.botaoEditar()).first().siblings().click()
        } else {
            cy.log("Erro");
        }
    }

    static preencherDescricao(modo){
        var texto = "transação do tipo: " + modo;
        let valor = Math.floor(Math.random() * 501) + 1;
        const dayjs = require('dayjs');
        var numero

        cy.get(HomeElements.campoDescricao()).clear();
        cy.get(HomeElements.campoDescricao()).type(texto);
        if (modo=='saida' || modo =='saida reescrita') {
            valor = -(valor);
        }
        numero = valor + '.50'
        cy.get(HomeElements.campoValor()).clear();
        cy.get(HomeElements.campoValor()).type(numero);
        cy.get(HomeElements.campoData()).type((dayjs().format('YYYY-MM-DD')));
        cy.get("button").contains("Salvar").click();
    }

    static verificatransacao(){
        cy.get(HomeElements.descrTabela()).contains("transação do tipo: ")
    }

    static testedevalor() {
        let entrada = 0
        let saida = 0

        cy.get(HomeElements.tabelaItens()).each(($element, index, $list) => {
            cy.get($element).find(HomeElements.precoIncTabela()+','+HomeElements.precoDecTabela()).invoke('text').then(valor => {
                if (valor.includes('-')) {
                    saida = saida + format(valor)
                } else {
                    entrada = entrada + format(valor)
                }
            })
        })

        cy.get(HomeElements.campoTotal()).invoke('text').then(valor => {
            let valortotal = format(valor)
            let totalesperado = entrada + saida
            expect(valortotal).to.eq(totalesperado)
        })
    }

}
