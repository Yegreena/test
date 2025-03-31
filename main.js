
  function copyEmail() {
    const email = "yegreena1@foxmail.com"; // <- 换成你的邮箱
    navigator.clipboard.writeText(email).then(() => {
      alert("邮箱已复制：" + email);
    }).catch(err => {
      alert("复制失败，请手动复制：" + email);
    });
  }
  // 页面滚动时添加section-visible类
  const sections = document.querySelectorAll('.section-container');
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

  // 移动端菜单切换
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // 侧边导航点激活状态
  const navDots = document.querySelectorAll('.nav-dot');
  const sectionIds = [...navDots].map(dot => dot.getAttribute('data-section'));

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sectionIds.forEach((id, index) => {
      const section = document.getElementById(id);
      if (section && scrollPos >= section.offsetTop) {
        navDots.forEach(dot => dot.classList.remove('active'));
        navDots[index].classList.add('active');
      }
    });
  });

  function showOverlay(imageUrl) {
const overlay = document.getElementById("image-overlay");
const image = document.getElementById("overlay-image");
image.src = imageUrl;
overlay.classList.remove("hidden");
}

