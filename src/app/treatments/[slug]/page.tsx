import { Metadata } from "next";
import { notFound } from "next/navigation";
import TreatmentDetail from "./TreatmentDetail";
import { treatments, getTreatmentBySlug } from "@/data/treatments";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found | Lumière Aesthetics",
    };
  }

  return {
    title: `${treatment.name} | Lumière Aesthetics`,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  return <TreatmentDetail treatment={treatment} />;
}
