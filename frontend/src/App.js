import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

//
// HEADER (Навигация)
//
function Header() {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li><a href="#home" style={navLinkStyle}>Home</a></li>
          <li><a href="#about" style={navLinkStyle}>About</a></li>
          <li><a href="#portfolio" style={navLinkStyle}>Portfolio</a></li>
          <li><a href="#services" style={navLinkStyle}>Services</a></li>
          <li><a href="#testimonials" style={navLinkStyle}>Testimonials</a></li>
          <li><a href="#blog" style={navLinkStyle}>Blog</a></li>
          <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  padding: '10px 20px',
  position: 'sticky',
  top: 0,
  zIndex: 100
};

const navListStyle = {
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'center',
  margin: 0,
  padding: 0
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 15px'
};

//
// HOME SECTION
//
function Home() {
  return (
    <section id="home" style={sectionStyle}>
      <h1>Welcome to My Freelancer Site</h1>
      <p>Я — профессиональный фрилансер, готовый воплотить ваши идеи в жизнь.</p>
    </section>
  );
}

//
// ABOUT SECTION
//
function About() {
  return (
    <section id="about" style={sectionStyle}>
      <h2>About Me</h2>
      <p>
        Я разработчик с опытом работы в создании интерактивных веб-приложений, дизайне пользовательских интерфейсов
        и SEO-оптимизации.
      </p>
      <img
        src="https://via.placeholder.com/200"
        alt="My Portrait"
        style={aboutImageStyle}
      />
    </section>
  );
}

const aboutImageStyle = {
  borderRadius: '50%',
  marginTop: '20px'
};

//
// PORTFOLIO SECTION
//
function Portfolio() {
  // Пример списка проектов
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Описание проекта один.',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Описание проекта два.',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Описание проекта три.',
      image: 'https://via.placeholder.com/300'
    },
  ];

  return (
    <section id="portfolio" style={sectionStyle}>
      <h2>Portfolio</h2>
      <div style={gridStyle}>
        {projects.map(project => (
          <div key={project.id} style={cardStyle}>
            <img src={project.image} alt={project.title} style={cardImgStyle} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
  padding: '20px'
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const cardImgStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '4px'
};

//
// SERVICES SECTION
//
function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Создание качественных и современных веб-сайтов.'
    },
    {
      id: 2,
      title: 'Development',
      description: 'Разработка функциональных веб-приложений.'
    },
    {
      id: 3,
      title: 'SEO Optimization',
      description: 'Оптимизация сайта для повышения видимости в поисковых системах.'
    },
  ];
  return (
    <section id="services" style={sectionStyle}>
      <h2>Services</h2>
      <div style={listStyle}>
        {services.map(service => (
          <div key={service.id} style={listItemStyle}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const listStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
};

const listItemStyle = {
  minWidth: '250px',
  flex: '1',
  padding: '10px'
};

//
// TESTIMONIALS SECTION
//
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      client: 'Client One',
      feedback: 'Отличная работа, всё выполнено качественно и в срок.'
    },
    {
      id: 2,
      client: 'Client Two',
      feedback: 'Профессиональный подход и творческое видение, рекомендую!'
    },
  ];

  return (
    <section id="testimonials" style={sectionStyle}>
      <h2>Testimonials</h2>
      {testimonials.map(testimonial => (
        <div key={testimonial.id} style={testimonialStyle}>
          <blockquote>"{testimonial.feedback}"</blockquote>
          <cite>{testimonial.client}</cite>
        </div>
      ))}
    </section>
  );
}

const testimonialStyle = {
  margin: '20px 0',
  padding: '10px',
  borderLeft: '4px solid #333',
  textAlign: 'left',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

//
// BLOG SECTION
//
function Blog() {
  // Примеры статей
  const posts = [
    {
      id: 1,
      title: 'Post One',
      excerpt: 'Краткое описание статьи один...'
    },
    {
      id: 2,
      title: 'Post Two',
      excerpt: 'Краткое описание статьи два...'
    },
  ];

  return (
    <section id="blog" style={sectionStyle}>
      <h2>Blog</h2>
      {posts.map(post => (
        <div key={post.id} style={blogPostStyle}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </section>
  );
}

const blogPostStyle = {
  margin: '20px 0',
  paddingBottom: '10px',
  borderBottom: '1px solid #ccc'
};

//
// CONTACT SECTION
//
function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      <h2>Contact</h2>
      <p>Если хотите обсудить проект, заполните форму ниже или свяжитесь со мной по электронной почте.</p>
      <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <textarea placeholder="Message" style={textareaStyle} />
        <button type="submit" style={buttonStyle}>Send</button>
      </form>
    </section>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto'
};

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const textareaStyle = {
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
  minHeight: '100px'
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

//
// FOOTER
//
function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Freelancer Name. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
  marginTop: '40px'
};

//
// Общие стили для секций
//
const sectionStyle = {
  padding: '40px 20px',
  textAlign: 'center'
};

export default App;
