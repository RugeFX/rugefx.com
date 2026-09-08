import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Outlet,
  notFoundComponent: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f8f7fb] px-6 text-[#21172f]">
      <div className="text-center">
        <h1 className="font-display text-5xl font-semibold tracking-tight">
          Page not found.
        </h1>
        <p className="text-muted-foreground mt-4">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="bg-primary text-primary-foreground mt-8 inline-flex rounded-full px-5 py-3 font-medium"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
