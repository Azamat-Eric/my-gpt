let text = document.querySelector("#text");
let result_Div = document.getElementById("result");


let apiUrl = 'https://192.168.20.212:3000/api/chat';

// Пример POST-запроса с использованием Fetch API
function sendPostRequest(userInput) {
    // Задаем параметры запроса, включая метод, заголовки и тело запроса
    let requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'user_input': userInput })
    };

    // Отправляем запрос на сервер
    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Ответ сервера:', data);
            result_Div.innerHTML += `<p id="answer-p">${data.response}</p>`
            // Обработайте ответ здесь
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}
document.querySelector("button").onclick = ()=>{
    sendPostRequest(text.value);
};

