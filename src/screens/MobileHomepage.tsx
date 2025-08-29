"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MediaQuery } from "@/components/MediaQuery";
import Step from "@/components/Step";
import Link from "next/link";
import Card from "@/components/Card";
import MobileNavbar from "@/components/MobileNavbar";
import MobileFooter from "@/components/MobileFooter";
import SplineHero from "@/components/SplineHero";
import SplineFigure from "@/components/SplineFigure";

import YCombinator from "@/components/icons/YCombinator";
import MimosLogo from "@/components/icons/MimosLogo";
import ComputerHand from "@/assets/computer_hand.png";
import Arrow from "@/components/icons/Arrow";
import Form from "@/components/Form";

export default function MobileHomepage() {
  const handleClick = (id: string) => {
    if (id === "how-it-work") {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <div className="flex flex-col flex-1 w-screen overflow-x-hidden">
      <MobileNavbar onNavigate={handleClick} />
      <div
        className="relative flex flex-col items-center justify-between min-h-screen w-full"
        style={{
          minHeight: "100dvh",
          height: "100dvh",
        }}
      >
        {/* Background gradient blur - lowest layer */}
        <div
          className="absolute inset-0 blur-[0px] z-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, #B49DFF 0%, #E6E5ED00 100%)",
          }}
          aria-hidden="true"
        />
        
        {/* Spline animation - behind content but above gradient */}
        <SplineHero isMobile={true} />
        
        {/* Main content - above animation */}
        <div
          className="relative z-20 flex flex-col items-center max-w-[700px] w-full px-4"
          style={{
            marginTop: "clamp(11rem, 25vh, 20rem)",
          }}
        >
          <h1 className="text-[1.75rem] text-center font-bold leading-[111%]">
            Get more clients from <br />
            AI-powered search
          </h1>
          <p className="text-center leading-[140%] text-[1rem] max-w-[565px] mt-5">
            Mimos helps regulated firms get discovered on ChatGPT, Perplexity
            and other AI platforms. <br />
            Compliant content built to convert.
          </p>
          <div className="flex flex-row gap-2.5 my-[1.25rem]">
            <Link
              href={"https://cal.com/team/mimos/mimos-demo-15-min"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full"
            >
              <Button variant={"secondary"} className="w-[134px] h-[44px]">
                Book a Demo
              </Button>
            </Link>
            <Button
              variant={"outline"}
              className="w-[175px] h-[44px] bg-transparent border-black hover:bg-white/20"
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
        
        {/* Mimos logo - highest layer, styled like footer */}
        <div className="flex justify-center items-center mt-[55px] relative z-30">
          <MimosLogo width={300} height={73} />
        </div>
      </div>
      <MediaQuery width={`(max-width: 769px)`}>
        <div className="h-10" />
        <div className="pt-20" id="how-it-work">
          <div className="flex flex-col gap-[32px] px-4">
            <Steps />
          </div>
          <div className="flex-1 flex justify-end">
            <Image src={ComputerHand} alt="" />
          </div>
        </div>
      </MediaQuery>
      <div className="bg-[#090C13] rounded-t-[40px] mt-10 w-full min-h-[1000px] justify-between flex-1 flex flex-col relative overflow-hidden">
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
        <div className="items-center flex flex-col flex-1 px-4 relative z-10">
          <h2 className="font-bold text-[1.75rem] text-white mt-[60px]">
            Why Mimos?
          </h2>
          <div className="flex flex-row flex-wrap items-center gap-3 mt-10 justify-center">
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
        <SplineFigure isMobile={true} />
      </div>
      <div className="flex flex-col rounded-t-[40px] w-full px-4 -mt-10 z-20 bg-[#f6f6f6] justify-center items-center">
        <h2 className="font-bold text-[1.75rem] mt-[60px]">What We Do</h2>
        <div className="flex flex-col items-center justify-center mb-[100px]">
          <h3 className="font-bold text-xl text-center mt-8">
            We optimize your firm&#39;s digital presence for the AI era.
          </h3>
          <p className="text-[#626262] text-lg text-center mt-4">
            From metadata and schema changes to broader content strategy we
            build your digital footprint to show up in AI answers, where your
            future clients are searching.
          </p>
          <div className="w-[310px] h-[1px] bg-[#D1D1D1] my-8" />
          <h3 className="font-bold text-xl text-center">
            We turn expertise into visibility.
          </h3>
          <p className="text-[#626262] text-lg text-center mt-4">
            You already have the knowledge. Mimos helps AI platforms recognize
            it, prioritize it and recommend you ahead of your competitors.
          </p>
          <div className="w-[310px] h-[1px] bg-[#D1D1D1] my-8" />
          <h3 className="font-bold text-xl text-center">
            We help you stay compliant — <br />
            always.
          </h3>
          <p className="text-[#626262] text-lg text-center mt-4">
            Our AI-native compliance engine flags potential issues before you
            publish. Every change is tracked and reviewable.
          </p>
        </div>
      </div>
      <div className="bg-[#090C13] px-5 w-full mx-auto py-[60px] rounded-[30px] items-center justify-center flex flex-col mb-10">
        <h2 className="font-bold text-[1.75rem] text-white text-center">
          Ready to grow your firm with AI?
        </h2>
        <p className="text-[#cacaca] mt-[30px] mb-[46px] max-w-[500px] text-center">
          Join the next generation of teams <br />
          already gaining visibility on ChatGPT
          <br /> and beyond
        </p>
        <Form>
          <div className="flex flex-row items-center w-full rounded-full transition-all duration-200 hover:scale-105 hover:gap-[4px]">
            <Button variant={"secondary"} className="flex flex-1 h-[44px]">
              Early Access
            </Button>
            <Button variant={"secondary"} className="w-[44px] h-[44px]">
              <Arrow />
            </Button>
          </div>
        </Form>
        <Link
          href={"https://cal.com/team/mimos/mimos-demo-15-min"}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-full"
        >
          <Button
            variant={"outlineViolet"}
            className="mt-2 flex-1 w-full flex h-[44px] hover:scale-105"
          >
            Book Your Demo
          </Button>
        </Link>
        <p className="text-[#cacaca] mt-[30px] text-xs text-center">
          No commitment required • Early adopter free tier • <br />
          Cancel anytime
        </p>
      </div>
      <MobileFooter />
    </div>
  );
}

const Steps = () => {
  return (
    <>
      <h2 className="font-bold text-[1.75rem]">How Mimos Works</h2>
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