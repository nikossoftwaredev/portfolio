# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Nikos Dimitrakopoulos built with Next.js 15.1.3 (App Router) and TypeScript. The site is deployed at https://ndimitrakopoulos.vercel.app/

## Development Commands

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn serve

# Clean install (removes node_modules and lock file)
yarn clear_install
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.1.3 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS + DaisyUI themes (30+ themes available)
- **Authentication**: NextAuth with Google provider
- **AI Integration**: OpenAI via AI SDK for chat functionality
- **UI Components**: Mix of custom components and shadcn/ui

### Directory Structure
```
/app
├── _components/       # React components (prefixed with _ for internal use)
│   ├── chat/         # AI chat components
│   ├── header/       # Header and navigation
│   └── ui/           # shadcn/ui components
├── _data/            # Static data and i18n dictionaries
├── api/              # API routes
│   ├── auth/         # NextAuth endpoints
│   └── chat/         # AI chat endpoint
└── [pages]           # App pages using file-based routing
```

### Key Patterns
1. **Component Naming**: Components in `_components/` are internal/private
2. **Imports**: Use absolute imports with `@/` prefix (configured in tsconfig.json)
3. **Authentication**: Check auth status via NextAuth session
4. **Theming**: Use DaisyUI data-theme attribute for theme switching
5. **i18n**: Language dictionaries in `app/_data/dictionaries/` (en.json, el.json)

## Important Files

- `app/api/auth/auth-options.ts` - NextAuth configuration
- `app/_components/providers.tsx` - App-wide providers setup
- `app/_data/projects.ts` - Portfolio projects data
- `app/_data/general.ts` - General site configuration

## Code Style

- ESLint configured with Next.js core-web-vitals and React hooks rules
- Prettier for code formatting
- TypeScript strict mode enabled
- No relative imports (enforced by ESLint)

## Environment Variables

Required for full functionality:
- `GOOGLE_CLIENT_ID` - For Google OAuth
- `GOOGLE_CLIENT_SECRET` - For Google OAuth
- `NEXTAUTH_SECRET` - For NextAuth session encryption
- `OPENAI_API_KEY` - For AI chat functionality

## Component Development

When creating new components:
1. Place in appropriate subfolder under `app/_components/`
2. Use TypeScript interfaces for props
3. Follow existing patterns for styling (Tailwind classes with cn() utility)
4. Export from index files where applicable

## Testing

No test framework is currently configured. Consider adding tests when implementing new features.