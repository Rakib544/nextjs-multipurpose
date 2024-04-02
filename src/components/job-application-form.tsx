"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CloudUploadIcon, FileTextIcon, TrashIcon } from "./icons";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email"),
  phone: z.string().trim().min(1, { message: "Phone Number is required" }),
  about: z.string().trim().min(1, { message: "This field is required" }),
  cv: z.any().refine((val) => val, "CV is required"),
});

export default function JobApplicationForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  type FormValues = z.infer<typeof FormSchema>;

  async function onSubmit(data: FormValues) {
    console.log(data);
  }

  const onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    if (acceptedFiles.length > 0) {
      form.setValue("cv", acceptedFiles[0]);
    }

    if (rejectedFiles.length > 0) {
      form.setError("cv", { message: "Please upload only .pdf file." });
    }
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop,
  });

  const removeFile = () => {
    acceptedFiles.splice(0, 1);
    form.resetField("cv");
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@doamin.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone:</FormLabel>
                <FormControl>
                  <Input placeholder="+8801786542743" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell us about yourself:</FormLabel>
                <FormControl>
                  <Textarea
                    rows={8}
                    placeholder="I am looking for an opportunity"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload your CV</FormLabel>
                <FormControl>
                  <div
                    {...field}
                    {...getRootProps()}
                    className="py-16 bg-indigo-50 px-6 rounded-xl text-center"
                  >
                    <input {...getInputProps()} />
                    <span className="inline-block mx-auto">
                      <CloudUploadIcon className="h-8 w-8 text-indigo-600" />
                    </span>
                    <p className="text-neutral-950 font-semibold text-base text-center">
                      <span className="text-indigo-600">Click to upload</span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-center text-base text-neutral-600 mt-3 font-medium">
                      Only .pdf file are allowed
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.watch("cv") ? (
            <div className="flex justify-between relative items-center px-1 py-3 md:p-4 shadow-sm border rounded-xl mt-5">
              <div className="flex gap-x-2 md:gap-x-3  items-center">
                <span className="inline-flex justify-center items-center md:h-12 shrink-0 h-10 w-10 md:w-12 rounded-full bg-indigo-50 border">
                  <FileTextIcon className="h-4 w-4 md:h-5 md:w-5 text-indigo-500" />
                </span>
                <div>
                  <p className="font-semibold text-neutral-950 text-sm text-wrap">
                    {form.getValues("cv")?.name}
                  </p>
                </div>
              </div>
              <Button
                onClick={removeFile}
                variant="secondary"
                size="icon"
                className="shrink-0"
              >
                <TrashIcon className="text-red-600 h-5 w-5" />
              </Button>
            </div>
          ) : null}
          <Button type="submit" size="lg" className="">
            Submit Application
          </Button>
        </form>
      </Form>
    </div>
  );
}
