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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle, Trash, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFieldArray, useForm } from "react-hook-form";
import { useDebounceValue } from "usehooks-ts";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().trim().min(1, { message: "Title is required" }),
  shortDescription: z
    .string()
    .trim()
    .min(1, { message: "Short description is required" }),
  content: z.string().trim().min(1, { message: "Content is required." }),
  clientLogo: z.any().refine((val) => val, "Client image is required"),
  clientName: z.string().trim().min(1, { message: "Client name is required" }),
  services: z.string().trim().min(1, { message: "Services are required" }),
  objectives: z.array(
    z.object({
      value: z.string().min(1, { message: "This field is required" }),
    })
  ),
  challenges: z.array(
    z.object({
      label: z.string().min(1, { message: "This field is required" }),
      text: z.string().min(1, { message: "This field is required" }),
    })
  ),
  solutions: z.array(
    z.object({
      value: z.string().min(1, { message: "This field is required" }),
    })
  ),
  keyMetrics: z.array(
    z.object({
      label: z.string().min(1, { message: "This field is required" }),
      text: z.string().min(1, { message: "This field is required" }),
    })
  ),
  conclusion: z.string().trim().min(1, { message: "Conclusion is required" }),
  isPublished: z.boolean().optional(),
});
export default function CaseStudiesCreateForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      objectives: [
        {
          value: "Design and develop a modern, user-centric website.",
        },
        {
          value:
            "Optimize the website for improved search engine ranking and visibility.",
        },
        {
          value:
            "Enhance user experience and engagement to increase conversions",
        },
      ],
      solutions: [
        {
          value:
            "Following the launch of the new website, XYZ Corporation experienced a significant increase in online visibility and organic traffic.",
        },
        {
          value:
            "The website's user-friendly design and optimized content led to improved user engagement and lower bounce rates.",
        },
        {
          value:
            "Enhanced SEO efforts resulted in higher search engine rankings for targeted keywords, driving qualified traffic and leads.",
        },
      ],
      challenges: [
        {
          label: "Outdated Design and Functionality",
          text: "XYZ Corporation's existing website was built on outdated technology and lacked modern design elements, making it unappealing to users and difficult to navigate.",
        },
      ],
      keyMetrics: [
        {
          label: "More traffic",
          text: "25%",
        },
        {
          label: "Page loads",
          text: "10X",
        },
      ],
    },
    mode: "onChange",
  });
  type FormValues = z.infer<typeof FormSchema>;

  async function onSubmit(data: FormValues) {
    console.log(data);
  }

  const [debounceValue, updateDebounceValue] = useDebounceValue("", 500);

  const onInputChange = (data: string) => {
    updateDebounceValue(data);
  };

  const {
    fields: objectivesField,
    append: objectiveAppend,
    remove: removeObjectives,
  } = useFieldArray({
    name: "objectives",
    control: form.control,
  });

  const {
    fields: solutionsField,
    append: appendSolution,
    remove: removeSolution,
  } = useFieldArray({
    name: "solutions",
    control: form.control,
  });

  const {
    fields: challengesField,
    append: appendChallenge,
    remove: removeChallenge,
  } = useFieldArray({
    name: "challenges",
    control: form.control,
  });

  const {
    fields: keyMetricsField,
    append: appendKeyMetrics,
    remove: removeKeyMetrics,
  } = useFieldArray({
    name: "keyMetrics",
    control: form.control,
  });

  useEffect(() => {
    form.setValue("content", debounceValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  const onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    if (acceptedFiles.length > 0) {
      form.setValue("clientLogo", acceptedFiles[0]);
    }

    if (rejectedFiles.length > 0) {
      form.setError("clientLogo", { message: "Please upload image file." });
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
    form.resetField("clientLogo");
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
                        placeholder="Ex: Enhancing Online Presence for XYZ Corporation"
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
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-12">
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-lg font-bold">Client Information</h3>
              <p className="text-base text-muted-foreground">
                Name, logo, services....
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 shadow-custom bg-white border-border/40 border p-6  rounded-lg space-y-6">
              <FormField
                control={form.control}
                name="clientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input
                        autoFocus
                        {...field}
                        placeholder="Faulsk Company Inc Canada"
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services</FormLabel>
                    <FormControl>
                      <Input
                        autoFocus
                        {...field}
                        placeholder="FUX Research, Wireframing, UI Design"
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Logo</FormLabel>
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

              {form.watch("clientLogo") ? (
                <div className="relative p-4 border rounded-xl h-40 w-40">
                  <Image
                    src={URL.createObjectURL(
                      form.getValues("clientLogo") as Blob
                    )}
                    alt="demo"
                    fill
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
              <div>
                {objectivesField.map((field, index) => (
                  <FormField
                    control={form.control}
                    key={field.id}
                    name={`objectives.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          className={`${cn(index !== 0 && "sr-only")}`}
                        >
                          Objectives
                        </FormLabel>

                        <FormControl>
                          <div className="flex items-center gap-1">
                            <Input {...field} />
                            {index >= 3 && (
                              <Button
                                variant="link"
                                onClick={() => removeObjectives(index)}
                                size="sm"
                                type="button"
                              >
                                <Trash size={18} />{" "}
                              </Button>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  className="mt-1 flex items-center gap-1"
                  onClick={() => objectiveAppend({ value: "" })}
                >
                  <PlusCircle size={17} /> Add more to your response
                </Button>
              </div>
              <div>
                <Label>Challenges</Label>
                <div className="mt-4 space-y-4">
                  {challengesField.map((field, index) => (
                    <div key={index} className="space-y-2">
                      <FormField
                        control={form.control}
                        key={field.id}
                        name={`challenges.${index}.label`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Label</FormLabel>

                            <FormControl>
                              <div className="flex items-center gap-1">
                                <Input {...field} />
                                {index >= 3 && (
                                  <Button
                                    variant="link"
                                    onClick={() => removeChallenge(index)}
                                    size="sm"
                                    type="button"
                                  >
                                    <Trash size={18} />{" "}
                                  </Button>
                                )}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        key={field.id}
                        name={`challenges.${index}.text`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Text</FormLabel>
                            <FormControl>
                              <div className="flex items-center gap-1">
                                <Textarea {...field} />
                                {index >= 3 && (
                                  <Button
                                    variant="link"
                                    onClick={() => removeChallenge(index)}
                                    size="sm"
                                    type="button"
                                  >
                                    <Trash size={18} />{" "}
                                  </Button>
                                )}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="link"
                    size="sm"
                    className="mt-1 flex items-center gap-1"
                    onClick={() => appendChallenge({ label: "", text: "" })}
                  >
                    <PlusCircle size={17} /> Add more to your response
                  </Button>
                </div>
              </div>
              <div>
                <Label>Key Metrics</Label>
                <div className="mt-4 space-y-4">
                  {keyMetricsField.map((field, index) => (
                    <div key={index} className="space-y-2">
                      <FormField
                        control={form.control}
                        key={field.id}
                        name={`keyMetrics.${index}.label`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Label</FormLabel>

                            <FormControl>
                              <div className="flex items-center gap-1">
                                <Input {...field} />
                                {index >= 3 && (
                                  <Button
                                    variant="link"
                                    onClick={() => removeChallenge(index)}
                                    size="sm"
                                    type="button"
                                  >
                                    <Trash size={18} />{" "}
                                  </Button>
                                )}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        key={field.id}
                        name={`keyMetrics.${index}.text`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Text</FormLabel>
                            <FormControl>
                              <div className="flex items-center gap-1">
                                <Textarea {...field} />
                                {index >= 3 && (
                                  <Button
                                    variant="link"
                                    onClick={() => removeChallenge(index)}
                                    size="sm"
                                    type="button"
                                  >
                                    <Trash size={18} />{" "}
                                  </Button>
                                )}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="link"
                    size="sm"
                    className="mt-1 flex items-center gap-1"
                    onClick={() => appendChallenge({ label: "", text: "" })}
                  >
                    <PlusCircle size={17} /> Add more to your response
                  </Button>
                </div>
              </div>
              <div>
                {solutionsField.map((field, index) => (
                  <FormField
                    control={form.control}
                    key={field.id}
                    name={`solutions.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          className={`${cn(index !== 0 && "sr-only")}`}
                        >
                          Solutions and Result
                        </FormLabel>

                        <FormControl>
                          <div className="flex items-center gap-1">
                            <Input {...field} />
                            {index >= 3 && (
                              <Button
                                variant="link"
                                onClick={() => removeSolution(index)}
                                size="sm"
                                type="button"
                              >
                                <Trash size={18} />{" "}
                              </Button>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  className="mt-1 flex items-center gap-1"
                  onClick={() => appendSolution({ value: "" })}
                >
                  <PlusCircle size={17} /> Add more to your response
                </Button>
              </div>
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
