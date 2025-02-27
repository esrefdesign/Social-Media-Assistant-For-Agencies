import Link from "next/link"
import { BarChart3, Calendar, Home, PieChart, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientAnalytics } from "@/components/client-analytics"
import { ContentPlanner } from "@/components/content-planner"
import { AiInsights } from "@/components/ai-insights"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r bg-muted/40 p-6 md:flex">
        <div className="flex items-center gap-2 font-semibold text-lg mb-8">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span>SocialAI Pro</span>
        </div>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="#">
              <Home className="mr-2 h-5 w-5" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="#">
              <Users className="mr-2 h-5 w-5" />
              Clients
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="#">
              <PieChart className="mr-2 h-5 w-5" />
              Analytics
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="#">
              <Calendar className="mr-2 h-5 w-5" />
              Content Calendar
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="#">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Link>
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 border-b bg-background p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Client Dashboard</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline">Export Report</Button>
              <Button>New Campaign</Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          <Tabs defaultValue="analytics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="planner">Content Planner</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24,892</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.6%</div>
                    <p className="text-xs text-muted-foreground">+0.8% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Impressions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">142,568</div>
                    <p className="text-xs text-muted-foreground">+28% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2.4%</div>
                    <p className="text-xs text-muted-foreground">+0.3% from last month</p>
                  </CardContent>
                </Card>
              </div>

              <ClientAnalytics />
            </TabsContent>

            <TabsContent value="planner" className="space-y-6">
              <ContentPlanner />
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <AiInsights />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

