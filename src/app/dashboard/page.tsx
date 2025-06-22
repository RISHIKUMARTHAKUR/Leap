
'use client';
import {
  Activity,
  ArrowUpRight,
  Briefcase,
  Users,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  dashboardStats,
  applicationsChartData,
  recentActivities,
} from '@/lib/data';
import { ChartTooltip, ChartTooltipContent, ChartContainer } from '@/components/ui/chart';

const ICONS = {
  "Active Applications": Briefcase,
  "Referral Requests": Users,
  "Learning Progress": BookOpen,
  "Profile Views": Activity,
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {dashboardStats.map((stat) => {
          const Icon = ICONS[stat.title as keyof typeof ICONS] || Activity;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Applications Overview</CardTitle>
              <CardDescription>
                Monthly application tracking.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/projects">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={applicationsChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip
                    cursor={{fill: 'hsl(var(--accent) / 0.2)'}}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Area type="monotone" dataKey="applications" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest applications and interactions.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src={`https://placehold.co/40x40`} alt="Avatar" data-ai-hint="logo abstract" />
                  <AvatarFallback>{activity.company.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.company}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <Badge variant={activity.status === "Completed" ? 'default' : 'outline'} className="font-medium">{activity.status}</Badge>
                   <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
