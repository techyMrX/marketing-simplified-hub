
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart, Book, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Digital Marketing Made Simple
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empower your small business with AI-driven marketing strategies,
              tailored recommendations, and easy-to-use tools.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/strategy">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Personalized Strategy
              </h3>
              <p className="text-gray-600">
                Get customized marketing plans tailored to your business goals and
                industry.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Book className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Educational Resources
              </h3>
              <p className="text-gray-600">
                Access guides, templates, and tutorials to enhance your marketing
                knowledge.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BarChart className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Performance Analytics
              </h3>
              <p className="text-gray-600">
                Track your progress with comprehensive analytics and insights.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
