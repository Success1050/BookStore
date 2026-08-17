import Image from "next/image";
import { AnimatedSection } from "./components/AnimatedSection";
import { BookCovers } from "./components/BookCovers";
import { HeroAnimated } from "./components/HeroAnimated";

const configuredCheckoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;
const checkoutUrl = configuredCheckoutUrl ?? "#checkout-povezava";
const primaryCtaUrl = configuredCheckoutUrl ? checkoutUrl : "#nakup";

const heroPoints = [
  "5 knjig v logičnem zaporedju",
  "Vizualni primeri in jasne razlage",
  "Praktičen checklist za vsak posel",
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
      "Razumevanje trgov, nastanka cene, ponudbe in povpraševanja ter pravilne uporabe trgovalne platforme.",
    topics: ["Forex, zlato, indeksi in kripto", "Bid, ask, spread, pip in lot", "Seje, naročila in časovni okvirji"],
  },
  {
    number: "02",
    title: "Candlestick Patterns",
    meta: "Sveče · Psihologija · Signali",
    description:
      "Vizualni priročnik za razumevanje sveč, njihove strukture in psihologije kupcev ter prodajalcev.",
    topics: ["Single, double in triple vzorci", "Prepoznavanje in kontekst", "Pogoste napake pri interpretaciji"],
  },
  {
    number: "03",
    title: "Chart Patterns",
    meta: "Strukture · Preboji · Potrditve",
    description:
      "Jasna razlaga najpomembnejših grafičnih vzorcev in sporočila, ki ga posamezna struktura daje trgu.",
    topics: ["Reversal in continuation vzorci", "Veljavnost in zavrnitev vzorca", "Praktični primeri z grafov"],
  },
  {
    number: "04",
    title: "Analiza trga",
    meta: "Trend · Nivoji · Likvidnost",
    description:
      "Sistematičen postopek branja trga, preden sploh začneš iskati konkreten vstop v pozicijo.",
    topics: ["Market structure in trend", "Support, resistance in ključni nivoji", "Likvidnost, momentum in novice"],
  },
  {
    number: "05",
    title: "Izvedba posla",
    meta: "Vstop · SL/TP · Tveganje",
    description:
      "Od ideje do nadzorovanega posla: pravila vstopa, zaščita kapitala in logično upravljanje pozicije.",
    topics: ["Entry in potrditveni faktorji", "Stop Loss, Take Profit in RRR", "Velikost pozicije in risk management"],
  },
];

const valueItems = [
  {
    number: "01",
    title: "Logičen vrstni red",
    text: "Ne skačeš med nepovezanimi temami. Vsaka knjiga nadgradi znanje iz prejšnje.",
  },
  {
    number: "02",
    title: "Vizualna razlaga",
    text: "Kompleksni pojmi so razloženi s strukturami, diagrami in primeri iz grafov.",
  },
  {
    number: "03",
    title: "Praktična uporaba",
    text: "Teorijo sproti pretvoriš v vprašanja, pravila in korake za lastno analizo.",
  },
  {
    number: "04",
    title: "Celoten checklist",
    text: "Na koncu združiš analizo, izvedbo in tveganje v en ponovljiv proces.",
  },
];

const suitableFor = [
  "Popolnega začetnika, ki želi pravilne temelje",
  "Trgovca z delnim znanjem in brez jasne strukture",
  "Nekoga, ki prepoznava vzorce, a ne zna sestaviti celotne analize",
  "Vsakogar, ki želi graditi discipliniran proces namesto ugibanja",
];

const notSuitableFor = [
  "Iskanje hitrega zaslužka ali zagotovljenega dobička",
  "Kopiranje signalov brez razumevanja analize",
  "Trgovanje brez pravil in nadzora tveganja",
  "Nadomestilo za osebno finančno svetovanje",
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
          <p>
            Vsaka knjiga reši svoj del trgovalnega procesa. Skupaj sestavijo
            pot od razumevanja trga do samostojnega načrta.
          </p>
        </div>

        <div className="books-grid">
          {books.map((book) => (
            <article className="book-card" key={book.number}>
              <div className="mini-cover" aria-hidden="true">
                <span className="cover-brand">B /\\ TRADING</span>
                <strong>{book.number}</strong>
                <span className="cover-line" />
                <span className="cover-chart" />
              </div>
              <div className="book-card-copy">
                <p className="book-meta">{book.meta}</p>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <ul>
                  {book.topics.map((topic) => (
                    <li key={topic}>
                      <CheckIcon />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="system-section" aria-labelledby="system-title">
        <div className="system-inner">
          <div className="system-copy">
            <p className="section-kicker">02 / PROCES</p>
            <h2 id="system-title">Od informacij do jasne odločitve.</h2>
            <p>
              Cilj zbirke ni pomnjenje desetine nepovezanih izrazov. Cilj je
              razumeti, kaj preveriš, v kakšnem vrstnem redu in zakaj.
            </p>
          </div>

          <div className="process-grid">
            <article>
              <span>01</span>
              <p>RAZUMI</p>
              <h3>Najprej zgradi temelje</h3>
              <small>Trgi, cena, sveče in osnovne strukture.</small>
            </article>
            <article>
              <span>02</span>
              <p>ANALIZIRAJ</p>
              <h3>Nato poišči kontekst</h3>
              <small>Trend, nivoji, likvidnost, pattern in potrditev.</small>
            </article>
            <article>
              <span>03</span>
              <p>IZVEDI</p>
              <h3>Na koncu zaščiti odločitev</h3>
              <small>Vstop, tveganje, izstop, dnevnik in pregled.</small>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="content-section value-section" id="prejmes">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">03 / KAJ PREJMEŠ</p>
            <h2>Več kot zbirko definicij.</h2>
          </div>
          <p>
            Vsebina je strukturirana kot učni sistem, ki ga lahko vedno znova
            uporabiš pri pripravi svoje analize.
          </p>
        </div>

        <div className="value-grid">
          {valueItems.map((item) => (
            <article className="value-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="checklist-panel">
          <div className="checklist-copy">
            <p className="section-kicker">10-TOČKOVNI CHECKLIST</p>
            <h3>Pred vsakim poslom preveri celotno sliko.</h3>
            <p>
              Market structure, trend, ključni nivo, likvidnost, chart pattern,
              candlestick potrditev, momentum, čas, tveganje in trgovalni načrt.
            </p>
          </div>
          <ol className="checklist-list">
            {[
              "Market Structure",
              "Trend",
              "Key Level",
              "Liquidity",
              "Chart Pattern",
              "Candlestick Confirmation",
              "Volume / Momentum",
              "Session & News",
              "Risk Management",
              "Trading Plan",
            ].map((item, index) => (
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
            <h2>Za tiste, ki želijo razumeti proces.</h2>
            <p>
              Ne glede na to, ali začenjaš iz nič ali že poznaš posamezne
              pojme, ti zbirka pomaga urediti znanje v uporabno celoto.
            </p>
          </div>

          <div className="audience-columns">
            <article className="audience-card positive">
              <p className="audience-label">Komplet je zate, če želiš:</p>
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
              <p className="audience-label">Komplet ni namenjen za:</p>
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
