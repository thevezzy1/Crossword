const data = [
    { id: 1, word: "свободный", q: "Право граждан на ... доступ к информации.", r: 1, c: 2 },
    { id: 2, word: "информация", q: "Сведения независимо от формы их представления.", r: 3, c: 1 },
    { id: 3, word: "система", q: "Совокупность баз данных и технологий.", r: 5, c: 3 },
    { id: 4, word: "документ", q: "Информация, заверенная электронной подписью.", r: 7, c: 2 },
    { id: 5, word: "подпись", q: "Реквизит для защиты от подделки.", r: 9, c: 5 },
    { id: 6, word: "тайна", q: "Информация, позволяющая увеличить доходы (коммерческая...).", r: 11, c: 1 },
    { id: 7, word: "персональные", q: "Информация о фактах жизни гражданина (данные).", r: 13, c: 4 },
    { id: 8, word: "гражданское", q: "Отрасль права, тесно связанная с информационным.", r: 2, c: 12 },
    { id: 9, word: "гостайна", q: "Информация, составляющая государственный секрет.", r: 4, c: 12 },
    { id: 10, word: "инфосфера", q: "Область деятельности, связанная с инфо-потреблением.", r: 6, c: 12 },
    { id: 11, word: "защита", q: "Деятельность по предотвращению утечки информации.", r: 8, c: 12 },
    { id: 12, word: "носитель", q: "Материальный объект, хранящий данные.", r: 10, c: 12 },
    { id: 13, word: "конфиденциальность", q: "Требование не передавать данные третьим лицам.", r: 12, c: 2 },
    { id: 14, word: "цифровизация", q: "Процесс перехода к инфо. обществу.", r: 15, c: 6 },
    { id: 15, word: "право", q: "Совокупность норм в сфере информации.", r: 17, c: 10 }
];

const gridEl = document.getElementById('grid');
const qListEl = document.getElementById('questions-list');

// 1. Создаем пустую сетку 25x22
for (let r = 0; r < 22; r++) {
    for (let c = 0; c < 25; c++) {
        const div = document.createElement('div');
        div.id = `c-${r}-${c}`;
        div.className = 'cell empty';
        gridEl.appendChild(div);
    }
}

// 2. Размещаем слова и генерируем вопросы
data.forEach(item => {
    // Добавляем буквы в сетку
    for (let i = 0; i < item.word.length; i++) {
        const cell = document.getElementById(`c-${item.r}-${item.c + i}`);
        cell.className = 'cell';
        cell.innerHTML =
            (i === 0 ? `<span class="num">${item.id}</span>` : '') +
            `<span class="letter word-${item.id}">${item.word[i]}</span>`;
    }

    // Добавляем вопрос в список
    const qDiv = document.createElement('div');
    qDiv.className = 'q-item';
    qDiv.innerHTML = `
        <span><b>${item.id}.</b> ${item.q}</span>
        <button class="reveal-word-btn" onclick="revealWord(${item.id})">Открыть</button>
    `;
    qListEl.appendChild(qDiv);
});

// Функция открытия конкретного слова
function revealWord(id) {
    const letters = document.querySelectorAll(`.word-${id}`);
    letters.forEach((l, index) => {
        setTimeout(() => {
            l.classList.add('reveal');
            l.parentElement.style.backgroundColor = "#e8f5e9";
        }, index * 100);
    });
}