document.addEventListener('DOMContentLoaded', function () {
  const weddingBtn = document.getElementById('weddingBtn');
  const commercialBtn = document.getElementById('commercialBtn');
  const festivalBtn = document.getElementById('festivalBtn');
  const otherBtn = document.getElementById('otherBtn');
  const contentDiv = document.getElementById('content');

  let currentCategory = 'wedding'; 
  let maxVisiblePhotos = 6;
  let maxVisibleVideos = 3;

  showContent(currentCategory);
  showLimitedPhotos();
  showLimitedVideos();


  weddingBtn.addEventListener('click', () => {
    currentCategory = 'wedding'; 
    showContent(currentCategory);
  });

  commercialBtn.addEventListener('click', () => {
    currentCategory = 'commercial'; 
    showContent(currentCategory);
  });

  festivalBtn.addEventListener('click', () => {
    currentCategory = 'festival'; 
    showContent(currentCategory);
  });

  otherBtn.addEventListener('click', () => {
    currentCategory = 'others'; 
    showContent(currentCategory);
  });




  function createSeeAllButton(text, clickHandler) {
    const button = document.createElement('button');
    button.className = 'mobile-button';
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
  }

  function showLimitedPhotos() {
    const photos = document.querySelectorAll('.grid-wrapper > div');
    for (let i = 0; i < photos.length; i++) {
      if (i < maxVisiblePhotos) {
        photos[i].style.display = 'block';
      } else {
        photos[i].style.display = 'none';
      }
    }
  }

  function showAllPhotos(category) {
    const photos = document.querySelectorAll('.grid-wrapper > div');
    photos.forEach((photo) => {
      photo.style.display = 'block';
    });
    seeAllPhotosButton.style.display = 'none';
  }

  function showLimitedVideos() {
    const videos = document.querySelectorAll('.grid-video > .video');
    for (let i = 0; i < videos.length; i++) {
      if (i < maxVisibleVideos) {
        videos[i].style.display = 'block';
      } else {
        videos[i].style.display = 'none';
      }
    }
  }

  function showAllVideos(category) {
    const videos = document.querySelectorAll('.grid-video > .video');
    videos.forEach((video) => {
      video.style.display = 'block';
    });
    seeAllVideosButton.style.display = 'none';
  }




  function showContent(category) {
    contentDiv.innerHTML = '';
    if (category === 'wedding') {


      contentDiv.innerHTML += `
      <h2 class="category-name">Wedding Photos</h2>
      
      <div class="grid-wrapper">
          <div class="wide">
            <img src="img/wedding/1.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
          </div>
          <div class="wide">
            <img src="img/wedding/2.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/wedding/3.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
          </div>
          <div class="wide">
            <img src="img/wedding/4.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
          </div>
          <div class="big">
            <img src="img/wedding/5.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(5)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/wedding/6.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(6)" class="hover-shadow cursor">
          </div>
          <div class="wide">
            <img src="img/wedding/7.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(7)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/wedding/8.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(8)" class="hover-shadow cursor">
          </div>
          <div class="wide">
            <img src="img/wedding/9.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(9)" class="hover-shadow cursor">
          </div>
          <div class="wide">
            <img src="img/wedding/10.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(10)" class="hover-shadow cursor">
          </div>
          <div class="big">
            <img src="img/wedding/11.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(11)" class="hover-shadow cursor">
          </div>
          <div class="wide">
            <img src="img/wedding/12.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(12)" class="hover-shadow cursor">
          </div>


          
             
      </div> 

      <div id="myModal" class="modal">
        <span class="close cursor" onclick="closeModal()">&times;</span>
        <div class="modal-content">

          <div class="mySlides">
            <div class="numbertext">1 / 12</div>
            <img src="img/wedding/1.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">2 / 12</div>
            <img src="img/wedding/2.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">3 / 12</div>
            <img src="img/wedding/3.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">4 / 12</div>
            <img src="img/wedding/4.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">5 / 12</div>
            <img src="img/wedding/5.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">6 / 12</div>
            <img src="img/wedding/6.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">7 / 12</div>
            <img src="img/wedding/7.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">8 / 12</div>
            <img src="img/wedding/8.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">9 / 12</div>
            <img src="img/wedding/9.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">10 / 12</div>
            <img src="img/wedding/10.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">11 / 12</div>
            <img src="img/wedding/11.jpg" >
          </div>
          <div class="mySlides">
            <div class="numbertext">12 / 12</div>
            <img src="img/wedding/12.jpg" >
          </div>

          
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>



          
        </div>
      </div>




      <button class="mobile-button" id="seeAllPhotosWedding">See All Photos</button>
      
      <h2 class="category-name">Wedding Videos</h2>

      <div class="grid-video">
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        

    
      </div>

       <button class="mobile-button" id="seeAllVideosWedding">See All Videos</button>
      `;

      showLimitedPhotos();
      showLimitedVideos();

      seeAllPhotosButton = document.getElementById('seeAllPhotosWedding');
      seeAllVideosButton = document.getElementById('seeAllVideosWedding');

      seeAllPhotosButton.addEventListener('click', () => showAllPhotos(currentCategory));
      seeAllVideosButton.addEventListener('click', () => showAllVideos(currentCategory));


    } else if (category === 'commercial') {

      contentDiv.innerHTML += `
      <h2 class="category-name">Commercial Photos</h2>

      <div class="grid-wrapper">
          <div class="wide">
            <img src="img/commercial1/aryan.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/commercial1/bhaiya.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
          </div>
          <div class="wide">
            <img src="img/commercial1/amit.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/commercial1/aadarsh.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
          </div>      
          <div class="tall">
            <img src="img/commercial1/adarsh.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(5)" class="hover-shadow cursor">
          </div>       
          <div class="tall">
            <img src="img/commercial1/ballu.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(6)" class="hover-shadow cursor">
          </div>  
          <div class="wide">
            <img src="img/commercial1/raghav.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(7)" class="hover-shadow cursor">
          </div> 
          <div class="tall">
            <img src="img/commercial1/rajveer.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(8)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/commercial1/adarsh2.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(9)" class="hover-shadow cursor">
          </div> 
          <div class="tall">
            <img src="img/commercial1/amit2.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(10)" class="hover-shadow cursor">
          </div> 
          <div class="wide">
            <img src="img/commercial1/aryan2.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(11)" class="hover-shadow cursor">
          </div> 
          <div class="tall">
            <img src="img/commercial1/raghav.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(12)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/commercial1/amit3.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(13)" class="hover-shadow cursor">
          </div> 
          <div class="wide">
            <img src="img/commercial1/raghav4.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(14)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/commercial1/raghav3.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(15)" class="hover-shadow cursor">
          </div>
          
             
      </div>

      <div id="myModal" class="modal">
        <span class="close cursor" onclick="closeModal()">&times;</span>
        <div class="modal-content">

          <div class="mySlides">
            <div class="numbertext">1 / 15</div>
            <img src="img/commercial1/aryan.jpg" >
            <p class="caption">Aryan, Student</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">2 / 15</div>
            <img src="img/commercial1/bhaiya.jpg" >
            <p class="caption">a boy, Photographer</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">3 / 15</div>
            <img src="img/commercial1/amit.jpg" >
            <p class="caption">Amit, Accountant</p>
          </div>          
          <div class="mySlides">
            <div class="numbertext">4 / 15</div>
            <img src="img/commercial1/aadarsh.jpg" >
            <p class="caption">Aadarsh, Student</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">5 / 15</div>
            <img src="img/commercial1/adarsh.jpg" >
            <p class="caption">Adarsh, Stock Market</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">6 / 15</div>
            <img src="img/commercial1/ballu.jpg" >
            <p class="caption">Shashant, Photographer</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">7 / 15</div>
            <img src="img/commercial1/raghav.jpg" >
            <p class="caption">raghav, CA</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">8 / 15</div>
            <img src="img/commercial1/rajveer.jpg" >
            <p class="caption">Rajveer, Baccha</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">9 / 15</div>
            <img src="img/commercial1/adarsh2.jpg" >
            <p class="caption">Adarsh, Stock Market</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">10 / 15</div>
            <img src="img/commercial1/amit2.jpg" >
            <p class="caption">Amit, Student</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">11 / 15</div>
            <img src="img/commercial1/aryan2.jpg" >
            <p class="caption">Aryan, Student</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">12 / 15</div>
            <img src="img/commercial1/raghav.jpg" >
            <p class="caption">Raghav, Stock Market</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">13 / 15</div>
            <img src="img/commercial1/amit3.jpg" >
            <p class="caption">Adarsh, Stock Market</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">14 / 15</div>
            <img src="img/commercial1/raghav4.jpg" >
            <p class="caption">Adarsh, Stock Market</p>
          </div>
          <div class="mySlides">
            <div class="numbertext">15 / 15</div>
            <img src="img/commercial1/raghav3.jpg" >
            <p class="caption">Adarsh, Stock Market</p>
          </div>

          
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>



          
        </div>
      </div>



      <button class="mobile-button" id="seeAllPhotosCommercial">See All Photos</button>
      


      <h2 class="category-name">Commercial Videos</h2>
      
      <div class="grid-video">
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        

    
      </div>
      <button class="mobile-button" id="seeAllVideosCommercial">See All Videos</button>
    `;

    showLimitedPhotos();
    showLimitedVideos();

    seeAllPhotosButton = document.getElementById('seeAllPhotosCommercial');
    seeAllVideosButton = document.getElementById('seeAllVideosCommercial');

    seeAllPhotosButton.addEventListener('click', () => showAllPhotos(currentCategory));
    seeAllVideosButton.addEventListener('click', () => showAllVideos(currentCategory));



    } else if (category === 'festival') {

      contentDiv.innerHTML += `
      <h2 class="category-name">Festival Photos</h2>
      
      <div class="grid-wrapper">
        
          <div class="tall">
            <img src="img/festival/ambika_mata.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
          </div>
          <div class="wide">
            <img src="img/commercial1/raghav.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/commercial1/raghav3.jpg" style="background-color: #f0f0f0;" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
          </div>
          <div class="big">
            <img src="img/others/11.jpg" sstyle="background-color: #f0f0f0;" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
          </div>
          
          
          
           
      </div>  


      <div id="myModal" class="modal">
        <span class="close cursor" onclick="closeModal()">&times;</span>
        <div class="modal-content">

          <div class="mySlides">
            <div class="numbertext">1 / 4</div>
            <img src="img/festival/ambika_mata.jpg" >
            <p class="caption">Shree Ambika Dham, Karnawad</p>
          </div>

          <div class="mySlides">
            <div class="numbertext">2 / 4</div>
            <img src="img/commercial1/raghav.jpg" >
            <p class="caption">Raghav, CA, Karnawad</p>
          </div>

          <div class="mySlides">
            <div class="numbertext">3 / 4</div>
            <img src="img/commercial1/raghav3.jpg" >
            <p class="caption">Raghav, CA, Karnawad</p>
          </div>
          
          <div class="mySlides">
            <div class="numbertext">4 / 4</div>
            <img src="img/others/11.jpg" >
            <p class="caption">Poster Design, Bakery Design</p>
          </div>
          
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>



         
        
          
        </div>
      </div>






      <button class="mobile-button" id="seeAllPhotosFestival">See All Photos</button>
      


      <h2 class="category-name">Festival Videos</h2>
      
      <div class="grid-video">
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        
        
    
      </div>
      <button class="mobile-button" id="seeAllVideosFestival">See All Videos</button>
       `;
       showLimitedPhotos();
       showLimitedVideos();
 
       seeAllPhotosButton = document.getElementById('seeAllPhotosFestival');
       seeAllVideosButton = document.getElementById('seeAllVideosFestival');
 
       seeAllPhotosButton.addEventListener('click', () => showAllPhotos(currentCategory));
       seeAllVideosButton.addEventListener('click', () => showAllVideos(currentCategory));

    

    } else if (category === 'others') {

      contentDiv.innerHTML += `
      <h2 class="category-name">Other Photos</h2>
      
      <div class="grid-wrapper">
          
          <div class="wide">
            <img src="img/others/2.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
          </div>
          <div class="tall">
            <img src="img/others/3.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
          </div>
          <div class="wide">
            <img src="img/others/4.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
          </div>
          <div class="big">
            <img src="img/others/11.jpg" style="background-color: #f0f0f0;"  onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
          </div>
          



      </div>

      <div id="myModal" class="modal">
        <span class="close cursor" onclick="closeModal()">&times;</span>
        <div class="modal-content">

          <div class="mySlides">
            <div class="numbertext">1 / 4</div>
            <img src="img/others/2.jpg" >
          </div>

          <div class="mySlides">
            <div class="numbertext">2 / 4</div>
            <img src="img/others/3.jpg" >
          </div>

          <div class="mySlides">
            <div class="numbertext">3 / 4</div>
            <img src="img/others/4.jpg" >
          </div>
          
          <div class="mySlides">
            <div class="numbertext">4 / 4</div>
            <img src="img/others/11.jpg" >
          </div>
          
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>



          
        </div>
      </div>






      <button class="mobile-button" id="seeAllPhotosOthers">See All Photos</button>
      


      <h2 class="category-name">Other Videos</h2>
      
      <div class="grid-video">
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/uBgwLEGfsaI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="video">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/u5Na2JTUeW8" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        
        
    
      </div>
      <button class="mobile-button" id="seeAllVideosOthers">See All Videos</button>
      `;
      showLimitedPhotos();
      showLimitedVideos();

      seeAllPhotosButton = document.getElementById('seeAllPhotosOthers');
      seeAllVideosButton = document.getElementById('seeAllVideosOthers');

      seeAllPhotosButton.addEventListener('click', () => showAllPhotos(currentCategory));
      seeAllVideosButton.addEventListener('click', () => showAllVideos(currentCategory));

    }


    const categoryButtons = [weddingBtn, commercialBtn, festivalBtn, otherBtn];
    categoryButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('active');
      }
    });
    document.getElementById(`${category}Btn`).classList.add('active');
  }




  const form = document.getElementById('feedback-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          confirmationMessage.textContent = 'Thank you for your feedback.';
          form.reset();
        } else {
          confirmationMessage.textContent = 'Error submitting feedback. Please try again later.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  




  
});





function openModal() {
  document.body.classList.add("modal-open");
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.body.classList.remove("modal-open");
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




