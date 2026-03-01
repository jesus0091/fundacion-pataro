"use client";

import { FormEvent, useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { P } from "@/components/ui/Text";

const MOTIVO_OPTIONS = [
  { value: "", label: "Seleccioná un motivo" },
  { value: "becas", label: "Programas de becas" },
  { value: "alianzas", label: "Alianzas estratégicas" },
  { value: "eventos", label: "Eventos académicos" },
  { value: "general", label: "Consulta general" },
];

const MIN_MESSAGE_LENGTH = 20;

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!formData.reason) newErrors.reason = "Seleccioná un motivo";
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Mínimo ${MIN_MESSAGE_LENGTH} caracteres`;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Formulario enviado:", formData);
    alert("Mensaje enviado correctamente. Te responderemos dentro de las 48 horas hábiles.");
    setFormData({ name: "", email: "", reason: "", message: "" });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const disclaimer =
    "Para consultas sobre programas de becas, alianzas estratégicas o eventos académicos, por favor seleccioná el motivo correspondiente en el formulario. Te responderemos dentro de las 48 horas hábiles.";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
      <div className="mb-6">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#333333]">Enviar Mensaje</h2>
        <P variant="body" className="mt-2">
          Completá el formulario y nos comunicaremos a la brevedad.
        </P>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Input
          id="name"
          name="name"
          label="Nombre Completo *"
          type="text"
          placeholder="Juan Pérez"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          id="email"
          name="email"
          label="Email *"
          type="email"
          placeholder="juan.perez@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Select
          id="reason"
          name="reason"
          label="Motivo de Contacto *"
          options={MOTIVO_OPTIONS}
          value={formData.reason}
          onChange={handleChange}
          error={errors.reason}
          required
        />
        <div>
          <Textarea
            id="message"
            name="message"
            label="Mensaje *"
            rows={6}
            placeholder="Contanos cómo podemos ayudarte..."
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            required
          />
          <p className="mt-1 text-sm text-[#333333]">
            Mínimo {MIN_MESSAGE_LENGTH} caracteres. Cuanto más detallado sea tu mensaje, mejor podremos asistirte.
          </p>
        </div>
        <Button type="submit">
          Enviar Mensaje
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </form>
      <p className="mt-6 text-sm text-primary leading-relaxed">
        {disclaimer}
      </p>
    </div>
  );
}
