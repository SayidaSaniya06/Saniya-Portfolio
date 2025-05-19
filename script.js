  const projects = [
    {
      number: '01',
      title: 'Movie Land',
      desc: 'Movie Land is a dynamic React JS-powered platform that effortlessly guides users to discover the latest trending movies.',
      tech: 'HTML, CSS, JavaScript, Rect Js',
      img: 'movie-land-img.png',
      alt: 'movie-land project'
    },
    {
      number: '02',
      title: 'E-commerce-site',
      desc: 'Elevate your shopping experience with Cara . Immerse yourself in a visually stunning front-end application crafted with HTML,CSS,JavaScript.',
      tech: 'HTML, SCSS, JavaScript, Bootstrap',
      img: 'e-commerce-img.png',
      alt: 'e-commerce project'
    },
    {
      number: '03',
      title: 'Products',
      desc: `This is a e-commerce platform designed to showcase the company's products. Customers can view product details and make secure payments using Razorpay.`,
      tech: 'HTML, CSS, JavaScript, Bootstrap, Node js, Express js, MongoDB, Razorpay API',
      img: 'products-amopa.png',
      alt: 'products app project'
    },
    {
      number: '04',
      title: 'PremMon',
      desc: 'Developed dynamic content styling with CSS animations to improving user engagement. Integrated web-sockets for real-time data fetching. Created a responsive UI, ensuring seamless compatibility across all devices ',
      tech: 'HTML,CSS,JavaScript,Bootstrap,Node.js, Express.js, Bit-bucket, RESTful APIs, Authentication',
      img: 'Premmon-img.png',
      alt: 'products app project'
    },
    {
        number: '05',
        title: 'AutoCon',
        desc: 'Led the development of an innovative IoT mobile application, highlighting advanced front-end development skills and user-centered design.',
        tech: 'HTML,CSS,JavaScript,React Native,Bit-bucket,RESTful APIs',
        img: 'AutoCon-manual-mobile.jpeg',
        alt: 'autoCon mobile app project'
      },
    {
        number: '06',
        title: 'Power supply Monitor',
        desc: 'Designed and implemented a live power supply monitoring system, automating SMS alerts for power outages. Implemented Web-socket-based live updates.',
        tech: 'React Native,Node.js,Git,GitLab,Express.js,Mongodb',
        img: 'Power-supply-monitor-mobile.jpeg',
        alt: 'Power-supply mobile app project'
      }
  ];

  let currentIndex = 0;

  const titleElement = document.querySelector('.project-title');
  const descElement = document.querySelector('.project-desc');
  const techElement = document.querySelector('.project-tech');
  const imgElement = document.querySelector('.project-img');

  function updateProject(index) {
    const project = projects[index];
    titleElement.innerHTML = `<span class="num">${project.number}</span> ${project.title}`;
    descElement.textContent = project.desc;
    techElement.innerHTML = `<span class="tech">Technologies Used:</span> ${project.tech}`;
    imgElement.src = project.img;
    imgElement.alt = project.alt;

      // Conditional object-fit
      if (project.title === 'AutoCon' || project.title === 'Power supply Monitor') {
        imgElement.style.objectFit = 'contain';
        imgElement.style.backgroundColor = '#1e1e1e'; // Optional: add a bg for padding
      } else {
        imgElement.style.objectFit = 'cover';
        imgElement.style.backgroundColor = 'transparent';
      }
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject(currentIndex);
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProject(currentIndex);
  });

