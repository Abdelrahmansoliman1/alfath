"use client";

import {
  Button,
  Timeline as TimelineComponent,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

type TimeLineProps = {
  timeline: {
    icon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
    title: string;
    description: string;
  }[];
};
export function TimeLine({ timeline }: TimeLineProps) {
  return (
    <TimelineComponent horizontal>
      {timeline.map((item, index) => (
        <TimelineItem key={index}>
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
