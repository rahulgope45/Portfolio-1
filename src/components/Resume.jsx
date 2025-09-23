import { motion } from "framer-motion";


function Resume() {
  return (
    <motion.section className="min-h-screen p-5 flex flex-col items-center justify-center"
    id="Resume"
    initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Resume</h1>
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-4">
            <object
          data="/rahulresume.pdf"
          type="application/pdf"
          width="100%"
          height="700px"
        >
          <p className="text-white">
            Your browser does not support viewing PDFs. 
            <a href="/rahulresume.pdf" className="text-blue-400 underline">Download the PDF</a> instead.
          </p>
        </object>
          <div className="flex justify-center mt-4">
            <a
            href="/rahulresume.docx"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
            Download Resume
            </a>
          </div>
      </div>
    </motion.section>
  );
}

export default Resume;
