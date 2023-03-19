var mainPart = document.getElementById("mainPart");

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
               I'm Kaung Myat Thu and waiting to join Second Year in Computer Universiy Sittwe.I was in Sittwe and I passed
               the matriculation exam at BEHS 1,Sittwe.After matriculation exam, I started joined Programming class at Ray Hub Academy Sittwe.
               After joining this class, I learned Java in Pro Logic IT training Center Sittwe for about 4 months.In the covid 19 crisis time,
               I joined free Web development class in Data Land Technology online.But I didn't get what I thought so I study web development as 
               self study and I am waiting to open advanced class in Ray Hub Academy.Now,I am preparing for Final Group Project in Ray Hub.
               This is portal and mobile project.This will be written with Express JS , EJS and used My SQL as a DataBase.For Front-end, bootstrap and 
               JQuery.In mobile, this will be written with Flutter.Project name is Sittwe Market Place (SMP) and we intend to be a good shopping system.
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
    <p>I'm Kaung Myat Thu, 1st year of Computer Science Student from <a
            href="https://lms.ucssittway.edu.mm/" class="text-decoration-none uniText"
            style="color: rgb(255, 170, 11)">University Of Computer Studied Sittwe.</a></p>
    <p>Aside Knowledge from University,I'm currently learning Mobile Development with Flutter and Web
        Development with NodeJs in Ray Hub Academy Sittwe.</p>
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
                <p class="card-text">I made this for IT Cantenn.IT Canteen is a organization from University of Computer Studited Sittwe.This is prented to get more IT knowledge.I create this Express JS,EJS and as a database MongoDB.I used Bootstrap as a front-end framework.</p>
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
                <p class="card-text">I made this for IT Cantenn.IT Canteen is a organization from University of Computer Studited Sittwe.This is prented to get more IT knowledge.I create this Express JS,EJS and as a database MongoDB.I used Bootstrap as a front-end framework.</p>
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