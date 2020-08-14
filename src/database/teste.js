const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    //inserir dados

    proffyValue = {
        name: "Erick Freitas",
        avatar: "https://avatars0.githubusercontent.com/u/29756501?s=460&u=1c33c75cc121de60d5d2c42cdaa11cbcdce13253&v=4",
        whatsapp: "32999902406",
        bio: "prof de tecnologias"
    }

    classValue = {
        subject: "1",
        cost: "20",
        //id do proffy virá no bd
    }

    classScheduleValues = [{
                //class id virá apos inclusão da class, pelo db.
                weekday: 1,
                time_from: 720,
                time_to: 1220,
            },
            {
                weekday: 0,
                time_from: 520,
                time_to: 1220
            }
        ]
        //consultar os dados inserios
        // await createProffy(db, { proffyValue, classValue, classScheduleValues })
    await db.all("SELECT * FROM proffys")
        // consultar as classes de um determinado professor e trazer junto os daods do professor
    const selectClassesAndProffys = await db.all(`
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WERE classes.proffy_id = 1;

        `)

    //o horário que a pessoa trabalha , por exemplo, é das 8hr - 18hrs
    //o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima 

    const selectClassesSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "1300"
            AND class_schedule.time_to > "1300"

        `)
})