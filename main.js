let $input = document.querySelector('.input');
let $planets = document.querySelectorAll('.planet-text');
let $results = document.querySelectorAll('.result');


let gEarth = 1.000;
let gMoon = 0.165;
let gMercury = 0.380;
let gVenus = 0.906;
let gMars = 0.378;
let gSaturn = 1.065;
let gJupiter = 2.442;
let gNptun = 1.131;
let gUranus = 0.903;
let gPluto = 0.063;
let gIo = 0.183;
let gEurope = 0.134;
let gGanimed = 0.146;
let gCalysto = 0.126;
let gSun = 27.85;


let g = [27.85, 0.165, 0.380, 0.906, 0.378, 1.065, 2.442, 1.131, 0.903, 0.063, 0.183, 0.134, 0.146, 0.126];
let resultArr = [];


for(let i = 0; i < $results.length; i++){
    resultArr.push($results[i].textContent - 0);
}


function mass() {
    let m = $input.value;
    for (let i = 0; i < resultArr.length; i++) {
        let p = m * g[i] - 0;
        p = p.toFixed(1);
        let sp = p.split('.');
        if (sp[1] === 0){
            console.log(p);
            p = Math.trunc(p);
        }
        $results[i].textContent = p;
    }
    return $results.textContent;
}

function fixing(){
    let all = `\`qwertyuiop[]asdfghjkl;'zxcvbnm/$!@#%^&*()_-=+}{:;?><'"№:~,QWERTYUIOPASDFGHJKLZXCVBNMЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮюбьтимсчяфывапролджэъхзщшгнекуцйёЁ\\`;
    for (let i = 0; i < $input.value.length; i++) {
        if (all.includes($input.value[i])) {
            $input.value = $input.value.replace($input.value[i], '')
        }
    }
}


$input.addEventListener('input', fixing);
$input.addEventListener('input', mass);
// $input.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         mass();
//     }
// });

