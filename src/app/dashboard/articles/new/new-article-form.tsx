"use client";

import PlateEditor from "@/components/plate-editor";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useDebounceValue } from "usehooks-ts";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().trim().min(1, { message: "Title is required" }),
  shortDescription: z
    .string()
    .trim()
    .min(1, { message: "Short description is required" }),
  content: z.string().trim().min(1, { message: "Content is required." }),
  cover: z.any().refine((val) => val, "Cover image is required"),
  tags: z.string().trim().min(1, { message: "Required" }),
  metaTitle: z.string().trim().min(1, { message: "Required" }),
  metaDescription: z.string().trim().min(1, { message: "Required" }),
  metaKeywords: z.string().trim().min(1, { message: "Required" }),
  isPublished: z.boolean().optional(),
});
export default function ArticleCreateForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });
  type FormValues = z.infer<typeof FormSchema>;

  async function onSubmit(data: FormValues) {
    console.log(data);
  }

  const [debounceValue, updateDebounceValue] = useDebounceValue("", 500);

  const onInputChange = (data: string) => {
    updateDebounceValue(data);
  };

  useEffect(() => {
    form.setValue("content", debounceValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  const onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    if (acceptedFiles.length > 0) {
      form.setValue("cover", acceptedFiles[0]);
    }

    if (rejectedFiles.length > 0) {
      form.setError("cover", { message: "Please upload image file." });
    }
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "images/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    onDrop,
  });

  const removeFile = () => {
    acceptedFiles.splice(0, 1);
    form.resetField("cover");
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 gap-6 mt-12">
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-lg font-bold">Details</h3>
              <p className="text-base text-muted-foreground">
                Title, description, image....
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 shadow-custom bg-white border-border/40 border p-6  rounded-lg space-y-6">
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
                        placeholder="Ex: Software Engineer"
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Description"
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <PlateEditor onInputChange={onInputChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Image</FormLabel>
                    <FormControl>
                      <div
                        {...field}
                        {...getRootProps()}
                        className="py-14 bg-[#F9F9FA] px-6 rounded-xl text-center border border-dashed"
                      >
                        <input {...getInputProps()} />

                        <Image
                          src="/file-upload.svg"
                          alt=""
                          height={100}
                          width={200}
                          placeholder="blur"
                          blurDataURL={generateBlurImageURL()}
                          className="block mx-auto"
                        />

                        <p className="text-foreground font-bold text-lg mt-5 text-center">
                          Drop or Select File
                        </p>
                        <p className="text-center text-sm text-muted-foreground mt-3 font-medium">
                          Drop files here or click{" "}
                          <span className="underline text-primary">browse</span>{" "}
                          thorough your machine
                        </p>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("cover") ? (
                <div className="relative p-4 border rounded-xl aspect-video">
                  <Image
                    src={URL.createObjectURL(form.getValues("cover") as Blob)}
                    alt="demo"
                    fill
                    placeholder="blur"
                    blurDataURL={generateBlurImageURL()}
                    className="object-cover object-center border"
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
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-12">
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-lg font-bold">Properties</h3>
              <p className="text-base text-muted-foreground">
                Additional functions and attributes...
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 shadow-custom bg-white border-border/40 border p-6  rounded-lg space-y-6">
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="tags" className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="metaTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="meta title" className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="metaDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Description</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="meta description"
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="metaKeywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Keywords</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="keywords" className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4"></div>
            <div className="col-span-12 md:col-span-8 flex justify-between mt-8">
              <FormField
                control={form.control}
                name="isPublished"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel className="!mt-0">Published</FormLabel>
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg">
                Create Job
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
