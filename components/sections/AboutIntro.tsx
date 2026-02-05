interface AboutIntroProps {
  title: string;
  content: string;
  image?: string;
}

export default function AboutIntro({ title, content, image }: AboutIntroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-heading-2 mb-6">{title}</h2>
        <div className="space-y-4">
          {content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-body-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {image && (
        <div className="w-full h-96 bg-neutral-light rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
