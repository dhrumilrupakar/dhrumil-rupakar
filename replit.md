# Overview

This is a modern personal portfolio website for Dhrumil Rupakar, an Information Technology student specializing in cybersecurity, networking, and cloud computing. The site features a hacker/cybersecurity aesthetic with a dark theme, neon green and electric blue accents, and showcases professional projects, skills, certifications, and contact capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom cybersecurity-themed color variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Fonts**: Google Fonts integration (Poppins, Inter, Architect's Daughter, etc.)
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submissions
- **Development Setup**: tsx for TypeScript execution in development
- **Build Process**: esbuild for server bundling, Vite for client bundling

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL
- **Development Storage**: In-memory storage implementation for development/testing
- **Data Models**: Contact submissions and user entities with proper TypeScript types

## Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not yet implemented
- **Prepared Infrastructure**: User table with username/password fields ready for future auth implementation
- **Session Management**: connect-pg-simple configured for PostgreSQL session storage

## External Dependencies
- **Database Hosting**: Neon Database (@neondatabase/serverless)
- **Deployment Platform**: Replit with specialized plugins for development
- **Email/Contact**: Contact form with database persistence (no email service integrated yet)
- **Asset Management**: Local asset storage in attached_assets directory
- **Development Tools**: Replit-specific Vite plugins for development experience

## Key Architectural Decisions

### Monorepo Structure
The application uses a monorepo approach with shared TypeScript types and schemas between client and server, enabling type safety across the full stack.

### Component Architecture
- Modular component design with separate files for each major section (Hero, About, Projects, Skills, etc.)
- Reusable UI components from Shadcn/ui for consistency
- Custom components built on top of Radix UI primitives for accessibility

### Styling Strategy
- CSS custom properties for theme management
- Tailwind CSS for utility-first styling
- Custom animations and gradients for cybersecurity aesthetic
- Mobile-responsive design with careful attention to typography

### Database Design
- Simple relational schema with room for expansion
- Type-safe operations using Drizzle ORM
- Migration-based schema management
- Prepared for multi-user scenarios despite being a personal portfolio

### Development Experience
- Hot module replacement via Vite
- TypeScript strict mode for type safety
- Comprehensive linting and build processes
- Replit-optimized development environment