📚 BookNest | Premium Literary Discovery Platform
BookNest is a high-performance, responsive book discovery application designed with a focus on smooth user experience and clean UI/UX. It features real-time filtering, a persistent dark mode, and a functional reading list (wishlist) system.

🚀 Features
Dynamic Filtering: Instantly filter books by genre (Fiction, Sci-Fi, Biography, etc.) or search by title and author using optimized useMemo logic.

Persistent User State: Uses localStorage to ensure the user's Dark Mode preference and Reading List stay saved even after a page refresh.

Fluid UI/UX: Powered by Framer Motion for layout transitions and Lucide React for high-quality iconography.

Responsive Design: Fully optimized for mobile, tablet, and desktop viewports using Tailwind CSS.

Interactive Reading List: A side-drawer interface allowing users to manage their curated collection in real-time.

🛠️ Technical Stack
Frontend: React (Hooks, Context, Functional Components)

Styling: Tailwind CSS (Class-based Dark Mode)

Animations: Framer Motion (AnimatePresence, Layout animations)

Icons: Lucide-React

Build Tool: Vite

⚙️ Installation & Setup
Clone the repository:

Bash

git clone https://github.com/yourusername/booknest.git
Install dependencies:

Bash

npm install
Required Packages: Ensure you have the following installed for the UI to function correctly:

Bash

npm install lucide-react framer-motion
Run the development server:

Bash

npm run dev
🧠 Why I Built It This Way
Performance: I implemented useMemo for the filtering logic to prevent expensive re-calculations on every render, ensuring a "snappy" feel even if the book list grows to hundreds of items.

State Management: Rather than using heavy external libraries, I utilized React's native useState and useEffect hooks to handle local persistence, demonstrating a deep understanding of the React lifecycle.

Design System: I followed a "Mobile-First" approach, ensuring the typography and spacing remain legible across all devices.
