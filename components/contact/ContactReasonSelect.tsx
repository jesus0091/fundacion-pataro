import Select from "@/components/ui/Select";

const OPTIONS = [
  { value: "", label: "Seleccioná un motivo" },
  { value: "becas", label: "Programas de becas" },
  { value: "alianzas", label: "Alianzas estratégicas" },
  { value: "eventos", label: "Eventos académicos" },
  { value: "general", label: "Consulta general" },
];

interface ContactReasonSelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
}

export default function ContactReasonSelect({
  id = "reason",
  name = "reason",
  value,
  onChange,
  error,
  required,
}: ContactReasonSelectProps) {
  return (
    <Select
      id={id}
      name={name}
      label="Motivo de Contacto *"
      options={OPTIONS}
      value={value}
      onChange={onChange}
      error={error}
      required={required}
    />
  );
}
