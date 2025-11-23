export default function ComingSoon({
  title = "Coming soon",
  description = "This section is currently being prepared or under construction and will be available soon. Sorry, this was made within a short period of time. Thanks for your understanding 🙏",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-serif">{title}</h1>
      <p className="mt-4 text-gray-600 whitespace-pre-line">{description}</p>
    </section>
  );
}
