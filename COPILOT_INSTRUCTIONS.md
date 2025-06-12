# Copilot Instructions for Todo UI App

Hey Copilot, welcome to todo ui app "Listify"!  
Some guidelines to follow:

### 1. Framework & UI
- **React 18**: always use functional components and hooks.
- **Material-UI (MUI)**: for all buttons, layouts, dialogs—no home-grown styles.
- **Vite**: for fast development and build tooling.
- **React Router**: for client-side routing, no server-side rendering.
- **Styles**: use MUI’s `sx` prop for inline styles, no CSS files.
- **Typescript**: use TypeScript and always include type hints.

### 2. Local State & Persistence
- **React local state**: keep transient UI state inside components.
- **localStorage**: for simple key–value persistence (e.g. user preferences).
- **IndexedDB**: when you need more robust client-side storage (larger datasets).

### 3. Diagrams & Documentation
- **Mermaid**: draw your UI flows right in Markdown.
- **PlantUML**: sequence diagrams and UML when workflows get complex.

### 4. Security & Validation
- **STRIDE threat modeling**: sketch out Spoofing, Tampering, Repudiation, Info disclosure, Denial, Elevation of privilege.
- **CVE audits**: keep our dependencies up-to-date and flag known vulnerabilities.
- **Input validation**: every form field, query param, or JSON payload must be sanitized and type-checked.

### 5. Performance Testing
- **Lighthouse**: run audits on performance, accessibility, best practices.
- **WebPageTest**: spot real-world load times and bottlenecks.
- **Custom metrics**: hook into the Performance API to track key UI timings.

### 6. Testing & QA
- **Unit & Component Tests**: use **Vitest** for 100% coverage of critical logic.
- **End-to-End Tests**: spin up **Playwright** scripts to walk through full user flows.

---

**Notes:**
- For new libraries to install just ask me to install instead of trying to install yourself, it causes bugs currently.
