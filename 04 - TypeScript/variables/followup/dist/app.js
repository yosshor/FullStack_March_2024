function handdleChange(event) {
    console.log(event.target.value);
    var name = event.target.value;
    var nameId = document.getElementById('name');

    if (name == 'yoss') {
        console.log('yes its you yos');
        nameId.innerText = 'Yoss';

    } else {
        console.log(event.target.value)
        nameId.innerText = name.toUpperCase();


    }
}