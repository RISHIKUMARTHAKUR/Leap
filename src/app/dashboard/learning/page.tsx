import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function LearningPage() {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>Targeted Career Stack Learning</CardTitle>
                <CardDescription>Your personalized learning tracks to get you job-ready.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-dashed rounded-lg">
                    <BookOpen className="w-16 h-16 text-muted-foreground mb-4"/>
                    <h3 className="text-xl font-semibold">Learning Tracks Coming Soon</h3>
                    <p className="text-muted-foreground mt-2">
                        We are partnering with top companies to bring you industry-aligned learning programs. Stay tuned!
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
