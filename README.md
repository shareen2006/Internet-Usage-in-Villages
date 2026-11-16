# Internet Usage in Villages – Connecting Communities Digitally

A React + Vite website for the B.Tech Community Service Project, A Study on Internet Usage Across Different Age Groups in Rural Communities.

**Study area:** Kodandaramapuram, Buchireddypalem, SPSR Nellore District, Andhra Pradesh, India.
**College:** Sree Venkateswara College of Engineering, AIML department, academic year 2026–2027.

## Run it on Windows

1. Install Node.js LTS from https://nodejs.org (accept the defaults).
2. Unzip `digital-generations.zip` to a folder such as `C:\Projects\`.
3. Open that folder in VS Code (File → Open Folder → select `digital-generations`).
4. Open a terminal (Terminal → New Terminal) and run:

```
npm install
npm run dev
```

5. Open the address Vite prints, usually http://localhost:5173, in your browser.

To build the production files: `npm run build`. The output goes to the `dist` folder. To preview that build: `npm run preview`.

## Project structure

```
index.html              page title and fonts
src/main.jsx            entry point
src/App.jsx             navbar, section order, footer
src/data.js             all content: college, team, quiz, dashboard data, findings
src/ui.jsx              shared components (Section, Glass, Pending, Reveal)
src/sections/Core.jsx   Hero, About, Study Area, Five Generations
src/sections/Activities.jsx   Dashboard, Literacy Centre, A Day in the Village, Gallery
src/sections/Assessment.jsx   Safety Quiz, Research, Conclusion, Team
public/images/team/     five team photos (WebP)
```

## Placeholders that must stay until confirmed

- **Survey data:** the dashboard shows DEMO values, clearly labelled, until real results are entered in `ACTUAL` in `src/data.js`. Set `DEFAULT_MODE` only when the survey is complete.
- **Research findings:** every figure shows PENDING. Nothing in the findings is a result.
- **Conclusion:** a placeholder until the survey findings are written up.
- **Gallery:** photos are shown as placeholders. Do not add fieldwork photos until each person pictured has consented to publication.
- **Hero image:** a placeholder card. Add a consented photo when available.
- **College address:** confirmed. Check it against official college documents before submission.

## Before you present

- Check the helpline numbers in the Literacy Centre (1930, 112) and the portal domains against official sources.
- Confirm the team photos are genuine, consented photographs of each member.

## Features

- Hero: an interactive 3D village (React Three Fiber, Drei) with stylized, original figures. Villagers, a student, a farmer, an elder and a child use phones and a laptop. No third-party models are used, so no attribution is required. The scene loads separately and falls back to a message on browsers without WebGL.
- Motion (Framer Motion): section reveals on scroll, staggered cards, hover and tap effects, animated counters and smooth modal and gallery transitions.
- Dashboard: DEMO and ACTUAL modes with Recharts charts. Demo values are test data, not survey results.
- Gallery: fieldwork photographs grouped by category. Each stays a placeholder until its consent flag is set (see src/data.js).
- Quiz with feedback, retake and answer review. Literacy lessons, day scenes with autoplay, team cards with registration numbers.

## Remaining limits

- Figures are stylized, not photorealistic. Photorealistic models need licensed assets, and any licensed model needs its attribution added here.
- Gallery categories follow what is visible in each photograph. Confirm them with the team before publishing. No photograph shows a government school or mobile usage yet, so those categories are empty.
- Framer Motion is used for motion, but the page is not split into route-based transitions.

## Design direction: Dusk Village

A night-navy base with emerald light and a saffron accent. Sections are numbered as chapters (01 to 11). The navigation is a floating pill that shows the section in view, with a reading progress bar along the top. Cards use a spotlight that follows the pointer. Motion is limited to scroll reveals, hover lift and the 3D village, and respects the "reduce motion" setting.

Redesigned in this pass: the design tokens, shared components, navigation, footer, landing page, About, Study Area and Generations. The dashboard, literacy centre, day scenes, gallery, quiz, research, conclusion and team use the new components and chapter labels, but their internal layouts are unchanged and can be redesigned next.
