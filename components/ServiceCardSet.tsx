"use client";

const ServiceCardSet = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24">
        {/* Header */}
        <div className="text-center">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Expertise
          </span>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            What I build and deliver
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Complete applications from frontend to backend infrastructure
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl shadow-sm  bg-white overflow-hidden flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                Development
              </span>
              <h3 className="mt-3 text-xl font-serif leading-snug">
                Modern web applications end-to-end
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                React and Next.js interfaces, Node.js APIs, databases, cloud
                auth
              </p>
              <a
                href="#"
                className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline"
              >
                Explore →
              </a>
            </div>

            <img
              src="https://picsum.photos/600/500?random=10"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl shadow-sm bg-white overflow-hidden flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                Legacy modernization
              </span>
              <h3 className="mt-3 text-xl font-serif leading-snug">
                Breathing new life into aging systems with modern tools
              </h3>
              <a
                href="#"
                className="mt-4 inline-flex text-sm font-medium text-gray-900 hover:underline"
              >
                Learn
              </a>
              <a
                href="#"
                className="mt-2 inline-flex text-sm font-medium text-gray-900 hover:underline"
              >
                Specialized solutions →
              </a>
            </div>

            <img
              src="https://picsum.photos/600/500?random=11"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl shadow-sm bg-white overflow-hidden flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                E-commerce databases, desktop to cloud
              </span>
              <h3 className="mt-3 text-xl font-serif leading-snug">Discover</h3>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <a
                href="#"
                className="mt-auto pt-4 inline-flex text-sm font-medium text-gray-900 hover:underline"
              >
                Button →
              </a>
            </div>

            <img
              src="https://picsum.photos/600/500?random=12"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSet;
