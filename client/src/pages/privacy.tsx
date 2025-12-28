import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <Card className="bg-card border-border/50">
          <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
            <p className="lead">Last updated: December 28, 2025</p>
            
            <h3>1. Introduction</h3>
            <p>
              Venture Engine ("we", "our", or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website vengine.io (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>

            <h3>2. Information We Collect</h3>
            <p>
              We collect information to provide better services to all our users. We collect information in the following ways:
            </p>
            <ul>
              <li><strong>Information you give us.</strong> For example, our services require you to sign up for an account. When you do, we’ll ask for personal information, like your name, email address, telephone number to store with your account.</li>
              <li><strong>Information we get from your use of our services.</strong> We collect information about the services that you use and how you use them, like when you visit a website that uses our advertising services or you view and interact with our ads and content.</li>
            </ul>

            <h3>3. How We Use Information</h3>
            <p>
              We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect Venture Engine and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
            </p>

            <h3>4. Information Sharing</h3>
            <p>
              We do not share personal information with companies, organizations and individuals outside of Venture Engine unless one of the following circumstances applies:
            </p>
            <ul>
              <li>With your consent.</li>
              <li>For external processing.</li>
              <li>For legal reasons.</li>
            </ul>

            <h3>5. Security</h3>
            <p>
              We work hard to protect Venture Engine and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold.
            </p>

            <h3>6. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:hello@vengine.io">hello@vengine.io</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
