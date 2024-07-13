document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault();
    const name = document.querySelector('.profile-name');
    const login = document.querySelector('.profile-username');
    const repositorio = document.querySelector('.repositorio');
    const seguidores = document.querySelector('.seguidores');
    const seguindo = document.querySelector('.seguindo');
    const avatar = document.querySelector('.profile-avatar');

    const endpoint = 'https://api.github.com/users/joseGarcia777a';

    fetch(endpoint).then(function(resposta) {
        return resposta.json();
    }).then(function(json) {
        name.innerHTML = json.name;
        login.innerHTML = json.login;
        repositorio.innerHTML = json.public_repos;
        seguidores.innerHTML = json.followers;
        seguindo.innerHTML = json.following;
        avatar.src = json.avatar_url;
    }).catch(function(erro) {
        alert("Ocorreu um erro, tente novamente mais tarde.");
    }).finally(function() {
        console.log("fim");
    });
});