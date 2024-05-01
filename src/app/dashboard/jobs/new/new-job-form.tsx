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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().trim().min(1, { message: "Name is required" }),
  content: z.string().trim().min(1, { message: "Job title is required" }),
  employmentType: z
    .string()
    .trim()
    .min(6, { message: "Description is required" }),
  experience: z.any().refine((val) => val, "Profile image is required"),
  role: z.string().trim().min(1, { message: "Facebook URL is required" }),
  skills: z.string().trim().min(1, { message: "Instagram URL is required" }),
  workingSchedule: z
    .string()
    .trim()
    .min(1, { message: "Twitter URL is required" }),
  location: z.string().trim().min(1, { message: "Dribble URL is required" }),
  expired: z.string().trim().min(1, { message: "Dribble URL is required" }),
  salaryType: z.string().trim().min(1, { message: "Dribble URL is required" }),
  salary: z.string().trim().min(1, { message: "Dribble URL is required" }),
  isNegotiable: z
    .string()
    .trim()
    .min(1, { message: "Dribble URL is required" }),
  benefits: z.string().trim().min(1, { message: "Dribble URL is required" }),
  isPublished: z.string().trim().min(1, { message: "Required" }),
});
export default function JobCreateForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  type FormValues = z.infer<typeof FormSchema>;

  async function onSubmit(data: FormValues) {
    console.log(data);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 gap-6 mt-12">
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-lg font-bold">Details</h3>
              <p className="text-base text-gray-600">
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
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-12">
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-lg font-bold">Properties</h3>
              <p className="text-base text-gray-600">
                Additional functions and attributes...
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 shadow-custom bg-white border-border/40 border p-6  rounded-lg space-y-6">
              <FormField
                control={form.control}
                name="employmentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employment Type</FormLabel>
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
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience</FormLabel>
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
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expired"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expired</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salaryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SalaryType</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isNegotiable"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Is Negotiable</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="benefits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Benifits</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="description" {...field} />
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
              <div className="flex items-center gap-x-2 font-bold text-sm text-indigo-950">
                <Switch /> Publish
              </div>
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
