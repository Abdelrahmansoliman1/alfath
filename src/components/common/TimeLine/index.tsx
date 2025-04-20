"use client";

import {
  Timeline as TimelineComponent,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTitle,
} from "flowbite-react";
import { timelineTheme } from "./theme";

type TimeLineProps = {
  timeline: {
    icon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
    title: string;
    description: string;
  }[];
};
export function TimeLine({ timeline }: TimeLineProps) {
  return (
    <TimelineComponent horizontal theme={timelineTheme}>
      {timeline.map((item, index) => (
        <TimelineItem key={index} className="group">
          <TimelinePoint icon={item.icon} />
          <TimelineContent>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineBody>{item.description}</TimelineBody>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineComponent>
  );
}
