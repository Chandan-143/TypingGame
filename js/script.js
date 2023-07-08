

let saveRagisterName = ()=>{
    // console.log("hello");
    

    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;
    // console.log(fn)
    // console.log(ln)
    window.localStorage.setItem("first_name", fn)
    window.localStorage.setItem("last_name", ln)
    window.location.reload();



}

// logout the page 

let logout = ()=>{
    window.localStorage.clear();
    window.location.reload();
}

// you can click the close button 

let refresh = ()=>{
    alert("You Can Enter a UserName")
    document.querySelector('.c_remove').innerHTML="";
       
}

let playSound = ()=>{
    // console.log(e)
    // let a= document.querySelector('.c_a')
    // console.log(a.classList.add('c_active'))
    let at = document.querySelector(".c_audio");
    at.play();
}

(()=>{

    let fn = window.localStorage.getItem('first_name');
    let ln =window.localStorage.getItem('last_name');

     
    // console.log("page loaded ")

    // Get a reference to the modal trigger button
        var modal = document.getElementById('regitrationModel');

        // Programmatically launch the modal when the button is clicked
        
        var myModal = new bootstrap.Modal(modal);
        // console.log(window.localStorage.getItem('first_name'))

        if( fn ===null){

            myModal.show();
        }
        //check if the localStorage is set or not

        if(ln !==null){
            document.querySelector("h1.c_welcome").innerHTML='Welcome : '+ fn + " " + ln + '<button class="btn btn-danger btn-sm m-2 rounded-circle" onclick="logout()">Logout</button>';
        }
       
       
// keypress sound play

        document.addEventListener('keypress',(e)=>{
            // console.log(e.keyCode)
            // console.log("object")
          

            if(e.keyCode==97){
               let a= document.querySelector('.c_a')
               console.log(a)
            //    console.log(a.classList.add('c_active'))
                document.querySelector('.l_pinky').style.display='block';
                
            }
            playSound();
        })

        document.addEventListener('keyup', ()=>{
            // console.log(e)

            let el=document.querySelector('.c_a');

            for(let i=0;i<el.length;i++){
                el[i].classList.remove('c_a')  
            }


            document.querySelector('.c_left_pinky').style.display='none';

        })

})();

