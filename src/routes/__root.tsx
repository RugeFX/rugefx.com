import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Outlet,
  notFoundComponent: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main className="bg-portfolio-canvas text-portfolio-ink grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-5xl font-semibold tracking-tight">
          Page not found.
        </h1>
        <p className="text-portfolio-copy-muted mt-4">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="bg-portfolio-brand mt-8 inline-flex rounded-full px-5 py-3 font-medium text-white"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
