import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/project/$id")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/docs/$type/$id", params: { type: "project", id: params.id } });
  },
});
