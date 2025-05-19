$(function () {
    $('#sunyul').fullpage({
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
      sectionsColor: ['antiquewhite', 'gainsboro', 'whitesmoke', '#ddd', '#eee'],
      navigation: true,
      navigationTooltips: ['메뉴1', '메뉴2', '메뉴3', '메뉴4', '푸터'],
      navigationPosition: 'left',
      // responsiveWidth: 1000, 
      // 주석풀면 반응형에서 다시 스크롤 생김
afterLoad: function (anchorLink, index) {
  let color = 'cadetblue'; // 기본값

  if (index === 2) {
    color = 'antiquewhite';
  } else if (index === 4) {
    color = 'antiquewhite'; 
  }

  $('header').css('background-color', color);
}
    });
  
    // 포트폴리오 선택 시 영상과 설명 표시
    window.selectPortfolio = function (index) {
      const portfolioVideos = [
        {
          src: "img/확성기.mp4",
          desc: "1번 포트폴리오 영상입니다."
        },
        {
          src: "img/드럼통1.mp4",
          desc: "2번 포트폴리오 영상입니다."
        },
        {
          src: "img/횃불,도끼.mp4",
          desc: "3번 포트폴리오 영상입니다."
        },
        {
          src: "img/드럼통,확성기,기차옆면.mp4",
          desc: "4번 포트폴리오 영상입니다."
        },
        {
          src: "img/Comp 1.mp4",
          desc: "5번 포트폴리오 영상입니다."
        }
      ];
  
      const items = document.querySelectorAll(".portfolio-item");
      items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
  
      document.getElementById("youtubePlayer").src = portfolioVideos[index].src;
      document.getElementById("desc").textContent = portfolioVideos[index].desc;
    };
  
    // 원형 circle 반응형 대응
    function updateCircleRadius() {
      const circle = document.querySelector('.section-circle-line circle');
      if (circle) {
        circle.setAttribute('r', window.innerWidth <= 768 ? '315' : '360');
      }
    }
    window.addEventListener('load', updateCircleRadius);
    window.addEventListener('resize', updateCircleRadius);
  
    // 원형 아이템 클릭 시 active 토글
    const sectionItems = document.querySelectorAll('.section-circle-item');
    sectionItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          sectionItems.forEach(el => el.classList.remove('active'));
          item.classList.add('active');
        }
      });
    });
  
    // 프로필 자기소개 토글
    window.toggleIntro = function () {
      const profile = document.getElementById('profileContent');
      const introWrapper = document.getElementById('introWrapper');
      const introContent = document.getElementById('introContent');
      const whoTail = document.getElementById('whoTail');
  
      const isOpen = introContent.classList.contains('show');
      if (isOpen) {
        introWrapper.classList.remove('move-up');
        introContent.classList.remove('show');
        profile.style.display = 'block';
        whoTail.textContent = 'ho';
      } else {
        profile.style.display = 'none';
        introWrapper.classList.add('move-up');
        introContent.classList.add('show');
        whoTail.textContent = 'hy';
      }
    };
  });
  