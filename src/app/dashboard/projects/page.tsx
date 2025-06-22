import {
  File,
  ListFilter,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { projects } from '@/lib/data';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="internship">Internships</TabsTrigger>
          <TabsTrigger value="micro-project">Micro-Projects</TabsTrigger>
          <TabsTrigger value="full-time">Full-Time</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Remote
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>On-site</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Hybrid
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </TabsContent>
       <TabsContent value="internship">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {projects.filter(p => p.type === 'Internship').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="micro-project">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {projects.filter(p => p.type === 'Micro-Project').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </TabsContent>
       <TabsContent value="full-time">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {projects.filter(p => p.type === 'Full-Time').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}


type Project = typeof projects[0];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-4">
        <div className="flex items-start gap-4">
          <Image
            alt={`${project.company} logo`}
            className="rounded-lg"
            height={56}
            src={project.logoUrl}
            style={{
              aspectRatio: "56/56",
              objectFit: "cover",
            }}
            width={56}
            data-ai-hint="logo abstract"
          />
          <div className="grid gap-1">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <CardDescription className="text-sm">{project.company}</CardDescription>
            <p className="text-xs text-muted-foreground">{project.location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
         <Badge variant="outline" className="mb-2">{project.type}</Badge>
        <div className="flex flex-wrap gap-1 mt-2">
            {project.techStack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
        </div>
        
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <div className="text-xs text-muted-foreground">
            <strong>Duration:</strong> {project.duration}
        </div>
        <Button size="sm">Apply</Button>
      </CardFooter>
    </Card>
  );
}
