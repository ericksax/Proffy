const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
        "Domingo",
        "Segunda feira",
        "Terça feira",
        "Quarta feira",
        "Quinta feira",
        "Sexta feira",
        "Sábado"
    ]
    //transforma o indice para corrensponder aos subjects(matérias) e retorna o valor do array pelo índice.
function getSubjects(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minuts] = time.split(":")
    return Number((hour * 60) + minuts)
}

module.exports = {
    convertHoursToMinutes,
    subjects,
    weekdays,
    getSubjects
}