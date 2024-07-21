import { PropsWithChildren } from 'react';

export const App = ({ children }: PropsWithChildren) => (
  <html>
    <head>
      <meta title="JSX with HTMX in Nestjs" />
      <script src="https://unpkg.com/htmx.org@2.0.1"></script>
    </head>

    <body>{children}</body>
  </html>
);
