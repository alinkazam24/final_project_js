const spinner = document.querySelector("#spinner");

window.addEventListener('load', ()=>{
    spinner.style.display = "none";
})


const subjects =  [
    // { subject: 'Математика', grades: [1, 1, 2, 3, 1, 1] },
    // { subject: 'Информатика', grades: [1, 2, 1] },
    // { subject: 'Чешский язык', grades: [] },
    // { subject: 'Математика', grades: [1, 1, 2, 3, 1, 1] },
    { subject: 'Информатика', grades: [1, 2, 1] },
    { subject: 'Чешский язык', grades: [] }
];

const list = document.querySelector("#list-rangs");

function render(subjects){
    
    subjects.forEach(el => {
        const li = document.createElement('li');
        li.classList.add("li");
        
        let sum = 0;
        el.grades.forEach((grad)=>{
           sum += grad;
        })

        let avr;
        if (el.grades.length !== 0){
             avr = (sum / el.grades.length).toFixed(1);
        } else {
            avr = "Оценок пока нет";
        }
     
        li.innerHTML = `
        <span class="">${el.subject}</span>
        <p class="">${el.grades}, средний бал: ${avr}</p>
    `;
    list.appendChild(li);
    });
};

render(subjects);



