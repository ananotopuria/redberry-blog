function submitForm(event) {
    console.log('submitForm', event);
    // event.preventDefault();
    // const token = await getToken();
    // const formData = new FormData(document.getElementById('blogForm'));
    // fetch('https://api.blog.redberryinternship.ge/api/blogs', {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': `Bearer ${token}`,
    //     },
    //     body: formData,
    // })
    // .then(response => {
    //     console.log('Response:', response);
    // })
    // .catch(error => {
    //     console.error('Error:', error.message);
    // });
}
async function getToken() {
    const response = await fetch('https://api.blog.redberryinternship.ge/api/token');
    const data = await response.json();
    return data.token;
}

var formBtn = document.getElementById('form-submit');
formBtn.addEventListener('click', async (event) =>{
    event.preventDefault();
    console.log('submitForm', event);
    const token = await getToken();
    const formData = new FormData(document.getElementById('blogForm'));
    console.log(formData);
    fetch('https://cors-anywhere.herokuapp.com/https://api.blog.redberryinternship.ge/api/blogs', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData,
    })
    .then(response => {
        console.log('Response:', response);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
});