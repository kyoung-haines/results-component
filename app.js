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
            // Each category has an svg image that needs to be rendered
            let picName = `icon-${json[i].category.toLowerCase()}.svg`;

            let categoryDiv = document.createElement('div');
            categoryDiv.setAttribute('id', `${json[i].category}-div`);

            let figureElement = document.createElement('figure');
            
            let imgElement = document.createElement('img');
            imgElement.setAttribute('id', `${json[i].category}-img`);
            imgElement.setAttribute('src', `./assets/images/${picName}`);
            console.log(json[i].category);
        }
    });

