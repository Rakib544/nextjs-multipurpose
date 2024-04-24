"use client";

import { CloudUploadIcon, TrashIcon } from "@/components/icons";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  jobTitle: z.string().trim().min(1, { message: "Job title is required" }),
  description: z.string().trim().min(6, { message: "Description is required" }),
  image: z.any().refine((val) => val, "Profile image is required"),
  facebookURL: z
    .string()
    .trim()
    .min(1, { message: "Facebook URL is required" }),
  instagramURL: z
    .string()
    .trim()
    .min(1, { message: "Instagram URL is required" }),
  twitterURL: z.string().trim().min(1, { message: "Twitter URL is required" }),
  dribbleURL: z.string().trim().min(1, { message: "Dribble URL is required" }),
});
export default function TeamMemberAddForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  type FormValues = z.infer<typeof FormSchema>;

  async function onSubmit(data: FormValues) {
    console.log(data);
  }
  const onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    if (acceptedFiles.length > 0) {
      form.setValue("image", acceptedFiles[0]);
    }

    if (rejectedFiles.length > 0) {
      form.setError("image", { message: "Please upload only .pdf file." });
    }
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      //   "images/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    onDrop,
  });

  const removeFile = () => {
    acceptedFiles.splice(0, 1);
    form.resetField("image");
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    autoFocus
                    {...field}
                    placeholder="John Doe"
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Software Engineer"
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facebookURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Facebook URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://facebook.com/userId"
                    type="url"
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagramURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://instagram.com/userId"
                    type="url"
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="twitterURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://twitter.com/userId"
                    type="url"
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dribbleURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>DribbleURL URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://dribble.com/userId"
                    type="url"
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea rows={5} placeholder="description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
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
                    <p className="text-indigo-950 font-semibold text-base text-center">
                      <span className="text-indigo-600">Click to upload</span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-center text-base text-gray-600 mt-3 font-medium">
                      Only .png, .jpg, .jpeg, .webp file are allowed
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.watch("image") ? (
            <div className="relative p-4 border rounded-xl">
              <Image
                src={URL.createObjectURL(form.getValues("image") as Blob)}
                alt="demo"
                className="object-cover object-center h-20 w-20 rounded-full border"
              />

              <Button
                onClick={removeFile}
                variant="secondary"
                size="icon"
                className="shrink-0 absolute top-0 right-0"
              >
                <TrashIcon className="text-red-600 h-5 w-5" />
              </Button>
            </div>
          ) : null}

          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
