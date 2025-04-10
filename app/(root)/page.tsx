import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice and Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot1.png"
          alt="robot"
          height={400}
          width={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8 ">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>you haven&apos;t taken any interviews yet </p>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>There are no interview available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
