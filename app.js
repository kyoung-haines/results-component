/*
** Need to capture the data in the JSON file as a JS object to
** be able to dynamically generate HTML elements populated with
** the content from the JSON.
** 
** Each object in the JSON file needs to be built into a separate div.
** The div contains all of the information for each category of the results.
*/

function app() {
    let parentElement = document.querySelector('#summary');
    let categoryColors = ['hsla(0, 100%, 67%', 'hsla(39, 100%, 56%', 'hsla(166, 100%, 37%', 'hsla(234, 85%, 45%'];

    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        for(let i = 0; i < json.length; i++) {
            let picName = `icon-${json[i].category.toLowerCase()}.svg`;
            let categoryDiv = document.createElement('div');
            categoryDiv.setAttribute('id', `${json[i].category}-div`);
            categoryDiv.setAttribute('class', 'summary-category');

            categoryDiv.innerHTML = `
                <figure>
                    <img src=./assets/images/${picName.toLowerCase()}>
                </figure>
                <p style="color: ${categoryColors[i]}, 1);">
                    ${json[i].category}
                </p>
                <p style="font-weight: 700">
                    ${json[i].score} / 100
                </p>
            `;

            categoryDiv.style.backgroundColor = `${categoryColors[i]}, 0.1)`;

            parentElement.append(categoryDiv);

            console.log(json[i].category);
        }

        // Creating button for user to click Continue
        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('id', 'continue-btn');
        continueBtn.innerText = 'Continue';

        parentElement.append(continueBtn);
    });

    function styleSummaryDivs() {
        let summaryDivs = document.querySelectorAll('.summary-category');
        let categoryColors = ['hsla(0, 100%, 67%, 0.1)', 'hsla(39, 100%, 56%, 0.1)', 'hsla(166, 100%, 37%, 0.1)', 'hsla(234, 85%, 45%, 0.1)'];

        for(let i = 0; i < summaryDivs.length; i++) {
            summaryDivs[i].style.backgroundColor = categoryColors[i];
        }
    }
}

app();