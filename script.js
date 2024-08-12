let currentChapter = 0;
const chapters = [
    {
        name: "Present Simple",
        exercises: [
            {sentence: 'The sun ____ (rise) every morning.', correctAnswer: 'rises'},
            {sentence: 'The Nile ____ (flow) through the kingdom.', correctAnswer: 'flows'},
            {sentence: 'The priests ____ (prepare) the rituals.', correctAnswer: 'prepare'},
            {sentence: 'The builders ____ (construct) the pyramid.', correctAnswer: 'construct'},
            {sentence: 'The people ____ (honor) the gods.', correctAnswer: 'honor'}
        ]
    },
    {
        name: "Present Simple with 'Be'",
        exercises: [
            {sentence: 'She ____ (is) a student.', correctAnswer: 'is'},
            {sentence: 'They ____ (are) at the park.', correctAnswer: 'are'},
            {sentence: 'He ____ (is) a teacher.', correctAnswer: 'is'},
            {sentence: 'We ____ (are) happy.', correctAnswer: 'are'},
            {sentence: 'I ____ (am) tired.', correctAnswer: 'am'}
        ]
    },
    {
        name: "Present Continuous",
        exercises: [
            {sentence: 'The children ____ (play) in the park.', correctAnswer: 'are playing'},
            {sentence: 'The dog ____ (bark) at the stranger.', correctAnswer: 'is barking'},
            {sentence: 'She ____ (read) a book.', correctAnswer: 'is reading'},
            {sentence: 'They ____ (watch) a movie.', correctAnswer: 'are watching'},
            {sentence: 'We ____ (work) on the project.', correctAnswer: 'are working'}
        ]
    },
    {
        name: "Present Perfect",
        exercises: [
            {sentence: 'She has ____ (finish) her homework.', correctAnswer: 'finished'},
            {sentence: 'They have ____ (move) to a new city.', correctAnswer: 'moved'},
            {sentence: 'We have ____ (see) this movie before.', correctAnswer: 'seen'},
            {sentence: 'I have ____ (write) a letter.', correctAnswer: 'written'},
            {sentence: 'He has ____ (break) the vase.', correctAnswer: 'broken'}
        ]
    },
    {
        name: "Present Perfect Continuous",
        exercises: [
            {sentence: 'She has ____ (study) for three hours.', correctAnswer: 'been studying'},
            {sentence: 'They have ____ (work) on the project all day.', correctAnswer: 'been working'},
            {sentence: 'I have ____ (wait) for the bus.', correctAnswer: 'been waiting'},
            {sentence: 'We have ____ (live) here for five years.', correctAnswer: 'been living'},
            {sentence: 'He has ____ (exercise) every morning.', correctAnswer: 'been exercising'}
        ]
    },
    {
        name: "Past Simple",
        exercises: [
            {sentence: 'She ____ (eat) the cake.', correctAnswer: 'ate'},
            {sentence: 'They ____ (go) to the park.', correctAnswer: 'went'},
            {sentence: 'We ____ (buy) a new car.', correctAnswer: 'bought'},
            {sentence: 'I ____ (see) him yesterday.', correctAnswer: 'saw'},
            {sentence: 'He ____ (run) fast.', correctAnswer: 'ran'}
        ]
    },
    {
        name: "Past Simple with 'Be'",
        exercises: [
            {sentence: 'They ____ (were) at the beach.', correctAnswer: 'were'},
            {sentence: 'I ____ (was) in the meeting.', correctAnswer: 'was'},
            {sentence: 'She ____ (was) a great student.', correctAnswer: 'was'},
            {sentence: 'We ____ (were) tired after the trip.', correctAnswer: 'were'},
            {sentence: 'He ____ (was) happy to see you.', correctAnswer: 'was'}
        ]
    },
    {
        name: "Past Continuous",
        exercises: [
            {sentence: 'They ____ (walk) when it started to rain.', correctAnswer: 'were walking'},
            {sentence: 'I ____ (sleep) when the phone rang.', correctAnswer: 'was sleeping'},
            {sentence: 'She ____ (cook) dinner.', correctAnswer: 'was cooking'},
            {sentence: 'We ____ (study) for the exam.', correctAnswer: 'were studying'},
            {sentence: 'He ____ (drive) home.', correctAnswer: 'was driving'}
        ]
    },
    {
        name: "Past Perfect",
        exercises: [
            {sentence: 'She had ____ (finish) her homework before dinner.', correctAnswer: 'finished'},
            {sentence: 'They had ____ (move) to a new house before the wedding.', correctAnswer: 'moved'},
            {sentence: 'We had ____ (see) that movie before.', correctAnswer: 'seen'},
            {sentence: 'I had ____ (write) the letter before I left.', correctAnswer: 'written'},
            {sentence: 'He had ____ (break) the vase before they arrived.', correctAnswer: 'broken'}
        ]
    },
    {
        name: "Past Perfect Continuous",
        exercises: [
            {sentence: 'She had ____ (study) for hours before the exam.', correctAnswer: 'been studying'},
            {sentence: 'They had ____ (work) on the project for weeks.', correctAnswer: 'been working'},
            {sentence: 'I had ____ (wait) for the bus for an hour.', correctAnswer: 'been waiting'},
            {sentence: 'We had ____ (live) here for years before moving.', correctAnswer: 'been living'},
            {sentence: 'He had ____ (exercise) regularly before his injury.', correctAnswer: 'been exercising'}
        ]
    },
    {
        name: "Future Simple",
        exercises: [
            {sentence: 'They ____ (go) to the party.', correctAnswer: 'will go'},
            {sentence: 'I ____ (help) you.', correctAnswer: 'will help'},
            {sentence: 'We ____ (travel) to France.', correctAnswer: 'will travel'},
            {sentence: 'She ____ (buy) a new dress.', correctAnswer: 'will buy'},
            {sentence: 'He ____ (call) you later.', correctAnswer: 'will call'}
        ]
    },
    {
        name: "Future Continuous",
        exercises: [
            {sentence: 'I ____ (be) working at this time tomorrow.', correctAnswer: 'will be working'},
            {sentence: 'They ____ (be) traveling next week.', correctAnswer: 'will be traveling'},
            {sentence: 'She ____ (be) studying when you arrive.', correctAnswer: 'will be studying'},
            {sentence: 'We ____ (be) cooking dinner at 6 PM.', correctAnswer: 'will be cooking'},
            {sentence: 'He ____ (be) waiting for you.', correctAnswer: 'will be waiting'}
        ]
    },
    {
        name: "Future Perfect",
        exercises: [
            {sentence: 'By next year, I ____ (complete) the course.', correctAnswer: 'will have completed'},
            {sentence: 'They ____ (finish) the project by Friday.', correctAnswer: 'will have finished'},
            {sentence: 'She ____ (write) the book by the end of the month.', correctAnswer: 'will have written'},
            {sentence: 'We ____ (arrive) by the time you get there.', correctAnswer: 'will have arrived'},
            {sentence: 'He ____ (call) by tomorrow.', correctAnswer: 'will have called'}
        ]
    },
    {
        name: "Future Perfect Continuous",
        exercises: [
            {sentence: 'By next month, I ____ (have) been working here for a year.', correctAnswer: 'will have been working'},
            {sentence: 'They ____ (have) been traveling for hours by the time they arrive.', correctAnswer: 'will have been traveling'},
            {sentence: 'She ____ (have) been studying for weeks before the exam.', correctAnswer: 'will have been studying'},
            {sentence: 'We ____ (have) been working on this project for months.', correctAnswer: 'will have been working'},
            {sentence: 'He ____ (have) been waiting for you for over an hour.', correctAnswer: 'will have been waiting'}
        ]
    }
];

function startStoryMode() {
    if (currentChapter < chapters.length) {
        loadChapter(currentChapter);
    } else {
        document.getElementById('mission-content').innerHTML = '<p>Congratulations! You have completed all the chapters!</p>';
    }
}

function showChapterSelection() {
    let missionContent = document.getElementById('mission-content');
    let chapterButtons = chapters.map((chapter, index) => {
        return `<button onclick="loadChapter(${index})" ${index > currentChapter ? 'disabled' : ''}>${chapter.name}</button>`;
    }).join('');
    missionContent.innerHTML = `
        <h2>Select a Chapter</h2>
        <p>Choose a chapter to test your skills:</p>
        <div class="chapter-selection">${chapterButtons}</div>
    `;
}

function loadChapter(chapterIndex) {
    let chapter = chapters[chapterIndex];
    let missionContent = document.getElementById('mission-content');
    missionContent.innerHTML = `
        <h2>${chapter.name}</h2>
        ${getMissionHTML(chapter.exercises)}
    `;
}

function getMissionHTML(exercises) {
    let html = '<p>Complete the sentences by filling in the correct verb form:</p>';
    exercises.forEach((exercise, index) => {
        html += `
            <div class="exercise">
                <p>${exercise.sentence}</p>
                <input type="text" id="answer${index}" placeholder="Enter your answer">
                <p id="feedback${index}" class="feedback"></p>
            </div>
        `;
    });
    html += `<button onclick="checkAnswers([${exercises.map((ex, idx) => `'${ex.correctAnswer}'`).join(',')}])">Submit Answers</button>`;
    return html;
}

function checkAnswers(correctAnswers) {
    let correctCount = 0;
    correctAnswers.forEach((answer, index) => {
        let userAnswer = document.getElementById(`answer${index}`).value.trim();
        let feedback = document.getElementById(`feedback${index}`);
        
        if (userAnswer.toLowerCase() === answer.toLowerCase()) {
            feedback.innerHTML = '<span style="color: green;">Correct!</span>';
            correctCount++;
        } else {
            feedback.innerHTML = `<span style="color: red;">Incorrect. The correct answer is "${answer}".</span>`;
        }
    });

    if (correctCount === correctAnswers.length) {
        alert('Congratulations! You have successfully completed the chapter!');
        currentChapter++;
        startStoryMode();
    } else {
        alert('You missed some answers. Keep practicing to improve!');
    }
}
