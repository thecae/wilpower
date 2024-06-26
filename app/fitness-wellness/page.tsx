"use client"

import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import Balancer from "react-wrap-balancer"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Icons } from "@/components/icons"

const PhotoCarousel = () => (
  <Carousel
    opts={{ align: "center", loop: true }}
    plugins={[
      Autoplay({
        delay: 5000,
      }),
    ]}
    className="mx-auto w-3/4"
  >
    <CarouselContent className="items-center">
      {Array.from(Array(11).keys(), (key) => key + 1).map((num) => (
        <CarouselItem
          key={num}
          className="basis-full md:basis-1/2 lg:basis-1/3"
        >
          <motion.div
            variants={{
              initial: { y: -100, opacity: 0 },
              animate: (idx: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.05 * idx,
                },
              }),
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={num}
          >
            <Image
              src={`/fitness-carousel/fitness-${num}.jpg`}
              alt={`Sport ${num}`}
              height={934}
              width={934}
              className="h-full rounded-xl"
            />
          </motion.div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)

const Title = () => (
  <>
    <Icons.Logo className="w-1/6" />
    <h1 className="self-center text-center text-3xl font-bold italic leading-tight sm:text-4xl md:text-5xl">
      <Balancer>
        &quot;What the Mind can Conceive, the Body can Achieve.&quot;
      </Balancer>
    </h1>
    <h3 className="text-center text-lg italic text-muted-foreground sm:text-xl md:text-2xl">
      <Balancer>
        Specialized training programs designed specifically for each person. All
        training sessions are conducted, and programs are written and expertly
        designed by WIL SANTI.
      </Balancer>
    </h3>
  </>
)

const LongText = () => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col items-center md:grid md:grid-cols-3">
      <h2 className="text-center text-2xl font-semibold text-primary">
        Fitness Training
      </h2>
      <Balancer className="col-span-2 text-center">
        Take your health to the next level and truly see how great you can be.
        Included training types are kettlebell, interval, metabolic, 300
        work-out, strength and functional, core, boot-camp, and cardio
        conditioning.
      </Balancer>
    </div>
    <div className="flex flex-col items-center md:grid md:grid-cols-3">
      <h2 className="text-center text-2xl font-semibold text-primary">
        Wellness Coaching
      </h2>
      <Balancer className="col-span-2 text-center">
        Learn how to build healthy habits and implement them into your life.
        Learn how to manage your time to fit in a health and exercise program
        specific to your needs and goals.
      </Balancer>
    </div>
    <div className="flex flex-col items-center md:grid md:grid-cols-3">
      <h2 className="text-center text-2xl font-semibold text-primary">
        Nutrition Counseling
      </h2>
      <Balancer className="col-span-2 text-center">
        As a certified nutritionist, I will write and provide you with custom
        nutrition counseling and a guide specific to you and your needs.
      </Balancer>
    </div>
    <div className="flex flex-col items-center md:grid md:grid-cols-3">
      <h2 className="text-center text-2xl font-semibold text-primary">
        Corrective, Rehabilitative, or Special Populations Training
      </h2>
      <Balancer className="col-span-2 text-center">
        Training for chronic problems, disabilities, bodily alignment, joint
        replacement, joint repair, illness, and disease.
      </Balancer>
    </div>
    <PhotoCarousel />
    <div className="flex flex-col gap-4">
      <h3 className="text-center text-3xl font-semibold text-primary">
        Training Location
      </h3>
      <p>
        I utilize facilities in and around the Nashville area and can train at a
        facility that best suits your schedule and type of training. I&apos;m
        also available to train school teams at their facilities or at local
        athletic fields and tracks.
      </p>
      <Link href="/contact" className="flex justify-center">
        <p className="link w-min text-center text-xl font-medium italic">
          Contact now for a free consultation!
        </p>
      </Link>
    </div>
  </div>
)

export default function FitnessWellness() {
  return (
    <section className="mx-auto grid w-11/12 items-center gap-6 pb-8 pt-6 text-xl md:w-3/4 md:py-10">
      <div className="mx-auto flex flex-col items-center gap-8">
        <Title />
        <LongText />
      </div>
    </section>
  )
}
