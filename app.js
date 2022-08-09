const data = [
  {
    id: 1,
    name: 'Cameron Williamson',
    email: 'cameron.wiliamson@example.com',
    title: 'Software Developer'
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    email: 'jenny.wilson@example.com',
    title: 'Project Manager'
  },
  {
    id: 3,
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    title: 'Marketing Coordinator'
  },
  {
    id: 4,
    name: 'Wade Warren',
    email: 'wade.warren@example.com',
    title: 'Software Tester'
  },
  {
    id: 5,
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    title: 'Web Designer'
  },
  {
    id: 6,
    name: 'Kristin Watson',
    email: 'kristin.watson@example.com',
    title: 'Marketing Coordinator'
  },
  {
    id: 7,
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    title: 'Web Designer'
  },
  {
    id: 8,
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    title: 'UI/UX Designer'
  },
  {
    id: 9,
    name: 'Ralph Edwards',
    email: 'ralph.edwards@example.com',
    title: 'Software Tester'
  },
  {
    id: 10,
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    title: 'Ethical Hacker'
  },
  {
    id: 11,
    name: 'Willie Jennings',
    email: 'willie.jennings@example.com',
    title: 'Team Leader'
  },
  {
    id: 12,
    name: 'Neveah Simmons',
    email: 'neveah.simmons@example.com',
    title: 'Team Leader'
  },
  {
    id: 13,
    name: 'Theresa Webb',
    email: 'theresa.webb@example.com',
    title: 'Software Tester'
  },
  {
    id: 14,
    name: 'Debbe Baker',
    email: 'debbe.baker@example.com',
    title: 'Software Developer'
  },
  {
    id: 15,
    name: 'Ronald Richards',
    email: 'ronald.richards@example.com',
    title: 'Software Developer'
  },
  {
    id: 16,
    name: 'Deanna Curtis',
    email: 'deanna.curtis@example.com',
    title: 'Scrum Master'
  },
  {
    id: 17,
    name: 'Felicia Reid',
    email: 'felicia.reed@example.com',
    title: 'Ethical Hacker'
  },
  {
    id: 18,
    name: 'Jessie Alexander',
    email: 'jessie.alexander@example.com',
    title: 'Project Manager'
  },
  {
    id: 19,
    name: 'Sam Smith',
    email: 'sam.smith@example.com',
    title: 'Ethical Hacker'
  },
  {
    id: 20,
    name: 'Eleanor Rigby',
    email: 'eleanor.rigby@example.com',
    title: 'UI/UX Designer'
  },
  {
    id: 21,
    name: 'Devon Lane',
    email: 'devon.lane@example.com',
    title: 'Team Leader'
  },
  {
    id: 22,
    name: 'Guy Hawkins',
    email: 'guy.hawkins@example.com',
    title: 'Team Leader'
  },
  {
    id: 23,
    name: 'Jim Parks',
    email: 'jim.parks@example.com',
    title: 'Ethical Hacker'
  },
  {
    id: 24,
    name: 'Susanne Ford',
    email: 'susanne.ford@example.com',
    title: 'Software Developer Manager'
  },
  {
    id: 25,
    name: 'Kathryn Murphy',
    email: 'kathryn.murphy@example.com',
    title: 'Project Manager'
  },
  {
    id: 26,
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    title: 'Software Developer'
  },
  {
    id: 27,
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    title: 'Software Tester'
  },
  {
    id: 28,
    name: 'Karen MacAfee',
    email: 'karen.macafee@example.com',
    title: 'UI/UX Designer'
  },
  {
    id: 29,
    name: 'Dianne Russell',
    email: 'dianne.russell@example.com',
    title: 'Ethical Hacker'
  },
  {
    id: 30,
    name: 'Bessie Cooper',
    email: 'bessie.cooper@example.com',
    title: 'Scrum Master'
  },
]

// Sorting buttons
const idUp = document.querySelectorAll('.sort .ascending')[0]
const idDown = document.querySelectorAll('.sort .descending')[0]
const nameUp = document.querySelectorAll('.sort .ascending')[1]
const nameDown = document.querySelectorAll('.sort .descending')[1]
const emailUp = document.querySelectorAll('.sort .ascending')[2]
const emailDown = document.querySelectorAll('.sort .descending')[2]
const jobUp = document.querySelectorAll('.sort .ascending')[3]
const jobDown = document.querySelectorAll('.sort .descending')[3]
const editBtn = document.querySelectorAll('button[name="person-edit-1"')
const updateBtn = document.querySelectorAll('.update')
const nextBtn = document.querySelector('.next')
const backBtn = document.querySelector('.previous')
// Others
let namesOfPpl = document.querySelectorAll('.name input')
let emailsPpl = document.querySelectorAll('input[name="person-email-1"')
let titlePpl = document.querySelectorAll('input[name="person-title-1"')
const idNums = document.querySelectorAll('td')
let allID = document.querySelector('.allID')
let mainBody = document.querySelector('.mainBody')
let currPage = document.querySelector('#currentPage')


// Edit button
editBtn.forEach(i => {

  i.onclick = () => {
    let myTr = i.closest('tr')
    myTr.classList.add('edit')

    document.querySelectorAll('input').forEach(x => {
      x.removeAttribute("disabled")
    })
  }
})

// Save button
updateBtn.forEach(i => {
  i.onclick = () => {
    let myTr = i.closest('tr')
    myTr.classList.remove('edit')
    document.querySelectorAll('input').forEach(x => {
      x.setAttribute("disabled", "disabled")
    })
  }
})




// Default text from Object array
for (i = 0; i < 10; i++) {

  namesOfPpl[i].value = data[i].name
  titlePpl[i].value = data[i].title
  emailsPpl[i].value = data[i].email

}

//  ******** NAMES ******** \\
nameUp.onclick = () => {

  const nameDesc = data.sort((a, b) => {
    if (b.name > a.name) {
      return -1
    }
    else {
      return 1
    }
  })
  for (i = 0; i < 10; i++) {

    namesOfPpl[i].value = nameDesc[i].name
  }
}
nameDown.onclick = () => {

  const nameDesc = data.sort((a, b) => {
    if (a.name > b.name) return -1
    else return 1
  })
  for (i = 0; i < 10; i++) {

    namesOfPpl[i].value = nameDesc[i].name
  }
}
//  ********* EMAILS ********** \\
emailUp.onclick = () => {

  const emailDesc = data.sort((a, b) => {
    if (b.email > a.email) return -1
    else return 1
  })

  for (i = 0; i < 10; i++) {
    emailsPpl[i].value = emailDesc[i].email
  }
}
emailDown.onclick = () => {

  const emailDesc = data.sort((a, b) => {
    if (a.email > b.email) return -1
    else return 1
  })

  for (i = 0; i < 10; i++) {
    emailsPpl[i].value = emailDesc[i].email
  }
}
// ******* TITLES ************* \\
jobUp.onclick = () => {
  const jobDesc = data.sort((a, b) => {
    if (b.title > a.title) return -1
    else return 1
  })
  for (i = 0; i < 10; i++) {
    titlePpl[i].value = jobDesc[i].title
  }
}
jobDown.onclick = () => {
  const jobDesc = data.sort((a, b) => {
    if (a.title > b.title) return -1
    else return 1
  })
  for (i = 0; i < 10; i++) {
    titlePpl[i].value = jobDesc[i].title
  }
}

// ID's ****************** \\

// Change ID num
let index = -5
for (i = 1; i < 11; i++) {
  index += 5

  idNums[index].innerText = i

}
// ID toggle descending
idDown.onclick = () => {

  let indexDown = -5
  const idDesc = data.sort((a, b) => {
    return b.id - a.id
  })
  for (i = 0; i < 10; i++) {
    indexDown += 5
    idNums[indexDown].innerText = idDesc[i].id

  }
}
// ID toggle ascending
idUp.onclick = () => {
  let indexUp = -5
  const idDesc = data.sort((a, b) => {
    return a.id - b.id
  })
  for (i = 0; i < 10; i++) {
    indexUp += 5
    idNums[indexUp].innerText = idDesc[i].id

  }



}

let pageCount = 1;

nextBtn.onclick = () => {
  backIDIndx = -1
  backIndex = -5

  let nextIDIndx = -5
  let nextIndex = -1

  if (pageCount < 3) {
    pageCount += 1
  }

  if (pageCount === 3) {
    for (let i = 20; i < 30; i++) {

      nextIndex++
      console.log(nextIndex)
      namesOfPpl[nextIndex].value = data[i].name
      titlePpl[nextIndex].value = data[i].title
      emailsPpl[nextIndex].value = data[i].email

    }


    for (i = 21; i < 31; i++) {
      nextIDIndx += 5

      idNums[nextIDIndx].innerText = i

    }
  }
  else if (pageCount === 2) {

    for (let i = 10; i < 20; i++) {

      nextIndex++
      console.log(nextIndex)
      namesOfPpl[nextIndex].value = data[i].name
      titlePpl[nextIndex].value = data[i].title
      emailsPpl[nextIndex].value = data[i].email

    }


    for (i = 11; i < 21; i++) {
      nextIDIndx += 5

      idNums[nextIDIndx].innerText = i

    }
  }


  let pageCountStr = pageCount.toString()
  if (pageCount <= 3) {
    currPage.value = pageCountStr
  }



}

backBtn.onclick = () => {
  // Resets next button
  nextIDIndx = -1
  nextIndex = -5

  if (pageCount > 1) {
    pageCount -= 1
  }

  let backIDIndx = -5
  let backIndex = -1

  if (pageCount === 3) {
    for (let i = 20; i < 30; i++) {
      backIndex++
      namesOfPpl[backIndex].value = data[i].name
      titlePpl[backIndex].value = data[i].title
      emailsPpl[backIndex].value = data[i].email

    }


    for (let i = 21; i < 31; i++) {
      backIDIndx += 5

      idNums[backIDIndx].innerText = i

    }
  }

  else if (pageCount === 2) {
    for (let i = 10; i < 20; i++) {
      backIndex++
      namesOfPpl[backIndex].value = data[i].name
      titlePpl[backIndex].value = data[i].title
      emailsPpl[backIndex].value = data[i].email

    }


    for (let i = 11; i < 22; i++) {
      backIDIndx += 5

      idNums[backIDIndx].innerText = i

    }

  }
  for (let i = 0; i < 10; i++) {
    backIndex++
    namesOfPpl[backIndex].value = data[i].name
    titlePpl[backIndex].value = data[i].title
    emailsPpl[backIndex].value = data[i].email

  }


  for (let i = 1; i < 11; i++) {
    backIDIndx += 5

    idNums[backIDIndx].innerText = i

  }
  pageCountStr = pageCount.toString()

  currPage.value = pageCountStr


}
