let imgUploader = document.querySelector('.img-uploader');
let fileInput= document.querySelector('.file-input');

let imgViewer = document.querySelector('img')

let submitButton = document.querySelector('button');
let img;
let imageUrl
fileInput.addEventListener("change", function(e){
    img = e.target.files[0]
    if (img){
        let uploadIcon = imgUploader.querySelector('.fa-file-arrow-up')
        uploadIcon.classList.remove('fa-file-arrow-up')

        imageUrl = URL.createObjectURL(img);
        imgViewer.src = imageUrl;
       

    }
})
submitButton.addEventListener('click', function(e){
    e.preventDefault()
    if(img){
        localStorage.setItem('uploadedImageUrl', imageUrl);
    }

    
    let fname = document.querySelector('#first-name').value 
    let lname = document.querySelector('#last-name').value 
    let fatherName = document.querySelector('#father-name').value 
    let dob = document.querySelector('#dob').value 
    let cnic = document.querySelector('#cnic').value 
    let gender = document.querySelector('#gender').value
    let address= document.querySelector('#address').value

    if (dob <18){
        alert('You must be at least 18 years old to apply.');
        return;
    }


    if (fname && lname && fatherName && dob && cnic && gender && address) {

        localStorage.setItem('uploadedImageUrl', img ? imageUrl : '');
        localStorage.setItem('firstName', fname);
        localStorage.setItem('lastName', lname);
        localStorage.setItem('fatherName', fatherName);
        localStorage.setItem('dob', dob);
        localStorage.setItem('cnic', cnic);
        localStorage.setItem('gender', gender);
        localStorage.setItem('address', address);


        if (dob <18){
            alert('You must be at least 18 years old to apply.');
            
        }
        else{
            window.location.href = 'card.html';
        }

    } else {
        alert('Please fill in all required fields.');
    }



})



