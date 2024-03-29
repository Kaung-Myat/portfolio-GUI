var mainPart = document.getElementById("mainPart");
var blogMain = document.getElementById("blogMain");
var blogPart = document.getElementById('blogPart')



function about() {
    mainPart.innerHTML = `
   <div class="row">
   <div class="col-md-6 h-75 mb-5 mb-md-0">
       <img src="./img/profile.jpg"
       alt="" class="d-block w-75 h-50 aboutProfile">
       <div class="mt-5 d-flex">
           <a href="https://github.com/Kaung-Myat"><i class="fa-brands fa-github me-5 fs-4 socialIco"></i></a>
           <a href="https://twitter.com/Kaungmyat235"><i class="fa-brands fa-twitter me-5 fs-4 socialIco"></i></a>
           <a href="https://www.linkedin.com/in/kaung-myat-thu-632b24248/"><i
           class="fa-brands fa-linkedin me-5 fs-4 socialIco"></i></a>
           <a href="https://www.facebook.com/profile.php?id=100048568642212"><i
           class="fa-brands fa-facebook fs-4 socialIco"></i></a>
       </div>
       <div class="mt-4">
           <a href="https://drive.google.com/file/d/1ZDiX0XymV5h8gYLSvO249jXF2Unb9JSS/view?usp=sharing">
               <div class="btn btnDownloadCV">Download CV<i class="fa-regular fa-circle-down ms-2"></i></div>
           </a>
       </div>
   </div>
   <div class="col-md-6">
       <div class="w-100">
           <h1>I'm Kaung Myat Thu.I'm from Sittwe and</h1>
           <h1>Brilliant learner in Computer Science Field.</h1>
           <div class="mt-4">
               <p>
               I'm Kaung Myat Thu and Second Year in Computer Universiy Sittwe.I was born in Sittwe and I passed
               the matriculation exam at BEHS 1,Sittwe.After matriculation exam, I started joined Programming class at Ray Hub Academy Sittwe.
               After joining this class, I learned Java in Pro Logic IT training Center Sittwe for about 4 months.In the covid 19 crisis time,
               I joined free Web development class in Data Land Technology online.But I didn't get what I thought so I study web development as 
               self study and I am waiting to open advanced class in Ray Hub Academy.Now,I am joing OJT as a Mobile Developer with Fluttter in Ray Hub and
               I must try the best.
               </p>
           </div>
       </div>
   </div>
</div>
<div class="d-flex justify-content-center mt-5 mb-5">
   <div>
       <i class="fa-regular fa-copyright" style="color: rgb(163, 163, 163);"></i> <span style="color: rgb(163, 163, 163);font-weight: bold;">2023,Developed by Kaung Myat Thu.All rights reserved.</span>
   </div>
</div>
   `;
}

function home() {
    mainPart.innerHTML = `
    <div class="">
    <h1>Mobile Dev(Flutter),Web Dev(Nodejs)</h1>
    <h1>and Computer Science Student</h1>
</div>
<div class="w-75 mt-4 text">
    <p>I'm Kaung Myat Thu, 2nd year of Computer Science Student from <a
            href="https://lms.ucssittway.edu.mm/" class="text-decoration-none uniText"
            style="color: rgb(255, 170, 11)">University Of Computer Studied Sittwe.</a></p>
    <p>Aside Knowledge from University,I'm currently Joining OJT as a Mobile Developer with Flutter in Ray Hub Academy Sittwe.</p>
</div>
<div class="mt-3">
    <a href="https://github.com/Kaung-Myat"><i class="fa-brands fa-github me-4 fs-4 socialIco"></i></a>
    <a href="https://twitter.com/Kaungmyat235"><i class="fa-brands fa-twitter me-4 fs-4 socialIco"></i></a>
    <a href="https://www.linkedin.com/in/kaung-myat-thu-632b24248/"><i
            class="fa-brands fa-linkedin me-4 fs-4 socialIco"></i></a>
    <a href="https://www.facebook.com/profile.php?id=100048568642212"><i
            class="fa-brands fa-facebook fs-4 socialIco"></i></a>
</div>
<div class="row" style="margin-top: 10%;">
    <div class="col-md-6 mb-4  mb-md-4 ">
        <div class="card blogs">
            <div class="card-body">
                <h4 class="card-title">Rakhine Quizzes Game</h4>
                <p class="card-text">I made this one to show as a little project in Ray Hub.This is not responsive and you should check with you laptop or desktop.</p>
                <a href="https://github.com/Kaung-Myat/Rakine_Quiz_game" class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span class="me-2">https://github.com/Kaung-Myat/Rakine_Quiz_game</span></a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4 mb-md-4 ">
        <div class="card blogs">
            <div class="card-body">
                <h4 class="card-title">Face Detection</h4>
                <p class="card-text">I made this one to practise JavaScript and I use some liberies for this project.</p>
                <a href="https://github.com/Kaung-Myat/Face-Detection" class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span class="me-2">https://github.com/Kaung-Myat/Face-Detection</span></a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4 mb-md-4 ">
        <div class="card blogs">
            <div class="card-body">
                <h4 class="card-title">IT Canteen Booking Project</h4>
                <p class="card-text">I made this for IT Canteen.IT Canteen is an organization from University of Computer Studited Sittwe.This is pretend to get more IT knowledge.I created this Express JS,EJS and as a database MongoDB.I used Bootstrap as a front-end framework.</p>
                    <a href="https://github.com/Kaung-Myat/Booking-Project" class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span class="me-2">https://github.com/Kaung-Myat/Booking-Project</span></a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4 mb-md-4 ">
        <div class="card blogs">
            <div class="card-body">
                <h4 class="card-title">Portfolio GUI</h4>
                <p class="card-text">This is my portfolio GUI and I created this and another is portfolio CLI.</p>
                <a href="https://github.com/Kaung-Myat/portfolio-GUI"
                class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span
                class="me-2">https://github.com/Kaung-Myat/portfolio-GUI</span></a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4 mb-md-4 ">
            <div class="card blogs">
                <div class="card-body">
                    <h4 class="card-title">Portfolio CLI</h4>
                    <p class="card-text">This is my portfolio CLI and I created this with Boostrap and JQuery.</p>
                    <a href="https://github.com/Kaung-Myat/portfolio-CLI"
                    class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span
                    class="me-2">https://github.com/Kaung-Myat/portfolio-CLI</span></a>
            </div>
        </div>
    </div>
</div>
<div class="d-flex justify-content-center mt-5 mb-5">
    <div>
        <i class="fa-regular fa-copyright" style="color: rgb(163, 163, 163);"></i> <span style="color: rgb(163, 163, 163);">2023,Developed by Kaung Myat Thu.All rights reserved.</span>
    </div>
</div>
    `;
}

function projects() {
    mainPart.innerHTML = `
    <div class="">
    <h1>Here is my Projects!!</h1>
</div>
<div class="w-75 mt-4 text">
    <p>This is my Projects and you can check out source codes here!</p>
</div>
<div class="row" style="margin-top: 10%;">
    <div class="col-md-6 mb-4  mb-md-4 ">
        <div class="card blogs">
            <div class="card-body">
                <h4 class="card-title">Rakhine Quizzes Game</h4>
                <p class="card-text">I made this one to show as a little project in Ray Hub.This is not responsive and you should check with your laptop or desktop.</p>
                    <a href="https://github.com/Kaung-Myat/Rakine_Quiz_game" class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span class="me-2">https://github.com/Kaung-Myat/Rakine_Quiz_game</span></a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4 mb-md-4 ">
        <div class="card blogs">
            <div class="card-body">
                <h4 class="card-title">Face Detection</h4>
                <p class="card-text">I made this one to practise JavaScript and I used some liberies for this project.</p>
                    <a href="https://github.com/Kaung-Myat/Face-Detection" class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span class="me-2">https://github.com/Kaung-Myat/Face-Detection</span></a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4 mb-md-4 ">
        <div class="card blogs">
            <div class="card-body">
                <h4 class="card-title">IT Canteen Booking Project</h4>
                <p class="card-text">I made this for IT Canteen.IT Canteen is an organization from University of Computer Studied Sittwe.This is pretend to get more IT knowledge.I created this Express JS,EJS and as a database MongoDB.I used Bootstrap as a front-end framework.</p>
                    <a href="https://github.com/Kaung-Myat/Booking-Project" class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span class="me-2">https://github.com/Kaung-Myat/Booking-Project</span></a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4 mb-md-4 ">
        <div class="card blogs">
            <div class="card-body">
                <h4 class="card-title">Portfolio GUI</h4>
                <p class="card-text">This is my portfolio GUI and I created this and another is portfolio CLI.</p>
                <a href="https://github.com/Kaung-Myat/portfolio-GUI"
                class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span
                class="me-2">https://github.com/Kaung-Myat/portfolio-GUI</span></a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4 mb-md-4 ">
            <div class="card blogs">
                <div class="card-body">
                    <h4 class="card-title">Portfolio CLI</h4>
                    <p class="card-text">This is my portfolio CLI and I created this with Boostrap and JQuery.</p>
                    <a href="https://github.com/Kaung-Myat/portfolio-CLI"
                    class="text-decoration-none articleText"><i class="fa-solid fa-link me-1"></i><span
                    class="me-2">https://github.com/Kaung-Myat/portfolio-CLI</span></a>
            </div>
        </div>
    </div>
</div>
<div class="d-flex justify-content-center mt-5 mb-5">
    <div>
        <i class="fa-regular fa-copyright" style="color: rgb(163, 163, 163);"></i> <span style="color: rgb(163, 163, 163);">2023,Developed by Kaung Myat Thu.All rights reserved.</span>
    </div>
</div>
    `;
}

function blogs() {
    mainPart.innerHTML = `
                    <div class="">
                        <h1>Here is my Blogs!!</h1>
                    </div>
                    <div class="w-75 mt-4 text">
                        <p>This is my blogs and you can read my blogs here!</p>
                    </div>
                    
                    <div class="row" style="margin-top: 5%;">
                        <div id = "blogPart">
                        </div>
                    </div>
    `;
    fetch("https://portfolio-adminpanel-kaung-myat-ch2o.onrender.com/api/blogs")
        .then(res => res.json())
        .then(result => {
            var server_url = "https://portfolio-adminpanel-kaung-myat-ch2o.onrender.com";
            for (var i = 0; i < result.data.length; i++) {
                document.getElementById("blogPart").innerHTML += `
                <div class="col-md-6 mb-4  mb-md-4 ">
                    <div class="card blogs">
                        <div class="card-body">
                            <p style="color:#808080">${result.data[i].created_At}</p>
                            <a class="blogUI" data-bs-toggle="modal" data-bs-target="#blog${result.data[i].id}">
                                <h5 class="card-title mb-3">${result.data[i].title}</h5>
                            <p class="card-text">${result.data[i].short_desc}</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="blog${result.data[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <img src=" ${server_url.concat(result.data[i].img)}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title mt-3">${result.data[i].title}</h5>
                                        <p class="card-text mt-2">${result.data[i].desc}</p>
                                    </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                `
            }

        })
}

