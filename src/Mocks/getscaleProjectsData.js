import { textFile } from "../assets";

const preview = textFile;

export const GETSCALE_PROJECTS = [
  {
    id: "app-postgres-bastion-server",
    folderName: "Database Maintenance Gateway",
    image: preview,
    description: "A secure private doorway that lets approved maintenance tools reach the company database safely — without exposing it to the open internet.",
    pdfDescription: `Database Maintenance Gateway

WHAT IT IS
Think of this as a guarded side entrance to the company database. Most apps connect through a shared pool, but some jobs — like database updates — need a direct, trusted connection. This server provides that safe path.

WHAT IT DOES
• Creates a secure tunnel for database maintenance work
• Protects the main database from public exposure
• Used when deploying schema changes`,
  },
  {
    id: "consent-qualityaffordablecare",
    folderName: "Healthcare Consent Form",
    image: preview,
    description: "A simple consent page where visitors agree to terms before continuing with healthcare coverage information.",
    pdfDescription: `Healthcare Consent Form

WHAT IT IS
A short, friendly web page that asks visitors to agree to privacy and consent terms before they continue learning about healthcare coverage options.

WHAT IT DOES
• Shows a clear consent form with radio choices
• Redirects visitors to the main form after they agree
• Tracks interactions for compliance`,
  },
  {
    id: "copilotcareers-nextjs",
    folderName: "Job Board (Modern)",
    image: preview,
    description: "A modern job board where people browse and search open positions.",
    pdfDescription: `Job Board (Modern)

WHAT IT IS
A newer version of the company job board — a website where job seekers explore open roles, read descriptions, and find their next opportunity.

WHAT IT DOES
• Lists jobs pulled from company data sources
• Lets visitors search and filter openings
• Uses the shared design system for a consistent look`,
  },
  {
    id: "copilotcareers.org",
    folderName: "Job Board",
    image: preview,
    description: "A public job board with search, filters, and the ability to track which jobs you've already applied to.",
    pdfDescription: `Job Board

WHAT IT IS
A full-featured careers website. Job seekers can browse listings, filter by location or role, and keep track of applications.

WHAT IT DOES
• Searchable job listings with rich job detail pages
• Filters for location, type, and other criteria
• Remembers which jobs you've already applied to
• Optimized for search engines`,
  },
  {
    id: "dash",
    folderName: "Partner Marketing Dashboard",
    image: preview,
    description: "A business dashboard that shows marketing partner reports and campaign performance in one place.",
    pdfDescription: `Partner Marketing Dashboard

WHAT IT IS
An internal dashboard for marketing teams. It connects to a partner marketing platform and displays campaign reports in one easy-to-read place.

WHAT IT DOES
• Pulls performance reports automatically
• Shows campaign data in charts and tables
• Helps teams see what's working without logging into multiple tools`,
  },
  {
    id: "dash-test",
    folderName: "Dashboard Prototype",
    image: preview,
    description: "A sandbox version of internal dashboards used to test new charts and data layouts before launch.",
    pdfDescription: `Dashboard Prototype

WHAT IT IS
A test environment for trying out dashboard ideas — new chart types, layouts, and data connections — without affecting the live product.

WHAT IT DOES
• Experiments with spreadsheet data sources
• Tries different visual styles and UI libraries
• Serves as a proof-of-concept for production dashboards`,
  },
  {
    id: "excel-convertor",
    folderName: "Excel Redirect Tool",
    image: preview,
    description: "Converts spreadsheet rows into website redirect rules automatically — handy for managing lots of marketing links at once.",
    pdfDescription: `Excel Redirect Tool

WHAT IT IS
A small utility that reads an Excel spreadsheet and turns each row into a website redirect rule. Great when marketing teams manage hundreds of tracking links in a sheet.

WHAT IT DOES
• Reads spreadsheet data and generates redirect configuration
• Saves time compared to writing redirect rules by hand
• Keeps marketing link management organized`,
  },
  {
    id: "gcf-alto-application-creation-pipeline",
    folderName: "Application Automation Pipeline",
    image: preview,
    description: "An automated backend that creates new customer applications and alerts the team when something needs urgent attention.",
    pdfDescription: `Application Automation Pipeline

WHAT IT IS
A behind-the-scenes automation. When a new customer application needs to be created, this pipeline handles the steps automatically and notifies the on-call team if something goes wrong.

WHAT IT DOES
• Automates application setup steps
• Sends alerts to engineers on failures
• Reduces manual work for operations teams`,
  },
  {
    id: "gcf-form-submission-api",
    folderName: "Form Submission API",
    image: preview,
    description: "A central receiving point where forms from many different websites send their data safely.",
    pdfDescription: `Form Submission API

WHAT IT IS
Imagine one mailbox that every company web form can send to. This service collects form submissions from multiple websites and stores them in the right place.

WHAT IT DOES
• Accepts form data from various marketing sites
• Validates and routes submissions to the correct system
• Acts as a single, reliable entry point for lead data`,
  },
  {
    id: "gcf-getsales-postgres-api",
    folderName: "Secure Database API",
    image: preview,
    description: "A secure gatekeeper that lets approved apps talk to the company database without exposing it directly online.",
    pdfDescription: `Secure Database API

WHAT IT IS
The company database used to sit on the public internet. This project removed that risk by placing a secure middleman in front — only verified services with proper credentials can request data.

WHAT IT DOES
• Blocks unauthorized database access
• Uses cloud identity instead of passwords
• Lets each service only access the databases it's allowed to`,
  },
  {
    id: "gcf-growth-forward-data-service",
    folderName: "Growth Data Service",
    image: preview,
    description: "A backend service that moves and shares marketing and growth data between internal company systems.",
    pdfDescription: `Growth Data Service

WHAT IT IS
A data pipeline that helps marketing and growth teams share information between tools. It forwards data so reports, dashboards, and automations stay in sync.

WHAT IT DOES
• Moves growth metrics between internal systems
• Runs as a cloud service that scales automatically
• Keeps marketing data flowing without manual exports`,
  },
  {
    id: "gcf-gs1-populate-messages-api",
    folderName: "Message Loader Service",
    image: preview,
    description: "A background worker that loads new customer text messages into the sales inbox when they arrive.",
    pdfDescription: `Message Loader Service

WHAT IT IS
When a customer texts back, this service picks up that message and adds it to the sales team's inbox. It runs in the background so reps always see the latest conversation.

WHAT IT DOES
• Listens for new message events
• Loads messages into the sales inbox
• Keeps conversation history complete and up to date`,
  },
  {
    id: "gcf-gs1-realtime-websocket-service",
    folderName: "Real-Time Inbox Updates",
    image: preview,
    description: "Makes the sales inbox feel instant — new texts and status changes appear without refreshing the page.",
    pdfDescription: `Real-Time Inbox Updates

WHAT IT IS
Ever used a chat app where messages pop in live? This service does that for the sales inbox. Reps see new texts, typing updates, and conversation changes the moment they happen.

WHAT IT DOES
• Pushes new messages to the screen instantly
• Shows when conversation status changes
• Works with the main sales dashboard`,
  },
  {
    id: "getscale-ui",
    folderName: "Design System Showcase",
    image: preview,
    description: "A demo app showing the shared design system, login flow, and how components look together.",
    pdfDescription: `Design System Showcase

WHAT IT IS
A living preview of the company brand and component library. Designers and developers use it to see how buttons, forms, and layouts should look across products.

WHAT IT DOES
• Demonstrates the shared visual style
• Includes login and authentication flow
• Serves as a reference for building new sites`,
  },
  {
    id: "getscale-ui-lander",
    folderName: "Design System Playground",
    image: preview,
    description: "An interactive demo where you can browse marketing page blocks, multi-step forms, and UI building blocks.",
    pdfDescription: `Design System Playground

WHAT IT IS
A hands-on showroom for the company design system. You can scroll through real marketing sections, step-by-step forms, and UI pieces exactly as they'd appear on a live site.

WHAT IT DOES
• Previews marketing blocks and landing page sections
• Shows multi-step form flows in action
• Helps teams pick components before building a new page`,
  },
  {
    id: "gs1-app",
    folderName: "Sales Inbox Dashboard",
    image: preview,
    description: "The main sales inbox where reps monitor AI-assisted text conversations with leads and step in when a human touch is needed.",
    pdfDescription: `Sales Inbox Dashboard

WHAT IT IS
The heart of the sales workflow. Sales reps open one inbox to watch AI-powered text conversations with potential customers. When the AI needs help — or a lead is ready for a human — reps jump in, read the full history, and reply.

WHAT IT DOES
• Shows all escalated text conversations in one inbox
• Lets reps send messages, mark outcomes, or place calls
• Updates in real time — no page refresh needed
• Embeds inside the company CRM
• Filters conversations by owner, type, and status
• Sign in with company Google account`,
  },
  {
    id: "gsi_web_universal_click_tracker_config",
    folderName: "Smart Link Redirector",
    image: preview,
    description: "Sends visitors to the right landing page based on who clicked the link — used to track marketing campaigns.",
    pdfDescription: `Smart Link Redirector

WHAT IT IS
When someone clicks a marketing link, this tool figures out where they should land based on campaign settings stored in the company database. It's how teams run personalized ads without building a separate page for every variation.

WHAT IT DOES
• Reads campaign info from the link
• Looks up the correct destination page
• Redirects the visitor instantly
• Helps marketing measure which campaigns drive clicks`,
  },
  {
    id: "invoice-generator",
    folderName: "Invoice Generator",
    image: preview,
    description: "Fill in invoice details in a simple form and download a polished PDF invoice ready to send to clients.",
    pdfDescription: `Invoice Generator

WHAT IT IS
A straightforward tool for creating professional invoices. Enter client details, line items, and amounts — then download a print-ready PDF.

WHAT IT DOES
• Create and edit invoices in a visual form
• Preview the invoice before downloading
• Save invoices locally so you can revisit them
• Export as PDF for email or printing`,
  },
  {
    id: "js-growth-web-tracker-pixel",
    folderName: "Website Tracking Pixel",
    image: preview,
    description: "A tiny script placed on marketing websites to count visits and understand how people interact with pages.",
    pdfDescription: `Website Tracking Pixel

WHAT IT IS
A small piece of JavaScript that marketing teams embed on their websites. It quietly records page views and clicks so growth teams know which campaigns and pages perform best.

WHAT IT DOES
• Tracks visitor activity on external websites
• Sends data back to internal analytics systems
• Lightweight — visitors barely notice it's there`,
  },
  {
    id: "mcp_server_new",
    folderName: "AI Tools Integration Hub",
    image: preview,
    description: "Lets AI assistants safely use internal company tools — controlled access to run approved tasks.",
    pdfDescription: `AI Tools Integration Hub

WHAT IT IS
A bridge between AI coding assistants and internal company systems. It exposes a set of safe, approved actions the AI can perform — managing scenarios, checking dev environments, and admin tasks.

WHAT IT DOES
• Gives AI assistants controlled access to internal tools
• Runs in the cloud or locally for developers
• Handles authentication so only authorized users connect
• Powers smarter automation for engineering teams`,
  },
  {
    id: "my-nextjs-app",
    folderName: "Website Starter Template",
    image: preview,
    description: "A blank starter website used for quick prototypes and trying new ideas.",
    pdfDescription: `Website Starter Template

WHAT IT IS
A clean starting point for new web experiments. When someone needs to test an idea quickly, they spin this up instead of building from scratch.

WHAT IT DOES
• Provides a ready-made website skeleton
• Used for prototypes and learning exercises`,
  },
  {
    id: "new-page-webflow",
    folderName: "Marketing Page Export",
    image: preview,
    description: "A marketing page design exported from a visual web builder, ready to host or integrate.",
    pdfDescription: `Marketing Page Export

WHAT IT IS
A new marketing page designed in a visual web builder and exported as web files. Designers build the look; developers host or connect it to the rest of the stack.

WHAT IT DOES
• Delivers a polished marketing page layout
• Exported HTML/CSS ready for deployment`,
  },
  {
    id: "payload-website-starter",
    folderName: "CMS Website Starter",
    image: preview,
    description: "A full website with an admin panel so non-developers can edit pages, blog posts, and forms without coding.",
    pdfDescription: `CMS Website Starter

WHAT IT IS
A complete website template with a built-in content management system. Marketing and content teams can log into an admin panel to update pages, publish blog posts, and manage forms — no developer needed for every change.

WHAT IT DOES
• Public-facing website with modern design
• Admin dashboard for editing content
• Form builder, SEO tools, and media library included
• Deployable to cloud hosting with one click`,
  },
  {
    id: "pdf-filler",
    folderName: "PDF Filler",
    image: preview,
    description: "Upload a PDF, drag text fields onto it, fill them in, and download the completed document.",
    pdfDescription: `PDF Filler

WHAT IT IS
A web app for working with PDF forms. Upload any PDF, place text boxes where you need them, type your answers, and download the finished file.

WHAT IT DOES
• Upload PDF documents
• Drag and drop text fields anywhere on the page
• Fill in fields and preview the result
• Download a completed, print-ready PDF`,
  },
  {
    id: "pixel-tracker",
    folderName: "Tracking Pixel Demo",
    image: preview,
    description: "A test app for experimenting with how website tracking pixels collect visitor data.",
    pdfDescription: `Tracking Pixel Demo

WHAT IT IS
A development sandbox for testing tracking pixel behavior — how pages load the script, what data gets captured, and how it reports back.

WHAT IT DOES
• Demonstrates tracking pixel integration
• Used to validate analytics before going live on real sites`,
  },
  {
    id: "policysaverinsurance_clone_react",
    folderName: "Insurance Marketing Site",
    image: preview,
    description: "A marketing website for insurance quotes, helping visitors learn about coverage options.",
    pdfDescription: `Insurance Marketing Site

WHAT IT IS
A consumer-facing insurance marketing website. Visitors browse information about policies, see engaging visuals, and are guided toward requesting a quote.

WHAT IT DOES
• Presents insurance products with modern, animated design
• Guides visitors through the quote request journey
• Built as a responsive site for mobile and desktop`,
  },
  {
    id: "qac_web_quote_request_form_submissions_internal_medicare",
    folderName: "Medicare Quote Form",
    image: preview,
    description: "A guided form for collecting Medicare insurance quote requests from leads.",
    pdfDescription: `Medicare Quote Form

WHAT IT IS
A step-by-step form for collecting Medicare insurance quote requests. It walks users through questions and submits their information securely.

WHAT IT DOES
• Multi-step quote request form for Medicare plans
• Uses the shared form components
• Sends submissions to internal sales systems`,
  },
  {
    id: "quality-affordable-care",
    folderName: "Healthcare Coverage Website",
    image: preview,
    description: "The main public website helping people learn about and sign up for affordable healthcare coverage.",
    pdfDescription: `Healthcare Coverage Website

WHAT IT IS
A flagship consumer website for a healthcare coverage brand. It explains plan options, builds trust with professional design, and guides visitors toward getting a quote or enrolling.

WHAT IT DOES
• Educates visitors about healthcare plan options
• Captures leads through integrated forms
• Includes analytics to understand visitor behavior
• Packaged for reliable deployment`,
  },
  {
    id: "qualityaffordablecare-com",
    folderName: "Healthcare Consumer Portal",
    image: preview,
    description: "A consumer-facing healthcare website with scheduling, analytics, and lead capture features.",
    pdfDescription: `Healthcare Consumer Portal

WHAT IT IS
A public healthcare website with added features like date pickers for scheduling and deeper analytics tracking.

WHAT IT DOES
• Helps consumers explore healthcare coverage
• Tracks visitor behavior for marketing insights
• Connects to lead capture and follow-up workflows`,
  },
  {
    id: "sales-pilot-chat-app",
    folderName: "AI Sales Assistant Chat",
    image: preview,
    description: "A chat-style app where sales staff work alongside an AI copilot to get help with conversations and daily tasks.",
    pdfDescription: `AI Sales Assistant Chat

WHAT IT IS
Imagine a chat window where a salesperson talks to an AI assistant. The copilot helps draft messages, answer questions about leads, and speed up routine work.

WHAT IT DOES
• Chat interface with an AI sales assistant
• Helps reps get suggestions during live conversations
• Connects to a backend server for data and security`,
  },
  {
    id: "sales-pilot-chat-app-server",
    folderName: "Chat App Backend",
    image: preview,
    description: "The server that powers the sales chat app — handles data, security, and database connections.",
    pdfDescription: `Chat App Backend

WHAT IT IS
Every chat app needs a brain behind it. This server handles login, data storage, and connections to company databases so the chat app can work securely.

WHAT IT DOES
• Authenticates users and protects API endpoints
• Reads and writes data from analytics databases
• Runs as a cloud API that the chat frontend calls`,
  },
  {
    id: "shp_web_quote_request_form_submissions_internal_medicare",
    folderName: "Partner Medicare Quote Form",
    image: preview,
    description: "A Medicare quote request form built for a partner brand, using the same pattern as the main quote form.",
    pdfDescription: `Partner Medicare Quote Form

WHAT IT IS
A Medicare quote form built for a partner brand. It collects quote requests from people interested in Medicare coverage.

WHAT IT DOES
• Guided multi-step Medicare quote form
• Tracks visitor analytics
• Submits lead data to internal processing systems`,
  },
  {
    id: "storybook",
    folderName: "Shared UI Component Library",
    image: preview,
    description: "The shared component library — buttons, forms, wizards, and 50+ reusable pieces used across all company websites.",
    pdfDescription: `Shared UI Component Library

WHAT IT IS
The design building blocks for every product. Instead of rebuilding buttons and forms for each website, teams use this library — 50+ polished components that all look and behave the same way.

WHAT IT DOES
• Provides buttons, inputs, cards, modals, and more
• Includes a powerful multi-step form builder
• Documented in Storybook so anyone can browse examples
• Published as a package used across web apps`,
  },
  {
    id: "storybook-docs",
    folderName: "Component Documentation Site",
    image: preview,
    description: "A documentation website explaining how to use the shared UI components.",
    pdfDescription: `Component Documentation Site

WHAT IT IS
A readable guide for developers and designers who use the shared component library. It explains what each component does and shows live examples.

WHAT IT DOES
• Documents UI components with usage instructions
• Helps new team members get up to speed quickly`,
  },
  {
    id: "typeform_lander",
    folderName: "Conversational Landing Pages",
    image: preview,
    description: "Marketing landing pages with a one-question-at-a-time feel, connected to analytics and spreadsheets.",
    pdfDescription: `Conversational Landing Pages

WHAT IT IS
Landing pages where visitors answer one question at a time in a smooth, conversational flow. Used for lead generation campaigns with partner branding.

WHAT IT DOES
• Step-by-step landing page experience
• Sends leads to spreadsheets for tracking
• Includes analytics to measure conversion rates`,
  },
  {
    id: "voiceflow-lp",
    folderName: "Chatbot Landing Page",
    image: preview,
    description: "A landing page that connects visitors to an interactive chatbot experience.",
    pdfDescription: `Chatbot Landing Page

WHAT IT IS
A marketing landing page designed to launch visitors into a chatbot conversation. Used for interactive lead qualification flows.

WHAT IT DOES
• Presents campaign messaging on a landing page
• Hands off to a chatbot for Q&A
• Captures lead information through the conversation`,
  },
  {
    id: "web-aca-enrol",
    folderName: "Health Insurance Enrollment Site",
    image: preview,
    description: "A website guiding people through health insurance enrollment steps.",
    pdfDescription: `Health Insurance Enrollment Site

WHAT IT IS
A consumer website that walks people through signing up for health insurance. Clear steps, simple language, mobile-friendly.

WHAT IT DOES
• Explains enrollment options and deadlines
• Guides users through the sign-up process
• Built for accessibility on phones and desktops`,
  },
  {
    id: "web-getscale-components-lib",
    folderName: "Component Library Reference",
    image: preview,
    description: "A documentation and testing site for browsing and trying UI components.",
    pdfDescription: `Component Library Reference

WHAT IT IS
An internal reference site where developers browse, test, and copy UI components before using them in production apps.

WHAT IT DOES
• Live previews of every component
• Test pages for trying components in isolation
• Speeds up development across the team`,
  },
  {
    id: "web-qac-lead-form",
    folderName: "Healthcare Lead Capture Form",
    image: preview,
    description: "A lead capture form that collects contact info and sends it securely to the sales system.",
    pdfDescription: `Healthcare Lead Capture Form

WHAT IT IS
The form visitors fill out when they're interested in healthcare coverage. It collects name, contact info, and coverage preferences, then sends everything securely to the sales team.

WHAT IT DOES
• Multi-field lead capture with input validation
• Phone number formatting and address lookup
• Secure submission with encrypted signatures
• Integrates with marketing tracking`,
  },
  {
    id: "webflow-getscale-homepage",
    folderName: "Company Careers Homepage",
    image: preview,
    description: "The company homepage — team values, benefits, careers, and culture — built as a marketing site.",
    pdfDescription: `Company Careers Homepage

WHAT IT IS
The public face of the company as an employer. Visitors learn about team culture, benefits, core values, and career opportunities.

WHAT IT DOES
• Showcases company values like teamwork, growth, and ownership
• Highlights employee benefits and perks
• Invites candidates to explore open roles
• Built as a polished static marketing site`,
  },
];
