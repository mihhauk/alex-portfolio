import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  senderEmail: z.string().email(),
  message: z.string().min(10).max(500),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="p-10">
      <Card className="w-1/3 bg-slate-600 border-slate-300">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardHeader>
              <CardTitle>Contact me</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="senderEmail"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-40"
                        placeholder="Your email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      I will reach oout to you as soon as I can!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Send email</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
