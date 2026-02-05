const spinner = document.querySelector("#spinner");

window.addEventListener('load', ()=>{
    spinner.style.display = "none";
})


const mySubjects =  [
    { subject: 'Математика', grades: [1, 1, 2, 3, 1, 1] },
    { subject: 'Информатика', grades: [1, 2, 1] },
    { subject: 'Чешский язык', grades: [] },
    { subject: 'Английский язык', grades: [] },
    { subject: 'История', grades: [] },
    { subject: 'Физика', grades: [] }
    
];

const list = document.querySelector("#list-rangs");
const selectElement = document.querySelector("#subjects");
const gradeInput = document.querySelector("#grade-input");
const addButton = document.querySelector("#add-btn");



function render(subjects){
    list.innerHTML = "";
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
        <span class="subject-name">${el.subject}</span>
       <p class="grades-info">${el.grades.length > 0 ? el.grades.join(', ') : 'нет оценок'} | Средний балл: ${avr}</p>

    `;
    list.appendChild(li);
    });
};

addButton.addEventListener('click', ()=>{
    const selectedSubject = selectElement.value;
    const gradeValue = parseInt(gradeInput.value);

    if (isNaN(gradeValue) || gradeValue < 1 || gradeValue > 5) {
        alert("Пожалуйста, введите корректную оценку от 1 до 5.");
        return;
    }

    const subject = mySubjects.find(el => el.subject === selectedSubject);
    if (subject) {
        subject.grades.push(gradeValue);
        render(mySubjects);
        gradeInput.value = "";
    }
    const existingSubject = subjects.find(el => el.subject === selectedSubject);
    
    if (existingSubject) {
       
        existingSubject.grades.push(gradeValue);
    } else {
      
        subjects.push({
            subject: selectedSubject,
            grades: [gradeValue]
        });
    }
    
    
    gradeInput.value = '';
});

render(mySubjects);

