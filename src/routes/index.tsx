import { createFileRoute } from "@tanstack/react-router";
import PortfolioSite from "@/components/portfolio-site";

export const Route = createFileRoute("/")({
  component: PortfolioSite,
});
