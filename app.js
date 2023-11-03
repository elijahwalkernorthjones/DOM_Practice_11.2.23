// PROCESS FOR adding image on click

// 1. DEFINE elements needed as variables to be accessed
const imageButton = document.querySelector('#imgButton')
const imageContainer = document.querySelector('#imageContainer')

const imagesArray = [
    'https://miro.medium.com/v2/resize:fit:1280/0*gUmnBbPXyTNTL8hI',
    'https://plaky.com/blog/wp-content/uploads/2023/08/Intro.jpg',
    'https://www.boredpanda.com/blog/wp-content/uploads/2023/06/funny-programming-jokes-memes-70-64940755278a6__700.jpg',
    'https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png',
    'https://www.boredpanda.com/blog/wp-content/uploads/2021/12/8-61ae229e9c1e8__700.jpg'
]


imageButton.addEventListener('click', function(event){
    event.preventDefault();
// create the div that will hold the image and the delete button
    const imageDiv = document.createElement('div');
// add the CSS class that will automatically add style to the images and the delete button
    imageDiv.classList.add('image-div')

// create the image
    const imageElement = document.createElement('img')
// variable that randomly picks from the array of image urls
    const randomImageIndex = Math.floor(Math.random() * imagesArray.length)


//create the delete button 
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){
        imageDiv.remove()
    })


//Set the src attribute of the image created
    imageElement.setAttribute('src', imagesArray[randomImageIndex])
// append the image to to the imageContainer    
    imageDiv.appendChild(imageElement);
    imageDiv.appendChild(deleteButton);

    imageContainer.appendChild(imageDiv);
    
})

