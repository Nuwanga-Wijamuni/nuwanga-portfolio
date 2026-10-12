export const profile = {
  name: 'Nuwanga Wijamuni',
  role: 'AI Engineer',
  email: 'nuwanga69@gmail.com',
  location: 'Negombo, Sri Lanka',
  cv: '/Nuwanga_Wijamuni_AIEngineer.pdf',
  socials: [
    { name: 'GitHub', url: 'https://github.com/Nuwanga-Wijamuni' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nuwanga-wijamuni-3bb4b8221/' },
    { name: 'X', url: 'https://x.com/Nuwanga98' },
  ],
}

export type Project = {
  slug: string
  number: string
  name: string
  subtitle: string
  category: string
  description: string
  scope: string
  repo: string
  tags: string[]
  problem: string
  built: string[]
  features: string[]
  decisions: { title: string; text: string }[]
  flow: string[]
  boundaries: string
  source: string
}

export const projects: Project[] = [
  {
    slug: 'skyward', number: '01', name: 'Skyward',
    subtitle: 'Flight discovery, one conversation away.',
    category: 'Agentic application',
    description: 'A conversational flight discovery app with offer comparison, quote review, and a clearly labelled booking simulation.',
    scope: 'Demo & sandbox',
    repo: 'https://github.com/Nuwanga-Wijamuni/flight-booking-agent',
    tags: ['FastAPI', 'LangGraph', 'Groq', 'React', 'TypeScript', 'SQLAlchemy'],
    problem: 'A travel request starts as a sentence, but searching and confirming a flight requires structured, validated information. This project explores that transition while keeping the final action under the user’s control.',
    built: [
      'I built a React and TypeScript interface backed by FastAPI and a LangGraph request-extraction workflow. The app converts a trip request into validated search parameters and compares offers from built-in demo inventory or an optional Duffel test adapter.',
      'Selected offers are reviewed through expiring quotes. Explicit confirmation creates a persistent local simulation record; idempotency keys and database constraints help prevent duplicates. Groq can provide structured natural-language extraction, with an offline parser available for the default demo.',
    ],
    features: ['Natural-language request extraction', 'Structured search and budget filtering', 'Offer comparison and itinerary review', 'Time-limited quotes', 'Explicit user confirmation', 'Persistent, idempotent booking simulations'],
    decisions: [
      { title: 'Separate language from execution', text: 'LangGraph and structured outputs extract the request; backend validation controls the search and confirmation workflow.' },
      { title: 'Confirm before recording', text: 'The user reviews a quote and confirms the itinerary before a simulation is created.' },
      { title: 'Make the demo reproducible', text: 'Built-in inventory and local SQLite let the default workflow run without provider credentials. PostgreSQL and Duffel test search are optional.' },
    ],
    flow: ['Trip request', 'Extract & validate', 'Compare offers', 'Review quote', 'Confirm simulation'],
    boundaries: 'Every booking is simulated. No payment is collected and no airline ticket is issued. The current public version is stateless and focuses on one-way searches for one adult; provider integrations require separate account verification.',
    source: 'Current public README and backend dependency file, reviewed 12 October 2026.',
  },
  {
    slug: 'gourmet-express', number: '02', name: 'Gourmet Express',
    subtitle: 'Say it. See the interface respond.',
    category: 'Voice + visual interaction',
    description: 'Spoken requests become menu navigation and shopping-cart actions through AI-selected tool calls.',
    scope: 'Portfolio application',
    repo: 'https://github.com/Nuwanga-Wijamuni/AIVisualAgent',
    tags: ['OpenAI Realtime API', 'React', 'FastAPI', 'WebSockets'],
    problem: 'A conversational assistant becomes more useful when it can interact with the interface the user is looking at. This project connects natural-language food requests to visible menu and cart changes.',
    built: [
      'I connected a React menu carousel and shopping cart to a FastAPI backend using WebSockets. Browser speech recognition transcribes a request and sends the text to the backend, which integrates with the OpenAI Realtime API.',
      'The model can select menu-navigation and cart-update tools. The backend executes those actions and broadcasts the updated state to connected clients.',
    ],
    features: ['Voice-command input', 'AI-controlled menu navigation', 'Shopping-cart updates', 'Explicit application tools', 'Transcripts and responses', 'Real-time state synchronization'],
    decisions: [
      { title: 'Give the model specific tools', text: 'Menu navigation and cart updates are concrete operations rather than free-form instructions to modify the application.' },
      { title: 'Keep the interface synchronized', text: 'WebSocket messages carry state changes from the backend to the connected React clients.' },
      { title: 'Show the result of a request', text: 'The visible menu and cart provide direct feedback on what the agent understood and changed.' },
    ],
    flow: ['Spoken request', 'Speech transcript', 'Model tool call', 'Backend action', 'Interface update'],
    boundaries: 'The public project demonstrates voice-driven menu and cart interaction. It does not establish a production payment, order-fulfilment, or restaurant operations system.',
    source: 'Public repository README, reviewed 12 October 2026.',
  },
  {
    slug: 'document-rag', number: '03', name: 'Document RAG',
    subtitle: 'Turn a folder of PDFs into useful context.',
    category: 'Document intelligence',
    description: 'A session-based PDF knowledge API with document ingestion, embeddings, vector retrieval, and containerized setup.',
    scope: 'Public API project',
    repo: 'https://github.com/Nuwanga-Wijamuni/RAG_Docker',
    tags: ['Weaviate', 'FastAPI', 'Sentence Transformers', 'Groq', 'Docker'],
    problem: 'Documents contain useful knowledge, but a language model needs the relevant passages at the right time. This project turns uploaded PDFs into retrievable context with document and session metadata.',
    built: [
      'I built a pipeline that extracts PDF text with PyMuPDF, divides it into chunks, generates Sentence Transformer embeddings, and stores the results in Weaviate.',
      'Questions retrieve relevant context before answer generation through Groq. Session management and duplicate checks support the upload workflow, while Docker Compose packages the API and vector database for repeatable local setup.',
    ],
    features: ['Session-based document management', 'PDF extraction and chunking', 'Embedding generation', 'Semantic retrieval', 'Filename and page metadata', 'Docker Compose setup'],
    decisions: [
      { title: 'Keep context organized', text: 'Session identifiers associate documents and queries with the relevant workspace.' },
      { title: 'Retain useful metadata', text: 'Filename and page metadata travel with the text chunks so retrieved context remains identifiable.' },
      { title: 'Package the full stack', text: 'The API and vector database share a documented containerized development setup.' },
    ],
    flow: ['PDF upload', 'Extract & chunk', 'Embed & store', 'Retrieve context', 'Generate answer'],
    boundaries: 'This is a document-retrieval API project with local setup instructions. The public project focuses on contextual retrieval and reproducible local setup.',
    source: 'Public repository README, reviewed 12 October 2026.',
  },
  {
    slug: 'medical-rag', number: '04', name: 'Verifiable Medical RAG',
    subtitle: 'An answer should leave a trail.',
    category: 'Verifiable retrieval',
    description: 'A research prototype connecting record-based answers to source metadata and year-filtered retrieval.',
    scope: 'Research prototype',
    repo: 'https://github.com/Nuwanga-Wijamuni/Verifiable-Medical-RAG',
    tags: ['LlamaParse', 'Weaviate', 'Google embeddings', 'Groq', 'FastAPI'],
    problem: 'A question about a record can depend on which document and year it refers to. This prototype explores retrieval that preserves those distinctions and makes its supporting context easier to inspect.',
    built: [
      'I developed a pipeline using LlamaParse, Google text-embedding-004, and Weaviate. Source, page, year, and chunk identifiers are retained through the retrieval workflow.',
      'The generation layer uses Groq with GPT-OSS 120B and instructions to answer from the supplied context. An evaluation script checks expected values across years and inspects the returned citation metadata.',
    ],
    features: ['Structured PDF parsing', 'Source and page metadata', 'Year-based retrieval filtering', 'Source-linked answer generation', 'Chunk identifiers', 'Value and citation evaluation checks'],
    decisions: [
      { title: 'Filter by the right year', text: 'Metadata filtering constrains retrieval when a question refers to a specific year.' },
      { title: 'Carry the evidence forward', text: 'Source metadata accompanies retrieved chunks instead of being discarded after embedding.' },
      { title: 'Inspect more than the answer text', text: 'The evaluation script examines expected values and citation years to expose retrieval mistakes.' },
    ],
    flow: ['Parse records', 'Embed & index', 'Filter by year', 'Retrieve evidence', 'Answer with sources'],
    boundaries: 'A research prototype for source-linked document retrieval, not a clinical decision system. The previously listed hosted demo was unavailable during review, so this portfolio links to the source repository.',
    source: 'Public README plus ingestion, embedding, retrieval, generation, and evaluation code, reviewed 12 October 2026.',
  },
  {
    slug: 'focus-tracker', number: '05', name: 'Focus & Attention Tracker',
    subtitle: 'Computer vision meets observability.',
    category: 'Vision + monitoring',
    description: 'A webcam experiment that visualizes head-pose estimates and rule-based focus-state labels in Grafana.',
    scope: 'Computer vision experiment',
    repo: 'https://github.com/Nuwanga-Wijamuni/real-time-focus-tracker',
    tags: ['OpenCV', 'MediaPipe', 'FastAPI', 'Prometheus', 'Grafana', 'Docker'],
    problem: 'Real-time computer vision applications need more than a model output: the signal must move through an application and become observable. This experiment connects head-pose estimation to a monitoring stack.',
    built: [
      'I connected browser webcam frames to a FastAPI WebSocket service and used MediaPipe and OpenCV to estimate head orientation. The application assigns state labels from those measurements.',
      'Prometheus collects exported metrics, while a Grafana dashboard displays head angles, label distribution, and trends. Docker Compose brings the application and monitoring services together.',
    ],
    features: ['Browser video-frame streaming', 'Head-pose estimation', 'Rule-based state labels', 'Prometheus metrics export', 'Grafana visualization', 'Containerized services'],
    decisions: [
      { title: 'Separate inference and monitoring', text: 'Vision processing produces measurements; the monitoring services collect and visualize them.' },
      { title: 'Make behavior observable', text: 'Exported metrics help inspect changing head angles and classification labels over time.' },
      { title: 'Keep the scope explicit', text: 'Head pose is a proxy. The interface labels do not directly measure a person’s cognitive attention.' },
    ],
    flow: ['Webcam frames', 'Estimate head pose', 'Assign state label', 'Export metrics', 'Visualize trends'],
    boundaries: 'Head orientation is a proxy, not a direct measurement of cognitive attention. This is an experimental computer vision and monitoring application.',
    source: 'Public repository README, reviewed 12 October 2026.',
  },
]

export const experience = [
  {
    company: 'HSB Marine Constructions', role: 'AI Engineer', type: 'Contract',
    dates: 'Oct 2025 — Present', number: '01',
    summary: 'Internal knowledge applications and approval-based automation for company operations.',
    points: [
      'Developed an internal RAG application with retrieval APIs, a Streamlit interface, and Docker Compose.',
      'Built and tested an eight-stage executive task-triage workflow connecting ChatGPT, Google Drive, and Asana, with task ownership and CEO approval.',
      'Refined source mapping, duplicate checks, missing-information flags, and completion-evidence requirements.',
      'Designed Company Brain knowledge structures and evaluated a retrieval architecture using Vertex AI Search, Cloud Run, Gemini, and speech-to-text.',
    ],
    tags: ['Enterprise knowledge', 'Agent workflows', 'Google Cloud'],
  },
  {
    company: 'One Billion Tech', role: 'Data Engineer Intern', type: 'Colombo, Sri Lanka',
    dates: 'Aug 2024 — Jul 2025', number: '02',
    summary: 'AI retrieval applications, data performance, and repeatable cloud deployment.',
    points: [
      'Built and deployed a LLaMA 3.3 and Weaviate RAG application using Docker, Amazon ECR, and SageMaker.',
      'Brought selected Snowflake queries below four seconds using materialized views and datetime clustering keys.',
      'Developed a natural language-to-SQL application with FastAPI, Groq, SQLAlchemy, and Snowflake.',
      'Implemented stored-procedure logging for data-load visibility and auditing.',
    ],
    tags: ['RAG', 'Snowflake', 'AWS', 'Natural language-to-SQL'],
  },
  {
    company: 'MAS Holdings', role: 'Data Scientist Intern', type: 'Colombo, Sri Lanka',
    dates: 'Mar 2023 — Mar 2024', number: '03',
    summary: 'Forecasting and analytics that connect business questions to data.',
    points: [
      'Built and evaluated ARIMA, Prophet, and LSTM models for Walmart sales forecasting at MAS ACME.',
      'Automated data preparation pipelines for model training and validation.',
      'Developed Power BI dashboards for MAS Kreeda and Bodyline.',
    ],
    tags: ['Forecasting', 'Data pipelines', 'Power BI'],
  },
]

export const principles = [
  { number: '01', title: 'Start with the source.', text: 'Retrieve relevant information and keep the metadata needed to inspect where an answer came from.', graphic: 'crosshair' },
  { number: '02', title: 'Leave a clear trail.', text: 'Use structured outputs, tracing, and explicit tool boundaries so agent behavior is easier to follow.', graphic: 'branch-workflow' },
  { number: '03', title: 'Keep people involved.', text: 'Add review and confirmation where a workflow moves from a suggestion to an action.', graphic: 'output-pill' },
  { number: '04', title: 'Make it repeatable.', text: 'Use focused evaluation, containerized setup, and clear configuration to reproduce results.', graphic: 'binary-matrix' },
]

export const technologies = [
  ['python', 'Python'], ['fastapi', 'FastAPI'], ['langgraph', 'LangGraph'],
  ['langchain', 'LangChain'], ['weaviate', 'Weaviate'], ['nvidia', 'NVIDIA'],
  ['docker', 'Docker'], ['amazonaws', 'AWS'], ['googlecloud', 'Google Cloud'],
  ['react', 'React'], ['typescript', 'TypeScript'], ['sql', 'SQL'],
]

export const toolkit = [
  { title: 'Agents & retrieval', tools: 'LangGraph · LangChain · LangSmith · RAG · Weaviate · ChromaDB · Sentence Transformers · LlamaParse' },
  { title: 'Applications & data', tools: 'Python · SQL · FastAPI · Flask · Streamlit · React · TypeScript · WebSockets · SQLAlchemy · Snowflake · PostgreSQL' },
  { title: 'Cloud & deployment', tools: 'AWS SageMaker / ECR / S3 / RDS · Google Cloud Vertex AI / Cloud Run · Docker · Kubernetes · GitHub Actions' },
  { title: 'Evaluation & ML', tools: 'MLflow · Prometheus · Grafana · Hugging Face Transformers · QLoRA / PEFT · OpenCV · MediaPipe · Power BI' },
]

export const additionalWork = [
  { name: 'Company Brain & Executive Task Triage', type: 'Internal company work', text: 'Company knowledge structures and an eight-stage operational triage workflow, with source links, task ownership, missing-information flags, and approval before action.', tags: ['Google Cloud', 'Asana', 'Google Drive'] },
  { name: 'Agentic Retrieval for E-Commerce', type: 'Portfolio case study', text: 'A product-question-answering workflow combining SQL, vector retrieval, and object-storage sources, coordinated with LangGraph and traced with LangSmith.', tags: ['LangGraph', 'Weaviate', 'SQL', 'S3'] },
  { name: 'Customer Support with Hybrid Memory', type: 'Portfolio case study', text: 'A stateful support agent that retains relevant conversational context while limiting repeated history. Extended-dialogue project tests reported more than 70% lower token usage.', tags: ['LangChain', 'ChromaDB', 'FastAPI'] },
  { name: 'GeoNIM Satellite Analyzer', type: 'Multimodal AI project', text: 'Image tiling and NVIDIA NIM vision-language inference for multi-gigabyte satellite imagery, structured environmental observations, and mapped anomalies.', tags: ['NVIDIA NIM', 'rasterio', 'GeoPandas'] },
]

export const credentials = [
  { number: '01', title: 'AWS Certified Data Engineer — Associate', subtitle: 'DEA-C01 · Earned in 2024', icon: 'amazonaws' },
  { number: '02', title: 'NVIDIA Agentic AI training', subtitle: 'Completed', icon: 'nvidia' },
]

export function projectPath(project: Project) { return '/projects/' + project.slug + '/' }
export function normalizePath(path: string) { return path.replace(/\/+$/, '') || '/' }
export function getProject(path: string) {
  const normalized = normalizePath(path)
  return projects.find(project => normalized === '/projects/' + project.slug)
}
export function pageMeta(path: string) {
  const project = getProject(path)
  if (project) return { title: project.name + ' | Nuwanga Wijamuni', description: project.description }
  if (normalizePath(path) !== '/') return { title: 'Page not found | Nuwanga Wijamuni', description: 'Return to Nuwanga Wijamuni’s portfolio to explore AI engineering projects.' }
  return { title: 'Nuwanga Wijamuni | AI Engineer', description: 'AI Engineer building agentic workflows, retrieval systems, conversational applications, and cloud infrastructure. Explore selected projects and experience.' }
}
