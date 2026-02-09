import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Contact MIT Advisory</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We'd love to hear from you. Reach out and let's talk about how we can help.
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:contact@mitadvisory.com" className="text-sm text-primary hover:underline">
                    contact@mitadvisory.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">
                    MIT Advisory ApS<br />
                    Galionsvej 76<br />
                    København K, Denmark
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  maxLength={255}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  maxLength={1000}
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">Send message</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
