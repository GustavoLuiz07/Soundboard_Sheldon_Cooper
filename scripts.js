window.alert('Seja bem-vindo(a) ao Soundboard do Doutor Cooper!')

let audios = [
    {caminho:'audios/bazinga_series_bazinga.mp3', legenda:'Bazinga!'},
    {caminho:'audios/ps4_or_xbox_one.mp3', legenda:'Piada com o XBox'},
    {caminho:'audios/sofa_sheldon_cooper.mp3', legenda:'Sofá do Sheldon'},
    {caminho:'audios/todo_mundo_tem_um_encontro_mario.mp3', legenda:'Todo mundo tem um encontro'},
    {caminho:'audios/desarranjo_intestinal.mp3', legenda:'Desarranjo intestinal'},
    {caminho:'audios/manter_cinco_amizades_tarefa_herculea.mp3', legenda:'-1 amizade'},
    {caminho:'audios/stephenhawking_aconselha_sheldon_sobre_amy.mp3', legenda:'Stephen Hawking sobre Amy'},
    {caminho:'audios/bencao_pro_hawking_naopro_sogro.mp3', legenda:'Pedir pro pai dela?'}
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 8; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);

        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
