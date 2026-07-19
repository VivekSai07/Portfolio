# Portfolio Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernize the Next.js 13 portfolio (VivekSai07/Portfolio) so it stops behaving like a 3-year-old template — kill the fake client-side data roundtrip, add real SEO, use `next/image`, replace the non-functional contact form with an honest info page, and add light motion polish.

**Architecture:** No framework migration (staying on Pages Router — App Router migration is a separate, much larger effort not in scope here). Data currently duplicated as `pages/api/*.js` handlers gets consolidated into `constants/data/*.js` modules; pages import that data directly via `getStaticProps` instead of `useQuery`+`axios` hitting their own API route. `react-query` and `axios` are removed entirely since there is no real remote data source. `next/image` replaces raw `<img>` tags. `framer-motion` is added for scroll-reveal polish.

**Tech Stack:** Next.js 13.1.1 (Pages Router), React 18.2, Tailwind CSS, antd (kept, only for `Modal`/`Progress` still in use elsewhere — not removed in this plan), `framer-motion` (new dependency).

## Global Constraints

- Do not change visual styling/Tailwind classes except where explicitly noted in a task.
- Do not introduce TypeScript (out of scope — separate future effort).
- Do not migrate to the App Router (out of scope — separate future effort).
- Every task must end with `npm run build` succeeding with zero errors.
- Every task that changes rendered output must be checked with a Playwright screenshot (repo has no test framework; this is the project's verification method — see `webapp-testing` skill).

---

### Task 1: Consolidate mock data into `constants/data/`

**Files:**
- Create: `constants/data/background.js`
- Create: `constants/data/expertise.js`
- Create: `constants/data/portfolio.js`
- Create: `constants/data/honors.js`
- Create: `constants/data/review.js`
- Create: `constants/data/recommendations.js`
- Modify: `pages/api/background.js`
- Modify: `pages/api/expertise.js`
- Modify: `pages/api/portfolio.js`
- Modify: `pages/api/honors.js`
- Modify: `pages/api/review.js`
- Modify: `pages/api/recommendations.js`

**Interfaces:**
- Produces: `constants/data/background.js` exports `background` (array of 2 objects: `{eduCards: [...]}`, `{expCards: [...]}`) as a **named export**.
- Produces: `constants/data/expertise.js` exports `expertise` (array) as a named export.
- Produces: `constants/data/portfolio.js` exports `portfolio` (array) as a named export.
- Produces: `constants/data/honors.js` exports `honor` (array) as a named export.
- Produces: `constants/data/review.js` exports `review` (array) as a named export.
- Produces: `constants/data/recommendations.js` exports `recommendationCard` (array) as a named export.
- Consumed by: Task 2 (pages import these directly).

- [ ] **Step 1: Move the `background` array**

Cut the `const background = [...]` array body out of `pages/api/background.js` (everything currently between `const background = [` and the closing `]` before `export default function handler`) and create `constants/data/background.js`:

```javascript
export const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of Stuttgart',
                degree: 'Masters, Computer Science',
                detail: "Masters in Computer Science with major in Autonomous Systems.",
                year: '2024-Present'
            },
            {
                id: 1,
                title: 'Amrita Vishwa Vidyapeetham',
                degree: 'B.Tech, Computer Science & Engineering (Artificial Intelligence)',
                detail: "Bachelor's Degree in Computer Science & Engineering with specialization in Artificial Intelligence from Amrita Vishwa Vidyapeetham, Chennai.",
                year: '2020-2024'
            },
            {
                id: 2,
                title: 'Narayana Junior College',
                degree: 'Intermediate (11th & 12th)',
                detail: "Completed Intermediate studies (+1, & +2, which are prerequisites for engineering) in Andhra Pradesh.",
                year: '2018-2020'
            },
        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'Porsche Engineering Services GmbH',
                role: 'Working Student -- Humanoid Robotics, Development & Validation',
                url: 'https://www.porsche-engineering.com/',
                desc: [
                    "Developed and integrated robotics software for autonomous mobile platforms using ROS 2, NVIDIA Isaac ROS, and Jetson, enabling perception, localization, and navigation capabilities.",
                    "Built and maintained Docker-based deployment workflows for embedded robotics applications, debugging complex middleware, networking, dependency, and containerization challenges across development and production environments.",
                    "Integrated and evaluated hardware components including cameras, audio systems, and onboard compute, while contributing to simulation, visualization, and real-world robot validation.",
                    "Collaborated with cross-functional engineering teams through code reviews, technical documentation, and feature validation, delivering production-ready robotics software and deployment improvements."
                ],
                year: '04/2026 - Present',
                location: 'Stuttgart, Baden-Württemberg, Germany'
            },
            {
                id: 1,
                title: 'Socially Intelligent Robotics (SIR) Lab, University of Stuttgart',
                role: 'Student Assistant',
                url: 'https://www.iss.uni-stuttgart.de/en/research/sir/',
                desc: [
                    "Performed complete hardware bring-up and configuration of 2 FER robotic platforms, enabling stable, reproducible operation across research experiments.",
                    "Debugged hardware-software integration issues across sensor and control interfaces, cutting experiment setup failures by ~40% and improving overall system uptime during trials.",
                    "Prototyped and evaluated learning-based robotic behaviors in NVIDIA Isaac Sim, focusing on sim-to-real transfer."
                ],
                year: '11/2025 - 06/2026',
                location: 'Stuttgart, Baden-Württemberg, Germany'
            },
            {
                id: 2,
                title: 'Construction Robotics, University of Stuttgart',
                role: 'Student Assistant',
                url: 'https://www.iwb.uni-stuttgart.de/en/research/construction-robotics/',
                desc: [
                    "Developed ROS 2-based robotic software for manipulation tasks, including perception integration, task execution, and motion coordination.",
                    "Implemented and validated pose estimation and control loops, analyzing failure cases across simulation and real robot deployments.",
                    "Conducted sim-to-real validation across manipulation tasks, identifying a ~15% perception accuracy gap between simulation and physical deployment and reducing it to under 5% through calibration and pipeline tuning."
                ],
                year: '12/2024 - 03/2026',
                location: 'Vaihingen, Stuttgart, Baden-Württemberg, Germany'
            },
            {
                id: 3,
                title: 'IIITDM Kancheepuram',
                role: 'Research Intern',
                url: 'https://old.iiitdm.ac.in/docs/2%20Vritika%20Brochure_revised.pdf',
                desc: "Implemented and benchmarked deep learning models (CNNs, Vision Transformers) using PyTorch and TensorFlow, and designed data preprocessing, augmentation, and evaluation pipelines to analyze robustness and generalization of models -- work that later contributed to a published HybridViT model for Liver Tumor and Alzheimer's Disease classification.",
                year: '06/2023 - 08/2023',
                location: 'Kancheepuram, Chennai, Tamil Nadu, India'
            },
        ]
    }
]
```

Replace `pages/api/background.js` in full with:

```javascript
import { background } from '../../constants/data/background'

export default function handler(req, res) {
    res.status(200).json(background)
}
```

- [ ] **Step 2: Move the `expertise` array**

Create `constants/data/expertise.js` with the current contents of `pages/api/expertise.js`'s `expertise` array, changed to a named export (`export const expertise = [...]`). Replace `pages/api/expertise.js` with:

```javascript
import { expertise } from '../../constants/data/expertise'

export default function handler(req, res) {
    res.status(200).json(expertise)
}
```

- [ ] **Step 3: Move the `portfolio` array**

Create `constants/data/portfolio.js` with the current contents of `pages/api/portfolio.js`'s `portfolio` array (all 15 project objects, unchanged), as `export const portfolio = [...]`. Replace `pages/api/portfolio.js` with:

```javascript
import { portfolio } from '../../constants/data/portfolio'

export default function handler(req, res) {
    res.status(200).json(portfolio)
}
```

- [ ] **Step 4: Move the `honor` array**

Create `constants/data/honors.js` with the current contents of `pages/api/honors.js`'s `honor` array, as `export const honor = [...]`. Replace `pages/api/honors.js` with:

```javascript
import { honor } from '../../constants/data/honors'

export default function handler(req, res) {
    res.status(200).json(honor)
}
```

- [ ] **Step 5: Move the `review` array**

Create `constants/data/review.js` with the current contents of `pages/api/review.js`'s `review` array, as `export const review = [...]`. Replace `pages/api/review.js` with:

```javascript
import { review } from '../../constants/data/review'

export default function handler(req, res) {
    res.status(200).json(review)
}
```

- [ ] **Step 6: Move the `recommendationCard` array**

Create `constants/data/recommendations.js` with the current contents of `pages/api/recommendations.js`'s `recommendationCard` array, as `export const recommendationCard = [...]`. Replace `pages/api/recommendations.js` with:

```javascript
import { recommendationCard } from '../../constants/data/recommendations'

export default function handler(req, res) {
    res.status(200).json(recommendationCard)
}
```

- [ ] **Step 7: Verify build**

Run: `npm run build`
Expected: build succeeds, no errors. The `/api/*` routes still work (curl them) — this step only relocated the data, so this is a safe no-behavior-change checkpoint before Task 2 touches the frontend.

- [ ] **Step 8: Commit**

```bash
git add constants/data pages/api
git commit -m "refactor: move mock data into constants/data, api routes re-export it"
```

---

### Task 2: Remove the client-side fetch roundtrip

**Files:**
- Modify: `pages/background.jsx`
- Modify: `pages/portfolio.jsx`
- Modify: `pages/index.jsx`
- Modify: `components/HomeComponents/Expertise/MyExpertise.jsx`
- Modify: `components/HomeComponents/Recommendations/Recommendations.jsx`
- Modify: `components/HomeComponents/HonorsAwards/Honors.jsx`
- Modify: `components/HomeComponents/ClientReviews/ClientReviews.jsx`
- Modify: `pages/_app.js`
- Modify: `package.json`

**Interfaces:**
- Consumes: named exports from `constants/data/*` (Task 1).
- Produces: `MyExpertise`, `Recommendations`, `Honors`, `ClientReviews` now take a `data` prop (array) instead of self-fetching — `<MyExpertise data={expertise} />` etc. This is what Task 6 (motion polish) will also render from.

- [ ] **Step 1: Rewrite `pages/background.jsx` to use `getStaticProps`**

```javascript
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { background } from "../constants/data/background";

export async function getStaticProps() {
    return { props: { background } };
}

function Background({ background }) {
    const [eduData, expData] = background;

    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {eduData?.eduCards?.map((data, key) => (
                        <Edu_Card key={key} data={data} />
                    ))}
                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>
                        {expData?.expCards?.map((data, key) => (
                            <Exp_Card key={key} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
```

- [ ] **Step 2: Rewrite `pages/portfolio.jsx` to use `getStaticProps`**

```javascript
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import { portfolio } from "../constants/data/portfolio";

export async function getStaticProps() {
    return { props: { portfolio } };
}

const Portfolio = ({ portfolio }) => {
    return (
        <BannerLayout>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
                {portfolio?.map((data, key) => (
                    <PortfolioCard key={key} data={data} />
                ))}
            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
```

- [ ] **Step 3: Convert `MyExpertise` to accept a `data` prop**

```javascript
import ExpertiseCard from "./ExpertiseCard"

const MyExpertise = ({ data }) => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >
                {data?.map((item, key) => (
                    <ExpertiseCard key={key} data={item} />
                ))}
            </div>
        </>
    )
}

export default MyExpertise
```

- [ ] **Step 4: Convert `Recommendations` to accept a `data` prop**

```javascript
import RecommendationCard from "./RecommendationCard"

const Recommendations = ({ data }) => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Recommendations</div>
            <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
                {data?.map((item, key) => (
                    <RecommendationCard key={key} data={item} />
                ))}
            </div>
        </>
    )
}

export default Recommendations
```

- [ ] **Step 5: Convert `Honors` to accept a `data` prop**

```javascript
import HonorCard from "./HonorCard"

const Honors = ({ data }) => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Honors & Awards</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8">
                {data?.map((item, key) => (
                    <HonorCard key={key} data={item} />
                ))}
            </div>
        </>
    )
}

export default Honors
```

- [ ] **Step 6: Convert `ClientReviews` to accept a `data` prop**

```javascript
import ReviewCard from "./ReviewCard"

const ClientReviews = ({ data }) => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Research Publications</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8">
                {data?.map((item, key) => (
                    <ReviewCard key={key} data={item} />
                ))}
            </div>
        </>
    )
}

export default ClientReviews
```

- [ ] **Step 7: Wire it all up in `pages/index.jsx` via `getStaticProps`**

```javascript
import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import Honors from "../components/HomeComponents/HonorsAwards/Honors";
import { expertise } from '../constants/data/expertise';
import { recommendationCard } from '../constants/data/recommendations';
import { honor } from '../constants/data/honors';
import { review } from '../constants/data/review';

export async function getStaticProps() {
    return { props: { expertise, recommendationCard, honor, review } };
}

const Home = ({ expertise, recommendationCard, honor, review }) => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise data={expertise} />
            <Recommendations data={recommendationCard} />
            <Honors data={honor} />
            <ClientReviews data={review} />
            <Footer />
        </div>
    )
}

export default Home
```

- [ ] **Step 8: Remove `react-query` from `pages/_app.js`**

```javascript
import '../styles/globals.css'

import Layout from './layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
```

- [ ] **Step 9: Remove now-unused dependencies**

Run: `npm uninstall react-query axios`
Expected: `package.json` no longer lists `react-query` or `axios` under `dependencies`. Also delete now-dead files `components/Common/ParagraphSkeleton.jsx` and `components/Common/ImageAndParagraphSkeleton.jsx` and `components/Common/Skeleton`-related imports **only if** nothing else references them — check first with:

Run: `grep -rn "ParagraphSkeleton\|ImageAndParagraphSkeleton" components pages`
Expected: no remaining references. If none, delete both files.

- [ ] **Step 10: Verify build and visually check**

Run: `npm run build`
Expected: build succeeds, zero errors, zero warnings about unused `react-query`/`axios` imports.

Then start `npm run dev`, and using Playwright (per `webapp-testing` skill), screenshot `/`, `/background`, `/portfolio` at 1400x900 and confirm all cards render immediately (no skeleton flash) with the same content as before this task.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "refactor: fetch mock data via getStaticProps instead of client-side react-query roundtrip"
```

---

### Task 3: Add SEO metadata, robots.txt, and sitemap.xml

**Files:**
- Create: `components/Common/Seo.jsx`
- Modify: `pages/index.jsx`
- Modify: `pages/background.jsx`
- Modify: `pages/portfolio.jsx`
- Modify: `pages/contact.jsx`
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`

**Interfaces:**
- Produces: `<Seo title={string} description={string} path={string} />` component, imported and rendered at the top of each page's returned JSX.

- [ ] **Step 1: Create the reusable `Seo` component**

```javascript
import Head from 'next/head';

const SITE_URL = 'https://vivek-portfolio-mocha.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/images/vivek.png`;

const Seo = ({ title, description, path = '/' }) => {
    const url = `${SITE_URL}${path}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={DEFAULT_IMAGE} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={DEFAULT_IMAGE} />
        </Head>
    );
};

export default Seo;
```

- [ ] **Step 2: Add `Seo` to `pages/index.jsx`**

Add the import `import Seo from '../components/Common/Seo';` and render as the first child of the returned `<div>`:

```javascript
<Seo
    title="T Vivek Sai Surya Chaitanya — Robotics Software Engineer"
    description="Portfolio of T Vivek Sai Surya Chaitanya — robotics software engineer specializing in ROS 2, autonomous systems, perception, and sim-to-real transfer."
    path="/"
/>
```

- [ ] **Step 3: Add `Seo` to `pages/background.jsx`**

```javascript
<Seo
    title="Background — T Vivek Sai Surya Chaitanya"
    description="Education and work experience of T Vivek Sai Surya Chaitanya, including Porsche Engineering, University of Stuttgart robotics labs, and IIITDM Kancheepuram."
    path="/background"
/>
```
Render it as the first child inside `<BannerLayout>`.

- [ ] **Step 4: Add `Seo` to `pages/portfolio.jsx`**

```javascript
<Seo
    title="Projects — T Vivek Sai Surya Chaitanya"
    description="Robotics and machine learning projects by T Vivek Sai Surya Chaitanya, including robotic grasping, quadruped manipulation, and vision-language-control simulations."
    path="/portfolio"
/>
```
Render it as the first child inside `<BannerLayout>`.

- [ ] **Step 5: Add `Seo` to `pages/contact.jsx`**

```javascript
<Seo
    title="Contact — T Vivek Sai Surya Chaitanya"
    description="Get in touch with T Vivek Sai Surya Chaitanya via email or LinkedIn."
    path="/contact"
/>
```
Render it as the first child inside `<BannerLayout>`.

- [ ] **Step 6: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://vivek-portfolio-mocha.vercel.app/sitemap.xml
```

- [ ] **Step 7: Create `public/sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://vivek-portfolio-mocha.vercel.app/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://vivek-portfolio-mocha.vercel.app/background</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://vivek-portfolio-mocha.vercel.app/portfolio</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://vivek-portfolio-mocha.vercel.app/contact</loc>
    <priority>0.5</priority>
  </url>
</urlset>
```

- [ ] **Step 8: Verify**

Run: `npm run build` — expect success.
Start `npm run dev`, then check with `curl -s http://localhost:3000/ | grep -o '<title>[^<]*</title>'` and confirm the title matches Step 2. Repeat for `/background`, `/portfolio`, `/contact`. Also `curl -s http://localhost:3000/robots.txt` and `curl -s http://localhost:3000/sitemap.xml` should return the files verbatim.

- [ ] **Step 9: Commit**

```bash
git add components/Common/Seo.jsx pages public/robots.txt public/sitemap.xml
git commit -m "feat: add SEO metadata, Open Graph tags, robots.txt, and sitemap.xml"
```

---

### Task 4: Replace raw `<img>` with `next/image`

**Files:**
- Modify: `components/HomeComponents/Banner.jsx`
- Modify: `components/HomeComponents/HonorsAwards/HonorCard.jsx`
- Modify: `components/HomeComponents/Recommendations/RecommendationCard.jsx`
- Modify: `components/Portfolio/PortfolioCard.jsx`

**Interfaces:**
- None — purely internal rendering change, no prop signature changes.

- [ ] **Step 1: `Banner.jsx` emoji image**

Add `import Image from 'next/image';` at the top. Replace:

```javascript
<img className='absolute top-8 w-full h-full' src="images/emoji.png" alt="emoji" />
```

with:

```javascript
<Image className='absolute top-8' src="/images/emoji.png" alt="emoji" fill style={{ objectFit: 'contain' }} />
```

(the parent `<div className="w-48 h-52 relative hidden md:block">` already establishes the sizing box and `relative` positioning `fill` needs — no other change required there).

- [ ] **Step 2: `HonorCard.jsx` certificate thumbnail**

Add `import Image from 'next/image';` at the top. Replace:

```javascript
<div className="mt-4">
    <a href={data?.certificateLink} target="_blank" rel="noreferrer">
        <img 
            src={data?.thumbnail} 
            alt="Rank Certificate Thumbnail" 
            className="w-auto h-full object-cover opacity-50 hover:opacity-75 transition-opacity duration-300"
        />
    </a>
</div>
```

with:

```javascript
<div className="mt-4 relative w-full h-48">
    <a href={data?.certificateLink} target="_blank" rel="noreferrer">
        <Image
            src={`/${data?.thumbnail}`}
            alt="Rank Certificate Thumbnail"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-50 hover:opacity-75 transition-opacity duration-300"
        />
    </a>
</div>
```

(`data.thumbnail` values in `constants/data/honors.js` are stored without a leading slash, e.g. `"images/DegreeCertificate.jpg"` — the template literal adds it back.)

- [ ] **Step 3: `RecommendationCard.jsx` avatar image**

Add `import Image from 'next/image';` at the top. Replace:

```javascript
<img src={data?.image} className="absolute z-10 right-10 -top-5 border-Green w-16 h-16  border-[3px] rounded-full m-0" />
```

with:

```javascript
<Image src={`/${data?.image}`} alt={data?.name} width={64} height={64} className="absolute z-10 right-10 -top-5 border-Green w-16 h-16 border-[3px] rounded-full m-0 object-cover" />
```

- [ ] **Step 4: `PortfolioCard.jsx` project thumbnail**

Add `import Image from 'next/image';` at the top. Replace:

```javascript
<img
    src={data?.image}
    alt="portfolio img"
    className="w-full object-cover opacity-30 h-32 sm:h-48 md:h-64"
/>
```

with:

```javascript
<div className="relative w-full h-32 sm:h-48 md:h-64">
    <Image
        src={`/${data?.image}`}
        alt={data?.projectName || 'portfolio img'}
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-30"
    />
</div>
```

- [ ] **Step 5: Verify**

Run: `npm run build` — expect success (Next.js will complain at build time if any `<Image>` is missing `width`/`height`/`fill` or a valid `src` — fix any such error before proceeding).

Start `npm run dev`, screenshot `/`, `/background` (honors section is on home page actually — screenshot `/`), and `/portfolio` with Playwright at 1400x900, and visually confirm all four image types (hero emoji, honor thumbnails, recommendation avatars, portfolio cards) render without layout shift or broken images.

- [ ] **Step 6: Commit**

```bash
git add components
git commit -m "perf: replace raw img tags with next/image for optimization and lazy-loading"
```

---

### Task 5: Replace the non-functional contact form with an honest contact page

**Context:** The current "Get In Touch" form has uncontrolled inputs (no `value`/`onChange`) and its submit button only opens a modal reading "In Progress — Be the one to integrate this!" linking to the original template author's repo. No message has ever been sent through it. Per user decision: since they're a student (not fielding business inquiries), drop the fake form entirely rather than wiring up a third-party mail relay. Keep and clean up the real contact info + social links.

**Files:**
- Modify: `pages/contact.jsx`
- Modify: `constants/constants.js`

**Interfaces:**
- Consumes: `CONTACTS`, `SOCIAL_LINKS`, `DETAILS` from `constants/constants.js`.

- [ ] **Step 1: Fix the phone number in `constants/constants.js`**

The resume and rest of the site use `+49 15510 421564`; `constants.js` already has this correct. No change needed there — this step is a checkpoint, not an edit. Confirm with:

Run: `grep -n "PHONE" constants/constants.js`
Expected: `PHONE: '+49 15510 421564',`

- [ ] **Step 2: Rewrite `pages/contact.jsx` to remove the fake form and modal, and source info from constants**

```javascript
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Footer from '../components/Footer';
import Seo from '../components/Common/Seo';
import { CONTACTS, SOCIAL_LINKS, DETAILS } from '../constants/constants';

const Contact = () => {
    return (
        <BannerLayout>
            <Seo
                title="Contact — T Vivek Sai Surya Chaitanya"
                description="Get in touch with T Vivek Sai Surya Chaitanya via email or LinkedIn."
                path="/contact"
            />
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.Residence}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.City}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>University:</span>
                                <span className='text-LightGray md:text-sm'>University of Stuttgart</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.EMAIL}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>LinkedIn:</span>
                                <a className='text-LightGray text-sm underline' href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer">vivek-sai</a>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.PHONE}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href={`mailto:${CONTACTS.EMAIL}`} target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.GITHUB} target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer"><FaLinkedin /></a>
                </div>
                <div className="my-12 w-full h-auto text-Snow text-center text-sm text-LightGray">
                    Best way to reach me is a direct message on <a className="underline text-Green" href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer">LinkedIn</a>, or an email at <a className="underline text-Green" href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</a>.
                </div>
            </div>
            <Footer />
        </BannerLayout>
    )
}

export default Contact
```

This removes: the `useState`/`isOpen` modal state, the `antd` `Modal` import, the `HiUser`/`BsChatTextFill` unused icons, the `Fiverr_Icon` import, the commented-out dead Twitter/Fiverr/Upwork links, and the entire non-functional form markup.

- [ ] **Step 3: Verify**

Run: `npm run build` — expect success.
Start `npm run dev`, screenshot `/contact` with Playwright at 1400x900, confirm the page shows contact info + working mailto/GitHub/LinkedIn icon links and no leftover "SEND MESSAGE" button or "In Progress" modal.
Manually click the email icon in the rendered screenshot's DOM (`page.click('a[href^="mailto:"]')` is not verifiable headlessly since it opens an external handler — instead assert via `page.get_attribute()` that the `href` equals `mailto:viveksaisurya07@gmail.com`, and that the GitHub/LinkedIn `href`s equal `SOCIAL_LINKS.GITHUB`/`SOCIAL_LINKS.LINKEDIN`).

- [ ] **Step 4: Commit**

```bash
git add pages/contact.jsx
git commit -m "refactor: replace non-functional contact form with direct contact info and links"
```

---

### Task 6: Scroll-reveal motion polish with Framer Motion

**Files:**
- Modify: `package.json` (add `framer-motion`)
- Modify: `components/HomeComponents/Expertise/ExpertiseCard.jsx`
- Modify: `components/Portfolio/PortfolioCard.jsx`

**Interfaces:**
- None — purely visual, no prop signature changes.

- [ ] **Step 1: Install `framer-motion`**

Run: `npm install framer-motion`
Expected: `package.json` dependencies include `"framer-motion": "^11.x"` (or whatever the installed major version resolves to).

- [ ] **Step 2: Add scroll-reveal to `ExpertiseCard.jsx`**

Replace the full file with:

```javascript
import { motion } from 'framer-motion';
import CardLayout from "../../Common/CardLayout"

const ExpertiseCard = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <CardLayout>
                <div className="h-full space-y-2 p-8 card_stylings">
                    <div className=" text-Snow">{data.title}</div>
                    <div className="text-sm text-LightGray font-normal">
                        {data.desc}
                    </div>
                </div>
            </CardLayout>
        </motion.div>
    )
}

export default ExpertiseCard
```

- [ ] **Step 3: Add scroll-reveal to `PortfolioCard.jsx`**

This file was already modified in Task 4 Step 4 (raw `<img>` → `next/image`). Starting from that version, replace the full file with:

```javascript
import { motion } from 'framer-motion';
import Image from 'next/image';
import Badge from "../Common/Badge"

const PortfolioCard = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="card_stylings overflow-hidden h-full"
        >
            <div className="relative w-full h-32 sm:h-48 md:h-64">
                <Image
                    src={`/${data?.image}`}
                    alt={data?.projectName || 'portfolio img'}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-30"
                />
            </div>
            <div id="arrow" className="py-2 px-6 card_stylings hover:-translate-y-10 transition-all ease-in-out duration-500">
                <div className="flex justify-between p-0 m-0 ">
                    <h3 className="mr-2 underline italic font-semibold pt-2 text-2xl text-Snow leading-tight sm:leading-normal">
                        <a
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {data?.projectName}
                        </a>
                    </h3>
                    <div className="text-Snow transition duration-500 hover:text-yellow transform hover:-translate-y-1 hover:scale-110 pt-4 text-base">
                        <a
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="globe"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                className="svg-inline--fa fa-globe fa-w-16"
                            >
                                <path
                                    fill="currentColor"
                                    d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                                    className=""
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <p className="text-xs text-LightGray font-normal">
                    {data?.projectDetail}
                </p>
                <div className="text-sm flex flex-wrap gap-3 py-2">
                    {data.technologiesUsed.map((index, key) => <Badge key={key} title={index.tech} />)}
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioCard
```

- [ ] **Step 4: Verify**

Run: `npm run build` — expect success.
Start `npm run dev`, and with Playwright: navigate to `/`, scroll down through the Expertise section in steps (`page.mouse.wheel(0, 400)` repeated, with short `wait_for_timeout(200)` between), and screenshot before/after a card enters the viewport to visually confirm the fade/slide-in occurs. Repeat for `/portfolio`.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json components/HomeComponents/Expertise/ExpertiseCard.jsx components/Portfolio/PortfolioCard.jsx
git commit -m "feat: add scroll-reveal motion polish to expertise and portfolio cards"
```

---

### Task 7: Final full-site regression pass

**Files:** none (verification only)

- [ ] **Step 1: Full production build**

Run: `npm run build && npm run start`
Expected: production server starts cleanly on port 3000.

- [ ] **Step 2: Playwright pass over every route**

With Playwright, visit `/`, `/background`, `/portfolio`, `/contact` at both a desktop viewport (1400x900) and a mobile viewport (390x844), screenshot each, and confirm: no console errors (`page.on('console', ...)` capturing `error` type), no broken images, header/footer nav present, and all content from the earlier session's changes (Porsche/SIR Lab experience, ContactPilot/VLC/Go2 projects, no Narayana Olympiad School entry, contact page without the fake form) is intact.

- [ ] **Step 3: Push**

Only after explicit user confirmation (per this repo's established workflow — pushes to `main` deploy live via Vercel):

```bash
git push origin main
```
