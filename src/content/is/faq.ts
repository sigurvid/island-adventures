/** Icelandic FAQ — edit this file only. */
import type { Metadata } from 'next';
import { IS } from './paths';

export const isFaqMetadata: Metadata = {
  title: 'Algengar spurningar',
  description:
    'Algengar spurningar: veður, búnaður, fundarstaður, aldur og heilsufarsatakmarkanir fyrir RIB-ferðir Island Adventures.',
};

export const isFaqCopy = {
  title: 'Algengar spurningar',
  introBefore: 'Veður, búnaður, fundarstaður, aldurstakmarkanir og fleira. Nánari upplýsingar eru í ',
  introLink: 'skilmálum og afbókunarstefnu',
  introAfter: '.',
  introHref: IS.terms,
  btnBook: 'Bóka ferð',
  btnContact: 'Hafa samband',
  btnTerms: 'Skilmálar og afbokanir',
};

export const isFaqItems = [
  {
    q: 'Er lágmarksfjöldi í ferð?',
    a: 'Áætlunarferðir okkar (1 og 2 klst.) hafa lágmark fjögurra manna. Ef lágmarki er ekki náð höfum við ferðina niður og bjóðum fulla endurgreiðslu eða aðra dagsetningu (eftir framboði), í samræmi við afbókunarstefnu okkar. Einkaferðir og sérferðir eru ekki háðar þessu lágmarki.',
  },
  {
    q: 'Hvað ef veðrið er slæmt?',
    a: 'Ferðir eru háðar veðri og öryggi. Ef við höfum ferð niður vegna veðurs eða öryggis bjóðum við nýja dagsetningu eða fulla endurgreiðslu. Skipstjóri á síðasta orðið um hvort ferð fer fram. Sjá skilmála fyrir nánari útskýringu.',
  },
  {
    q: 'Hver er afbókunarstefnan?',
    a: 'Ef þú afbókastar að minnsta kosti 1 viku (7 dögum) fyrir brottför færðu fulla endurgreiðslu. Ef afpantað er milli 1 viku og 72 klukkustunda fyrir brottför endurgreiðum við 50% af verði ferðarinnar. Afbokanir með skemmri en 72 klukkustunda fyrirvara eru ekki endurgreiddar. Afbokanir þarf að senda skriflega (t.d. í tölvupósti á booking@islandadventures.is). Við mælum með ferðatryggingu vegna veikinda eða annarra óviðráðanlegra aðstæðna.',
  },
  {
    q: 'Hvað ef ég missi af ferðinni eða kem seint?',
    a: 'Engin endurgreiðsla er fyrir þá sem mæta ekki eða koma of seint. Komdu að minnsta kosti 15 mínútum fyrir brottför. Ef þú missir af ferðinni heldur verði ferðarinnar í heild.',
  },
  {
    q: 'Hvað útbúið þið?',
    a: 'Við útbúum flothreyfingu og lífvörð (og annan viðeigandi öryggisbúnað). Ferðaverðið nær yfir ferðina eins og lýst er og notkun þessa búnaðar.',
  },
  {
    q: 'Hvað á ég að vera í?',
    a: 'Komdu í hlýjum og þægilegum fatnaði, hötti, vettlingum og þægilegum skóm. Á sjónum getur verið kalt og breytilegt.',
  },
  {
    q: 'Hvar eigum við að hittast og hvenær?',
    a: 'Við hittumst á Básaskersbryggju 6, 900 Vestmannaeyjum. Komdu að minnsta kosti 15 mínútum fyrir áætlaða brottför.',
  },
  {
    q: 'Er lágmarksaldur?',
    a: 'Lágmarksaldur er 6 ára. Börn verða að geta náð að gólvi í bátinum þægilega í sitjandi stöðu og fylgt öryggisleiðbeiningum.',
  },
  {
    q: 'Eru heilsutakmarkanir?',
    a: 'RIB-ferðir geta verið óróðraríkar. Þær eru ekki við hæfi ef þú ert þunguð eða hefur nýleg eða viðvarandi meiði í bak eða hálsi. Ef þú hefur heilsufarskvilla sem kunna að verða fyrir áhrifum skaltu ráðfæra þig við lækni og hafa samband áður en þú bókar.',
  },
  {
    q: 'Hver er stefnan um áfengisneyslu?',
    a: 'Við eigum þess kost að vísa þátttöku frá ef einstaklingur er augljóslega óæfur eða óhæfur til að taka þátt á öruggan hátt.',
  },
  {
    q: 'Þarf ég að undirrita losun?',
    a: 'Já. Losun um þátttöku er gefin út á fundarstað og verður undirrituð fyrir brottför.',
  },
  {
    q: 'Er tryggð að sjást tiltekinn fugl eða dýralíf?',
    a: 'Nei. Sjón á tilteknum tegundum (t.d. lundi, höfrungum) fer eftir árstíð og aðstæðum og er ekki tryggð.',
  },
  {
    q: 'Mælið þið með ferðatryggingu?',
    a: 'Já. Við mælum með ferðatryggingu sem nær yfir heilsugreiðslur og afbokanir vegna veikinda eða annarra óviðráðanlegra aðstæðna.',
  },
];
