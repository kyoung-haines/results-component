/*
** Need to capture the data in the JSON file as a JS object to
** be able to dynamically generate HTML elements populated with
** the content from the JSON.
** 
** Each object in the JSON file needs to be built into a separate div.
** The div contains all of the information for each category of the results.
*/
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        for(let i = 0; i < json.length; i++) {
            /* Each dynamic element needs a containing div, a figure element,
            ** And a p element that has multiple span elements contained within.
             */

            let parentElement = document.querySelector('#summary');
            // Each category has an svg image that needs to be rendered
            /*
            let picName = `icon-${json[i].category.toLowerCase()}.svg`;

            let categoryDiv = document.createElement('div');
            categoryDiv.setAttribute('id', `${json[i].category}-div`);

            let figureElement = document.createElement('figure');
            
            let imgElement = document.createElement('img');
            imgElement.setAttribute('id', `${json[i].category}-img`);
            imgElement.setAttribute('src', `./assets/images/${picName}`);

            figureElement.append(imgElement);
            categoryDiv.append(figureElement);
            parentElement.append(categoryDiv);
            */

            let picName = `icon-${json[i].category.toLowerCase()}.svg`;
            let categoryDiv = document.createElement('div');
            categoryDiv.setAttribute('id', `${json[i].category}-div`);
            categoryDiv.setAttribute('class', 'summary-category');

            categoryDiv.innerHTML = `<figure><img src=./assets/images/${picName.toLowerCase()}></figure><span><figcaption>${json[i].category}</figcaption></span><span>${json[i].score} / 100</span>`;

            parentElement.append(categoryDiv);
            console.log(json[i].category);
        }
    });

