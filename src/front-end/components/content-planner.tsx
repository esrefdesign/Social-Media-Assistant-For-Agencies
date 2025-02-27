"use client"

import { useState } from "react"
import { CalendarIcon, Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function ContentPlanner() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("calendar")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Content Planner</h2>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <Tabs value={view} onValueChange={setView} className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="kanban">Kanban</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-4">
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <div key={dayIndex} className="text-center font-medium">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex]}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, index) => {
                  const isToday = index === 15
                  const hasContent = [8, 12, 15, 16, 22, 27].includes(index)
                  return (
                    <div
                      key={index}
                      className={cn(
                        "aspect-square rounded-md p-2 text-sm",
                        isToday && "bg-primary text-primary-foreground",
                        !isToday && hasContent && "bg-muted",
                        "hover:bg-muted/80 cursor-pointer",
                      )}
                    >
                      <div className="font-medium">{index + 1}</div>
                      {hasContent && <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary mx-auto" />}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Content</CardTitle>
              <CardDescription>Scheduled posts for the next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { platform: "Instagram", type: "Image", time: "Today, 10:00 AM", status: "Scheduled" },
                  { platform: "Facebook", type: "Video", time: "Today, 2:00 PM", status: "Draft" },
                  { platform: "Twitter", type: "Text", time: "Tomorrow, 9:00 AM", status: "Scheduled" },
                  { platform: "LinkedIn", type: "Article", time: "Feb 28, 11:00 AM", status: "Scheduled" },
                  { platform: "TikTok", type: "Video", time: "Mar 1, 3:00 PM", status: "Draft" },
                ].map((post, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "h-10 w-10 rounded-full flex items-center justify-center",
                          post.platform === "Instagram" && "bg-pink-100 text-pink-600",
                          post.platform === "Facebook" && "bg-blue-100 text-blue-600",
                          post.platform === "Twitter" && "bg-sky-100 text-sky-600",
                          post.platform === "LinkedIn" && "bg-indigo-100 text-indigo-600",
                          post.platform === "TikTok" && "bg-slate-100 text-slate-600",
                        )}
                      >
                        {post.platform.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">
                          {post.platform} {post.type}
                        </p>
                        <p className="text-sm text-muted-foreground">{post.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          post.status === "Scheduled" && "bg-green-100 text-green-700",
                          post.status === "Draft" && "bg-amber-100 text-amber-700",
                        )}
                      >
                        {post.status}
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Schedule</CardTitle>
              <CardDescription>All scheduled and draft content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Platform" />
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
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
                    <div>Platform</div>
                    <div>Content Type</div>
                    <div>Date & Time</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="grid grid-cols-5 gap-4 p-4 border-b last:border-0">
                      <div>Instagram</div>
                      <div>Image Post</div>
                      <div>Feb 27, 2025 10:00 AM</div>
                      <div>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Scheduled
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kanban" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-amber-50 rounded-t-lg">
                <CardTitle>Draft</CardTitle>
                <CardDescription>Content in preparation</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="rounded-lg border bg-card p-3 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Draft</div>
                        <div className="text-xs text-muted-foreground">Instagram</div>
                      </div>
                      <h4 className="font-medium mb-1">Product Announcement</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        New spring collection announcement with product images
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Mar 2, 2025</span>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-blue-50 rounded-t-lg">
                <CardTitle>Scheduled</CardTitle>
                <CardDescription>Ready to publish</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="rounded-lg border bg-card p-3 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Scheduled</div>
                        <div className="text-xs text-muted-foreground">Facebook</div>
                      </div>
                      <h4 className="font-medium mb-1">Weekly Tips</h4>
                      <p className="text-sm text-muted-foreground mb-2">5 tips for better social media engagement</p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Feb 28, 2025</span>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-green-50 rounded-t-lg">
                <CardTitle>Published</CardTitle>
                <CardDescription>Live content</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="rounded-lg border bg-card p-3 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Published</div>
                        <div className="text-xs text-muted-foreground">Twitter</div>
                      </div>
                      <h4 className="font-medium mb-1">Industry News</h4>
                      <p className="text-sm text-muted-foreground mb-2">Latest updates from the industry conference</p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Feb 25, 2025</span>
                        <Button variant="ghost" size="sm">
                          View Stats
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Placeholder for the format function since we don't have date-fns imported
function format(date: Date, format: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

