import Image from "next/image";
import { AnimatedSection } from "./components/AnimatedSection";
import { BookCovers } from "./components/BookCovers";
import { HeroAnimated } from "./components/HeroAnimated";

const configuredCheckoutUrl = "https://buy.stripe.com/eVq3cxgI97Th1UyfPT4Ni04";
const checkoutUrl = configuredCheckoutUrl;
const primaryCtaUrl = configuredCheckoutUrl;

const heroPoints = [
  "Začni pri osnovah in napreduj po jasnem vrstnem redu",
  "Razumi, kaj na grafu dejansko iščeš",
  "Sestavi ponovljiv proces pred vsakim poslom",
];

const metrics = [
  { value: "5", label: "povezanih knjig" },
  { value: "10", label: "točk v checklistu" },
  { value: "1", label: "celovit sistem" },
  { value: "100 €", label: "prihranka v kompletu" },
];

const books = [
  {
    number: "01",
    title: "Osnove trgovanja",
    meta: "Temelji · Trgi · Platforma",
    description:
      "Razumi, kako delujejo trgi, cena, platforma, naročila in tveganje.",
    topics: ["Forex, zlato, indeksi in kripto", "Bid, ask, spread, pip in lot", "Seje, naročila in časovni okvirji"],
    image: "/bookcovers/book-cover-one.png"
  },
  {
    number: "02",
    title: "Candlestick Patterns",
    meta: "Sveče · Psihologija · Signali",
    description:
      "Nauči se brati sveče in razumeti, kaj razkrivajo o kupcih in prodajalcih.",
    topics: ["Single, double in triple vzorci", "Prepoznavanje in kontekst", "Pogoste napake pri interpretaciji"],
    image: "/bookcovers/book-cover-two.png"
  },
  {
    number: "03",
    title: "Chart Patterns",
    meta: "Strukture · Preboji · Potrditve",
    description:
      "Prepoznaj strukture, preboje ter vzorce nadaljevanja in obrata.",
    topics: ["Reversal in continuation vzorci", "Veljavnost in zavrnitev vzorca", "Praktični primeri z grafov"],
    image: "/bookcovers/book-cover-three.png"
  },
  {
    number: "04",
    title: "Analiza trga",
    meta: "Trend · Nivoji · Likvidnost",
    description:
      "Poveži trend, nivoje, likvidnost in kontekst v celotno analizo.",
    topics: ["Market structure in trend", "Support, resistance in ključni nivoji", "Likvidnost, momentum in novice"],
    image: "/bookcovers/book-cover-four.png"
  },
  {
    number: "05",
    title: "Izvedba posla",
    meta: "Vstop · SL/TP · Tveganje",
    description:
      "Določi vstop, Stop Loss, cilj, velikost pozicije in tveganje.",
    topics: ["Entry in potrditveni faktorji", "Stop Loss, Take Profit in RRR", "Velikost pozicije in risk management"],
    image: "/bookcovers/book-cover-five.png"
  },
];

const valueItems = [
  {
    number: "01",
    title: "RAZUMI",
    text: "Temelji, trg, cena in strukture.",
  },
  {
    number: "02",
    title: "ANALIZIRAJ",
    text: "Trend, nivoji, likvidnost in potrditve.",
  },
  {
    number: "03",
    title: "IZVEDI",
    text: "Vstop, tveganje, izstop in pregled.",
  },
];

const checklistItems = [
  "Market Structure",
  "Trend",
  "Key Level",
  "Liquidity",
  "Chart Pattern",
  "Candlestick Confirmation",
  "Momentum",
  "Session & News",
  "Risk Management",
  "Trading Plan",
];

const suitableFor = [
  "Začenjaš in želiš pravilne temelje",
  "Poznaš posamezne pojme, vendar nimaš sistema",
  "Prepoznavaš vzorce, a jih ne znaš povezati v analizo",
  "Želiš imeti jasen proces pred vsakim poslom",
];

const notSuitableFor = [
  "Iskanju hitrega ali zagotovljenega zaslužka",
  "Kopiranju trgovalnih signalov",
  "Trgovanju brez pravil in upravljanja tveganja",
  "Nadomestilu za osebno finančno svetovanje",
];

const faqs = [
  {
    question: "Ali je komplet primeren za popolnega začetnika?",
    answer:
      "Da. Prva knjiga začne pri osnovah, nato pa se zahtevnost postopoma povečuje. Vrstni red je zasnovan tako, da predhodno znanje ni potrebno.",
  },
  {
    question: "Zakaj potrebujem vseh pet knjig?",
    answer:
      "Candlestick ali chart pattern sam po sebi še ni trgovalni sistem. Pet knjig poveže temelje, analizo, potrditve, izvedbo in tveganje v enoten proces.",
  },
  {
    question: "Ali knjige vsebujejo konkretne primere?",
    answer:
      "Da. Vsebina je zasnovana vizualno in praktično, s primeri struktur, vzorcev ter vprašanji, ki jih uporabiš pri lastni analizi.",
  },
  {
    question: "Ali komplet vsebuje trgovalne signale?",
    answer:
      "Ne. Namen kompleta je, da razumeš proces in samostojno sprejemaš premišljene odločitve, ne da slepo kopiraš tuje posle.",
  },
  {
    question: "Ali mi knjige zagotavljajo dobiček?",
    answer:
      "Ne. Trgovanje vključuje tveganje in nobeno izobraževanje ne more zagotoviti rezultata. Knjige učijo strukturo, upravljanje tveganja in discipliniran proces.",
  },
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m4.5 10.3 3.2 3.2 7.8-8" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m5 5 10 10M15 5 5 15" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#vrh" aria-label="B A Trading – na vrh strani">
          <span className="brand-mark">B /\\</span>
          <span className="brand-name">TRADING</span>
        </a>

        <nav className="desktop-nav" aria-label="Glavna navigacija">
          <a href="#knjige">Knjige</a>
          <a href="#prejmes">Kaj prejmeš</a>
          <a href="#za-koga">Za koga</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="header-cta" href="#nakup">
          Kupi komplet
          <ArrowIcon />
        </a>
      </header>

      <HeroAnimated primaryCtaUrl={primaryCtaUrl} />

      <AnimatedSection as="section" className="metrics" aria-label="Ključne informacije o kompletu">
        <div className="metrics-inner">
          {metrics.map((metric, i) => (
            <AnimatedSection className="metric" key={metric.label} delay={0.1 * i} yOffset={20}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <BookCovers />

      <AnimatedSection as="section" className="content-section books-section" id="knjige">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 / ZBIRKA</p>
            <h2>Pet knjig. En povezan sistem.</h2>
          </div>
        </div>

        <div className="books-grid">
          {books.map((book) => (
            <article className="book-card" key={book.number}>
              <div className="mini-cover group" aria-hidden="true" style={{ padding: 0, background: "none" }}>
                <Image 
                  src={book.image} 
                  alt={book.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1024px) 150px, 200px"
                  unoptimized 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <div className="book-card-copy">
                <h3>{book.number} {book.title}</h3>
                <p>{book.description}</p>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="system-section" aria-labelledby="system-title">
        <div className="system-inner">
          <div className="system-copy">
            <p className="section-kicker">02 / PROCES</p>
            <h2 id="system-title">Od grafa, polnega informacij, do jasne odločitve.</h2>
            <p>
              Ne potrebuješ še več informacij. Potrebuješ sistem, po katerem jih uporabiš.
            </p>
          </div>

          <div className="process-grid">
            <article>
              <span>01</span>
              <p>RAZUMI</p>
              <small>Temelji, trg, cena in strukture.</small>
            </article>
            <article>
              <span>02</span>
              <p>ANALIZIRAJ</p>
              <small>Trend, nivoji, likvidnost in potrditve.</small>
            </article>
            <article>
              <span>03</span>
              <p>IZVEDI</p>
              <small>Vstop, tveganje, izstop in pregled.</small>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="content-section checklist-section" id="prejmes">
        <div className="checklist-panel" style={{ marginTop: 0 }}>
          <div className="checklist-copy">
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>10-TOČKOVNI TRGOVALNI PROCES</h2>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#97a3b2' }}>Preden odpreš trade, preveri celotno sliko.</h3>
            <p>
              Pet knjig se na koncu poveže v en proces, ki ga lahko uporabiš pri vsaki novi analizi.
            </p>
            <p style={{ fontWeight: 'bold', marginTop: '2rem', color: '#fff' }}>Od »kaj gledam?« do »vem, kaj preveriti in zakaj.«</p>
          </div>
          <ol className="checklist-list">
            {checklistItems.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="audience-section" id="za-koga">
        <div className="audience-inner">
          <div className="audience-intro">
            <p className="section-kicker">04 / ZA KOGA</p>
            <h2>Za tiste, ki želijo razumeti svoje odločitve.</h2>
          </div>

          <div className="audience-columns">
            <article className="audience-card positive">
              <p className="audience-label">Komplet je zate, če:</p>
              <ul>
                {suitableFor.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="audience-card negative">
              <p className="audience-label">Ni namenjen:</p>
              <ul>
                {notSuitableFor.map((item) => (
                  <li key={item}>
                    <CrossIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="offer-section" id="nakup">
        <div className="offer-grid">
          <div className="offer-copy">
            <p className="section-kicker">05 / CELOTNA ZBIRKA</p>
            <h2>Znanje, ki ga sestavljaš po pravilnem vrstnem redu.</h2>
            <p>
              Pridobi vseh pet knjig v enem kompletu in zgradi proces, ki ga
              lahko ponoviš pri vsaki novi analizi.
            </p>
            <ul>
              {[
                "Vseh 5 povezanih trgovalnih knjig",
                "Razlage od začetne do naprednejše ravni",
                "Vizualni primeri in praktični koraki",
                "10-točkovni checklist celotnega posla",
              ].map((item) => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="price-card" aria-label="Ponudba kompleta">
            <p className="price-card-label">KOMPLET 5 KNJIG</p>
            <div className="price-card-value">
              <span>Redna skupna cena</span>
              <strong>249 €</strong>
            </div>
            <div className="price-card-total">
              <div>
                <span>Danes plačaš</span>
                <strong>149 €</strong>
              </div>
              <span className="discount-badge">−40 %</span>
            </div>
            <p className="price-card-saving">Tvoj prihranek: 100 €</p>
            <a className="primary-cta wide" href={checkoutUrl}>
              Kupi komplet 5 knjig
              <ArrowIcon />
            </a>
            <p className="purchase-note wide-note">
              <span className="status-dot" />
              Enkraten nakup
              <span aria-hidden="true">•</span>
              Za polnoletne uporabnike
            </p>
            {!configuredCheckoutUrl && (
              <p className="setup-note" id="checkout-povezava">
                Pred objavo dodaj svojo plačilno povezavo v nastavitvi
                NEXT_PUBLIC_CHECKOUT_URL.
              </p>
            )}
          </aside>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="faq-section" id="faq">
        <div className="faq-heading">
          <p className="section-kicker">06 / VPRAŠANJA</p>
          <h2>Pogosta vprašanja</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>

      <footer>
        <div className="footer-main">
          <a className="brand" href="#vrh" aria-label="B A Trading – na vrh strani">
            <span className="brand-mark">B /\\</span>
            <span className="brand-name">TRADING</span>
          </a>
          <p>
            Izobraževanje za strukturirano analizo, premišljene odločitve in
            odgovoren odnos do tveganja.
          </p>
          <a href="#nakup">Komplet 5 knjig — 149 €</a>
        </div>
        <div className="footer-legal">
          <span>© 2026 B /\\ Trading. Vse pravice pridržane.</span>
          <span>
            Gradivo je izobraževalne narave in ni osebno finančno svetovanje.
            Namenjeno je polnoletnim uporabnikom; trgovanje vključuje tveganje
            izgube kapitala.
          </span>
        </div>
      </footer>

      <div className="mobile-buy-bar">
        <div>
          <span>Komplet 5 knjig</span>
          <strong>149 €</strong>
        </div>
        <a href="#nakup">Kupi komplet</a>
      </div>
    </main>
  );
}
