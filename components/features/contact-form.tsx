"use client";

// Libraries
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

// Shadcn UI
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(1, "Imie jest wymagane"),
  email: z.email("Niepoprawny adres email"),
  message: z.string().min(1, "Wiadomość jest wymagana"),
  privacy: z.boolean().refine((val) => val === true, "Zgoda jest wymagana"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      privacy: false,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <FieldLegend className="text-secondary font-semibold">
          Napisz do nas
        </FieldLegend>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Imię</FieldLabel>
              <FieldContent>
                <Input id="name" {...field} aria-invalid={fieldState.invalid} />
              </FieldContent>
              {fieldState.error && (
                <FieldError className="text-left">
                  {fieldState.error.message}
                </FieldError>
              )}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <FieldContent>
                <Input
                  id="email"
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
              </FieldContent>
              {fieldState.error && (
                <FieldError className="text-left">
                  {fieldState.error.message}
                </FieldError>
              )}
            </Field>
          )}
        />
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="message">Wiadomość</FieldLabel>
              <FieldContent>
                <Textarea
                  id="message"
                  {...field}
                  className="resize-none"
                  aria-invalid={fieldState.invalid}
                />
              </FieldContent>
              {fieldState.error && (
                <FieldError className="text-left">
                  {fieldState.error.message}
                </FieldError>
              )}
            </Field>
          )}
        />
        <Controller
          name="privacy"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field orientation="horizontal" data-invalid={fieldState.invalid}>
              <Checkbox
                id="privacy"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <FieldContent>
                <FieldLabel htmlFor="privacy">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                  kontaktu z nami.
                </FieldLabel>
              </FieldContent>
              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        />
        <Field orientation="horizontal">
          <Button type="submit" variant={"secondary"} size={"lg"}>
            Wyślij
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
