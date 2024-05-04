"use client";

import PlateEditor from "@/components/plate-editor";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDebounceValue } from "usehooks-ts";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().trim().min(1, { message: "Title is required" }),
  content: z.string().trim().min(1, { message: "Content is required." }),
  employmentType: z.string().trim().min(1, { message: "Required" }),
  experience: z.string().trim().min(1, { message: "Required" }),
  role: z.string().trim().min(1, { message: "Required" }),
  skills: z.string().trim().min(1, { message: "Required" }),
  workingSchedule: z.string().trim().min(1, { message: "Required" }),
  location: z.string().trim().min(1, { message: "Required" }),
  expiredDate: z.date({
    required_error: "Expired date is required.",
  }),
  salaryType: z.string().trim().min(1, { message: "Required" }),
  salary: z.string().trim().min(1, { message: "Required" }),
  isNegotiable: z.boolean().default(false).optional(),
  benefits: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  isPublished: z.boolean().default(false).optional(),
});
export default function JobEditForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "Senior Software Engineer",
      employmentType: "Full-time",
      experience: "No experience",
      role: "Software Engineer",
      location: "Dhaka, Bangladesh",
      expiredDate: new Date(),
      salaryType: "Monthly",
      salary: "$ 2000",
      isNegotiable: true,
      workingSchedule: "",
      isPublished: true,
      benefits: ["Competitive salary", "Work-life balance"],
    },
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
                  <FormItem className="space-y-3">
                    <FormLabel>Employment Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col sm:flex-row gap-x-8 space-y-1"
                      >
                        {[
                          "Full-time",
                          "Part-time",
                          "On Demand",
                          "Negotiable",
                        ].map((item) => (
                          <FormItem
                            className="flex items-center space-x-1 space-y-0"
                            key={item}
                          >
                            <FormControl>
                              <RadioGroupItem value={item} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Experience</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col sm:flex-row gap-x-8 space-y-1"
                      >
                        {[
                          "No experience",
                          "1 year exp",
                          "2 year exp",
                          "> 3 year exp",
                        ].map((item) => (
                          <FormItem
                            className="flex items-center space-x-1 space-y-0"
                            key={item}
                          >
                            <FormControl>
                              <RadioGroupItem value={item} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <ScrollArea className="h-48">
                          {[
                            "Software Engineer",
                            "Product Manager",
                            "Marketing Specialist",
                            "Human Resources Manager",
                            "Sales Representative",
                            "Financial Analyst",
                            "Customer Support Specialist",
                            "Data Scientist",
                            "Operations Manager",
                            "Content Writer/Editor",
                          ].map((item) => (
                            <SelectItem value={item} key={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
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
                      <Input placeholder="Ex: Dhaka, Bangladesh" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expiredDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="mb-1">Expired Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full !rounded-lg pl-4 !py-6 text-left font-normal",
                              !field.value && "text-[#9CA3AF]"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salaryType"
                defaultValue="Monthly"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-6"
                      >
                        {["Hourly", "Monthly"].map((item) => (
                          <FormItem
                            className="has-[:checked]:border-primary has-[:checked]:border-2 h-28 w-full flex items-center justify-center border rounded-lg relative"
                            key={item}
                            onClick={() => form.setValue("salaryType", item)}
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={item}
                                className="hidden"
                              ></RadioGroupItem>
                            </FormControl>
                            <FormLabel className="absolute inset-0 flex flex-col justify-center items-center gap-y-3">
                              <Clock className="h-5 w-5" />
                              {item}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
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
                    <FormControl>
                      <Input {...field} placeholder="$ 0.00" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isNegotiable"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel className="!mt-0">
                      Salary is negotiable
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="benefits"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Benefits</FormLabel>
                    </div>
                    {[
                      {
                        label: "Competitive salary",
                        id: "Competitive salary",
                      },
                      {
                        label: "Career growth opportunities",
                        id: "Career growth opportunities",
                      },
                      {
                        label: "Work-life balance",
                        id: "Work-life balance",
                      },
                      {
                        label: "Professional development",
                        id: "Professional development",
                      },
                      {
                        label: "Health and wellness",
                        id: "Health and wellness",
                      },
                      {
                        label: "Positive work culture",
                        id: "Positive work culture",
                      },
                      {
                        label: "Recognition and rewards",
                        id: "Recognition and rewards",
                      },
                      {
                        label: "Learning opportunities",
                        id: "Learning opportunities",
                      },
                    ].map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="benefits"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field?.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
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
              {/* <div className="flex items-center gap-x-2 font-bold text-sm text-indigo-950">
                <Switch /> Publish
              </div> */}
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
