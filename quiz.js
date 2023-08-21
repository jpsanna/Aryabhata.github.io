const quizdata = [
    {
        question: "Q1 Who is Aryabhata?",
        a: "A Greek Mathematician",
        b: "An Indian Mathemetician and Astronomer",
        c: "A Chinese Philosopher",
        d: "An Egiptian Architect",
        correct: "b" // Provide the correct answer option key
    },
    {
        question: "Q2 Aryabhata is best known for his work in which fields?",
        a: "Medicine and Botany",
        b: "Astronomy and Mathemetics",
        c: "Philosophy and Literature",
        d: "Architechture and Engineering",
        correct: "b"
    },
    {
        question: "Q3 In which century did Aryabhata live?",
        a: "3rd Centuary CE",
        b: "10th Centuary CE",
        c: "6th Centuary BCE",
        d: "2nd Centuary BCE",
        correct: "a"
    },
    {
        question: "Q4 Aryabhata's most famous work, 'Aryabhatiya', is written in which language?",
        a: "Sanskrit",
        b: "Latin",
        c: "Green",
        d: "Arabic",
        correct: "a"
    },
    {
        question: "Q5 Aryabhata made significant contributions to which mathematical concept?",
        a: "Calculus",
        b: "Algebra",
        c: "Geometry",
        d: "Trignometry",
        correct: "d"
    },
    {
        question: "Q6 Aryabhata calculated the Earth's rotation period as:",
        a: "12 hours",
        b: "24 hours",
        c: "23 hours 56 minutes",
        d: "25 hours",
        correct: "c"
    },
    {
        question: "Q7 Aryabhata accurately calculated the value of which mathematical constant?",
        a: "Pi (π)",
        b: "Phi (Φ)",
        c: "Epsilon (ε)",
        d: "Tau (τ)",
        correct: "a"
    },
    {
        question: "Q8 Aryabhata's work influenced the development of which numeral system?",
        a: "Roman Numerals",
        b: "Arabic Numerals",
        c: "Greek Numerals",
        d: "Babylonian Numerals",
        correct: "b"
    },
    {
        question: "Q9 In Aryabhata's model of the solar system, what was the Earth's position?",
        a: "At the center",
        b: "Revolving around the Moon",
        c: "Orbiting the Sun",
        d: "Stationary",
        correct: "c"
    },
    {
        question: "Q10 Aryabhata's work laid the foundation for modern understanding of which scientific field?",
        a: "Quantum Machines",
        b: "Genetics",
        c: "Astrobiology",
        d: "Astronomy",
        correct: "d"
    },
    {
        question: "Q11 Which trigonometric function did Aryabhata define?",
        a: "Sine(sin)",
        b: "Cosine(cos)",
        c: "Tangent(tan)",
        d: "Cosecant(csc)",
        correct: "a"
    },
    {
        question: "Q12 Aryabhata's calculations of planetary positions paved the way for future advancements in which field?",
        a: "Geography",
        b: "Cartography",
        c: "Navigation",
        d: "Meteorology",
        correct: "c"
    },
    {
        question: "Q13 Aryabhata's work 'Aryabhatiya' is divided into how many chapters?",
        a: "4",
        b: "8",
        c: "12",
        d: "16",
        correct: "b"
    },
    {
        question: "Q14 Aryabhata proposed a method for calculating the area of a triangle. What is this method called?",
        a: "Pythagorean Theorem",
        b: "Brahmagupta's Formula",
        c: "Heron's Formula",
        d: "Aryabhata's Theorem",
        correct: "b"
    },
    {
        question: "Q15 Aryabhata's work contributed to the development of which type of calendar system?",
        a: "Solar Calender",
        b: "Lunar Calender",
        c: "Gregorian Calender",
        d: "Mayan Calender",
        correct: "a"
    },
    {
        question: "Q16 Which planet did Aryabhata identify as having a moon in his writings?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Saturn",
        correct: "c"
    },
    {
        question: "Q17 Aryabhata's calculations of the length of a year were remarkably accurate. What was his value for the length of a year?",
        a: "365.25 days",
        b: "360 days",
        c: "366 days",
        d: "365.2422 days",
        correct: "d"
    },
    {
        question: "Q18 Aryabhata's work emphasized the importance of what concept in astronomy?",
        a: "Heliocentrism",
        b: "Geocentrism",
        c: "Stellar Parallax",
        d: "Planetary Retrograde Motion",
        correct: "a"
    },
    {
        question: "Q19 Which of the following is not a contribution of Aryabhata?",
        a: "Discovery of zero",
        b: "Calculation of π(pi)",
        c: "Calculation of square roots",
        d: "Formulation of Newton's laws",
        correct: "d"
    },
    {
        question: "Q20 Aryabhata's writings had a significant influence on which later Islamic scholar?",
        a: "Avicenna",
        b: "AI-Razi",
        c: "AI-Farabi",
        d: "AI-Khwarizmi",
        correct: "d"
    },
    {
        question: "Q21 In Aryabhata's system, how many epicycles did he use to explain planetary motion?",
        a: "1",
        b: "2",
        c: "5",
        d: "7",
        correct: "b"
    },
    {
        question: "Q22 Aryabhata's work 'Aryabhatiya' covers various mathematical and astronomical topics, including:",
        a: "Medicine and Astrology",
        b: "Algebra and Geometry",
        c: "Art and Literature",
        d: "Music and Dance",
        correct: "b"
    },
    {
        question: "Q23 Aryabhata's contributions to trigonometry were especially important for:",
        a: "Architechture and Construction",
        b: "Ship Navigation and Astronomy",
        c: "Medicine and Surgery",
        d: "Agriculture and Farming",
        correct: "b"
    },
    {
        question: "Q24 Which ancient civilization had a significant influence on Aryabhata's work?",
        a: "Egiptian",
        b: "Babylonian",
        c: "Roman",
        d: "Chinese",
        correct: "b"
    },
    {
        question: "Q25 Aryabhata's discoveries and inventions were largely forgotten until they were rediscovered during which historical period?",
        a: "The Renaissance",
        b: "The Middle Ages",
        c: "The Age of Enlightenment",
        d: "The Industrial Revolution",
        correct: "a"
    },
    
];
// Add more quiz data entries here...

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizdata[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer === quizdata[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizdata.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2 class="ans-h2">You answered ${score}/${quizdata.length} questions correctly</h2>
            <button onclick="window.location.href='answers.html'" class="quiz-home">Answers</button>
            <button onclick="window.location.href='index.html'" class="quiz-home">Home</button>
        `;
    }
});