function burger() {
  let burger = document.querySelector('.burger');
  let navbarBody = document.querySelector('.navbar__body')
  let closeBar = document.querySelector('.close')
  let li = document.querySelectorAll('.navbar__body > ul > li')
  let closeBars = [closeBar];

  li.forEach(item => {
    closeBars.push(item)
  })

  burger.addEventListener('click', () => {
    navbarBody.classList.add('active')
  })
  closeBars.forEach(item => {
    item.addEventListener('click', () => {
      navbarBody.classList.remove('active')
    })
  })
}
burger()


//анимация появления

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

for (let elm of elements) {
  observer.observe(elm);
}



let observer2 = new IntersectionObserver(onEntry2, options);
let elements2 = document.querySelectorAll('.element-animation2')

function onEntry2(entry2) {
  entry2.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show2");
    } else {
      change.target.classList.remove("element-show2");
    }
  });
}

for (let elm2 of elements2) {
  observer2.observe(elm2);
}


let observer3 = new IntersectionObserver(onEntry3, options);
let elements3 = document.querySelectorAll('.element-animation3')

function onEntry3(entry3) {
  entry3.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show3");
    } else {
      change.target.classList.remove("element-show3");
    }
  });
}

for (let elm3 of elements3) {
  observer3.observe(elm3);
}
