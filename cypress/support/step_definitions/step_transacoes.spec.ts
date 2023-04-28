import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { functionsIn } from "cypress/types/lodash";
import { HomePage } from '../../support/page_object/homePage';

Given('acesso o site', () => {
    HomePage.acessarSite();
})

When('clico no botao de {string} transacao', function (tipo: string) {
    HomePage.btnTransacao(tipo);
})

When('preencho dados de {string}', function (modo: string) {
    HomePage.preencherDescricao(modo);
})

Then('verifico que o dado foi {string}', function (status: string) {
    HomePage.verificatransacao();
    HomePage.testedevalor();
})

When('crio uma transacao',function (){
    HomePage.btnTransacao('adicionar');
    HomePage.preencherDescricao("entrada");
    HomePage.btnTransacao('adicionar');
    HomePage.preencherDescricao("saida");
})