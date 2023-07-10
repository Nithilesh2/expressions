let closeeye = document.querySelector(".closeeye");
let openeye = document.querySelector(".openeye");
let closemouth = document.querySelector(".closemouth");
let happy = document.querySelector(".happy");
let pass = document.querySelector(".password");
let mail = document.querySelector(".mail")
let login = document.querySelector(".login");

window.addEventListener("load", () =>{
    openeye.classList.add("active");
})

mail.addEventListener("click" , ()=>{
    closemouth.classList.add("active");
    openeye.classList.remove("active");
    closeeye.classList.remove("active");
    openeye.classList.add("deactive");
    happy.classList.remove("active");
})

pass.addEventListener("click" , () => {
    closeeye.classList.add("active");
    openeye.classList.remove("active");
    closemouth.classList.remove("active");
    happy.classList.remove("active");
})

login.addEventListener("click", ()=>{
    openeye.classList.remove("active");
    closeeye.classList.remove("active");
    closemouth.classList.remove("active");

    happy.classList.add("active");
})
