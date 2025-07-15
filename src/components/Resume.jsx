import { motion } from "framer-motion";


function Resume() {
  return (
    <motion.section className="min-h-screen p-5 flex flex-col items-center justify-center"
    id="Resume"
    initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Resume</h1>
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-4">
          <iframe
           src ="https://docs.google.com/document/d/1EkTaAqXuaZj-snXyS1DWSi6luFIbzo1HGz0FwG25954/edit?usp=drive_link"
           style={{ width: '100%', height: '500px' }}
           frameBorder="0"
          ></iframe>
          <div className="flex justify-center mt-4">
            <a
            href="/resume2.docx"
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
