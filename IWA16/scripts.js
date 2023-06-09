// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const data = {
    response: {
        requestType: "FETCH_ATHLETE_DATA",
        requestBy: "ALL_MATCHING_ATHLETES",
        forDisplay: "BEST_RACES",

        data: {
            NM372: {
                firstName: "Nwabisa",
                surname: "Masiko",
                id: "NM372",
                races: [
                    {
                        date: '2022-11-18T20:00:00.000Z',
                        time: [9, 7, 8, 6],
                    },
                    {
                        date: '2022-12-02T20:00:00.000Z',
                        time: [6, 7, 8, 7],
                    },
                ],
            },

            SV782: {
                firstName: "Schalk",
                surname: "Venter",
                id: "SV782",
                races: [
                    {
                        date: '2022-11-18T20:00:00.000Z',
                        time: [10, 8, 3, 12],
                    },
                    {
                        date: '2022-11-25T20:00:00.000Z',
                        time: [6, 8, 9, 11],
                    },
                    {
                        date: '2022-12-02T20:00:00.000Z',
                        time: [10, 11, 4, 8],
                    },
                    {
                        date: '2022-12-09T20:00:00.000Z',
                        time: [9, 8, 9, 11],
                    },
                ],
            },
        },
    },
};

// Only edit below this comment

const createHtml = (athlete) => {

    const { firstName, surname, id, races } = data.response.data[athlete];
    const [{ date, time }] = races.reverse();

    const fragment = document.createDocumentFragment();

    const title = document.createElement('h2');
    title.textContent = id;
    fragment.appendChild(title);

    const timestamp = Date.parse(date)
    const dateAthlete = new Date(timestamp)
    const day = dateAthlete.getDate();
    const month = dateAthlete.getMonth();
    const year = dateAthlete.getFullYear();

    //CalcTotal
    let total = 0
    const calcTime = (array) => {
        for (let i = 0; i < array.length; i++) {
            total = total + array[i];
        }
        return total;
    }

    const hours = calcTime(time) / 60;
    const rHours = Math.floor(hours)
    const minutes = (hours - rHours) * 60;
    const rMinutes = Math.round(minutes)

    const list = document.createElement('dl');
    list.innerHTML =
        `<dt>Athlete: ${firstName} ${surname}</dt>
           <dt>Total Races: ${races.length}</dt>
           <dt>Event Date (Latest): ${day} ${MONTHS[month]} ${year}</dt>
           <dt>Total Time (Latest): ${rHours.toString().padStart(2, 0)}:${rMinutes}</dt>`

    //     `<dt>Athlete: <span>${firstName} ${surname}</span></dt>
    //  <dt>Total Races: <span>${races.length}</span></dt>
    //  <dt>Event Date (Latest): <span>${day} ${MONTHS[month]} ${year}</span></dt>
    //  <dt>Total Time (Latest): <span>${rHours.toString().padStart(2, 0)}:${rMinutes}</span></dt>`

    fragment.appendChild(list);
    return fragment;
}

document.querySelector(`[data-athlete="NM372"]`).appendChild(createHtml(`NM372`));
document.querySelector(`[data-athlete="SV782"]`).appendChild(createHtml(`SV782`));

// `<dt>Athlete:</dt>
//            <dd>${firstName} ${surname}</dd>
//            <dt>Total Races:</dt>
//            <dd>${races.length}</dd>
//            <dt>Event Date (Latest):</dt>
//            <dd>${day} ${MONTHS[month]} ${year}</dd>
//            <dt>Total Time (Latest):</dt>
//            <dd>${rHours.toString().padStart(2, 0)}:${rMinutes}</dd>`

