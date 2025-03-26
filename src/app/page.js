export const metadata = {
  title: 'Next E-commerce',
  description: 'Welcome to Next E-commerce - Your one-stop shop for all products',
};

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/products");
}
