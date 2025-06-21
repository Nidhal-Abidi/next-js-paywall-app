import { Template } from "@/components/Template";
import { requireSubscription } from "@/lib/auth-utils";
import {
  coverLetterTemplate,
  cvTemplate,
  motivationLetterTemplate,
} from "@/utils/constants";

export default async function DocumentTemplates() {
  await requireSubscription("BRONZE");

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">
          Premium Document Templates
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Ready-to-use templates for your German visa application
        </p>
        <Template
          title="Academic CV Template (German Format)"
          content={cvTemplate}
        />
        <Template
          title="Cover Letter Template (Job Seeker Visa)"
          content={coverLetterTemplate}
        />
        <Template
          title="Motivation Letter Template (Student Visa)"
          content={motivationLetterTemplate}
        />
      </div>
    </div>
  );
}
