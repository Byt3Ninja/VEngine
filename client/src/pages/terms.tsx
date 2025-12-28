import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>
        
        <Card className="bg-card border-border/50">
          <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
            <p className="lead">Last updated: December 28, 2025</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using vengine.io (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h3>2. Description of Service</h3>
            <p>
              Venture Engine provides a venture building ecosystem, software products, and consultation services. You understand and agree that the Service may include certain communications from Venture Engine, such as service announcements, administrative messages, and the Venture Engine Newsletter, and that these communications are considered part of Venture Engine membership.
            </p>

            <h3>3. User Conduct</h3>
            <p>
              You agree to use the website only for lawful purposes. You are prohibited from posting on or transmitting through the website any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, racially, ethnically, or otherwise objectionable of any kind.
            </p>

            <h3>4. Intellectual Property</h3>
            <p>
              The Service and its original content, features and functionality are and will remain the exclusive property of Venture Engine and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>

            <h3>5. Termination</h3>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h3>6. Limitation of Liability</h3>
            <p>
              In no event shall Venture Engine, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h3>7. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:hello@vengine.io">hello@vengine.io</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
