import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your account and profile settings.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-dashed rounded-lg">
                    <Settings className="w-16 h-16 text-muted-foreground mb-4"/>
                    <h3 className="text-xl font-semibold">Settings Page In Progress</h3>
                    <p className="text-muted-foreground mt-2">
                        This section is currently under development. You'll soon be able to manage your profile, notifications, and more.
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
