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
  title: z.string().trim().min(1, { message: "Title is required" }),
  subtitle: z.string().trim().min(1, { message: "Subtitle is required" }),
  description: z.string().trim().min(6, { message: "Description is required" }),
  thumbnail: z.any().refine((val) => val, "Thumbnail is required"),
});
export default function ArticleCreateForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  type FormValues = z.infer<typeof FormSchema>;

  async function onSubmit(data: FormValues) {
    console.log(data);
  }
  const onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    if (acceptedFiles.length > 0) {
      form.setValue("thumbnail", acceptedFiles[0]);
    }

    if (rejectedFiles.length > 0) {
      form.setError("thumbnail", { message: "Please upload only .pdf file." });
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
    form.resetField("thumbnail");
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    autoFocus
                    {...field}
                    placeholder="Write title"
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subtitle</FormLabel>
                <FormControl>
                  <Textarea placeholder="Subtitle" {...field} className="" />
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
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail</FormLabel>
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

          {form.watch("thumbnail") ? (
            <div className="relative p-4 border rounded-xl">
              <div className="aspect-video relative">
                <Image
                  src={URL.createObjectURL(form.getValues("thumbnail") as Blob)}
                  alt="demo"
                  fill
                  className="object-cover object-center"
                />
              </div>
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
