"use client";

type TwoColumnSectionProps = {
  title: string;
  paragraph1: string;
  paragraph2?: string;
  image?: string;
  reverse?: boolean; // 左右交換
};

const TwoColumnSection = ({
  title,
  paragraph1,
  paragraph2,
  image = "https://picsum.photos/800/600?random=40",
  reverse = false,
}: TwoColumnSectionProps) => {
  return (
    <section className="w-full bg-white">
      <div
        className={`mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Column */}
        <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-4">
            {title}
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            {paragraph1}
          </p>

          {paragraph2 && (
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {paragraph2}
            </p>
          )}
        </div>

        {/* Image Column */}
        <div
          className={`w-full flex justify-center ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="w-full max-w-md rounded-xl bg-gray-200 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
