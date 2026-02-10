import {
    useState,
    type ChangeEvent,
    type FocusEvent,
    type FormEvent,
} from "react";
import { z } from "zod";
import { COLORS } from "../../src/config/theme";

const withAlpha = (hex: string, alpha: number) => {
    const h = hex.replace("#", "").trim();
    if (h.length !== 6) return hex;
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const contactSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, "First name is required.")
        .max(64, "First name must be 64 characters or fewer."),
    lastName: z
        .string()
        .trim()
        .min(1, "Last name is required.")
        .max(64, "Last name must be 64 characters or fewer."),
    email: z
        .string()
        .trim()
        .min(1, "Email is required.")
        .email("Email must be a valid email address."),
    message: z
        .string()
        .trim()
        .min(16, "Message must be at least 16 characters.")
        .max(2048, "Message must be 2048 characters or fewer."),
});

type ContactValues = z.infer<typeof contactSchema>;
type FieldKey = keyof ContactValues;

const entryNameByField: Record<FieldKey, string> = {
    firstName: "entry.2086028205",
    lastName: "entry.1555121990",
    email: "entry.2022397809",
    message: "entry.536635319",
};

export default function ContactForm() {
    const [status, setStatus] = useState<
        "idle" | "submitting" | "submitted" | "error"
    >("idle");
    const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

    const formAction =
        "https://docs.google.com/forms/d/e/1FAIpQLScKl7K7Aa-W8J0Kq5S5tHFFVNVxbk9KsweWoE2YQZgdR80NJw/formResponse";

    const formStyles = {
        ["--contact-surface" as any]: withAlpha(
            COLORS.secondaryBackgroundColor,
            0.82,
        ),
        ["--contact-border" as any]: withAlpha(COLORS.mainBlue, 0.22),
        ["--contact-accent" as any]: COLORS.badgeColor,
    };

    const fieldClassName =
        "block w-full rounded-md bg-[var(--contact-surface)] px-3.5 py-2 text-base text-white/90 shadow-[0_0_0_1px_var(--contact-border)] placeholder:text-white/40 transition-shadow duration-200 focus:shadow-[0_0_0_2px_var(--contact-accent)] focus:outline-none";

    const errorTextClassName = "mt-2 text-sm text-red-400";

    const validateField = (field: FieldKey, value: string) => {
        const result = contactSchema.shape[field].safeParse(value);
        setErrors((prev) => {
            const next = { ...prev };
            if (result.success) {
                delete next[field];
            } else {
                next[field] =
                    result.error.issues[0]?.message ?? "Invalid value.";
            }
            return next;
        });
        return result.success;
    };

    const handleFieldBlur =
        (field: FieldKey) =>
        (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            validateField(field, event.target.value);
        };

    const handleFieldChange =
        (field: FieldKey) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (status === "submitted") {
                setStatus("idle");
            }
            if (errors[field]) {
                validateField(field, event.target.value);
            }
        };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status === "submitting") return;

        const form = event.currentTarget;
        const payload = new FormData(form);
        const values: ContactValues = {
            firstName: String(payload.get(entryNameByField.firstName) ?? ""),
            lastName: String(payload.get(entryNameByField.lastName) ?? ""),
            email: String(payload.get(entryNameByField.email) ?? ""),
            message: String(payload.get(entryNameByField.message) ?? ""),
        };

        const result = contactSchema.safeParse(values);
        if (!result.success) {
            const nextErrors: Partial<Record<FieldKey, string>> = {};
            for (const issue of result.error.issues) {
                const field = issue.path[0] as FieldKey | undefined;
                if (field && !nextErrors[field]) {
                    nextErrors[field] = issue.message;
                }
            }
            setErrors(nextErrors);
            setStatus("idle");
            return;
        }

        setErrors({});
        setStatus("submitting");

        try {
            const cleanedPayload = new FormData();
            cleanedPayload.set(
                entryNameByField.firstName,
                result.data.firstName,
            );
            cleanedPayload.set(entryNameByField.lastName, result.data.lastName);
            cleanedPayload.set(entryNameByField.email, result.data.email);
            cleanedPayload.set(entryNameByField.message, result.data.message);
            await fetch(formAction, {
                method: "POST",
                mode: "no-cors",
                body: cleanedPayload,
            });
            form.reset();
            setStatus("submitted");
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="relative flex w-full justify-center px-4 sm:px-6"
        >
            <div className="relative w-full max-w-[1200px] py-[clamp(2.5rem,6vw,5rem)]">
                <div className="relative flex flex-col gap-[clamp(1.75rem,4vw,3rem)] p-[clamp(1.25rem,3vw,2.5rem)]">
                    <div className="flex flex-col items-center gap-2 text-center text-white/85">
                        <h2 className="text-[clamp(20pt,8vw,34pt)] font-semibold tracking-tight text-white">
                            Contact Me
                        </h2>
                        <p className="text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/70">
                            Send me an inquiry.
                        </p>
                    </div>
                    <ol className="relative flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)]">
                        <form
                            action={formAction}
                            method="POST"
                            className="mx-auto w-full max-w-[860px]"
                            style={formStyles}
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-semibold text-white"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="first-name"
                                            name="entry.2086028205"
                                            type="text"
                                            autoComplete="given-name"
                                            className={fieldClassName}
                                            disabled={status === "submitting"}
                                            aria-invalid={Boolean(
                                                errors.firstName,
                                            )}
                                            aria-describedby={
                                                errors.firstName
                                                    ? "first-name-error"
                                                    : undefined
                                            }
                                            onBlur={handleFieldBlur(
                                                "firstName",
                                            )}
                                            onChange={handleFieldChange(
                                                "firstName",
                                            )}
                                        />
                                        {errors.firstName && (
                                            <p
                                                id="first-name-error"
                                                className={errorTextClassName}
                                                role="alert"
                                            >
                                                {errors.firstName}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-semibold text-white"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="last-name"
                                            name="entry.1555121990"
                                            type="text"
                                            autoComplete="family-name"
                                            className={fieldClassName}
                                            disabled={status === "submitting"}
                                            aria-invalid={Boolean(
                                                errors.lastName,
                                            )}
                                            aria-describedby={
                                                errors.lastName
                                                    ? "last-name-error"
                                                    : undefined
                                            }
                                            onBlur={handleFieldBlur("lastName")}
                                            onChange={handleFieldChange(
                                                "lastName",
                                            )}
                                        />
                                        {errors.lastName && (
                                            <p
                                                id="last-name-error"
                                                className={errorTextClassName}
                                                role="alert"
                                            >
                                                {errors.lastName}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm/6 font-semibold text-white"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="entry.2022397809"
                                            type="email"
                                            autoComplete="email"
                                            className={fieldClassName}
                                            disabled={status === "submitting"}
                                            aria-invalid={Boolean(errors.email)}
                                            aria-describedby={
                                                errors.email
                                                    ? "email-error"
                                                    : undefined
                                            }
                                            onBlur={handleFieldBlur("email")}
                                            onChange={handleFieldChange(
                                                "email",
                                            )}
                                        />
                                        {errors.email && (
                                            <p
                                                id="email-error"
                                                className={errorTextClassName}
                                                role="alert"
                                            >
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm/6 font-semibold text-white"
                                    >
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="entry.536635319"
                                            rows={4}
                                            className={fieldClassName}
                                            defaultValue={""}
                                            disabled={status === "submitting"}
                                            aria-invalid={Boolean(
                                                errors.message,
                                            )}
                                            aria-describedby={
                                                errors.message
                                                    ? "message-error"
                                                    : undefined
                                            }
                                            onBlur={handleFieldBlur("message")}
                                            onChange={handleFieldChange(
                                                "message",
                                            )}
                                        />
                                        {errors.message && (
                                            <p
                                                id="message-error"
                                                className={errorTextClassName}
                                                role="alert"
                                            >
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="block w-full cursor-pointer rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs transition duration-200 hover:brightness-90 focus-visible:shadow-[0_0_0_3px_var(--contact-accent)] focus-visible:outline-none"
                                    style={{ background: COLORS.badgeColor }}
                                    disabled={status === "submitting"}
                                >
                                    Let's talk
                                </button>
                                {status === "submitted" && (
                                    <p
                                        className="mt-4 text-center text-sm text-white/70"
                                        aria-live="polite"
                                    >
                                        Response recorded.
                                    </p>
                                )}
                            </div>
                        </form>
                    </ol>
                </div>
            </div>
        </section>
    );
}
