Project Title: Vault On Mars

Introduction

We, Team 57, are designing "Vault on Mars"—a colony management and exploration game that takes players on an interplanetary adventure across the harsh, red landscape of Mars. In this game, you assume the role of a Martian pioneer tasked with building a thriving settlement while uncovering the mysterious relics left behind by an ancient alien civilization. Our goal is to blend the nostalgia of retro pixel art with the depth of modern strategy gameplay, ensuring that every decision you make shapes the destiny of your colony.

We also embraced the thrill of unpredictability. Throughout your journey, you will face natural hazards like dust storms, meteor showers, and sudden temperature drops, all of which test your strategic acumen. At the same time, fortune may occasionally favor you with boons such as a baby boom, high-yield crops, or the discovery of rich metal veins. These dynamic elements inject excitement into the gameplay, rewarding both careful planning and bold risk-taking.

Project Description

"Vault On Mars" challenges players to build a thriving Martian colony from the ground up. Key gameplay elements include:
Resource Management: Players must gather essential resources like metals, water-ice, and power, balancing consumption with production each turn (representing one year).
Base Building: Construct and upgrade various modules, including habitats, life support, research labs, resource extractors, and defensive structures.
Technology Tree: Research new technologies via a branching tech tree to unlock advanced buildings, terraforming capabilities, improved resource extraction, and tools to investigate alien artifacts.
Turn-Based Progression: The game progresses in yearly turns. Each turn resolves construction, research, resource collection/consumption, population changes, and potential events.
Exploration & Discovery: Uncover and research mysterious alien relics, ruins, and signals scattered across the Martian landscape to progress the narrative.
Challenges & Boons: Players face environmental hazards (dust storms, meteor showers, extreme temperatures) and potential alien threats, alongside positive events (baby booms, high-yield crops, rich resource veins).
Win/Loss Conditions: Establish clear goals for success (e.g., achieving sustainable terraforming, fully uncovering alien secrets) and conditions for failure (e.g., colony collapse due to resource shortage, failure to defend against threats).
Analytics & Achievements: Gameplay actions are tracked and stored in a database to award achievements and provide players with insights via a dedicated website.

Top-Level Design

The system consists of two main components: the Game Client and the Web Application/Analytics Backend.

Game Client Development

Engine: Unity Engine with the 2D Universal Render Pipeline (URP) for optimized 2D rendering and pixel art effects.
Language: C# for scripting gameplay logic, UI interactions, and system management.
Input: Primarily Mouse and Keyboard for navigation, building placement, UI interaction, and unit control (if applicable).
Art Pipeline:
Models rigged and potentially optimized using Blender.
Pixelation effect applied in Unity using Shaders within the 2D URP.
Core Mechanics: Implemented in C# scripts, managing the turn-based loop, resource calculations, building logic, tech tree progression, event triggers, and win/loss condition checks.
Analytics Integration: A client-side component will send relevant gameplay events (e.g., building constructed, tech researched, achievement unlocked, resource levels per turn) to the backend API.
Web Application Development

We are using the T3 Stack to develop the website, which hosts the components that serve as a companion website for players to view their progress achievements and potentially compare stats.
Framework: Next.js (React framework providing server-side rendering, static generation, and API routes).
Language: TypeScript (for end-to-end type safety).
API Layer: tRPC (enables calling backend procedures from the frontend with full type safety, simplifying API development).
Authentication: Clerk (handles user registration, login, profile management, and session security). User accounts on the website will be linked to their gameplay data.
Database ORM: Drizzle ORM (TypeScript ORM for interacting with the SQL database in a type-safe manner).
Database: SQL Database (e.g., PostgreSQL, MySQL, SQLite) to store user data, achievements, and aggregated analytics. Drizzle will manage schema migrations and queries.
Styling: Tailwind CSS (utility-first CSS framework for rapid UI development).
Functionality: Display user profiles, earned achievements, colony statistics, potentially leaderboards or comparisons.

The SQL database, managed by Drizzle ORM, will store information related to users and their gameplay.

Hosting: The SQL database (e.g., PostgreSQL, MySQL) will be hosted on an in-house server. Network configuration and security between Vercel-hosted backend functions and the in-house database must be carefully managed.
ORM: Drizzle ORM (TypeScript ORM for interacting with the SQL database in a type-safe manner).


Key Systems Design

Turn-Based System: A central game manager controls the flow. Each turn advances the game year, processes resource generation/consumption, updates construction/research progress, checks for event triggers, and potentially updates AI states (if any).
Resource Management: Resources tracked per colony. Buildings modify resource generation/consumption rates. Calculations occur at the end/start of each turn.
Building System: Players select buildings from an unlocked list. Placement uses a grid or defined slots. Some construction takes a set number of turns, mostly only one turn. Upgrades modify building stats or unlock new functions.
Tech Tree: Researching nodes unlocks buildings, upgrades, or abilities. Research takes time (turns) and potential resources.
Event System: Random or triggered events (hazards/boons) occur based on probabilities, game state, or turn number. Events apply modifiers or present choices to the player.
Analytics Tracking: Specific game actions trigger calls to the analytics client, sending structured data (user ID, session ID, event type, relevant details) to the backend API.

Security Considerations

Web Authentication: Handled securely by Clerk (OAuth, password management, multi-factor authentication).
API Security: tRPC provides type safety. Backend API endpoints (hosted on Vercel) should validate inputs. Communication between the web app and the backend uses HTTPS (managed by Vercel).
Game Client Communication: Communication from the game client to the analytics API (hosted on Vercel) should use HTTPS.
Database Security:
Rely on Drizzle's parameterization to prevent SQL injection.
In-House Server Security: Secure the connection between the Vercel-hosted backend and the in-house database server. This includes network security (firewalls restricting access to specific Vercel IP ranges if possible), secure authentication credentials for the database user, and potentially VPNs or other secure tunneling methods.
Limit database permissions for the application user to the minimum required.

Deployment and Continuous Integration/Continuous Deployment (CI/CD)

Game Client: Deployed via platforms like Steam, Itch.io, or other digital storefronts. Builds created using Unity's build system.
Web Application: Deployed to Vercel, leveraging its integration with Next.js for seamless builds and deployments.
CI/CD Pipeline:
Source Control: Git hosted on GitHub (or similar).
Testing Automation: Jenkins will be used to run automated tests (unit, integration) for both the game client (potentially triggered manually or via hooks) and the web application (triggered on commits/pull requests). Jenkins jobs will report test results.
Web App Deployment: Vercel automatically builds and deploys the web application upon merging code to the main branch (or specific preview branches) based on its Git integration.
Game Client Builds: Jenkins can potentially automate the Unity build process, storing artifacts for manual deployment or further distribution.
Database Migrations: Drizzle Migrate will be used to manage database schema changes. Migrations should be reviewed and applied carefully to the in-house database, potentially as a separate step in the deployment process coordinated with backend updates.

Additional Tools & Technologies

Project Management: Jira, Confluence, Slack, Discord
IDE: IntelliJ Rider (Unity/C#), VS Code (TypeScript/T3 Stack)
