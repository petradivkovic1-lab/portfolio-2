import { useEffect, useState } from 'react'

const A = `${import.meta.env.BASE_URL}assets`

type Section = 'home' | 'design' | 'illustration' | 'murals' | 'about' | 'contact'

interface ProjectDetail {
  description: string[]
  images: string[]
  link?: { href: string; label: string }
  imageCredit?: string
}

interface Project {
  title: string
  category: string
  image: string
  className: string
  imagePosition?: string
  companion?: boolean
  detail?: ProjectDetail
}

// ── Uho project detail ──────────────────────────────────────────────────────

const uhoDetail: ProjectDetail = {
  description: [
    'The work takes the form of a five-day conversation with ChatGPT, during which I discussed a problem and the feelings of anxiety surrounding it. At the time, my aim was to reduce the amount of paranoia, fear, and guilt I was experiencing, while the conversation also functioned as a kind of diary.',
    'The work explores the human relationship with ChatGPT, in which it becomes a friend, a doctor, and a diary, as well as an intimate space that appears to offer a safe place for communication.',
    'The elongated format visually reflects the amount of information generated over the course of the five-day conversation, often based on questionable sources.',
    "By materializing the conversation and presenting it in a space outside the digital sphere, the work also moves beyond the boundaries of safety and intimacy, while simultaneously pointing to the absurdity of confiding one's feelings to something that is not alive.",
  ],
  images: [
    `${A}/f59eb.png`,
    `${A}/861b3.png`,
    `${A}/f9fe9.png`,
    `${A}/77774.png`,
  ],
}

// ── Zine project detail ──────────────────────────────────────────────────────

const zineDetail: ProjectDetail = {
  description: [
    'The work encompasses a short period of time during which I documented my surroundings and visualized my emotional states through illustration. By combining photographs of my immediate surroundings with illustrations of inner experiences and emotional records, I created a visual narrative that explores the relationship between these two approaches. Through stylized faces extending across the entire book, I emphasize inner processes and transformation.',
  ],
  images: [
    `${A}/zine-1.jpg`,
    `${A}/zine-2.jpg`,
    `${A}/zine-3.jpg`,
    `${A}/zine-4.jpg`,
    `${A}/zine-5.jpg`,
    `${A}/zine-6.jpg`,
    `${A}/zine-7.jpg`,
  ],
}

// ── Foraging for Plastic project detail ─────────────────────────────────────

const foragingDetail: ProjectDetail = {
  description: [
    'This graduation project was developed as part of the Visual Communications program at the School of Design, Faculty of Architecture, University of Zagreb, under the mentorship of Dina Milovčić.',
    'The project explores waste as a by-product of everyday urban life, focusing on plastic fragments that continuously appear within the same spatial and time context. The research involves collecting, documenting, mapping, and archiving these fragments, along with their visual interpretation. Over eight weeks, regular walks along a defined route recorded each fragment\'s size, weight, and color. The outcome is a diary that approaches plastic waste through experimental and archival methods, accompanied by a prototype website that functions as a digital archive with potential for further development.',
  ],
  images: [
    `${A}/foraging-1.jpg`,
    `${A}/foraging-2.jpg`,
    `${A}/foraging-3.jpg`,
    `${A}/foraging-4.jpg`,
    `${A}/foraging-5.jpg`,
    `${A}/foraging-6.jpg`,
  ],
}

// ── Preko crte project detail ────────────────────────────────────────────────

const prekoDetail: ProjectDetail = {
  description: [
    'The project was created to document artistic performances and interventions that have shaped Zagreb\'s public space through a network of interactive checkpoints and digital-physical installations.',
    'The application opens an archive of (un)realized interventions, forgotten performances and visionary ideas that pushed the boundaries of what was possible. The title „Over the Line" symbolizes courage, experimentation and creative freedom, as well as projects that transcended conventional frameworks and survived only as fragments, now brought back to life through the application. Citizens and passersby are invited to cross the „line" and explore new ways of thinking about urban space and its potential.',
  ],
  images: [
    `${A}/preko-1.png`,
    `${A}/preko-2.png`,
    `${A}/preko-3.png`,
    `${A}/preko-4.png`,
    `${A}/preko-5.png`,
  ],
}

// ── Ovo rješenje project detail ──────────────────────────────────────────────

const ovoDetail: ProjectDetail = {
  description: [
    'This project was created with fellow students Victoria Bucul and Luka Nera Sibila at the School of Design, University of Zagreb, during the first year of the graduate programme, under the supervision of assistants Ana-Marija Poljanec and Franka Tretinjak.',
    'The book explores scaffolding as a system, focusing on the legal frameworks that regulate its installation, maintenance and removal. It examines the role of scaffolding in the transformation and renewal of Zagreb\'s urban environment, as well as the relationship between the temporary and the permanent.',
    'Based on the points of an official document issued for renovation works, the project combines documentation, illustration and subjective interpretation.',
    'By visualising and deliberately exaggerating specific issues, it draws attention to questions of public safety, urban infrastructure, responsibility and the ways scaffolding shapes everyday life.',
  ],
  images: [
    `${A}/ovo-1.png`,
    `${A}/ovo-2.png`,
    `${A}/ovo-3.png`,
    `${A}/ovo-4.png`,
    `${A}/ovo-5.png`,
  ],
}

// ── Sigurnost žena project detail ────────────────────────────────────────────

const sigurnostDetail: ProjectDetail = {
  description: [
    'The campaign uses irony to explore everyday situations in which women experience invasions of their personal space, unwanted touches and looks, and sexual harassment.',
    'By questioning the everyday excuses used to minimise men\'s responsibility, the campaign draws attention to the way women are often blamed for having their boundaries violated, while men\'s behaviour remains unquestioned.',
    'The aim of the campaign is to encourage discussion about women\'s everyday experiences and contribute to taking these issues more seriously.',
  ],
  images: [
    `${A}/sigurnost-1.png`,
    `${A}/sigurnost-2.png`,
    `${A}/sigurnost-3.png`,
  ],
}

// ── Galerija Panacea project detail ──────────────────────────────────────────

const panaceaDetail: ProjectDetail = {
  description: [
    'These posters are part of an ongoing collaboration that has continued from 2022 to the present. Each poster is created with a distinct visual approach, introducing new elements that set it apart from the previous one.',
  ],
  images: [
    `${A}/panacea-1.png`,
    `${A}/panacea-6.png`,
    `${A}/panacea-2.png`,
    `${A}/panacea-3.png`,
    `${A}/panacea-4.png`,
    `${A}/panacea-5.png`,
  ],
}

// ── Tidal Pull project detail ─────────────────────────────────────────────────

const tidalDetail: ProjectDetail = {
  description: [
    'The collaboration with a Zagreb-based indie band began in 2021 and resulted in visuals for two albums, LP design, single covers, concert posters and tickets, social media announcements, and T-shirt design.',
    'I had a lot of creative freedom when developing the visuals, which allowed me to experiment with different drawing and painting techniques.',
    'Over time, the visuals changed and evolved alongside the band itself.',
  ],
  images: [
    `${A}/tidal-1.png`,
    `${A}/tidal-2.png`,
    `${A}/tidal-3.png`,
    `${A}/tidal-4.png`,
    `${A}/tidal-5.png`,
  ],
}

// ── Petak project detail ──────────────────────────────────────────────────────

const petakDetail: ProjectDetail = {
  description: [
    'The work was created as part of the educational artistic research project Matrice, exploring the theme of the Absurd.',
    'The work challenges the human tendency to seek logic, explanation, and the need for narrative. It incorporates disconnected notes found in phone memos, random thoughts, and randomly selected motifs.',
    'By presenting unrelated motifs, concepts, and sentences, the work disrupts fluidity and narrative. Each new element interrupts the flow of thought, continuously erasing the concept that the viewer attempts to construct.',
  ],
  images: [
    `${A}/petak-1.png`,
    `${A}/petak-2.png`,
    `${A}/petak-3.png`,
    `${A}/petak-4.png`,
    `${A}/petak-5.png`,
    `${A}/petak-6.png`,
  ],
}

// ── Design projects ──────────────────────────────────────────────────────────

const designProjects: Project[] = [
  {
    title: 'Uho',
    category: 'personal project',
    image: `${A}/f9fe9.png`,
    className: 'project--ear',
    detail: uhoDetail,
  },
  {
    title: 'Zine',
    category: 'personal project',
    image: `${A}/b9b9d.png`,
    className: 'project--samizdat',
    detail: zineDetail,
  },
  {
    title: 'Foraging for Plastic',
    category: "master's thesis",
    image: `${A}/514d7.png`,
    className: 'project--foraging',
    detail: foragingDetail,
  },
  {
    title: 'Preko crte',
    category: 'application',
    image: `${A}/3a648.png`,
    className: 'project--preko',
    detail: prekoDetail,
  },
  {
    title: 'Meni je petak više srijeda nego utorak',
    category: 'posters',
    image: `${A}/1e6e9.png`,
    className: 'project--petak',
    detail: petakDetail,
  },
  {
    title: 'Ovo rješenje vrijedi od 17.12.2024. godine do 24.1.2025. godine',
    category: 'publication',
    image: `${A}/1b776.png`,
    className: 'project--publication',
    detail: ovoDetail,
  },
  {
    title: 'Sigurnost žena u javnom prostoru',
    category: 'campaign',
    image: `${A}/7c10f.png`,
    className: 'project--safety',
    detail: sigurnostDetail,
  },
  {
    title: 'Galerija Panacea',
    category: 'exhibition posters',
    image: `${A}/23991.png`,
    className: 'project--panacea',
    detail: panaceaDetail,
  },
  {
    title: 'Tidal Pull',
    category: 'album covers, merch, visuals',
    image: `${A}/55bdb.png`,
    className: 'project--tidal',
    imagePosition: 'center 43%',
    detail: tidalDetail,
  },
]

// ── Kulturpunkt project detail ────────────────────────────────────────────────

const kulturpunktDetail: ProjectDetail = {
  description: [
    'The illustrated reflections were created in response to performances by the independent cultural scene.',
    'The illustrations were produced as part of three performances: Lesson by Krõõt Juurak, Something Very Special by Dalibor Šandor, and Sex Education II: Ability by Tjaša Črnigoj.',
  ],
  link: { href: 'https://kulturpunkt.hr/autor/petra-divkovic/', label: 'kulturpunkt.hr/autor/petra-divkovic' },
  images: [
    `${A}/kulturpunkt-1.png`,
    `${A}/kulturpunkt-2.png`,
    `${A}/kulturpunkt-3.png`,
    `${A}/kulturpunkt-4.png`,
    `${A}/kulturpunkt-5.png`,
    `${A}/kulturpunkt-6.png`,
    `${A}/kulturpunkt-7.png`,
    `${A}/kulturpunkt-8.png`,
    `${A}/kulturpunkt-9.png`,
  ],
}

// ── Kàko magazine project detail ─────────────────────────────────────────────

const kakoDetail: ProjectDetail = {
  description: [
    'For an issue of Kàko magazine dedicated to aesthetics and the beauty found in everyday life, illustrators Petra Divković and Josip Giljanović created visuals based solely on fragments of text, without knowing what they were working on, who they were working with, or how their illustrations would ultimately be used. Their work was then collaged and complemented with original illustrations by Hana Tintor, transforming the individual pieces into a layered visual story about the beauty of the everyday.',
  ],
  images: [
    `${A}/kako-1.png`,
    `${A}/kako-2.png`,
    `${A}/kako-3.png`,
    `${A}/kako-4.png`,
    `${A}/kako-5.png`,
    `${A}/kako-6.png`,
  ],
}

// ── kofer project detail ──────────────────────────────────────────────────────

const koferDetail: ProjectDetail = {
  description: [
    'A series of around 20 animal illustrations created for eco-friendly packaging, each representing the contents of the cardboard tube. The illustrations were created collaboratively with illustrator Antonela Šurbek, with each of us contributing to half of the series.',
  ],
  images: [
    `${A}/kofer-1.png`,
    `${A}/kofer-2.png`,
    `${A}/kofer-3.png`,
    `${A}/kofer-4.png`,
  ],
  imageCredit: 'Photo: kofer.',
}

// ── Illustration projects ────────────────────────────────────────────────────

const illusProjects: Project[] = [
  // Row 1
  {
    title: 'Illustrated reflections for Kulturpunkt',
    category: 'commissioned work',
    image: `${A}/c1cc4.png`,
    className: 'project--illu-kulturpunkt',
    imagePosition: 'center 35%',
    detail: kulturpunktDetail,
  },
  {
    title: 'Illustrations for H-Alter',
    category: 'commissioned work',
    image: `${A}/92e64.png`,
    className: 'project--illu-halter',
  },
  // Row 2
  {
    title: 'Illustrations for Kàko magazine',
    category: 'commissioned work',
    image: `${A}/ff4ec.png`,
    className: 'project--illu-kako',
    detail: kakoDetail,
  },
  {
    title: 'Klub mladih Pogona',
    category: 'commissioned work',
    image: `${A}/1de33.png`,
    className: 'project--illu-pogon',
    imagePosition: '30% center',
  },
  {
    title: 'Climate calendar',
    category: 'commissioned work',
    image: `${A}/31e12.png`,
    className: 'project--illu-klimat',
  },
  // Row 3 — kofer & brlog
  {
    title: 'kofer. eco-friendly packaging',
    category: 'illustration',
    image: `${A}/9490c.png`,
    className: 'project--illu-kofer',
    detail: koferDetail,
  },
  {
    title: 'Brlog brewery',
    category: 'illustration',
    image: `${A}/044d5.png`,
    className: 'project--illu-brlog',
  },
  // Row 4 — personal work
  {
    title: '',
    category: 'personal project',
    image: `${A}/illu-personal-1.png`,
    className: 'project--illu-pers-1',
  },
  {
    title: '',
    category: 'personal project',
    image: `${A}/illu-personal-2.png`,
    className: 'project--illu-pers-2',
  },
  {
    title: '',
    category: 'personal project',
    image: `${A}/illu-personal-3.png`,
    className: 'project--illu-pers-3',
  },
  // Row 5 — personal work
  {
    title: '',
    category: 'personal project',
    image: `${A}/illu-personal-4.png`,
    className: 'project--illu-pers-4',
  },
  {
    title: '',
    category: 'personal project',
    image: `${A}/illu-personal-5.png`,
    className: 'project--illu-pers-5',
  },
]

const homePortrait = `${A}/home-portrait.png`

// ── Components ───────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  return (
    <article className={`project ${project.className}`}>
      <button
        className="project__image"
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View ${project.title || 'project'}`}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{ objectPosition: project.imagePosition }}
        />
      </button>
      {!project.companion && (
        <div className="project__caption">
          <h2>{project.title}</h2>
          <p>{project.category}</p>
        </div>
      )}
    </article>
  )
}

function ProjectDetailView({
  project,
  onBack,
}: {
  project: Project
  onBack: () => void
}) {
  const detail = project.detail!
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <section className="project-detail">
      <div className="project-detail__sidebar">
        <div className="detail-header">
          <button
            type="button"
            className="back-btn"
            onClick={onBack}
            aria-label="Back"
          >
            <img src={`${A}/81953.svg`} alt="" />
          </button>
          <h1 className="detail-title">{project.title}</h1>
        </div>
        <div className="detail-desc">
          {detail.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {detail.link && (
            <a
              href={detail.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link"
            >
              {detail.link.label}
            </a>
          )}
        </div>
      </div>
      <div className="detail-images">
        {detail.images.map((src, i) => (
          <figure key={i} className="detail-figure">
            <img src={src} alt="" />
            {detail.imageCredit && (
              <figcaption className="detail-figure__credit">{detail.imageCredit}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  )
}

function HomeView() {
  return (
    <section className="home-portraits" aria-label="Portfolio introduction">
      <img src={homePortrait} alt="" className="home-portraits__img" />
    </section>
  )
}

function MuralItem({
  src,
  caption,
  onOpen,
}: {
  src: string
  caption: string
  onOpen: (p: Project) => void
}) {
  const p: Project = { title: caption, category: '', image: src, className: '' }
  return (
    <div className="mural-item">
      <button
        type="button"
        className="mural-item__btn"
        onClick={() => onOpen(p)}
        aria-label={caption || 'View mural'}
      >
        <img src={src} alt="" />
      </button>
      {caption && <p className="mural-caption">{caption}</p>}
    </div>
  )
}

function MuralsView({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <section className="murals-page" aria-label="Murals">
      {/* Row 1 — 50% / 50% */}
      <div className="mural-row mural-row--r1">
        <MuralItem src={`${A}/mural-1.png`} caption="OŠ bana Josipa Jelačića, Zagreb, 2026." onOpen={onOpen} />
        <MuralItem src={`${A}/mural-2.png`} caption="DV Matije Gupca, Zagreb, 2025." onOpen={onOpen} />
      </div>
      {/* Row 2 — 37% / 63% */}
      <div className="mural-row mural-row--r2">
        <MuralItem src={`${A}/mural-3.png`} caption="OHOHO Festival, AKC Medika, Zagreb" onOpen={onOpen} />
        <MuralItem src={`${A}/mural-4.png`} caption="Ulica Divka Budaka, Zagreb" onOpen={onOpen} />
      </div>
      {/* Row 3 — 53% / 47% */}
      <div className="mural-row mural-row--r3">
        <MuralItem src={`${A}/mural-5.png`} caption="Maksimirska cesta, Zagreb" onOpen={onOpen} />
        <MuralItem src={`${A}/mural-6.png`} caption="Ulica Divka Budaka, Zagreb" onOpen={onOpen} />
      </div>
      {/* Row 4 — 34% / 66% */}
      <div className="mural-row mural-row--r4">
        <MuralItem src={`${A}/mural-7.png`} caption="Tržnica Umag, 2022." onOpen={onOpen} />
        <MuralItem src={`${A}/mural-8.png`} caption="ALU Jabukovac, Zagreb, 2021." onOpen={onOpen} />
      </div>
    </section>
  )
}

function EmptySection({ label }: { label: string }) {
  return <section className="empty-section" aria-label={label} />
}

function ContactView() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText('petradivkovic1@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="contact-page" aria-label="Contact">
      <div className="contact-items">
        <div className="contact-item">
          <span className="contact-label">Gmail</span>
          <button type="button" className="contact-link" onClick={copyEmail}>
            petradivkovic1@gmail.com
            <span className={`copy-confirm${copied ? ' copy-confirm--visible' : ''}`}>copied</span>
          </button>
        </div>
        <div className="contact-item">
          <span className="contact-label">Instagram</span>
          <a
            className="contact-link"
            href="https://instagram.com/petra.divkovic"
            target="_blank"
            rel="noopener noreferrer"
          >
            petra.divkovic
          </a>
        </div>
      </div>
    </section>
  )
}

function AboutView() {
  return (
    <section className="about-page" aria-label="About">
      <div className="about-portrait">
        <img src={`${A}/about-portrait.jpg`} alt="Petra Divković" />
      </div>
      <div className="about-content">
        <div className="about-bio">
          <p>Petra Divković (Zagreb, 1998) graduated in 2023 from the Department of Art Education at the Academy of Fine Arts in Zagreb, specializing in Printmaking and Applied Printmaking.</p>
          <p>In 2026, she graduated from the School of Design at the Faculty of Architecture, University of Zagreb, specializing in Visual Communications.</p>
          <p>She has presented her work in several solo exhibitions (Galerija VN, 2023; Galerija Crta, 2022; Lauba – Šalji dalje project, 2021) and has participated in group exhibitions in Croatia.</p>
          <p>Her practice focuses on illustration and graphic design.</p>
        </div>

        <div className="about-exhibitions">
          <div className="about-exh-section">
            <h2 className="about-exh-heading">Solo exhibitions</h2>
            <div className="about-exh-year">
              <span className="exh-year">2023</span>
              <ul>
                <li>Galerija VN, Zagreb – Transformacije, diplomska izložba</li>
              </ul>
            </div>
            <div className="about-exh-year">
              <span className="exh-year">2022</span>
              <ul>
                <li>Galerija Crta, Zagreb – Psi i kukavice</li>
                <li>Galerija Polica, Zagreb, Akademija likovnih umjetnosti</li>
              </ul>
            </div>
            <div className="about-exh-year">
              <span className="exh-year">2021</span>
              <ul>
                <li>Lauba, Zagreb – Beštije, u sklopu projekta Šalji dalje</li>
              </ul>
            </div>
          </div>

          <div className="about-exh-section">
            <h2 className="about-exh-heading">Group exhibitions</h2>
            <div className="about-exh-year">
              <span className="exh-year">2026</span>
              <ul>
                <li>Studio-galerija Klet, Zagreb – "ČIN JEDNAKO OTPOR'" / "AN ACT EQUALS RESISTANCE"</li>
              </ul>
            </div>
            <div className="about-exh-year">
              <span className="exh-year">2025</span>
              <ul>
                <li>Galerija CEKAO, Zagreb – Prozirno</li>
                <li>Filozofski fakultet Sveučilišta u Zagrebu – U potrazi za identitetom</li>
              </ul>
            </div>
            <div className="about-exh-year">
              <span className="exh-year">2024</span>
              <ul>
                <li>Galerija SC, Zagreb – Jeste li vi ozbiljna galerija?</li>
                <li>Galerija SC, Zagreb – Matrice: Apsurd</li>
                <li>Izložba na cesti – Snovi, u partnerstvu CKIM i ALU, Zagreb</li>
              </ul>
            </div>
            <div className="about-exh-year">
              <span className="exh-year">2022</span>
              <ul>
                <li>Galerija Panacea, Zagreb – Humanost</li>
                <li>Galerija Šira, Zagreb – Poezija u slici – Banijska književna antologija</li>
              </ul>
            </div>
            <div className="about-exh-year">
              <span className="exh-year">2021</span>
              <ul>
                <li>Lauba, Zagreb – Kolektart</li>
                <li>Galerija CEKAO, Zagreb – Škola hodanja: Izložba stripova studenata ALU Sveučilišta u Zagrebu</li>
                <li>Izložba na cesti, u partnerstvu CKIM i ALU u sklopu Artupunkture, Zagreb</li>
              </ul>
            </div>
            <div className="about-exh-year">
              <span className="exh-year">2018</span>
              <ul>
                <li>Izložba na cesti, u partnerstvu CKIM i ALU, Zagreb</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')
  const [detailProject, setDetailProject] = useState<Project | null>(null)
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxProject(null)
      }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = lightboxProject ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxProject])

  function goTo(s: Section) {
    setActiveSection(s)
    setDetailProject(null)
    setLightboxProject(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function openProject(p: Project) {
    if (p.detail) {
      setDetailProject(p)
    } else {
      setLightboxProject(p)
    }
  }

  function closeDetail() {
    setDetailProject(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      <header className="site-header" aria-label="Portfolio navigation">
        <nav>
          <span className="header-row">
            <button
              type="button"
              className={`site-title${activeSection === 'home' && !detailProject ? ' active' : ''}`}
              onClick={() => goTo('home')}
            >
              Petra Divković
            </button>
            <span className="header-rule" aria-hidden="true">—</span>
            <button
              type="button"
              className={`nav-word${activeSection === 'design' ? ' active' : ''}`}
              onClick={() => goTo('design')}
            >
              Design
            </button>
            <button
              type="button"
              className={`nav-word${activeSection === 'illustration' ? ' active' : ''}`}
              onClick={() => goTo('illustration')}
            >
              Illustration
            </button>
            {/* mobile-only: Murals after Illustration */}
            <button
              type="button"
              className={`nav-word nav-word--murals-mobile${activeSection === 'murals' ? ' active' : ''}`}
              onClick={() => goTo('murals')}
              aria-hidden="true"
            >
              Murals
            </button>
          </span>
          <span className="header-row">
            <button
              type="button"
              className={`nav-word nav-word--murals-desktop${activeSection === 'murals' ? ' active' : ''}`}
              onClick={() => goTo('murals')}
            >
              Murals
            </button>
            <button
              type="button"
              className={`nav-word${activeSection === 'about' ? ' active' : ''}`}
              onClick={() => goTo('about')}
            >
              About
            </button>
            <button
              type="button"
              className={`nav-word nav-word--last${activeSection === 'contact' ? ' active' : ''}`}
              onClick={() => goTo('contact')}
            >
              Contact
            </button>
          </span>
        </nav>
      </header>

      {activeSection === 'home' && <HomeView />}

      {activeSection === 'design' && (
        detailProject ? (
          <ProjectDetailView project={detailProject} onBack={closeDetail} />
        ) : (
          <section className="project-grid" aria-label="Design projects">
            {designProjects.map((p) => (
              <ProjectCard key={p.title} project={p} onOpen={openProject} />
            ))}
          </section>
        )
      )}

      {activeSection === 'illustration' && (
        detailProject ? (
          <ProjectDetailView project={detailProject} onBack={closeDetail} />
        ) : (
          <>
            <section
              className="project-grid illus-grid"
              aria-label="Illustration projects"
            >
              {illusProjects.map((p, i) => (
                <ProjectCard key={i} project={p} onOpen={openProject} />
              ))}
            </section>
            <div className="illus-footer">
              <span>For more work visit </span>
              <a
                href="https://instagram.com/petra.divkovic"
                target="_blank"
                rel="noopener noreferrer"
              >
                petra.divkovic
              </a>
            </div>
          </>
        )
      )}

      {activeSection === 'murals' && <MuralsView onOpen={openProject} />}
      {activeSection === 'about' && <AboutView />}
      {activeSection === 'contact' && <ContactView />}

      {lightboxProject && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxProject.title}
          onClick={() => setLightboxProject(null)}
        >
          <button
            className="lightbox__close"
            type="button"
            onClick={() => setLightboxProject(null)}
            aria-label="Close project"
          >
            Close
          </button>
          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightboxProject.image} alt={lightboxProject.title} />
            <div>
              <h2>{lightboxProject.title}</h2>
              <p>{lightboxProject.category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
