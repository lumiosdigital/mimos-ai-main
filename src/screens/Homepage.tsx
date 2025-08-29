"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MediaQuery } from "@/components/MediaQuery";
import Step from "@/components/Step";
import Footer from "@/components/Footer";
import Link from "next/link";
import Card from "@/components/Card";
import SplineHero from "@/components/SplineHero";
import SplineFigure from "@/components/SplineFigure";
import YCombinator from "@/components/icons/YCombinator";
import MimosLogo from "@/components/icons/MimosLogo";
import ComputerHand from "@/assets/computer_hand.png";
import Arrow from "@/components/icons/Arrow";
import Form from "@/components/Form";

export default function Homepage() {
  return (
    <div className="flex flex-col flex-1 overflow-x-hidden">
      <Navbar />
      <div
        className="relative flex flex-col items-center justify-between min-h-screen w-full"
        style={{
          minHeight: "100dvh",
          height: "100dvh",
        }}
      >
        <div
          className="absolute inset-0 blur-[360px] z-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 90% 10%, #B49DFF 0%, #E6E5ED00 100%)",
          }}
          aria-hidden="true"
        />
        <SplineHero />
        <div
          className="relative z-10 flex flex-col items-center max-w-[700px] w-full px-4"
          style={{
            marginTop: "clamp(180px, 25vh, 320px)",
          }}
        >
          <h1 className="text-[4.25rem] text-center font-bold leading-[111%]">
            Get more clients from AI-powered search
          </h1>
          <p className="text-center leading-[140%] text-xl max-w-[565px] mt-8">
            Mimos helps regulated firms get discovered on ChatGPT, Perplexity
            and other AI platforms. <br />
            Compliant content built to convert.
          </p>
          <div className="flex flex-row gap-2.5 my-[2rem]">
            <Link
              href={"https://cal.com/team/mimos/mimos-demo-15-min"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full"
            >
              <Button
                variant={"secondary"}
                className="w-[210px] h-[60px] hover:scale-105"
              >
                Book a Demo
              </Button>
            </Link>
            <Button
              variant={"outline"}
              className="w-[210px] h-[60px] bg-transparent border-black hover:bg-white/20 hover:scale-105"
              onClick={() => {
                const element = document.getElementById("how-it-work");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Learn How It Works
            </Button>
          </div>
          <div className="flex flex-row gap-2.5 items-center">
            <p className="font-semibold">Backed by</p>
            <YCombinator />
          </div>
        </div>
        <MimosLogo />
      </div>
      <MediaQuery width={`(min-width: 1440px)`}>
        <div
          className="relative w-full mt-16 pb-[60px] overflow-hidden"
          id="how-it-work"
        >
          <Image
            src={ComputerHand}
            alt=""
            className="absolute top-0 right-0 w-[965px]"
          />
          <div className="relative max-w-[1440px] mx-auto px-10">
            <div className="flex flex-col gap-[50px] max-w-[440px] mt-[100px]">
              <Steps />
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery width={`(max-width: 1439px)`}>
        <div className="flex flex-row items-start mt-16 overflow-x-hidden justify-center pb-[60px] max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-[50px] max-w-[440px] mt-[100px] ml-8">
            <Steps />
          </div>
          <div className="flex-1 flex justify-end">
            <Image src={ComputerHand} alt="" />
          </div>
        </div>
      </MediaQuery>
      <div className="bg-[#090C13] rounded-t-[80px] w-full min-h-[1100px] justify-between flex-1 flex flex-col relative overflow-hidden">
        <div className="absolute left-0 right-0 bottom-0 pointer-events-none w-full h-[500px] flex justify-center">
          <div
            className="w-[1600px] h-full"
            style={{
              borderRadius: "1600px 1600px 0 0 / 500px 500px 0 0",
              background: "#9248FF",
              filter: "blur(360px)",
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <div className="items-center flex flex-col flex-1">
          <h2 className="font-bold text-[44px] text-white mt-[120px]">
            Why Mimos?
          </h2>
          <div className="flex flex-row flex-wrap items-center gap-5 mt-10 max-w-[1440px] justify-center">
            <Card icon="DartBoard">Purpose-built for regulated industries</Card>
            <Card icon="Graph">Rich analytics and performance tracking</Card>
            <Card icon="AI">
              Optimized for ChatGPT, Perplexity, Gemini, and Grok
            </Card>
            <Card icon="Scales">Compliance-first by design</Card>
            <Card icon="Chronometer">1-click setup and 24/7 support</Card>
            <Card icon="Rocket">
              Precise prospect acquisition through actionable content
              recommendations
            </Card>
          </div>
        </div>
        <SplineFigure />
      </div>
      <div className="flex flex-col rounded-t-[80px] w-full -mt-[80px] z-20 bg-[#f6f6f6] justify-center items-center">
        <h2 className="font-bold text-[44px] mt-[140px]">What We Do</h2>
        <div className="max-w-[730px] flex flex-col items-center justify-center mb-[100px]">
          <h3 className="font-bold text-[28px] mt-[60px]">
            We optimize your firm&apos;s digital presence for the AI era.
          </h3>
          <p className="text-[#626262] text-lg text-center mt-5">
            From metadata and schema changes to broader content strategy we
            build your digital footprint to show up in AI answers, where your
            future clients are searching.
          </p>
          <div className="w-[310px] h-[1px] bg-[#D1D1D1] my-[50px]" />
          <h3 className="font-bold text-[28px]">
            We turn expertise into visibility.
          </h3>
          <p className="text-[#626262] text-lg text-center mt-5">
            You already have the knowledge. Mimos helps AI platforms recognize
            it, prioritize it and recommend you ahead of your competitors.
          </p>
          <div className="w-[310px] h-[1px] bg-[#D1D1D1] my-[50px]" />
          <h3 className="font-bold text-[28px]">
            We help you stay compliant. Always.
          </h3>
          <p className="text-[#626262] text-lg text-center mt-5">
            Our AI-native compliance engine flags potential issues before you
            publish. Every change is tracked and reviewable.
          </p>
        </div>
      </div>
      <div className="bg-[#090C13] max-w-[1355px] w-full mx-auto pt-[100px] pb-[55px] rounded-[40px] items-center justify-center flex flex-col mb-[60px]">
        <h2 className="font-bold text-[44px] text-white">
          Ready to grow your firm with AI?
        </h2>
        <p className="text-[#cacaca] mt-[30px] mb-[46px] max-w-[500px] text-center">
          Join the next generation of teams already gaining visibility on
          ChatGPT and beyond
        </p>
        <Form>
          <div className="flex flex-row items-center rounded-full transition-all duration-200 hover:scale-105 hover:gap-[4px]">
            <Button variant={"secondary"} className="w-[237px] h-[60px]">
              Early Access
            </Button>
            <Button variant={"secondary"} className="w-[60px] h-[60px]">
              <Arrow />
            </Button>
          </div>
        </Form>
        <Link
          href={"https://cal.com/team/mimos/mimos-demo-15-min"}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full"
        >
          <Button
            variant={"outlineViolet"}
            className="mt-3 w-[297px] h-[60px] hover:scale-105"
          >
            Book Your Demo
          </Button>
        </Link>
        <p className="text-[#cacaca] mt-[30px] text-sm text-center">
          No commitment required • Early adopter free tier • Cancel anytime
        </p>
      </div>
      <Footer />
    </div>
  );
}

const Steps = () => {
  return (
    <>
      <h2 className="font-bold text-[44px]">How Mimos Works</h2>
      <Step step={1} title="Get Discovered on AI Platforms">
        We drive content strategy across your website, LinkedIn, Reddit, etc.,
        so AI engines like ChatGPT can discover and cite your firm when
        prospects ask related questions.
      </Step>
      <div className="h-[1px] w-full bg-[#D1D1D1]" />
      <Step step={2} title="Track What Matters">
        Understand how your AI visibility evolves and which content drives
        results — with full analytics, rankings, and trending topics.
      </Step>
      <div className="h-[1px] w-full bg-[#D1D1D1]" />
      <Step step={3} title="Stay Fully Compliant">
        We run every piece of content through our agentic compliance screening
        framework. Publish with confidence.
      </Step>
      <div className="h-[1px] w-full bg-[#D1D1D1]" />
      <Step step={4} title="Convert Visitors Into Clients">
        Turn AI visibility into real leads. Use smart calls-to-action, optimized
        page layouts, and precise messaging built to convert.
      </Step>
    </>
  );
};