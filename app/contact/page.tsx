"use client";

import { FormEvent, useState } from "react";
import { H1, H3, H4, Label, P } from "@/components/ui/Text";
import { IconClock, IconMail, IconMapPin } from "@tabler/icons-react";

import { Button } from "@/components/ui/Button";
import ContactReasonSelect from "@/components/contact/ContactReasonSelect";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

const INTRO =
    "Tu mensaje es el primer paso para generar un cambio. Escribinos y nos pondremos en contacto a la brevedad.";

const INFO = [
    {
        title: "Ubicación",
        content: "Billinghurst 19, Ciudad Autónoma de Buenos Aires. Argentina",
        icon: IconMapPin,
    },
    {
        title: "Email",
        content: "info@fpp.org.ar",
        href: "mailto:info@fpp.org.ar",
        icon: IconMail,
    },
    {
        title: "Horarios de Atención",
        contentLines: [
            "Lunes a Viernes: 9:00 - 17:00 hs",
            "Sábados y Domingos: Cerrado",
        ],
        icon: IconClock,
    },
];

const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.716697737318!2d-58.398415!3d-34.589763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2c5f2b0c3d%3A0x1!2sBillinghurst%2019%2C%20C1064%20CABA!5e0!3m2!1ses!2sar!4v1";

const MIN_MESSAGE_LENGTH = 20;
const DISCLAIMER =
    "Para consultas sobre programas de becas, alianzas estratégicas o eventos académicos, por favor seleccioná el motivo correspondiente en el formulario. Te responderemos dentro de las 48 horas hábiles.";

export default function ContactPage() {
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
        alert(
            "Mensaje enviado correctamente. Te responderemos dentro de las 48 horas hábiles.",
        );
        setFormData({ name: "", email: "", reason: "", message: "" });
        setErrors({});
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
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

    return (
        <section
            className="py-12 sm:py-16 lg:py-24 bg-gradient-to-t from-[#ffffff] via-[#F0F6FE] to-[#E8F5E9] min-h-[60vh]"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start py-24">
                    <div className="flex flex-col gap-8">
                        <header className="flex flex-col gap-3">
                            <Label variant="primaryTight">Hablemos</Label>
                            <H1
                                id="contact-heading"
                                className="text-3xl sm:text-4xl lg:text-5xl"
                            >
                                Contacto
                            </H1>
                            <P variant="body">{INTRO}</P>
                        </header>
                        <ul className="flex flex-col gap-6">
                            {INFO.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    {item.icon && (
                                        <item.icon
                                            className="w-5 h-5 text-primary shrink-0 mt-2"
                                            aria-hidden
                                        />
                                    )}
                                    <div>
                                        <H4>{item.title}</H4>
                                        {"href" in item && item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-[#333333] hover:text-primary transition-colors"
                                            >
                                                <P variant="body">
                                                    {item.content}
                                                </P>
                                            </a>
                                        ) : "contentLines" in item &&
                                          item.contentLines ? (
                                            <div className="text-[#333333] text-sm sm:text-base leading-relaxed">
                                                {item.contentLines.map(
                                                    (line, j) => (
                                                        <span
                                                            key={j}
                                                            className="block"
                                                        >
                                                            {line}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        ) : (
                                            <P variant="body">{item.content}</P>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="rounded-xl overflow-hidden border border-neutral-border aspect-[4/3] min-h-[200px] h-[250px] bg-neutral-background">
                            <iframe
                                title="Ubicación - Billinghurst 19, CABA"
                                src={MAP_EMBED_URL}
                                width="100%"
                                height="100%"
                                className="w-full h-full min-h-[200px]"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 sm:p-8">
                        <div className="mb-6">
                            <P variant="body" className="mt-2">
                                Completá el formulario y nos comunicaremos a la
                                brevedad.
                            </P>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6"
                        >
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
                            <ContactReasonSelect
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
                                    Mínimo {MIN_MESSAGE_LENGTH} caracteres.
                                    Cuanto más detallado sea tu mensaje, mejor
                                    podremos asistirte.
                                </p>
                            </div>
                            <Button type="submit">
                                Enviar Mensaje
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden
                                >
                                    <path
                                        d="M6 3l5 5-5 5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </form>
                        <p className="mt-6 text-sm text-primary leading-relaxed">
                            {DISCLAIMER}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
