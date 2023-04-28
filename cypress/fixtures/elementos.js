class HomeElements {
    botaoNew        = () => { return    'a.button.new' }
    campoDescricao  = () => { return    '#description'}
    campoValor      = () => { return    '#amount'}
    campoData       = () => { return    '#date'}
    botaoEditar     = () => {return     '.data-table-edit'}
    descrTabela     = () => {return     'td.data-table__description'}
    tabelaItens     = () => {return     '#data-table tbody tr'}
    precoIncTabela  = () => {return     'td.data-table__price-income'}
    precoDecTabela  = () => {return     'td.data-table__price-expense'}
    campoTotal      = () => {return     'p.card__amount'}
    botaoDeletar    = () => {return     'img[onClick*=remove]'}
}
export default new HomeElements();