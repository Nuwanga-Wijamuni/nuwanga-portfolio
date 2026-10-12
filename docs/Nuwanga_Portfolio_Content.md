# Nuwanga Wijamuni — Portfolio Content

Content draft prepared on 12 October 2026 from the supplied CV, GitHub repositories, and profile information. This document arranges the website content; it does not implement or publish a website.

## Page structure

| Order | Section | Purpose |
|---|---|---|
| 01 | Hero | Introduce Nuwanga, his focus, and the main actions |
| 02 | Selected work | Show five public projects with clear repository links |
| 03 | About | Connect his AI work to his data engineering and data science background |
| 04 | Experience | Present HSB Marine, One Billion Tech, and MAS Holdings |
| 05 | Engineering approach | Explain how he builds and evaluates AI applications |
| 06 | Technical toolkit | Group technologies by their role in a system |
| 07 | Case studies and research | Describe additional CV work and NVIDIA infrastructure research |
| 08 | Education and credentials | Present the degree, certification, training, and awards |
| 09 | Contact | Provide a clear route to discuss opportunities |

**Navigation:** Work · About · Experience · Toolkit · Contact

**Persistent action:** Download CV

---

## 01 / Hero

**Name:** Nuwanga Wijamuni

**Role:** AI Engineer

**Main headline:**

> Knowledge.
> Into action.

**Supporting copy:**

I build AI systems that connect business knowledge to useful actions—from document retrieval and conversational interfaces to agent workflows and cloud deployment.

**Focus line:** Agentic AI · RAG · Conversational applications · Cloud & MLOps

**Location and opportunities:** Based in Negombo, Sri Lanka. Open to international remote opportunities and relocation.

**Actions:** View selected work · Download CV · Let’s talk

**Social links:**

- [GitHub](https://github.com/Nuwanga-Wijamuni)
- [LinkedIn](https://www.linkedin.com/in/nuwanga-wijamuni-3bb4b8221/)
- [X / @Nuwanga98](https://x.com/Nuwanga98)

**Portrait placement:** Use the supplied portrait beside the About section. A small portrait thumbnail may also accompany the hero name. Suggested alt text: “Portrait of Nuwanga Wijamuni.”

---

## 02 / Selected work

**Section headline:** From a question to a working system.

**Introduction:** A selection of applications exploring how AI can retrieve information, guide decisions, and interact with real interfaces.

Show these five projects in this order. Use the short card copy on the main page; keep the expanded details available in the project’s case-study view or expandable content.

### Project 01 — Skyward

**Title:** Skyward — Flight Search & Booking Simulation

**Category:** Agentic applications / Full-stack engineering

**Card copy:** A conversational flight discovery app that turns a travel request into flight options, an itinerary review, and a confirmed booking simulation.

**Project details:**

I built a React and TypeScript interface backed by FastAPI and a LangGraph workflow. The application extracts and validates trip details, compares offers, and asks the user to review a time-limited quote before confirmation. Optional Groq structured extraction and a Duffel test adapter extend the local demo.

Offers, quotes, and simulated bookings are persisted through SQLAlchemy. Idempotency keys and database constraints help prevent duplicate booking-simulation records.

**Key capabilities:** Natural-language trip extraction; structured flight search; offer comparison; expiring quotes; explicit confirmation; persistent simulation records.

**Scope label:** Demo & sandbox — simulated bookings; no payments or airline tickets.

**Technology tags:** Python · FastAPI · LangGraph · Groq · React · TypeScript · SQLAlchemy · SQLite / PostgreSQL

**Action:** [Explore repository](https://github.com/Nuwanga-Wijamuni/flight-booking-agent)

### Project 02 — Gourmet Express

**Title:** Gourmet Express — Visual Voice Ordering Agent

**Category:** Voice interfaces / Tool-using AI

**Card copy:** A restaurant ordering interface where spoken requests navigate the menu and update the shopping cart through AI-selected tool calls.

**Project details:**

I connected a React menu carousel and cart to a FastAPI backend using WebSockets. Browser speech recognition transcribes the user’s request; the backend sends the text to the OpenAI Realtime API and executes tool calls such as showing a menu item or adding food to the cart.

The updated interface state is broadcast back to connected clients, demonstrating how a conversation can control a visual application.

**Key capabilities:** Voice-command input; menu navigation; cart updates; tool calling; transcripts; real-time interface synchronization.

**Scope label:** Portfolio application — voice-driven menu and cart interaction.

**Technology tags:** React · FastAPI · OpenAI Realtime API · WebSockets · Browser SpeechRecognition · Tailwind CSS

**Action:** [Explore repository](https://github.com/Nuwanga-Wijamuni/AIVisualAgent)

### Project 03 — Document RAG

**Title:** Document RAG — Containerized PDF Knowledge API

**Category:** Retrieval engineering / Document intelligence

**Card copy:** A session-based PDF question-answering API that combines document extraction, vector retrieval, and context-grounded generation in a Docker Compose stack.

**Project details:**

I built an ingestion and retrieval pipeline that extracts PDF text with PyMuPDF, divides it into chunks, generates Sentence Transformer embeddings, and stores the results in Weaviate. Document metadata tracks the session, filename, and page number.

Queries retrieve relevant context before generating an answer through Groq. Session-based document handling and duplicate checks support the upload workflow, while Docker Compose packages the API and vector database for reproducible local setup.

**Key capabilities:** PDF upload; session management; duplicate checks; chunking and embeddings; semantic retrieval; document metadata; containerized setup.

**Scope label:** Public API project — repository includes local setup instructions.

**Technology tags:** Python · FastAPI · Weaviate · Sentence Transformers · PyMuPDF · Groq · Docker Compose

**Action:** [Explore repository](https://github.com/Nuwanga-Wijamuni/RAG_Docker)

### Project 04 — Verifiable Medical RAG

**Title:** Verifiable Medical RAG — Source-Linked Record Retrieval

**Category:** Verifiable retrieval / Evaluation

**Card copy:** A research prototype for answering questions about medical records with source metadata and year-based retrieval filters.

**Project details:**

I developed a document pipeline using LlamaParse, Google text embeddings, and Weaviate to retrieve relevant record sections. Source, page, year, and chunk identifiers are retained so answers can be linked back to the retrieved material.

The generation layer uses Groq with GPT-OSS 120B and instructions to answer from the supplied context. An evaluation script checks expected values across years and inspects citation metadata, making the retrieval behavior easier to review.

**Key capabilities:** PDF parsing; source metadata; year-filtered retrieval; source-linked answers; value and citation checks.

**Scope label:** Research prototype for document retrieval.

**Technology tags:** Python · FastAPI · LlamaParse · Google text-embedding-004 · Weaviate · Groq · GPT-OSS 120B

**Action:** [Explore repository](https://github.com/Nuwanga-Wijamuni/Verifiable-Medical-RAG)

### Project 05 — Focus & Attention Tracker

**Title:** Real-Time Focus & Attention Tracker

**Category:** Computer vision / Observability

**Card copy:** A webcam-based experiment that turns head-pose estimates into focus-state labels and visualizes the resulting metrics in Grafana.

**Project details:**

I connected browser video frames to a FastAPI WebSocket service and used MediaPipe and OpenCV to estimate head orientation. The application assigns labels from those measurements and exports live metrics to Prometheus.

A Grafana dashboard displays head angles, state distribution, and trends. Docker Compose brings the application and monitoring services together in a reproducible development setup.

**Key capabilities:** Webcam frame streaming; head-pose estimation; rule-based state labels; metrics export; dashboard visualization; containerized services.

**Scope label:** Computer vision experiment — head pose is a proxy, not a direct measurement of cognitive attention.

**Technology tags:** Python · FastAPI · OpenCV · MediaPipe · WebSockets · Prometheus · Grafana · Docker

**Action:** [Explore repository](https://github.com/Nuwanga-Wijamuni/real-time-focus-tracker)

**End-of-section action:** [Browse more repositories](https://github.com/Nuwanga-Wijamuni?tab=repositories)

---

## 03 / About

**Section headline:** AI engineering, grounded in data.

I’m Nuwanga, an AI Engineer based in Sri Lanka. My work brings together language models, business data, and application engineering to build systems people can use and inspect.

At HSB Marine Constructions, I develop company knowledge applications and automation workflows with clear approval points. Before that, I worked in data engineering at One Billion Tech and data science at MAS Holdings—building retrieval applications, optimizing data queries, and developing forecasting pipelines.

That background shapes how I approach AI: start with the data and the user’s task, make the workflow observable, and build the infrastructure needed to reproduce the result.

**Short facts:** Negombo, Sri Lanka · AI engineering · Data science background · International remote and relocation opportunities

---

## 04 / Experience

**Section headline:** Experience across AI, data, and business systems.

### HSB Marine Constructions

**AI Engineer — Contract | October 2025 – Present**

Building internal knowledge applications and approval-based automation for company operations.

- Developed an internal RAG application with retrieval APIs, a Streamlit interface, and Docker Compose; documented setup and troubleshooting.
- Built and tested an eight-stage executive task-triage workflow connecting ChatGPT, Google Drive, and Asana, with task ownership, prioritization, and CEO approval.
- Refined source-to-task mapping, duplicate checks, missing-information flags, and completion-evidence requirements.
- Designed Company Brain knowledge structures and evaluated a retrieval architecture using Vertex AI Search, Cloud Run, Gemini, and speech-to-text.

**Focus tags:** Enterprise knowledge · Agent workflows · Human approval · Google Cloud

### One Billion Tech

**Data Engineer Intern | August 2024 – July 2025 | Colombo, Sri Lanka**

Developing AI retrieval applications and improving the performance and visibility of data systems.

- Built and deployed a RAG application using LLaMA 3.3 and Weaviate, with Docker, Amazon ECR, and Amazon SageMaker.
- Optimized selected Snowflake queries using materialized views and datetime clustering keys, bringing execution times below four seconds.
- Developed a natural language-to-SQL application connecting LLaMA 3.3 to Snowflake through FastAPI, Groq, and SQLAlchemy.
- Implemented stored-procedure logging to improve data-load auditing and visibility.

**Focus tags:** RAG · Snowflake · AWS deployment · Natural language-to-SQL

### MAS Holdings

**Data Scientist Intern | March 2023 – March 2024 | Colombo, Sri Lanka**

Applying forecasting and analytics to business data.

- Built and evaluated ARIMA, Prophet, and LSTM models for Walmart sales forecasting at MAS ACME.
- Automated data preparation pipelines for training and validation.
- Developed Power BI dashboards for MAS Kreeda and Bodyline.

**Focus tags:** Forecasting · Data pipelines · Power BI · Business analytics

---

## 05 / Engineering approach

**Section headline:** Useful outputs. Inspectable workflows.

| Principle | Website copy |
|---|---|
| Ground answers in sources | Retrieve relevant information and retain the metadata needed to inspect where an answer came from. |
| Make agent behavior traceable | Use structured outputs, workflow tracing, and explicit tool boundaries so decisions are easier to follow. |
| Keep people in the decision loop | Add review and confirmation where a workflow moves from a suggestion to an action. |
| Build for repeatable evaluation | Use focused tests, evaluation scripts, containerized setup, and clear configuration to compare behavior and reproduce results. |

---

## 06 / Technical toolkit

**Section headline:** The tools behind the systems.

Show a compact selection of icons first. Keep the complete stack grouped below rather than displaying every tool in the hero.

**Primary icons:** Python · FastAPI · LangGraph · LangChain · Weaviate · NVIDIA · Docker · AWS · Google Cloud · React · TypeScript · SQL

| Layer | Technologies and methods |
|---|---|
| Agentic AI | LangGraph, LangChain, LangSmith, tool calling, structured outputs, conversational memory, human-in-the-loop workflows |
| Retrieval and generative AI | RAG, Weaviate, ChromaDB, Sentence Transformers, LlamaParse, Hugging Face Transformers, NVIDIA NIM, QLoRA / PEFT |
| Application engineering | Python, SQL, FastAPI, Flask, Streamlit, React, TypeScript, WebSockets, SQLAlchemy |
| Data engineering | PostgreSQL, MySQL, Snowflake, Pandas, Airflow, data pipelines, query optimization |
| Cloud and deployment | AWS SageMaker, ECR, S3, RDS; Google Cloud Vertex AI and Cloud Run; Docker, Kubernetes, GitHub Actions |
| Evaluation and observability | MLflow, LangSmith, Prometheus, Grafana, focused application tests and retrieval evaluation |
| Analytics and vision | scikit-learn, OpenCV, MediaPipe, Power BI, forecasting, rasterio, GeoPandas |

---

## 07 / Case studies and research

**Section headline:** Beyond the public demos.

These summaries come from the CV and profile. Use a “Discuss this work” action where there is no reviewed public implementation to link.

### Company Brain & Executive Task Triage

**Type:** Internal company work

I work on company knowledge structures, retrieval applications, and operational task triage. One workflow connects ChatGPT, Google Drive, and Asana across eight stages, with source links, task ownership, missing-information flags, and CEO approval before action.

**Stack:** Python · FastAPI · Streamlit · Docker · Google Cloud · Asana · Google Drive

**Action:** [Discuss this work](mailto:nuwanga69@gmail.com?subject=Company%20Brain%20and%20Task%20Triage)

### Agentic Retrieval for E-Commerce

**Type:** Portfolio case study

An agentic retrieval system combining SQL product data, vector retrieval, and object-storage sources. LangGraph coordinates the workflow, while LangSmith traces agent execution. The focus is connecting different information sources into a product-question-answering workflow.

**Stack:** LangChain · LangGraph · LangSmith · Weaviate · SQL · Amazon S3

**Action:** [Discuss this project](mailto:nuwanga69@gmail.com?subject=Agentic%20RAG%20E-Commerce%20Project)

### Customer Support Agent with Hybrid Memory

**Type:** Portfolio case study

A stateful customer-support agent using hybrid conversational memory to keep relevant context while limiting repeated history. In extended-dialogue project tests, the approach reduced token usage by more than 70%.

**Stack:** LangChain · ChromaDB · FastAPI · Docker

**Action:** [Discuss this project](mailto:nuwanga69@gmail.com?subject=Hybrid%20Memory%20Support%20Agent)

### GeoNIM Satellite Analyzer

**Type:** Multimodal AI project

A pipeline for multi-gigabyte satellite imagery that uses image tiling and NVIDIA NIM vision-language inference to extract structured environmental observations. The workflow maps anomalies such as deforestation without requiring a local GPU for inference.

**Stack:** Python · NVIDIA NIM · FastAPI · rasterio · GeoPandas · Google Cloud

**Action:** [Discuss this project](mailto:nuwanga69@gmail.com?subject=GeoNIM%20Satellite%20Analyzer)

### NVIDIA DGX Spark — Enterprise AI Research

**Type:** Infrastructure research

I evaluated DGX Spark as a potential platform for company AI workloads involving documents, images, audio, and video. The research covered laptop connectivity, model-training and image-generation requirements, and hardware considerations.

My research direction is a local enterprise AI workbench that combines document retrieval, multimodal understanding, and tool-using agents evaluated against business tasks.

**Focus:** Local AI infrastructure · Multimodal workloads · Model requirements · Workflow evaluation

**Action:** [Discuss this research](mailto:nuwanga69@gmail.com?subject=DGX%20Spark%20Enterprise%20AI%20Research)

---

## 08 / Education and credentials

**Section headline:** Education, training, and recognition.

| Credential | Detail |
|---|---|
| Degree | Bachelor of Information Technology, Specialization in Data Science — Sri Lanka Institute of Information Technology (SLIIT), February 2020 – March 2024 |
| AWS certification | AWS Certified Data Engineer – Associate (DEA-C01), earned in 2024 |
| NVIDIA training | NVIDIA Agentic AI training — completed |
| Datathon award | SLIIT Datathon 2022 — finalist and merit award for an AI-based monkeypox detection model |
| ML Nexus award | Second Runner-Up — ML Nexus Quiz Competition, University of Colombo |

Keep this section factual and compact. Certificate verification buttons can be added when the exact credential links are supplied.

---

## 09 / Contact

**Section headline:** Let’s build useful AI.

I’m interested in AI engineering roles and collaborations involving agentic workflows, retrieval systems, conversational applications, and cloud deployment. Based in Sri Lanka, I’m open to international remote opportunities and relocation.

**Primary action:** [Email Nuwanga](mailto:nuwanga69@gmail.com)

**Email:** nuwanga69@gmail.com

**Social actions:** [GitHub](https://github.com/Nuwanga-Wijamuni) · [LinkedIn](https://www.linkedin.com/in/nuwanga-wijamuni-3bb4b8221/) · [X](https://x.com/Nuwanga98)

**Footer copy:** Nuwanga Wijamuni · AI Engineer · From knowledge to useful action.

---

## Page metadata

**Page title:** Nuwanga Wijamuni | AI Engineer — Agentic AI, RAG & Cloud Systems

**Meta description:** Explore Nuwanga Wijamuni’s AI engineering projects, including agent workflows, document retrieval, voice interfaces, and cloud systems. Based in Sri Lanka.

---

## Editorial notes — keep these outside the published page

1. **Experience dates and credential wording:** The draft uses the latest supplied CV: HSB starts in October 2025, the role is contractual, and NVIDIA is listed as completed Agentic AI training. Earlier conversation information differed. Do not replace “training” with “NVIDIA-Certified Professional” until the exact professional credential is provided or confirmed.
2. **Skyward’s current stack:** The live README now describes Groq and GPT-OSS 120B rather than the Gemini setup in the CV. The copy follows the current repository. It does not claim real ticket issuance, payments, persistent conversation memory, or live provider verification.
3. **Medical RAG’s actual source:** Code inspected uses LlamaParse, Google text-embedding-004, Weaviate, and Groq GPT-OSS 120B. This is more specific than parts of the README. The Hugging Face Space returned a runtime-error page during review; it is not included as an active “Try demo” button.
4. **Repository content:** AgenticRAGECommerce and NLTOSQL-FastAPI currently expose only brief README content. They are not presented as substantive code examples in the featured grid. E-commerce retrieval and NL-to-SQL contributions remain in the CV-based case study and experience copy.
5. **Other CV work:** A reviewed public repository was not found for GeoNIM, the hybrid-memory support agent, DGX Spark research, or internal Company Brain work. Their buttons lead to email rather than invented source links. DGX Spark is labelled research, not deployed hardware ownership.
6. **Metrics:** The 70% token reduction is restricted to the extended-dialogue project tests described in the CV. The sub-four-second Snowflake result applies to the selected queries optimized at One Billion Tech. Neither is presented as a universal performance guarantee. No fake skill percentages, activity counts, or reliability scores are used.
7. **Project selection:** Show the five featured repositories on the homepage. Additional case studies can sit below the toolkit or on a dedicated work page; keep their status labels visible.
8. **Photo:** Use the supplied portrait as-is for this content pass. No retouching or replacement image is needed.
9. **GitHub activity:** If added during implementation, use dated or live-backed activity with an explicit label. A decorative grid should not be presented as real contribution history.

## Review sources

- Supplied CV: “Nuwanga Wijamuni AIEngineer.pdf,” uploaded in this conversation.
- [GitHub profile README](https://github.com/Nuwanga-Wijamuni/Nuwanga-Wijamuni/blob/main/README.md)
- [Skyward README](https://github.com/Nuwanga-Wijamuni/flight-booking-agent/blob/main/README.md)
- [Gourmet Express README](https://github.com/Nuwanga-Wijamuni/AIVisualAgent/blob/main/README.md)
- [Document RAG README](https://github.com/Nuwanga-Wijamuni/RAG_Docker/blob/main/README.md)
- [Medical RAG repository](https://github.com/Nuwanga-Wijamuni/Verifiable-Medical-RAG), including ingestion, embedding, retrieval, generation, and evaluation files.
- [Focus tracker README](https://github.com/Nuwanga-Wijamuni/real-time-focus-tracker/blob/main/README.md)
- [LinkedIn profile](https://www.linkedin.com/in/nuwanga-wijamuni-3bb4b8221/)
- X handle recovered from prior personal context: @Nuwanga98.

The review confirms repository links and inspects documentation and selected source files. It does not certify project performance or run the applications.
