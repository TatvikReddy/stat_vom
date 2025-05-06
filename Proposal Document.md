Vault On Mars
by Tatvik Reddy Chevuru, Nafiz Rahman, Daniyal Baig, Surya Solaiappan, Joshua Perez, Allison Phillips, Satyam Garg, Danielle Bryan

	We will be creating an online video game that involves users being on Mars developing a settlement as the game progresses, and unearthing alien footprints. The settlement that the user manages will be affected by various factors, including famine, weather, etc. to give the user a challenge. There will also be boons like a baby boom for increased population, high-yield crops for food, and metal veins found for more materials.
We are using Unity’s built-in 2D URP for our project [12]. The game will be a sidescroller with left and right movement. We will be using the mouse and keyboard for user input. We are using AI 3D model generators for all assets and Blender to rig them [3]. Assets will be pixelated using Shaders. We will make an SQL database to store user gameplay actions for achievements and easter eggs and displaying on a website for the user to view.

Table of Contents  
Introduction	2
Introduction	2
Similar Products	2
Advantages and Disadvantages	2
Glossary	3
Timetable	4
Project Metrics	5
Key Roles	6
Communication Plan	7
Risk Analysis/Contingency Plan	8
Evaluation/Tracking Plan	9
Ethics Discussion	10
Impact, Security, and Privacy	12
Signatures, Name, and Date	14
Sources	15




Introduction
Our project is a colony management game set on Mars where you are tasked with building up your colony and uncovering secrets left behind by an alien civilization. The main gameplay loop will focus on resource gathering, technology upgrades, and exploration of mysterious alien relics in a turn-based system jumping from year to year. Resource gathering will be a critical system in our game as every turn you will need to manage. The game’s visual style will be 2D-pixel art, which allows us to keep development streamlined while still delivering a charming, retro-inspired aesthetic. Our game is unique from other city-building and management games since we aim to provide a more accessible experience for players who want strategic depth without getting overwhelmed by excessive complexity. Additionally, the game takes inspiration from a few of the other games of its genre and combines some of their features, like the setting and art styles.
Similar Products
Several existing games have inspired our game direction. The first is Kingdom Two Crowns (KTC) [1], a 2D-pixel side-scroller where players manage medieval settlements, gather resources, and fend off enemies. We took inspiration from the side-scrolling mechanics, simple controls, and pixel art style of KTC and adapted these strengths into our own Mars-based setting. By doing so, we hope to retain KTC’s ease of play while adding more management features that enrich colony-building.
Another key influence is Surviving Mars (SM) [2], a 3D isometric city builder also set on the Red Planet. While SM is great at creating a deep, complex simulation, its complexity can deter new or casual players. We aim to land in the middle ground, offering enough depth to engage the player while keeping the game straightforward enough for a wider casual audience. Thus, we combine the best of both worlds: the straightforward 2D style of KTC and the complex Martian environment from SM.
Advantages and Disadvantages
	Our biggest advantage is its gameplay complexity, which is aimed to be in the middle between simple and complex. This will let our game feel easy enough to pick up and learn quickly but still have some complexity that takes time to master. This approach will help us reach more players since it will appeal to fans of similar games and also a newer audience who might have never tried management sim games before.
	Our biggest disadvantage is that there is not much action in the game. This design choice means that players who crave fast-paced, action-driven experiences may find the game too slow or boring. The focus on strategic decision-making and colony management over combat or action-packed sequences could deter people who prefer action-oriented titles. Without significant action or emergent, unpredictable elements, there is also the possibility that the game may lose its appeal over time, hurting the replayability.
Glossary
The tools we are using are:
2D URP (Universal Render Pipeline): Unity’s built-in 2D rendering solution used for pixel art effects and performance optimization [12].
Agile: A project management methodology that uses iterative development cycles (sprints) to improve planning and flexibility.
Blender: Blender is free [3], open-source software for creating 3D models, animations, and visual effects. It can be used for many purposes, including creating video games, virtual reality, and 3D-printed models. 
Confluence: Confluence is a software tool that helps teams collaborate [4], document, and share content, it is useful for large projects that involve multiple teams and It helps teams keep all project-related information in one place.
CSS (Cascading Style Sheets): Though not directly used for game development, relevant for styling associated web content.  
Database/SQL: Structured Query Language (SQL) is used to manage our relational database, which stores gameplay analytics and user data. 
Discord: Discord is a VOIP app for voice [5], video, and text communication. It's a social platform that lets users chat with friends, and join communities.
Docker: Docker is an open-source platform that helps developers build [6], run, and manage applications using containers.
GitHub: GitHub is a website that helps software developers store [7], track, and collaborate on projects, which in turn helps with version controlling.
IntelliJ Rider: JetBrains Rider is a leading cross-platform IDE for .NET and game developers looking to boost productivity and streamline their development process [8].
Jenkins: Jenkins is an open-source automation server that helps with building [9], testing, and deploying software
Jira: Jira is a project management tool that helps teams plan [10], track, and manage work.
Pixel Art: A digital art style that uses visible pixels, giving a retro aesthetic to our visuals.
Shader: A set of instructions in the graphics pipeline used to produce special effects such as pixelation.  
Side-Scrolling: A game format where the primary movement is horizontal, creating a focused, streamlined user interface.
Slack: Slack is a cloud-based messaging app and collaboration platform for businesses [11]. It allows users to chat, share files, and make video calls. 
Tech Tree: A hierarchical diagram representing upgrades and advancements available to the player.
Unity: Unity engine is a cross-platform game development platform that allows users to create both 2D and 3D interactive experiences [12], including video games, simulations, and other applications, using tools for design, programming (primarily with C#), and deployment across various platforms like desktop, mobile, consoles, VR, and AR; considered user-friendly, especially for beginner developers, and popular for indie game creation. 
Timetable
February 17th - March 2nd, Sprint 1 
Basic playable prototype with simple features like movement and settlement building
Basic website and database setup
March 3rd - March 16th, Sprint 2 
Updated prototype with new features like the technology tree, NPCs, hazards, and basic sounds
Finished Proposal Document
March 7th, Proposal Due
March 17th - March 23rd, Sprint 3 
Small improvements on the game including an expanded technology tree and building system
March 24th - April 6th, Sprint 4 
Expand on previously developed gameplay systems like NPCs, hazards, etc.
Finished Design Document
Finish website
April 4th, Design Documents Due
April 7th - April 20th, Sprint 5 
Finish database and integration of website and game
Finish sound design for the game
Finish Works Cited and Change-Log Documents
April 21st - May 4th, Sprint 6 
Finish prototype
Finish Testing Results Document
Finish User’s Manual
Finish Poster and Presentation Script
May 5th, Poster, Single Slide and Presentation Script Due
May 5th, Prototype, Works Cited, and Change-Log Due
May 5th, User’s Manual Due
May 9th, Testing Results Due
May 9th, Peer Reviews Due
May 9th, Senior Design Day with Team’s Oral Presentation

Project Metrics
Weekly Reports
All 10 weekly reports have been submitted

Deliverables
Proposal Document
Design Document
Prototype Application, Works Cited, and Change Log
User Manual
Testing Log
Poster with a Presentation script

Working Features
We must have resource gathering where the player mines for metals, drills for water-ice deposits, harnesses solar energy, etc.
We must have base-building features where the player can construct hab modules, oxygen generators, research labs, defense systems, etc.
We must have a large, branching tech tree that unlocks better structures, terraforming methods, and the ability to investigate alien artifacts.
We must have hazards/challenges for the player to deal with like dust storms, meteor showers, temperature drops, and potential alien dangers.
We must have a turn based system where each turn goes to the next year and finishes buildings, updates population counts, and updates the game world accordingly.
We must have the player discover and research strange alien artifacts, cryptic signals, hidden ruins, etc.
We must have a system to allow for the player to fail the game after meeting some lose criteria.
We must have a database system that collects analytics from players and uses them for game refinement.
We must have an upgrade/expansion system that adds modules and upgrades existing buildings for improved production and sustainability.

Plan to Collect Metrics
We will use the number of weekly reports that have been submitted by the end of the project to gauge how well we kept track of the project.
We will use the number of deliverables we completed from the list to gauge how we did for the documentation of the project.
We will use the amount of features developed from the features list to gauge how well we delivered on our initial game idea.

Group Meetings:
All members will try to meet in person at least once, at most twice every week in person, schedules permitting, to collaborate together to solve problems, talk about progress, and, most of all, socialize. Each subgroup will be using Discord as our primary form of communication [5]. GitHub will be used as our version control to store documents and code as we develop our project [7].
Risk Analysis/Contingency Plan
Technical Risks:  
Integration Issues: Continuous integration tools (e.g., Jenkins [9]) and regular code reviews will be employed to identify and resolve compatibility issues early.  
Learning Curve: Targeted training sessions, pair programming, and mentorship will help team members quickly adapt to new tools like Docker and Blender [6], [3]. 
Bug Proliferation: Comprehensive unit testing, automated testing pipelines, and scheduled bug-fix sprints will proactively address performance and stability issues.

Scope & Timeline Risks:  
Feature Creep: Core functionalities, such as resource management, base-building, and the technology tree, will be prioritized. Additional features will be deferred for post-graduation updates to maintain focus and avoid delays.  
Deadline Pressure: Buffer periods, sprint retrospectives, and regular progress reviews will allow for early detection of delays and resource reallocation as needed.

Team & External Risks:  
Volunteer Attrition: Tasks will be promptly reassigned if a volunteer drops out, ensuring project continuity. Cross-training team members will also help mitigate the impact of attrition. 
Resource Availability: Regular audits of hardware and software resources will be conducted, with alternative free tools identified and ready as backups to avoid disruptions. 
Regulatory Changes: Legal updates will be monitored, and adjustments will be made to the Terms of Service and data-handling practices to ensure compliance with evolving regulations.

Additional Contingency Measures:
Knowledge Sharing: Documentation and knowledge-sharing sessions will ensure that critical project knowledge is not lost if a team member becomes unavailable.
Stakeholder Communication: Regular updates to stakeholders will help manage expectations and maintain trust, even in the face of delays or challenges.
Risk Monitoring: A risk register will be maintained and reviewed periodically to identify new risks and update mitigation strategies accordingly.

Evaluation/Tracking Plan
Task & Sprint Tracking:  
Jira Management [10]: All tasks will be logged and tracked through defined stages: To Do, In Progress, Under Review, and Done. This ensures clear visibility into task progress and completion. 
Sprint Reviews: At the end of each spring, meetings will be held to assess progress, identify blockers, and adjust future plans to stay on track.

Quality Assurance:  
Unit & Integration Testing: Automated tests integrated with our Continuous Integration (CI) system will ensure code stability and compatibility across modules.
User Acceptance Testing: During Sprint 5, player feedback sessions will be conducted to refine gameplay and address usability concerns.
Performance Metrics: Regular load testing and performance profiling will ensure smooth gameplay on target systems, maintaining an optimal user experience.

Data & Continuous Improvement:  
Analytics: An SQL database will collect and analyze gameplay data to guide feature improvements and balance adjustments.  
Feedback Surveys: Periodic surveys will gather qualitative insights from players, helping to prioritize enhancement and address pain points.  
Code Reviews & Documentation: Ongoing peer reviews will ensure adherence to best practices, while updated documentation will capture lessons learned and support feature development efforts.

Additional Measures:
Progress Dashboards: Real-time dashboards in Jira will provide a visual overview of sprint progress and task completion rates [10].
Retrospectives: Post-sprint retrospectives will identify successes and areas for improvement, fostering a culture of continuous learning.
Risk Monitoring: Regular evaluations will ensure that potential risks to task completion or quality are identified and mitigated early.

Ethics Discussion
In developing and managing our project, we acknowledge the importance of ethical considerations for all stakeholders—players, team members, volunteers, and the broader community. Our approach to ethics covers a broad domain, featuring the fair treatment of volunteers and responsible data practices, ensuring that our game remains an enjoyable and equitable experience for all parties involved, making its way back to the end users. 

1. Respect for Volunteer Members  
   We value the time and effort that volunteer members contribute to our project. While they are not bound by the same requirements as core team members, we believe in recognizing and compensating them fairly. This can include but is not limited to: formal acknowledgment in the game credits, providing meals and/or refreshments, as well as maintaining flexibility in task assignments so that no single volunteer is overburdened. Moreover, if a volunteer decides to leave, we fully respect that decision without penalty and discontent and thank them for any contributions that they have made.

2. Equitable Workload Distribution  
   We acknowledge and ensure that no single person—volunteer or otherwise—carries an unfair share of the project’s workload. Transparency in project management tools (e.g., Jira [10]) and open communication channels (e.g., Discord [5], Slack [11]) help us identify and address potential work imbalances early. If any one team member feels overwhelmed, we encourage them to voice concerns so that tasks may be redistributed and deadlines adjusted.  

3. Avoiding Exploitative Game Mechanics  
   In designing our colony management game, we are conscious of how certain monetization strategies (e.g., loot boxes, aggressive microtransactions) can exploit players. Since our focus is on a non-violent, exploration-driven experience, we intend to avoid such manipulative mechanics. There will be no in-game purchases. Future expansions will feature the utmost transparency, being completely optional and fairly priced, ensuring that players have a clear understanding of what they are buying and how it affects gameplay.

4. Data Privacy and Player Rights  
   Protecting player data is paramount. Our database will collect only the information necessary for gameplay metrics, and user accounts for linking, and performance analytics for improvement. Any personally identifiable information (PII) will be safeguarded, and aggregated data will be used strictly to improve the game experience. Players will have the right to request data deletion, and we will comply with relevant data protection regulations. We will communicate clearly through a Terms of Service (TOS) document, ensuring that players understand how their data is used and stored.



6. Fair Representation of Content  
   Although our game is set on Mars and fictional alien elements are involved, we remain mindful of ethical storytelling. We do not intend to depict any graphic violence or content that may be inappropriate for younger audiences. By maintaining a primarily family-friendly tone, we reduce the risk of inadvertently exposing players—particularly minors—to disturbing themes. We plan to present responsibly and with clear context when potentially sensitive material is introduced (e.g., mild references to disasters or challenging survival conditions).

7. Academic Integrity and Originality  
   As this project is developed within an academic framework, we are committed to crediting all external assets and references properly. Any third-party art, sound, or code used will be sourced under the correct licenses. We also maintain strict standards to avoid plagiarism, ensuring our work remains authentic and respects the intellectual property of others.

8. Environmental and Social Impact  
   While our game is a digital product, we acknowledge the broader social and environmental implications of software development. We encourage the responsible use of hardware, minimal printing of project materials, and energy-conscious practices (e.g., powering down servers when not in active use). From a social perspective, we aim to build on mutual respect—both in our development team and among the eventual player community—through open dialogue and constructive feedback.

9. Transparency and Community Engagement  
   Finally, we understand that ethics is an ongoing conversation rather than a one-time checklist. We will maintain open lines of communication with players, volunteers, and other stakeholders. Constructive feedback on potential ethical concerns—ranging from data usage to game design choices—will be taken seriously. Our goal is to demonstrate accountability and adapt our practices as needed to uphold high ethical standards.

Impact, Security, and Privacy
Terms of Service
Effective Data: 3/2/2025, Last Revised
 
Welcome to Vault On Mars, developed and operated by Group 57 in Dr. Beckers CS Project Design Course. These Terms of Service constitute a legal agreement between you and our Group governing your access and use to the use of our Game, Website and related services. By accessing or using the Services, you acknowledge and agree to be bound by these Terms of Service. If you do not agree, please discontinue all use immediately. 
Vault On Mars Services and Entities:
Game: Vault On Mars video game and all associated content features and services.
User(s): Any individual who accesses or uses the Game.
Account(s): Unique profiles created by Users to access and play the Game.
Personal Data: Information pertaining to a User, name, email address, and all needed account details.
Aggregated Data: Non-personal identifiable data collected for the sole purpose of improving the Game, including gameplay statistics and engagement metrics. 
User Accounts
Users must be 13 years old or above to create a personal account.
Users are responsible for maintaining the security of their own account credentials.
Sharing or selling accounts is prohibited. 
We reserve the right to terminate or suspend accounts for any violations of these Terms of Service. 
User Conduct
Users agree not to:
Engage in cheating, hacking, or using any unauthorized third-party software deemed usable by Group 57.
Harass, threaten, or harm other Users.
Exploit or manipulate the Game’s mechanics for unfair advantages.
Upload malicious content, such as viruses or harmful code.
Privacy and Data Collection
We hold the right to collect and store Personal Data to facilitate account management and user experience. 
Aggregated Data is retained for game improvements, analytics, and insights. 
Upon account deletion, all Personal Data will be permanently erased, with an exception for Aggregated Data.
Users may request deletion of their Aggregated Data by contacting support. 
Data usage and storage practices comply with the applicable data protection laws. 
Intellectual Property
The Game, including all artwork, code, music, and other assets, is owned by Group 57.
Users are granted a limited, non-transferable license to access and use Vault On Mars services.
Users may not reproduce, distribute, or modify any part of the Game without explicit permission. 
Virtual Goods and Transactions
Vault On Mars may offer in-game purchases, such as virtual currency and items. 
All purchases are final and non-refundable unless required by law. 
Group 57 reserves the right to modify, discontinue, or add virtual goods at any time.
Termination
Users may terminate their accounts at any time by contacting the indicated support team. 
Group 57 may suspend or terminate accounts that violate these Terms of Service.
Upon termination, Users will lose access to all account data and virtual goods, including purchased currencies. 
Disclaimers and Limitations of Liability
Vault On Mars is provided “as-is” with no guarantees of uninterrupted service. 
We are not responsible for data loss, technical issues, or third-party misconduct. 
Changes to the TOS
We reserve the right to update these Terms of Service at any time. 
Users will be notified of significant changes via email or in-game notifications. 
Continued use of Vault On Mars and services after changes constitute acceptance of any revised Terms of Service. 
Contact Information: For questions or concerns regarding these Terms of Service, contact us at VaultOnMars@gmail.com. By using Vault On Mars, you acknowledge that you have read, understood, and agreed to these Terms of Service. 

Sources
[1] Raw Fury, "Kingdom Two Crowns," [Online]. Available: https://www.kingdomtwo.com. [Accessed: Mar. 7, 2025].
[2] Paradox Interactive, "Surviving Mars," [Online]. Available: https://www.survivingmars.com. [Accessed: Mar. 7, 2025].
[3] Blender Foundation, "Blender," [Online]. Available: https://www.blender.org. [Accessed: Mar. 7, 2025].
[4] Atlassian, "Confluence," [Online]. Available: https://www.atlassian.com/software/confluence. [Accessed: Mar. 7, 2025].
[5] Discord Inc., "Discord," [Online]. Available: https://discord.com. [Accessed: Mar. 7, 2025].
[6] Docker Inc., "Docker," [Online]. Available: https://www.docker.com. [Accessed: Mar. 7, 2025].
[7] GitHub, "GitHub," [Online]. Available: https://github.com. [Accessed: Mar. 7, 2025].
[8] JetBrains, "IntelliJ Rider," [Online]. Available: https://www.jetbrains.com/rider. [Accessed: Mar. 7, 2025].
[9] Jenkins, "Jenkins," [Online]. Available: https://www.jenkins.io. [Accessed: Mar. 7, 2025].
[10] Atlassian, "Jira," [Online]. Available: https://www.atlassian.com/software/jira. [Accessed: Mar. 7, 2025].
[11] Slack Technologies, "Slack," [Online]. Available: https://slack.com. [Accessed: Mar. 7, 2025].
[12] Unity Technologies, "Unity," [Online]. Available: https://www.unity.com. [Accessed: Mar. 7, 2025].
