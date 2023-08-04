let email = document.getElementById('email');

function showemail(){
    console.log(document.getElementById('email').value);
}
function delerror(){
    console.log( document.getElementById('email').classList);
    document.getElementById('email').classList.remove("error");
    document.getElementById('valid').style=`display:none`
}
function submit(){
    let email = document.getElementById('email');
    let emailValue = email.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailValue)) {
        console.log('Valid email:', emailValue);
        console.log(document.getElementById('index').value);
        document.getElementById('index').innerHTML=
        `
        <div class="card-content2">
          <div class=" p-xl-5 px-5 ">
            <img class=" mb-5" src="assets/images/icon-success.svg" alt="">
            <h1 class=" mb-3">Thanks for subscribing!</h1>
            <p id="exem" class="mb-4">A confirmation email has been sent to <span class="fw-bold">${emailValue}</span>. Please open it and click the button inside to confirm your subscription</p>
            <a
              name="submit"
              id="submit2"
              class="btn btn-primary2 my-3 w-100"
              role="button"
              >Dismiss message</a
            >
          </div>
         
        </div>
      </div>
        `
    } else {
        console.log('Invalid email:', emailValue);
        email.classList.add("error")
        document.getElementById('valid').style=`display:block`
    }
}
