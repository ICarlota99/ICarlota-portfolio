import { Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GlassmorphicCard } from "../ui/GlassmorphicCard";

const resumeLink = `${import.meta.env.BASE_URL}/ICarlota_dev_CV.pdf`;
const resumeFilename = "ICarlota_dev_CV.pdf";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-24 sm:py-32 relative text-white text-center overflow-hidden"
    >
      {/* Optimized blobs: reduced blur, no animation delay */}
      <div className="absolute inset-0 -z-50 bg-slate-950">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen blur-2xl opacity-15" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen blur-2xl opacity-15" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Resume" subtitle="My Professional Background" />

        <div className="mx-auto lg:max-w-200">
          <GlassmorphicCard>
            {/* Wrap all motion elements in a single fade container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto mt-10">
                Take a look at my professional experience and skills. You can
                view it directly in your browser or download a PDF copy for
                your convenience.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-lg px-6 py-3 text-center"
                >
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <Eye size={24} className="mr-2" />
                    View Online
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-gray-700/80 border-gray-400 text-gray-200 hover:text-white hover:bg-gray-800/50 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-lg px-6 py-3 text-center"
                >
                  <a
                    href={resumeLink}
                    download={resumeFilename}
                    className="inline-flex items-center justify-center"
                  >
                    <Download size={20} className="mr-2" />
                    Download CV (.pdf)
                  </a>
                </Button>
              </div>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
}
