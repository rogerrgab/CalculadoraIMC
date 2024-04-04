function activateStatus () {
    const form = document.querySelector('#formulario');
    const result = document.querySelector('#resultado');
    
    const persons = []; 

    function receiveElementDom (event) {
        event.preventDefault();

        const name = form.querySelector('#nome');
        const weight = form.querySelector('#peso');
        const height = form.querySelector('#altura');

        const objectForArreyPersons = {
            name: name.value,
            weight: weight.value,
            height: height.value
        };

        persons.push(objectForArreyPersons);
        console.log(persons);

        const convertedToNumber = Number(weight.value) / (Number(height.value) ** 2);

        if (convertedToNumber < 18.5) {
            result.innerHTML += `<p class="has-text-danger is-size-4">O IMC de ${name.value} é: ${convertedToNumber.toFixed(1)}<br>Ele(a) está abaixo do peso!</p>`;
        } else if (convertedToNumber >= 18.5 && convertedToNumber <= 24.9) {
            result.innerHTML += `<p class="has-text-danger is-size-4">O IMC de ${name.value} é: ${convertedToNumber.toFixed(1)}<br>Ele(a) está com o peso normal!</p>`;
        } else if (convertedToNumber >= 25 && convertedToNumber <= 29.9) {
            result.innerHTML += `<p class="has-text-danger is-size-4">O IMC de ${name.value} é: ${convertedToNumber.toFixed(1)}<br>Ele(a) está com sobrepeso!</p>`;
        } else if (convertedToNumber >= 30 && convertedToNumber <= 34.9) {
            result.innerHTML += `<p class="has-text-danger is-size-4">O IMC de ${name.value} é: ${convertedToNumber.toFixed(1)}<br>Ele(a) está com obesidade grau 1!</p>`;
        } else if (convertedToNumber >= 35 && convertedToNumber <= 39.9) {
            result.innerHTML += `<p class="has-text-danger is-size-4">O IMC de ${name.value} é: ${convertedToNumber.toFixed(1)}<br>Ele(a) está com obesidade grau 2!</p>`;
        } else {
            result.innerHTML += `<p class="has-text-danger is-size-4">O IMC de ${name.value} é: ${convertedToNumber.toFixed(1)}<br>Ele(a) está com obesidade grau 3!(mórbida)</p>`;
        }
    }   

    form.addEventListener('submit', receiveElementDom);
}

activateStatus();