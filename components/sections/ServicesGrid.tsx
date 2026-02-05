interface Service {
  title: string;
  description: string;
  image?: string;
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-neutral-surface rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {service.image && (
            <div className="w-full h-48 bg-neutral-light overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-heading-3 mb-3">{service.title}</h3>
            <p className="text-body">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
