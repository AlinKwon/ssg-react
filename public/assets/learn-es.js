
const getNode = (selector, context = document) => {
    return context.querySelector(selector)

}

const getNodeOne = selector => document.querySelector(selector);


{
    const button = getNodeOne('.Button');

    console.log(button);

    //button = "버튼";

    let firstLetter = 'S';

    //button button.insertAdjacentHTML('beforeend', '<em>' + firstLetter + '</em>tart');
    //button.innerHTML =<em>${firstLetter}</em>';
    button.innerHTML = `<em>${firstLetter}</em>`;




}


const cssMap = {
    color: 'tan',
    background: 'white',
}

const userMap = {
    fontSize: '2rem',
    color: 'indigo',
}


const cssRuleMixin = {
    ...cssMap,
    ...userMap,
}

console.log(cssRuleMixin);

Object.freeze(cssRuleMixin);


// destructuring assigment

//let color = cssRuleMixin.color;
//let background = cssRuleMixin.background;

const counter = [
    0,
    (newCount) => {
        console.log('updated count');
    } 
]

const [count, setCount] = counter;

let contextNull = null;
const contextON = contextNull ?? document;



