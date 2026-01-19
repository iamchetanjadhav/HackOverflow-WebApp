
HackOverflow 4.0 – Official Website

This repository contains the official website source code for HackOverflow 4.0, a national-level hackathon organized by PHCET.
The project is built using modern web technologies with a focus on performance, scalability, and clean UI.

⸻

🧱 Tech Stack
	•	Next.js (App Router)
	•	React 18
	•	TypeScript
	•	Tailwind CSS
	•	Framer Motion – animations
	•	Lucide React – icons
	•	PostCSS
	•	ESLint

⸻

🧩 Architecture Overview
	•	App Router (src/app) for routing and layouts
	•	Component-driven UI under src/components
	•	Static assets served via /public
	•	Type-safe components using TypeScript
	•	Client animations handled using Framer Motion
	•	Responsive design using Tailwind utility classes

⸻

🎨 Styling & UI
	•	Tailwind CSS for fast and consistent styling
	•	Global styles managed via globals.css
	•	Mobile-first responsive layout
	•	Smooth transitions and animations using Framer Motion

⸻

⚙️ Installation & Development

Prerequisites
	•	Node.js 18+
	•	npm or pnpm

Install dependencies

npm install

Run development server

npm run dev

Access the app at:

http://localhost:3000


⸻

🏗️ Build & Production

npm run build
npm start

Build output is generated inside the .next directory.

⸻

🧪 Linting

npm run lint

Uses ESLint with Next.js recommended configuration.

⸻

🗂️ Asset Handling
	•	Images & videos are served from /public
	•	Optimized via Next.js static asset handling
	•	Supports large hero videos and background visuals

⸻

🔒 Best Practices Used
	•	Modular component structure
	•	Clean separation of UI and layout logic
	•	Type safety with TypeScript
	•	Reusable and scalable design patterns
	•	SEO-friendly App Router layout

⸻

📬 Contact

For technical queries or contributions:

📧 admin@hackoverflow.tech

⸻

📄 License

© 2026 HackOverflow 4.0
All rights reserved.
