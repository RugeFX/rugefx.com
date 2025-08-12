# Agent Guidelines for rugefx.com

## Build Commands

**Package Manager**: Use `bun` as the primary package manager

- `bun run dev` - Start development server with host binding
- `bun run build` - TypeScript compile + Vite build
- `bun run lint` - ESLint with TypeScript (max 0 warnings)
- `bun run preview` - Preview production build

## Code Style

- **Imports**: Use `@/` path alias for src imports, group React imports first
- **Formatting**: Prettier with Tailwind plugin, 2-space indentation
- **Types**: Strict TypeScript, explicit interfaces, no unused locals/parameters
- **Components**: React forwardRef pattern, export types and variants
- **Naming**: PascalCase components, camelCase functions/variables
- **Styling**: Tailwind CSS with `cn()` utility for conditional classes
- **Error Handling**: Throw descriptive errors for context misuse

## Architecture

- React 18 + TypeScript + Vite + Tailwind CSS
- Component library: Radix UI primitives with custom styling
- State: React Context for themes, hooks for reusable logic
- Icons: Lucide React, animations: Framer Motion
- File structure: components/ui for reusable, components/sections for page sections
