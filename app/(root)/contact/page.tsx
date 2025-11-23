import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">
          Contact
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-base leading-relaxed mb-4 text-left">
          If something in this portfolio resonates with you, I’d love to
          connect. I’m open to frontend and full-stack roles, collaborations,
          and meaningful technical conversations.
        </p>

        <p className="text-gray-700 text-base leading-relaxed mb-8 text-left">
          I’m comfortable working and communicating in both English and
          Mandarin, whether it’s for documentation, code reviews, or meetings.
        </p>

        {/* How to reach me */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              The best way to reach me is by email. Feel free to share a brief
              introduction and what you’d like to talk about.
            </p>
            <p className="mt-2">
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                catherine.hsu.dev@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Professional Profiles
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-2">
              You can also find more about my work and background here:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
              <li>
                <Link
                  href="https://github.com/CatherineHsuDev"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/your-linkedin"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              What to Reach Out About
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
              <li>Frontend or full-stack engineering roles</li>
              <li>Small tools, internal utilities, or web app ideas</li>
              <li>Questions about any project in this portfolio</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
