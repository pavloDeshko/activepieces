"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Pie, PieChart, LabelList} from "recharts"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const mapFill = (data:{}[]) => data.map((entry,i)=>({...entry, fill:`hsl(var(--chart-${i+1}))`}))

export const NamesChart = ({data}:{data:{name:string,number:number}[]})=>{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users' First Name Popularity</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <BarChart accessibilityLayer data={mapFill(data)}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent label="Number:" />}
            />
            <Bar dataKey="number" fill="var(--color-desktop)" radius={8}>
              <LabelList dataKey="name" position="top" />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Some users seem to have same names.
        </div>
      </CardFooter>
    </Card>
  )
}

export const LastNamesChart = ({data}:{data:{number:number, name:string}[]})=>{  
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Users' Last Name Popularity</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{}}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={mapFill(data)}
              label
              dataKey="number"
              nameKey="name"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          And last names too!
        </div>
      </CardFooter>
    </Card>
  )
}
