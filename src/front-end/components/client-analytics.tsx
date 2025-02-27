"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ClientAnalytics() {
  const [timeRange, setTimeRange] = useState("30days")
  const [platform, setPlatform] = useState("all")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Client Analytics</h2>
        <div className="flex items-center gap-2">
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
            </SelectContent>
          </Select>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
          <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Audience Growth</CardTitle>
                <CardDescription>Follower growth over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center bg-muted/30 rounded-md">
                <div className="text-center text-muted-foreground">
                  <p>Audience Growth Chart</p>
                  <p className="text-xs">(Interactive chart would be displayed here)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
                <CardDescription>Likes, comments, shares</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center bg-muted/30 rounded-md">
                <div className="text-center text-muted-foreground">
                  <p>Engagement Metrics Chart</p>
                  <p className="text-xs">(Interactive chart would be displayed here)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Content Distribution</CardTitle>
                <CardDescription>By type and performance</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center bg-muted/30 rounded-md">
                <div className="text-center text-muted-foreground">
                  <p>Content Distribution Chart</p>
                  <p className="text-xs">(Interactive chart would be displayed here)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="audience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
              <CardDescription>Age, gender, location, interests</CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center bg-muted/30 rounded-md">
              <div className="text-center text-muted-foreground">
                <p>Audience Demographics Visualization</p>
                <p className="text-xs">(Interactive visualization would be displayed here)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Analysis of most engaging posts</CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center bg-muted/30 rounded-md">
              <div className="text-center text-muted-foreground">
                <p>Content Performance Analysis</p>
                <p className="text-xs">(Interactive analysis would be displayed here)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="competitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Competitor Benchmarking</CardTitle>
              <CardDescription>Compare performance against competitors</CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center bg-muted/30 rounded-md">
              <div className="text-center text-muted-foreground">
                <p>Competitor Benchmarking Dashboard</p>
                <p className="text-xs">(Interactive dashboard would be displayed here)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

