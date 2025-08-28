"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEarlyAccessUser } from "@/lib/actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import FormBanner from "@/assets/form_banner.png";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Props {
  children: React.ReactNode;
}

const EarlyAccessSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  full_name: z.string().optional(),
  company: z.string().optional(),
  monthly_budget: z.string().optional(),
  notes: z.string().nullable().optional(),
});

type EarlyAccessFormValues = z.infer<typeof EarlyAccessSchema>;

export default function Form(props: Props) {
  const [open, setOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EarlyAccessFormValues>({
    resolver: zodResolver(EarlyAccessSchema),
    defaultValues: {
      email: "",
      full_name: "",
      company: "",
      monthly_budget: undefined,
      notes: "",
    },
  });

  async function onSubmit(values: EarlyAccessFormValues) {
    setServerError(null);
    setServerSuccess(null);

    try {
      const formData = new FormData();
      formData.append("email", values.email);
      if (values.full_name) formData.append("full_name", values.full_name);
      if (values.company) formData.append("company", values.company);
      if (values.monthly_budget)
        formData.append("monthly_budget", values.monthly_budget);
      if (values.notes) formData.append("notes", values.notes);

      const result = await createEarlyAccessUser(formData);

      if (result.success) {
        setServerSuccess(result.message);
        reset();
        setTimeout(() => setOpen(false), 900);
      } else {
        console.error("Server error:", result.error);
        setServerError(result.error || "Unexpected error");
      }
    } catch (err: unknown) {
      console.error("Client-side error:", err);
      const msg = err instanceof Error ? err.message : "Unexpected error";
      setServerError(msg);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="p-0 border-0 rounded-[20px] gap-0 lg:min-w-[950px] max-h-[90%] overflow-y-scroll lg:overflow-visible">
        <Image
          src={FormBanner}
          alt=""
          className="w-full rounded-t-[20px] min-h-[130px] object-cover object-right -mt-[2px]"
        />
        <div className="px-10 pt-9 pb-6 md:px-[60px] md:pt-[50px] md:pb-[30px] bg-[#f6f6f6] rounded-b-[20px]">
          <DialogHeader className="mt-0">
            <DialogTitle className="text-center font-bold text-[28px] md:text-[32px] mb-5">
              Join the waitlist and get early access!
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row justify-between gap-[30px] h-full flex-1 w-full">
              <div className="flex flex-1 flex-col w-full">
                <div className="mb-5 w-full">
                  <p className="font-semibold text-sm mb-1.5">Email*</p>
                  <div className="relative mb-1">
                    <Input
                      id="email"
                      type="email"
                      aria-invalid={!!errors.email}
                      className="h-[50px] pl-12 bg-white"
                      placeholder="Type your email"
                      {...register("email")}
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                    </span>
                  </div>
                  {errors.email && (
                    <span className="text-red-600 text-xs">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-5 w-full">
                  <p className="font-semibold text-sm mb-1.5">Full Name</p>
                  <Input
                    id="full_name"
                    className="h-[50px] mb-1 bg-white"
                    placeholder="Your name"
                    {...register("full_name")}
                  />
                  {errors.full_name && (
                    <span className="text-red-600 text-xs">
                      {errors.full_name.message}
                    </span>
                  )}
                </div>
                <div className="mb-5 w-full">
                  <p className="font-semibold text-sm mb-1.5">Company</p>
                  <Input
                    id="company"
                    className="h-[50px] mb-1 bg-white"
                    placeholder="Your company name"
                    {...register("company")}
                  />
                  {errors.company && (
                    <span className="text-red-600 text-xs">
                      {errors.company.message}
                    </span>
                  )}
                </div>
                <p className="font-semibold text-sm mb-1.5">Monthly Budget</p>
                <Controller
                  control={control}
                  name="monthly_budget"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full min-h-[50px] bg-white">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<$2000">{"< $2.000"}</SelectItem>
                        <SelectItem value="$2000-$5000">
                          Between $2.000 and $5.000
                        </SelectItem>
                        <SelectItem value=">$5000">{"> $5.000"}</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.monthly_budget && (
                  <span className="text-red-600 text-xs mb-3">
                    {errors.monthly_budget.message}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col w-full h-full justify-between">
                <p className="font-semibold text-sm mb-1.5">Notes</p>
                <Textarea
                  id="notes"
                  placeholder="We'd love to learn more about you! What's the biggest marketing challenge holding you back?"
                  className="min-h-[160px] md:min-h-[255px] h-full flex-1 bg-white"
                  {...register("notes")}
                />
                {errors.notes && (
                  <span className="text-red-600 text-xs mt-1">
                    {errors.notes.message}
                  </span>
                )}
                <Button
                  variant={"secondary"}
                  className="mt-5 h-[60px] text-base"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Join Now"}
                </Button>
                {/* {serverError && (
                  <div className="text-red-600 text-sm mt-3">{serverError}</div>
                )} */}
              </div>
            </div>
          </form>
          <div className="h-0.5 w-full bg-[#d1d1d1] mt-[30px] mb-5" />
          <div className="text-sm text-center">
            By joining, you agree to{" "}
            <span className="text-[#8D5DFF] font-bold">terms of service</span> &{" "}
            <span className="text-[#8D5DFF] font-bold">privacy policy</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
