// Minimal static app.js to replicate main UI, filters and mixing logic
const BACKEND_BASE = '' // set to your backend URL if needed

const courses = [
  {
    id: 1,
    title: 'Curso Completo de Cloud Computing (AWS)',
    description: 'Domina Amazon Web Services desde cero hasta nivel avanzado. Aprende EC2, S3, Lambda, RDS y más.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 299,
    discount: 100,
    rating: 4.9,
    students: 12450,
  image: 'images/aws.jpg',
    category: 'Tecnología y Programación',
    featured: true,
  },
  {
    id: 2,
    title: 'Machine Learning con Python',
    description: 'Aprende algoritmos de ML, redes neuronales y deep learning con TensorFlow y scikit-learn.',
    level: 'Avanzado',
    duration: '10 semanas',
    originalPrice: 349,
    discount: 100,
    rating: 4.8,
    students: 9823,
  image: 'images/MLpy.png',
    category: 'Tecnología y Programación',
    featured: true,
  },
  {
    id: 3,
    title: 'Desarrollo Full Stack con React y Node.js',
    description: 'Construye aplicaciones web modernas con React, Node.js, Express y MongoDB.',
    level: 'Intermedio',
    duration: '12 semanas',
    originalPrice: 279,
    discount: 100,
    rating: 4.9,
    students: 15632,
  image: 'images/reactNode.jpg',
    category: 'Tecnología y Programación',
  },
  {
    id: 4,
    title: 'Ciberseguridad y Ethical Hacking',
    description: 'Aprende técnicas de pentesting, análisis de vulnerabilidades y seguridad de redes.',
    level: 'Avanzado',
    duration: '9 semanas',
    originalPrice: 399,
    discount: 100,
    rating: 4.7,
    students: 7234,
  image: 'images/hackerCourse.jpg',
    category: 'Tecnología y Programación',
  },
  {
    id: 5,
    title: 'DevOps y CI/CD con Docker y Kubernetes',
    description: 'Domina contenedores, orquestación y pipelines de integración continua.',
    level: 'Intermedio',
    duration: '7 semanas',
    originalPrice: 289,
    discount: 100,
    rating: 4.8,
    students: 8956,
  image: 'images/pipeline.jpg',
    category: 'Tecnología y Programación',
    featured: true,
  },
  {
    id: 6,
    title: 'Desarrollo de Apps Móviles con React Native',
    description: 'Crea aplicaciones iOS y Android con una sola base de código usando React Native.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 269,
    discount: 100,
    rating: 4.6,
    students: 11234,
  image: 'images/reactNative.png',
    category: 'Tecnología y Programación',
  },
  {
    id: 7,
    title: 'Data Science y Análisis de Datos',
    description: 'Aprende Python, Pandas, NumPy y visualización de datos con Matplotlib y Seaborn.',
    level: 'Principiante',
    duration: '6 semanas',
    originalPrice: 249,
    discount: 100,
    rating: 4.9,
    students: 13567,
  image: 'images/dataScience.png',
    category: 'Tecnología y Programación',
  },
  {
    id: 8,
    title: 'Blockchain y Desarrollo de Smart Contracts',
    description: 'Desarrolla aplicaciones descentralizadas con Solidity, Ethereum y Web3.js.',
    level: 'Avanzado',
    duration: '10 semanas',
    originalPrice: 379,
    discount: 100,
    rating: 4.7,
    students: 5678,
  image: 'images/blockchain.jpg',
    category: 'Tecnología y Programación',
  },
  {
    id: 9,
    title: 'Diseño de Sistemas y Arquitectura de Software',
    description: 'Aprende a diseñar sistemas escalables, microservicios y patrones de arquitectura.',
    level: 'Avanzado',
    duration: '8 semanas',
    originalPrice: 329,
    discount: 100,
    rating: 4.8,
    students: 6789,
  image: 'images/software.jpg',
    category: 'Tecnología y Programación',
  },
  {
    id: 10,
    title: 'Python para Automatización y Scripting',
    description: 'Automatiza tareas, web scraping y desarrollo de bots con Python.',
    level: 'Principiante',
    duration: '5 semanas',
    originalPrice: 199,
    discount: 100,
    rating: 4.9,
    students: 18234,
  image: 'images/autoPy.jpg',
    category: 'Tecnología y Programación',
  },
  {
    id: 11,
    title: 'Bases de Datos SQL y NoSQL',
    description: 'Domina PostgreSQL, MySQL, MongoDB y Redis para gestión de datos.',
    level: 'Intermedio',
    duration: '7 semanas',
    originalPrice: 259,
    discount: 100,
    rating: 4.7,
    students: 10456,
  image: 'images/sqlNosql.png',
    category: 'Tecnología y Programación',
  },
  {
    id: 12,
    title: 'Inteligencia Artificial Generativa',
    description: 'Aprende a trabajar con GPT, DALL-E, Stable Diffusion y modelos de IA generativa.',
    level: 'Intermedio',
    duration: '6 semanas',
    originalPrice: 319,
    discount: 100,
    rating: 4.9,
    students: 14567,
  image: 'images/aitools.jpg',
    category: 'Tecnología y Programación',
    featured: true,
  },
  {
    id: 13,
    title: 'Inglés Académico para Universitarios y Profesionales',
    description: 'Aprende a escribir ensayos, informes y correos académicos con vocabulario formal y precisión gramatical.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 149,
    discount: 100,
    rating: 4.7,
    students: 3421,
  image: 'images/englishCurso.png',
    category: 'Lenguas y Comunicación Global',
  },
  {
    id: 14,
    title: 'Speaking Pro: Comunicación Oral y Presentaciones en Inglés',
    description: 'Mejora tu fluidez y confianza al hablar en público o participar en debates académicos.',
    level: 'Intermedio',
    duration: '6 semanas',
    originalPrice: 129,
    discount: 100,
    rating: 4.6,
    students: 2100,
  image: 'images/speakEnglish.png',
    category: 'Lenguas y Comunicación Global',
  },
  {
    id: 15,
    title: 'Inglés Técnico para Ingeniería y Tecnología',
    description: 'Domina el lenguaje profesional utilizado en manuales, software y proyectos de ingeniería.',
    level: 'Avanzado',
    duration: '6 semanas',
    originalPrice: 179,
    discount: 100,
    rating: 4.5,
    students: 980,
  image: 'images/engEngineers.png',
    category: 'Lenguas y Comunicación Global',
  },
  {
    id: 16,
    title: 'Francés para el Mundo Académico y Cultural',
    description: 'Explora el idioma y la cultura francófona con enfoque en lectura y escritura universitaria.',
    level: 'Intermedio',
    duration: '6 semanas',
    originalPrice: 139,
    discount: 100,
    rating: 4.4,
    students: 540,
  image: 'images/frenchCourse.jpg',
    category: 'Lenguas y Comunicación Global',
  },
  {
    id: 17,
    title: 'Alemán para Ciencia y Tecnología',
    description: 'Aprende vocabulario técnico usado en papers científicos y entornos de investigación.',
    level: 'Intermedio',
    duration: '6 semanas',
    originalPrice: 149,
    discount: 100,
    rating: 4.3,
    students: 320,
  image: 'images/germanCourse.png',
    category: 'Lenguas y Comunicación Global',
  },
  {
    id: 18,
    title: 'Portugués para Negocios y Comunicación Intercultural',
    description: 'Conecta con el mercado latinoamericano y mejora tus oportunidades laborales.',
    level: 'Intermedio',
    duration: '6 semanas',
    originalPrice: 129,
    discount: 100,
    rating: 4.2,
    students: 210,
  image: 'images/portug.jpg',
    category: 'Lenguas y Comunicación Global',
  },
  {
    id: 19,
    title: 'Japonés desde Cero con Enfoque en Cultura y Tecnología',
    description: 'Aprende fundamentos del idioma y expresiones clave para el entorno tecnológico y cultural japonés.',
    level: 'Principiante',
    duration: '8 semanas',
    originalPrice: 139,
    discount: 100,
    rating: 4.6,
    students: 410,
  image: 'images/japanese.jpg',
    category: 'Lenguas y Comunicación Global',
  },
  {
    id: 20,
    title: 'Español para Extranjeros: Comunicación Universitaria',
    description: 'Curso dirigido a estudiantes internacionales que buscan perfeccionar su español académico.',
    level: 'Intermedio',
    duration: '6 semanas',
    originalPrice: 99,
    discount: 100,
    rating: 4.5,
    students: 720,
  image: 'images/learnSpanish.jpg',
    category: 'Lenguas y Comunicación Global',
  },
  {
    id: 21,
    title: 'Traducción y Escritura Bilingüe: Inglés–Español',
    description: 'Desarrolla habilidades de traducción profesional aplicadas a textos científicos, técnicos y de divulgación.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 159,
    discount: 100,
    rating: 4.6,
    students: 260,
  image: 'images/engspa.jpg',
    category: 'Lenguas y Comunicación Global',
  },
  {
    id: 22,
    title: 'Cálculo Vectorial y Ecuaciones Diferenciales',
    description: 'Resuelve problemas de ingeniería con fundamentos sólidos.',
    level: 'Intermedio',
    duration: '10 semanas',
    originalPrice: 199,
    discount: 100,
    rating: 4.4,
    students: 430,
  image: 'images/ecuaciones.jpg',
    category: 'Matemáticas y Física Aplicada',
  },
  {
    id: 23,
    title: 'Álgebra Lineal Computacional con Python',
    description: 'Aplica álgebra a gráficos y análisis de datos.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 179,
    discount: 100,
    rating: 4.3,
    students: 390,
  image: 'images/algebra.jpg',
    category: 'Matemáticas y Física Aplicada',
  },
  {
    id: 24,
    title: 'Física Moderna: Relatividad, Cuántica y Aplicaciones',
    description: 'Explora los pilares de la física contemporánea.',
    level: 'Avanzado',
    duration: '12 semanas',
    originalPrice: 219,
    discount: 100,
    rating: 4.5,
    students: 120,
  image: 'images/fisica.jpg',
    category: 'Matemáticas y Física Aplicada',
  },
  {
    id: 25,
    title: 'Matemáticas Discretas para Programadores',
    description: 'Aprende la base lógica detrás de la informática.',
    level: 'Principiante',
    duration: '6 semanas',
    originalPrice: 99,
    discount: 100,
    rating: 4.4,
    students: 340,
  image: 'images/mates.png',
    category: 'Matemáticas y Física Aplicada',
  },
  {
    id: 26,
    title: 'Métodos Numéricos para Ingenieros',
    description: 'Resuelve ecuaciones complejas con herramientas digitales.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 159,
    discount: 100,
    rating: 4.2,
    students: 210,
  image: 'images/metodosNum.jpg',
    category: 'Matemáticas y Física Aplicada',
  },
  {
    id: 27,
    title: 'Data Science para Ingenieros: de Cero a Experto',
    description: 'Aprende análisis, limpieza y visualización de datos.',
    level: 'Intermedio',
    duration: '10 semanas',
    originalPrice: 199,
    discount: 100,
    rating: 4.6,
    students: 540,
  image: 'images/dataSciencecero.jpg',
    category: 'Ciencia de Datos e Ingeniería',
  },
  {
    id: 28,
    title: 'Análisis Predictivo con Python y Scikit-Learn',
    description: 'Aplica algoritmos para anticipar comportamientos.',
    level: 'Avanzado',
    duration: '8 semanas',
    originalPrice: 199,
    discount: 100,
    rating: 4.5,
    students: 320,
  image: 'images/predictive.jpg',
    category: 'Ciencia de Datos e Ingeniería',
  },
  {
    id: 29,
    title: 'Big Data y Procesamiento Masivo con Spark y Hadoop',
    description: 'Trabaja con grandes volúmenes de información.',
    level: 'Avanzado',
    duration: '10 semanas',
    originalPrice: 219,
    discount: 100,
    rating: 4.3,
    students: 180,
  image: 'images/spark.jpg',
    category: 'Ciencia de Datos e Ingeniería',
  },
  {
    id: 30,
    title: 'Simulación y Modelado Matemático con MATLAB y Python',
    description: 'Representa fenómenos reales mediante cálculos computacionales.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 179,
    discount: 100,
    rating: 4.2,
    students: 140,
    image: 'images/matlab.png',
    category: 'Ciencia de Datos e Ingeniería',
  },
  {
    id: 31,
    title: 'Control y Automatización con Arduino y Raspberry Pi',
    description: 'Crea sistemas electrónicos interactivos.',
    level: 'Principiante',
    duration: '6 semanas',
    originalPrice: 129,
    discount: 100,
    rating: 4.3,
    students: 210,
    image: 'images/arduino.png',
    category: 'Ciencia de Datos e Ingeniería',
  },
  {
    id: 32,
    title: 'Redes y Comunicaciones: del Router a la Nube',
    description: 'Entiende cómo viajan los datos en el mundo digital.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 159,
    discount: 100,
    rating: 4.1,
    students: 230,
    image: 'images/router.jpg',
    category: 'Ciencia de Datos e Ingeniería',
  },
  {
    id: 33,
    title: 'Internet de las Cosas (IoT) y Sistemas Embebidos',
    description: 'Conecta el mundo físico con el digital.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 159,
    discount: 100,
    rating: 4.2,
    students: 150,
    image: 'images/iot.jpg',
    category: 'Ciencia de Datos e Ingeniería',
  },
  {
    id: 34,
    title: 'Diseño Gráfico Profesional con Canva, Illustrator y Figma',
    description: 'Da vida a tus ideas con herramientas de diseño.',
    level: 'Principiante',
    duration: '6 semanas',
    originalPrice: 129,
    discount: 100,
    rating: 4.4,
    students: 420,
    image: 'images/diseño.jpg',
    category: 'Diseño, Creatividad y Comunicación',
  },
  {
    id: 35,
    title: 'UX/UI Design: Experiencias Digitales que Enamoran',
    description: 'Aprende a diseñar interfaces centradas en el usuario.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 169,
    discount: 100,
    rating: 4.5,
    students: 280,
    image: 'images/uxui.jpg',
    category: 'Diseño, Creatividad y Comunicación',
  },
  {
    id: 36,
    title: 'Fotografía y Edición Avanzada con Lightroom',
    description: 'Transforma imágenes en piezas artísticas.',
    level: 'Intermedio',
    duration: '6 semanas',
    originalPrice: 139,
    discount: 100,
    rating: 4.3,
    students: 200,
    image: 'images/lightroom.png',
    category: 'Diseño, Creatividad y Comunicación',
  },
  {
    id: 37,
    title: 'Motion Graphics y Animación con After Effects',
    description: 'Da movimiento a tus ideas con estilo.',
    level: 'Avanzado',
    duration: '10 semanas',
    originalPrice: 199,
    discount: 100,
    rating: 4.2,
    students: 120,
    image: 'images/motion.jpg',
    category: 'Diseño, Creatividad y Comunicación',
  },
  {
    id: 38,
    title: 'Diseño de Marca y Comunicación Visual Estratégica',
    description: 'Crea una identidad visual poderosa y coherente.',
    level: 'Intermedio',
    duration: '8 semanas',
    originalPrice: 179,
    discount: 100,
    rating: 4.4,
    students: 160,
    image: 'images/branding.png',
    category: 'Diseño, Creatividad y Comunicación',
  },
];

// DOM refs
const categoriesNode = document.getElementById('categories')
const featuredNode = document.getElementById('featured')
const gridNode = document.getElementById('courses-grid')
const countNode = document.getElementById('courses-count')
const searchInput = document.getElementById('search')

let selectedCategory = 'Todos'
let searchTerm = ''

const categories = ['Todos', ...Array.from(new Set(courses.map(c=>c.category)))]

function renderCategories(){
  categoriesNode.innerHTML = ''
  categories.forEach(cat => {
    const btn = document.createElement('button')
    btn.textContent = cat
    if(cat===selectedCategory) btn.classList.add('active')
    btn.addEventListener('click', ()=>{ selectedCategory = cat; render() })
    categoriesNode.appendChild(btn)
  })
}

function renderFeatured(){
  featuredNode.innerHTML = ''
  courses.filter(c=>c.featured).forEach(c=>{
    const wrap = document.createElement('div')
    wrap.className = 'featured-item'
    const img = document.createElement('img')
    img.src = c.image || '/placeholder.jpg'
    img.alt = c.title
    const info = document.createElement('div')
    info.innerHTML = `<div style="font-weight:700;font-size:13px">${c.title}</div><div style="font-size:12px;color:#666">${c.level} • ${c.students}</div>`
    wrap.appendChild(img)
    wrap.appendChild(info)
    featuredNode.appendChild(wrap)
  })
}

function mixRoundRobin(list){
  const map = new Map()
  for(const c of list){
    if(!map.has(c.category)) map.set(c.category, [])
    map.get(c.category).push(c)
  }
  const keys = Array.from(map.keys())
  if(keys.length<=1) return list
  const indices = keys.map(()=>0)
  const result = []
  let added = true
  while(added){
    added = false
    for(let i=0;i<keys.length;i++){
      const arr = map.get(keys[i])
      const idx = indices[i]
      if(idx < arr.length){ result.push(arr[idx]); indices[i]=idx+1; added = true }
    }
  }
  return result
}

function getFiltered(){
  const _filtered = courses.filter(c=>{
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || c.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  return selectedCategory === 'Todos' ? mixRoundRobin(_filtered) : _filtered
}

function renderGrid(){
  const list = getFiltered()
  gridNode.innerHTML = ''
  countNode.textContent = `Cursos (${list.length})`
  list.forEach(c=>{
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
      <img src="${c.image||'/placeholder.jpg'}" alt="${c.title}">
      <div class="card-body">
        <div class="badges"><div class="badge">${c.category}</div><div class="badge">${c.level}</div></div>
        <div class="title">${c.title}</div>
        <div class="desc">${c.description}</div>
        <div class="meta"><div><small>⏱ ${c.duration}</small></div><div><small>⭐ ${c.rating}</small></div></div>
        <div class="price"><div class="text-price">GRATIS</div><div class="text-old" style="text-decoration:line-through;color:#999">$${c.originalPrice}</div></div>
        <a class="enroll" href="index.html?curso=${encodeURIComponent(c.title)}">Inscribirse Ahora</a>
      </div>
    `
    // make the whole card keyboard-focusable so :focus-within CSS works and keyboard users get the same affordance
    card.setAttribute('tabindex', '0')
    // activate enroll link on Enter for keyboard users
    card.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        const a = card.querySelector('a.enroll')
        if (a) a.click()
      }
    })

    gridNode.appendChild(card)
  })
}

function render(){ renderCategories(); renderFeatured(); renderGrid() }

if (searchInput) {
  searchInput.addEventListener('input', (e) => { searchTerm = e.target.value; renderGrid() })
} else {
  // search input was removed from the DOM (we're using the compact UI) — fall back to rendering normally
}

render()

// Footer link/heading active state handling: clicking a footer link or heading highlights it
;(function(){
  const footerLinks = Array.from(document.querySelectorAll('.footer-links a'))
  const footerH4s = Array.from(document.querySelectorAll('.footer-column h4'))

  function clearActive(){
    footerLinks.forEach(a=>a.classList.remove('footer-link-active'))
    footerH4s.forEach(h=>h.classList.remove('footer-h4-active'))
  }

  footerLinks.forEach(a=>{
    a.addEventListener('click', (ev)=>{
      clearActive()
      a.classList.add('footer-link-active')
      if (a.getAttribute('href') === '#') ev.preventDefault()
    })
  })

  footerH4s.forEach(h=>{
    h.addEventListener('click', ()=>{
      clearActive()
      h.classList.add('footer-h4-active')
    })
  })
})()