function loadData(){
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => randomUser(data))
}

function randomUser(data){
    const userContainer = document.getElementById('user-container');
    const name = data.results[0].name.first +' ' + data.results[0].name.last;
    const img = data.results[0].picture.large;
    const email = data.results[0].email;
    const age = data.results[0].dob.age;
    const phone = data.results[0].phone;
    const country = data.results[0].location.country;
    const city = data.results[0].location.city;
    const userBody = document.createElement('div');
    userBody.innerHTML = `
        <h2>Name: ${name} </h2>
        <h4>Age: ${age} </h4>
        <h4>Country: ${country}</h4>
        <h4>City: ${city}</h4>
        <h4>Phone: ${phone}</h4>
        
        <h4>Email: ${email}</h4>
    `
    userContainer.innerHTML = `
    <img id='user-img' src="${img}" alt="">
`; 
userContainer.appendChild(userBody);
    // userContainer.appendChild(userBody);
    const userImg = document.getElementById('user-img');
    userImg.classList.add('block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0');

    console.log( data.results[0]);
}

loadData();