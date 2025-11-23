"use client";

const NewsletterSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-serif leading-tight">
          Stay updated on new articles
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl">
          Get insights on design systems, full-stack development, and modern web
          practices.
        </p>

        {/* Email form */}
        <form
          className="mt-8 w-full max-w-md flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="inline-flex justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-3 text-[11px] md:text-xs text-gray-500 max-w-md">
          By clicking Subscribe you&apos;re confirming that you agree with our
          Terms and Conditions.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
