import './app.scss';
import png from'./asset/1.png';

const app = document.querySelector('#app');
app.innerHTML = `<img src="${png}">`;

const lazy = document.querySelector('#lazy');
lazy.onclick = () => {
    const promise = import('./lazy');
    promise.then((module) => {
        const fn = module.default;
        fn();
    },() => {
        console.log('加载失败了');
    })
}