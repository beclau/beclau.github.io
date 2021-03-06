//associative array within an array
let dinoArray = [{
        'name': 'Allosaurus',
        'diet': 'carnivore',
        'time': 'Jurassic'
    }, {
        'name': "T.Rex",
        'diet': 'carnivore',
        'time': 'Cretaceous' 
    }, {
        'name': "Ankylosaurus",
        'diet': 'herbivore',
        'time': 'Cretaceous' 
    }, {
        'name': "Ichthyosaurus",
        'diet': 'carnivore',
        'time': 'Jurassic'
    }, {
        'name': "Styracosaurus",
        'diet': 'herbivore',
        'time': 'Cretaceous'
    },
    {
        'name': "Brachiosaurus",
        'diet': 'herbivore',
        'time': 'Cretaceous' 
    },
    {
        'name': 'Velociraptor',
        'diet': 'carnivore',
        'time': 'Cretaceous' 
    }, {
        'name': "Ceratosaurus",
        'diet': 'carnivore',
        'time': 'Jurassic'
    }, {
        'name': "Lambeosaurus",
        'diet': 'herbivore',
        'time': 'Cretaceous' 
    }
];

//loop through array and build out elements
for (let i = 0; i < dinoArray.length; i++) {
    buildDino(dinoArray[i]);
}



//function that builds dinos and needs the parameter dino
function buildDino(dino) {
    
    //manipulate DOM using JS
    let output = document.getElementById('dino');
   

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'cell');
    output.appendChild(div1);

    let img = document.createElement('img');
    img.setAttribute('src', 'img/' + dino.name.toLowerCase() + '.png');
    img.setAttribute('alt', 'picture of the mighty' + dino.name.toLowerCase());
    div1.appendChild(img);

    let h2 = document.createElement('h2');
    h2.textContent = dino.name;
    div1.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.textContent = dino.diet;
    div1.appendChild(h3);

    let h3Time = document.createElement('h3');
    h3Time.textContent = dino.time;
    div1.appendChild(h3Time);

    //conditional statement
    if (dino.diet == 'herbivore') {
        let p = document.createElement('p');
        p.textContent = "eat me!";
        div1.appendChild(p);
    }
    else {
        let p = document.createElement('p');
        p.textContent = "mmm...meat";
        div1.appendChild(p);
    }
}