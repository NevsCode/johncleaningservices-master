'use client';

import { ChangeEvent, FormEvent, useMemo, useState } from "react";

type ServiceOption = {
  title: string;
};

type Props = {
  services: ServiceOption[];
};

type StatusState =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success" }
  | { state: "error"; message: string };

const INITIAL_STATUS: StatusState = { state: "idle" };

export function ContactForm({ services }: Props) {
  const defaultService = useMemo(() => services[0]?.title ?? "", [services]);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: defaultService,
    message: "",
  });

  const [status, setStatus] = useState<StatusState>(INITIAL_STATUS);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ state: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: "Failed to submit" }));
        const errorMessage = typeof data.error === "string" ? data.error : "Failed to submit enquiry.";
        setStatus({ state: "error", message: errorMessage });
        return;
      }

      setStatus({ state: "success" });
      setFormData({
        name: "",
        contact: "",
        service: defaultService,
        message: "",
      });
    } catch (error) {
      console.error("Unexpected error submitting contact form", error);
      setStatus({ state: "error", message: "Unexpected error. Please try again." });
    }
  };

  return (
    <form className="grid gap-4 text-sm" onSubmit={handleSubmit}>
      <label className="space-y-2">
        <span className="font-medium">Name</span>
        <input
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#FCBF49] focus:outline-none"
          type="text"
          name="name"
          placeholder="Your full name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="space-y-2">
        <span className="font-medium">Email or phone</span>
        <input
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#FCBF49] focus:outline-none"
          type="text"
          name="contact"
          placeholder="How can we reach you?"
          required
          value={formData.contact}
          onChange={handleChange}
        />
      </label>
      <label className="space-y-2">
        <span className="font-medium">Service required</span>
        <select
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-[#FCBF49] focus:outline-none"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          {services.map((service) => (
            <option key={service.title} value={service.title} className="text-[#003049]">
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label className="space-y-2">
        <span className="font-medium">Message</span>
        <textarea
          className="h-28 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#FCBF49] focus:outline-none"
          name="message"
          placeholder="Property size, preferred dates, special requests..."
          required
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <button
        className="mt-2 inline-flex items-center justify-center rounded-full bg-[#FCBF49] px-6 py-3 font-semibold text-[#003049] transition hover:bg-[#fcd568] disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={status.state === "loading"}
      >
        {status.state === "loading" ? "Sending..." : "Submit enquiry"}
      </button>

      {status.state === "success" && (
        <p className="rounded-xl bg-white/10 px-4 py-3 text-sm text-[#FCBF49]">Thanks! We received your enquiry and will respond within 24 hours.</p>
      )}
      {status.state === "error" && (
        <p className="rounded-xl bg-[#D62828]/30 px-4 py-3 text-sm text-white">{status.message}</p>
      )}
    </form>
  );
}
