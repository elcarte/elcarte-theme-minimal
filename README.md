# @elcarte/theme-minimal

Minimal theme for Elcarte e-commerce platform.

## Installation

```bash
npm install @elcarte/theme-minimal @elcarte/blocks
```

## Usage

```tsx
import { ThemeProvider } from '@elcarte/theme-minimal';
import '@elcarte/theme-minimal/dist/styles.css';

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```

## License

MIT
