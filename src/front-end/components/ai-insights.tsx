"use client"

import { useState } from "react"
import { Bot, RefreshCw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AiInsights() {
  const [generating, setGenerating] = useState(false)
  const [client, setClient] = useState("all")

  const handleGenerateInsights = () => {
    setGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setGenerating(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">AI-Powered Insights</h2>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <div className="flex items-center gap-2">
          <Select value={client} onValueChange={setClient}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Clients</SelectItem>
              <SelectItem value="fashionbrand">Fashion Brand Inc.</SelectItem>
              <SelectItem value="techcompany">Tech Company LLC</SelectItem>
              <SelectItem value="foodservice">Food Service Co.</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleGenerateInsights} disabled={generating}>
            {generating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate New Insights
              </>
            )}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance Analysis</TabsTrigger>
          <TabsTrigger value="audience">Audience Insights</TabsTrigger>
          <TabsTrigger value="content">Content Recommendations</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Performance Analysis</CardTitle>
                <CardDescription>AI-generated insights based on your social media performance</CardDescription>
              </div>
              <Bot className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Key Findings</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-green-600" />
                      </div>
                      <span>
                        Your Instagram engagement rate has increased by 24% in the last month, significantly
                        outperforming industry benchmarks.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-green-600" />
                      </div>
                      <span>
                        Video content is generating 3.2x more engagement than static images across all platforms.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-amber-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-amber-600" />
                      </div>
                      <span>
                        LinkedIn performance has declined by 12% - recommend adjusting content strategy for this
                        platform.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-green-600" />
                      </div>
                      <span>
                        Posting between 2-4pm on weekdays shows 18% higher engagement rates than other time slots.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Recommendations</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Increase video content production by 30% to capitalize on higher engagement rates.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>
                        Revise LinkedIn content strategy to focus more on industry insights and thought leadership.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>
                        Optimize posting schedule to prioritize the 2-4pm weekday window for high-value content.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">Analysis based on data from Feb 1 - Feb 27, 2025</p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Audience Insights</CardTitle>
                <CardDescription>AI-generated insights about your audience demographics and behavior</CardDescription>
              </div>
              <Bot className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Audience Segments</h3>
                  <div className="space-y-3">
                    <div className="rounded-md bg-muted/50 p-3">
                      <h4 className="font-medium text-sm mb-1">Primary Segment (42%)</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        25-34 year old urban professionals interested in lifestyle and technology
                      </p>
                      <div className="text-xs">Most active on: Instagram, TikTok</div>
                    </div>
                    <div className="rounded-md bg-muted/50 p-3">
                      <h4 className="font-medium text-sm mb-1">Secondary Segment (28%)</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        35-44 year old parents with interest in family, health and wellness
                      </p>
                      <div className="text-xs">Most active on: Facebook, Instagram</div>
                    </div>
                    <div className="rounded-md bg-muted/50 p-3">
                      <h4 className="font-medium text-sm mb-1">Tertiary Segment (18%)</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        18-24 year old students with interest in entertainment and trends
                      </p>
                      <div className="text-xs">Most active on: TikTok, Twitter</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Behavioral Insights</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-purple-600" />
                      </div>
                      <span>Your audience is most active between 7-9pm on weekdays and 10am-2pm on weekends.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-purple-600" />
                      </div>
                      <span>
                        Content related to "behind-the-scenes" and "how-to" generates 37% more comments than other
                        content types.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-purple-600" />
                      </div>
                      <span>Your audience shows strong affinity for sustainability and eco-friendly messaging.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">Analysis based on data from Feb 1 - Feb 27, 2025</p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Content Recommendations</CardTitle>
                <CardDescription>AI-generated content ideas and optimization suggestions</CardDescription>
              </div>
              <Bot className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Content Ideas</h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Sustainability Series",
                        description: "Create a weekly series highlighting eco-friendly practices in your industry",
                        platforms: "Instagram, TikTok",
                        format: "Short-form video",
                        priority: "High",
                      },
                      {
                        title: "Behind-the-Scenes",
                        description: "Show your production process and team culture",
                        platforms: "Instagram Stories, TikTok",
                        format: "Day-in-the-life style video",
                        priority: "Medium",
                      },
                      {
                        title: "Expert Q&A",
                        description: "Host monthly live sessions with industry experts",
                        platforms: "LinkedIn, Facebook",
                        format: "Live video",
                        priority: "Medium",
                      },
                      {
                        title: "Customer Spotlight",
                        description: "Feature customer success stories and testimonials",
                        platforms: "All platforms",
                        format: "Carousel posts, video testimonials",
                        priority: "High",
                      },
                    ].map((idea, index) => (
                      <div key={index} className="rounded-md bg-muted/50 p-3">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm">{idea.title}</h4>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              idea.priority === "High" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {idea.priority}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground my-1">{idea.description}</p>
                        <div className="flex flex-col gap-1 text-xs">
                          <div>
                            <span className="font-medium">Platforms:</span> {idea.platforms}
                          </div>
                          <div>
                            <span className="font-medium">Format:</span> {idea.format}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Optimization Tips</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-teal-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-teal-600" />
                      </div>
                      <span>Use more action-oriented captions with clear CTAs to improve conversion rates.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-teal-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-teal-600" />
                      </div>
                      <span>Increase use of user-generated content by 25% to boost authenticity and engagement.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-teal-100 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-teal-600" />
                      </div>
                      <span>Optimize hashtag strategy to include more niche, targeted tags with less competition.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">Recommendations generated on Feb 27, 2025</p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Trend Analysis</CardTitle>
                <CardDescription>AI-detected trends relevant to your industry and audience</CardDescription>
              </div>
              <Bot className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Emerging Trends</h3>
                  <div className="space-y-3">
                    {[
                      {
                        trend: "Sustainable Packaging",
                        relevance: "High",
                        growth: "+142% in last 30 days",
                        description: "Growing consumer interest in eco-friendly packaging solutions",
                      },
                      {
                        trend: "AR Shopping Experiences",
                        relevance: "Medium",
                        growth: "+87% in last 30 days",
                        description: "Augmented reality for virtual try-ons and product visualization",
                      },
                      {
                        trend: "Micro-Influencer Collaborations",
                        relevance: "High",
                        growth: "+63% in last 30 days",
                        description: "Partnerships with niche influencers with highly engaged audiences",
                      },
                    ].map((trend, index) => (
                      <div key={index} className="rounded-md bg-muted/50 p-3">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm">{trend.trend}</h4>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              trend.relevance === "High" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {trend.relevance} Relevance
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground my-1">{trend.description}</p>
                        <div className="text-xs font-medium text-green-600">{trend.growth}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-2">Competitor Trend Adoption</h3>
                  <div className="space-y-3">
                    <div className="rounded-md bg-muted/50 p-3">
                      <h4 className="font-medium text-sm mb-1">Top Competitor Activities</h4>
                      <ul className="space-y-2 text-xs">
                        <li>• 67% of competitors have increased video content production in Q1 2025</li>
                        <li>• 42% are experimenting with AI-generated content</li>
                        <li>• 78% have adopted user-generated content campaigns</li>
                      </ul>
                    </div>
                    <div className="rounded-md bg-muted/50 p-3">
                      <h4 className="font-medium text-sm mb-1">Opportunity Gaps</h4>
                      <ul className="space-y-2 text-xs">
                        <li>• Only 23% of competitors are leveraging interactive content formats</li>
                        <li>• Limited adoption of sustainability messaging (31% of competitors)</li>
                        <li>• Minimal presence on emerging platforms like BeReal (12% of competitors)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">Trend analysis as of Feb 27, 2025</p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

