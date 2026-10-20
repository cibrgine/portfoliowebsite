import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/experience/$id")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/docs/$type/$id", params: { type: "experience", id: params.id } });
  },
});
