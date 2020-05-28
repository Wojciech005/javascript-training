const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Kate", "Paul", "Mark", "Anna", "Joanna", "Greg", "Peter", "Hans", "Bella", "Patrick", "Eric", "Dave" ,"Jessica", "Pablo", "Adolf", "Sandy", "Bruce", "Chackie", "Bob", "Brad", "Carlos"];

// const index = Math.floor(Math.random() * 12)
// console.log(names[index])

const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    div.textContent = `The best name for your baby - ${names[index]}`
    div.style.color = 'green';
    // div.style.border = "2px solid red"

    
}

btn.addEventListener('click', nameGenerator)