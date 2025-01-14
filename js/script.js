const button = document.querySelector('button');

button.addEventListener('click', function () {
    const userInput = document.getElementsByName('txtUserInput')[0].value.toLowerCase();
    fetchImage(userInput);
});

async function fetchImage(userInput) {
    const unsplash_access_key = 'BsLTeI6VfFe6gjmenCi1TpM0BhCmHtxXjPBX86oLfoU';
    const showMessage = document.querySelector('p');
    //fetch(url, {option})
    const apiUrl = `https://api.unsplash.com/search/photos?query=${userInput}&client_id=${unsplash_access_key}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}