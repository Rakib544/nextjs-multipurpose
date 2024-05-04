"use client";

import PlateEditor from "@/components/plate-editor";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDebounceValue } from "usehooks-ts";
import { z } from "zod";

const FormSchema = z.object({
  content: z.string().trim().min(1, { message: "Content is required." }),
});
export default function TermsConditionForm({
  initialValue,
}: {
  initialValue: any;
}) {
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
    form.setValue("content", debounceValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PlateEditor
                    initialValue={initialValue}
                    onInputChange={onInputChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" size="lg" className="mt-8">
              Update
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
