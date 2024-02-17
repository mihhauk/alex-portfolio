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

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const formSchema = z.object({
  senderName: z.string().min(2).max(30),
  senderEmail: z.string().email(),
  message: z.string().min(10).max(500),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderName: '',
      senderEmail: '',
      message: '',
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit() {
    if (!formRef.current) return;
    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      form.reset({
        senderName: '',
        senderEmail: '',
        message: '',
      });
      // add notifications on success/ failure

      console.log(res, 'success');
    } catch (e) {
      console.log('ERROR', e);
    }
  }

  return (
    <div className="p-10">
      <Card className="w-1/3 bg-slate-600 border-slate-300">
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <CardHeader>
              <CardTitle>Contact me</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="senderName"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <Button disabled={form.formState.isSubmitting} type="submit">
                Send email
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
