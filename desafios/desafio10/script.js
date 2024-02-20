// Simulação de armazenamento local dos votos e do status do voto
let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
let dislikeCount = parseInt(localStorage.getItem('dislikeCount')) || 0;
let hasVoted = localStorage.getItem('hasVoted') === 'true';

// Atualizar a contagem inicial
document.getElementById('likeCount').textContent = likeCount;
document.getElementById('dislikeCount').textContent = dislikeCount;

// Verificar se o usuário já votou
if (hasVoted) {
    document.getElementById('likeBtn').disabled = true;
    document.getElementById('dislikeBtn').disabled = true;
}

// Função para lidar com os votos
function vote(type) {
    if (!hasVoted) {
        if (type === 'like') {
            likeCount++;
            localStorage.setItem('likeCount', likeCount);
            document.getElementById('likeCount').textContent = likeCount;
        } else if (type === 'dislike') {
            dislikeCount++;
            localStorage.setItem('dislikeCount', dislikeCount);
            document.getElementById('dislikeCount').textContent = dislikeCount;
        }

        // Desabilitar botões após o voto
        document.getElementById('likeBtn').disabled = true;
        document.getElementById('dislikeBtn').disabled = true;

        // Registrar que o usuário já votou
        localStorage.setItem('hasVoted', 'true');
    }
}
