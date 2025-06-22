import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function ReferralsPage() {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>Global Referral Network</CardTitle>
                <CardDescription>Connect with professionals for mentorship and referrals.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-dashed rounded-lg">
                    <Users className="w-16 h-16 text-muted-foreground mb-4"/>
                    <h3 className="text-xl font-semibold">Referral Network Coming Soon</h3>
                    <p className="text-muted-foreground mt-2">
                        Build your network, get resume feedback, and land dream referrals. This feature is under construction.
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
