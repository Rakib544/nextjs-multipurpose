"use client";

import { TrashIcon } from "@/components/icons";
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
import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useDebounceValue } from "usehooks-ts";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  jobTitle: z.string().trim().min(1, { message: "Job title is required" }),
  phone: z.string().trim().min(1, { message: "Required" }),
  country: z.string().trim().min(1, { message: "Required" }),
  state: z.string().trim().min(1, { message: "Required" }),
  city: z.string().trim().min(1, { message: "Required" }),
  address: z.string().trim().min(1, { message: "Required" }),
  zip: z.string().trim().min(1, { message: "Required" }),
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

  const [debounceValue, updateDebounceValue] = useDebounceValue("", 500);

  const onInputChange = (data: string) => {
    updateDebounceValue(data);
  };

  useEffect(() => {
    form.setValue("description", debounceValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  const onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    if (acceptedFiles.length > 0) {
      form.setValue("image", acceptedFiles[0]);
    }

    if (rejectedFiles.length > 0) {
      form.setError("image", { message: "Please upload image only file." });
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
    form.resetField("image");
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone number"
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
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Bangladesh" {...field} className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State/Region</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="State/Region"
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
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" {...field} className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip/Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Zip/Code" {...field} className="" />
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
                    <FormLabel>Position</FormLabel>
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
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <PlateEditor onInputChange={onInputChange} />
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
                        className="py-14 bg-[#F9F9FA] px-6 rounded-xl text-center border border-dashed"
                      >
                        <input {...getInputProps()} />

                        <Image
                          src="/file-upload.svg"
                          alt=""
                          height={100}
                          width={200}
                          className="block mx-auto"
                          placeholder="blur"
                          blurDataURL={generateBlurImageURL()}
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

              {form.watch("image") ? (
                <div className="relative p-4 border rounded-xl">
                  <Image
                    src={URL.createObjectURL(form.getValues("image") as Blob)}
                    alt="demo"
                    className="object-cover object-center h-20 w-20 rounded-full border"
                    width={80}
                    height={80}
                    placeholder="blur"
                    blurDataURL={generateBlurImageURL()}
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
                social profiles, ....
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 shadow-custom bg-white border-border/40 border p-6  rounded-lg space-y-6">
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
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4"></div>
            <div className="col-span-12 md:col-span-8 flex justify-end mt-8">
              <Button type="submit" size="lg">
                Add Member
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
