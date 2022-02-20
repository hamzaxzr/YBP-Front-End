function getRandomImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then(function (res) {
            console.log(res.message);
            document.querySelector("#dog-image").style.backgroundImage = `url("${res.message}")`;
        })
}

function getSpecificImage() {
    const name = document.querySelector('#dog-name').value;
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res) => res.json())
        .then(function (res) {
            if (res.status === "error") {
                alert("woof wood! no dog found :(");
            }
            else {
                console.log(res.message);
                document.querySelector("#dog-image").style.backgroundImage = `url("${res.message}")`;
            }
        })
}


function getRest() {
    // const x = document.querySelector('#dog-name').value;
    // /*fetch(`http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg`)
    // .then((res) => res.json())
    // .then(function(res) {
    //     if(res.status == "error"){
    //         alert("haha no rest");
    //     }
    //     else {
    //         console.log(res.message);*/
    //         document.querySelector("#dog-image").style.backgroundImage = `url("http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg")`;
    //         alert(distance);

    var select = document.getElementById('Radius of search');
    var value = select.options[select.selectedIndex].value;

    if (value === "")
        radius = 40000;
    if (value === "10km")
        radius = 10000;
    if (value === "20km")
        radius = 20000;
    if (value === "40km")
        radius = 40000;

    console.log(radius);

    var select = document.getElementById('restType');
    var value = select.options[select.selectedIndex].value;

    if (value === "")
        categories = "sushi";
    if (value === "Top 5")
        categories = "sushi";
    if (value === "Italian")
        categories = "italian";
    if (value === "Sushi")
        categories = "sushi";
    if (value === "Fast Food")
        categories = "hotdogs";

    console.log(categories);

    var select = document.getElementById('cost2');
    var value = select.options[select.selectedIndex].value;

    if(value === "")
        price = 1;
    if(value === "$")
        price = 1;
    if(value === "$$")
        price = 2;
    if(value === "$$$")
        price = 3;
    if(value === "$$$$")
        price = 4;    

    console.log(price);

    let url = 'https://3229-39-50-77-156.ngrok.io/?lat=33.685504&lng=-117.8402816' + "&rad=" + radius + '&cate=' + categories + "&cost=" + price
    fetch(url).then(response => response.json()).then(response => {
        response = JSON.parse(response);
        console.log(response);
    

        //loop through response.businesses

        // for every item in businessses
        for (i = 0; i < response.businesses.length; i++) {
            let imagesrc = response.businesses[i].image_url
            document.getElementById('goods').innerHTML += `<img src=${imagesrc} /> <div><img /> <p>${response.businesses[i].name}</p> <p>${response.businesses[i].location.address1}</p> <button onclick = "like(${i})"> Like? </button>  <div>`
    
        }

    })
}

function like(index){
    alert(index);
}

let data = {
    "total": 8228,
    "businesses": [
        {
            "rating": 4,
            "price": "$",
            "phone": "+14152520800",
            "id": "E8RJkjfdcwgtyoPMjQ_Olg",
            "alias": "four-barrel-coffee-san-francisco",
            "is_closed": false,
            "categories": [
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                }
            ],
            "review_count": 1738,
            "name": "Four Barrel Coffee",
            "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
            "coordinates": {
                "latitude": 37.7670169511878,
                "longitude": -122.42184275
            },
            "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
            "location": {
                "city": "San Francisco",
                "country": "US",
                "address2": "",
                "address3": "",
                "state": "CA",
                "address1": "375 Valencia St",
                "zip_code": "94103"
            },
            "distance": 1604.23,
            "transactions": ["pickup", "delivery"]
        },
        // ...
    ],
    "region": {
        "center": {
            "latitude": 37.767413217936834,
            "longitude": -122.42820739746094
        }
    }
}

for (i = 0; i < data.businesses.length; i++) {
    let address = data.businesses[i].location.address1;
    //alert(address);
}

function getSpecificImage() {
    const name = document.querySelector('#dog-name').value;
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res) => res.json())
        .then(function (res) {
            if (res.status === "error") {
                alert("woof wood! no dog found :(");
            }
            else {
                console.log(res.message);
                document.querySelector("#dog-image").style.backgroundImage = `url("${res.message}")`;
            }
        })
}
