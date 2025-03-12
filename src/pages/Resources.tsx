
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Book, PlayCircle, FileText, Search } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Social Media Marketing Guide",
      type: "Guide",
      category: "Social Media",
      icon: Book,
    },
    {
      title: "Email Marketing Best Practices",
      type: "Video",
      category: "Email",
      icon: PlayCircle,
    },
    {
      title: "Content Strategy Template",
      type: "Template",
      category: "Content",
      icon: FileText,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Marketing Resources</h1>

      {/* Search */}
      <div className="max-w-md mx-auto mb-12 relative">
        <Input
          type="search"
          placeholder="Search resources..."
          className="pl-10"
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {["All", "Social Media", "Email", "Content", "SEO"].map((category) => (
          <Badge
            key={category}
            variant="secondary"
            className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <resource.icon className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">{resource.title}</h3>
                <div className="flex gap-2">
                  <Badge variant="outline">{resource.type}</Badge>
                  <Badge variant="secondary">{resource.category}</Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;
