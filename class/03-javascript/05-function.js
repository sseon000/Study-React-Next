// Quiz
const auth = () => {
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    // console.log(token);
    const divTarget = document.getElementById("target")
    divTarget.innerText = token;
    divTarget.style.color = `#${token}`;
}