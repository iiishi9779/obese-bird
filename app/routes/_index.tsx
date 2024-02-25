import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Obese Birds" },
    { name: "description", content: "fullstack template" },
  ];
};

export default function Index() {
  return (
    <h1 className="text-3xl font-bold text-blue-600">
      Obese Bird Template
    </h1>
  );
}
