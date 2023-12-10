'use client'
import { Button, Icon } from '@/components'
import { Footer, Navbar } from '@/layouts'
import clsx from 'clsx'
import Link from 'next/link'
import {
  AvatarThumbnail,
  InfiniteRibbon,
  InfiniteLogo,
  InfiniteLogoInverse,
  Faq,
} from './components'

export default function Home() {
  const PICTURE_ARRAY = [
    {
      img: '/assets/home/thumbnail1.svg',
      id: '1',
    },
    {
      img: '/assets/home/thumbnail2.svg',
      id: '2',
    },
  ]

  const WHAT_WE_DO_CONTEXT = [
    {
      title: 'Shopping Made Easy',
      text: "Just tell us what you need, and we'll do the shopping for you. Whether it's groceries, personal items, or a gift for a special occasion, we've got you covered.",
      img: '/assets/home/whatWeDo1.svg',
      id: '1',
    },
    {
      title: 'Secure Payment and Receipts',
      text: "Pay for your items securely through our app. We'll provide you with a receipt for every transaction.",
      img: '/assets/home/whatWeDo2.svg',
      id: '2',
    },
    {
      title: 'Trusted Errand-Runners',
      text: 'We connect you with trustworthy and reliable errand-runners. They are vetted and trained to ensure a quality service.',
      img: '/assets/home/whatWeDo3.svg',
      id: '3',
    },
    {
      title: 'Delivery to Your Doorstep',
      text: 'Sit back and relax as your items are delivered to your doorstep at your preferred time.',
      img: '/assets/home/whatWeDo4.svg',
      id: '4',
    },
  ]

  const SERVICES = [
    {
      id: '1',
      title: 'Individual Shopping',
      text: "We make shopping easy for individuals. Just tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
      icon: <Icon width="24" height="24" id="cart" />,
      link: '#',
      linkTitle: 'Send us your shopping list',
    },
    {
      id: '2',
      title: 'Group Shopping',
      text: 'We understand that shopping can be a group effort. Our service allows multiple users to place their orders at once, ensuring everyone gets what they need.',
      icon: <Icon width="24" height="24" id="profile-double" />,
      link: '#',
      linkTitle: 'Join a shopping group',
    },
    {
      id: '3',
      title: 'B2B Shopping',
      text: 'We also cater to businesses, providing errand-running services for restaurants, hotels, and other establishments. Our dedicated runners ensure that your business operations run smoothly.',
      icon: <Icon width="24" height="24" id="breifcase" />,
      link: '#',
      linkTitle: 'Let us shop for your business',
    },
    {
      id: '4',
      title: 'Curated Shopping Lists',
      text: 'We offer specially curated shopping lists for you to use as a shopping guide. This feature can save you time and ensure you get everything you need.',
      icon: <Icon width="24" height="24" id="clippad" />,
      link: '#',
      linkTitle: 'Check our shopping lists',
    },
  ]

  const FAQ_ARRAY = [
    {
      title: 'How do I place an order?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
    {
      title: 'How do I pay for my order?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
    {
      title: 'How do I track my order?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
    {
      title: 'What if I need to change my order?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
    {
      title: 'What if I need to cancel my order?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
    {
      title: 'What if I have multiple items to order?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
    {
      title: 'What if I need a runner for a business?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
    {
      title: 'What if I have a special shopping list?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
    {
      title: 'What if I need my items delivered at a specific time?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
    {
      title: '?What if I need to pick up my items?',
      answer:
        "You simply need to tell us what you need, and we'll do the shopping for you. From groceries to personal items, we've got you covered.",
    },
  ]

  const INFINITE_LOGO = [
    '/assets/home/customer1.svg',
    '/assets/home/customer2.svg',
    '/assets/home/customer3.svg',
    '/assets/home/customer4.svg',
    '/assets/home/customer5.svg',
    '/assets/home/customer6.svg',
    '/assets/home/customer7.svg',
  ]
  return (
    <div>
      <section className="bg-gray-50 py-[35px] relative">
        <Navbar />
        <h1 className=" text-head-300 leading-[90px] mb-10 sm:mb-auto sm:leading-normal sm:text-head-500 text-center mt-[150px]">
          Effortless Shopping
        </h1>
        <InfiniteRibbon backgroundColor="#0F0F0F" textColor="#FAFAFA" />
        <div className="flex items-start sm:px-o px-8 sm:w-[454px] gap-4 mx-auto mt-[84px]">
          <AvatarThumbnail
            pictureArray={PICTURE_ARRAY}
            imgStyle="min-w-[41px] w-[41px] h-[41px]"
          />
          <p className="">
            Experience a{' '}
            <span className="text-primary">new way of shopping.</span> Our
            dedicated runners handle your errands, so you can reclaim your time.
          </p>
        </div>
        <p className="text-center mt-32">
          <span className="text-primary">•</span> Scroll down to discover how it
          works
        </p>
      </section>
      <section className="bg-secondary py-14">
        <div className="container">
          <div className=" flex flex-col justify-start items gap-4 md:gap-0 md:flex-row md:items-end md:justify-between">
            <div className="">
              <h3 className="text-head-100 text-gray-550">About</h3>
              <div className="text-head-200 md:text-head-400 leading-[50px] md:leading-[96px] mt-1">
                <h2 className=" text-gray-50 ">What</h2>
                <h2 className=" text-gray-550">We Do</h2>
              </div>
            </div>
            <p className="text-gray-450 sm:w-[405px] mb-2">
              We simplify your life by taking care of your shopping and errands.
              We understand that your time is valuable, and we&apos;re here to
              help you reclaim it. Our convenient service connects you with
              reliable errand-runners who are ready to handle your shopping
              needs.
            </p>
          </div>
          <div className="md:h-[576px] grid md:grid-rows-2 md:grid-flow-col gap-6 mt-14">
            {WHAT_WE_DO_CONTEXT.map((content, index) => {
              return (
                <div
                  key={content.id}
                  className={clsx(
                    ' rounded-[30px] ',
                    index === 0
                      ? 'bg-purple_color col-span-6 md:col-span-3 lg:col-span-2 lg:row-span-2 items-center px-[20px] md:px-[10px] lg:px-[41px] lg:pt-[100px]  lg:pb-[40px] py-[48px] pr-[10px] lg:pr-[38.7px] flex lg:flex-col flex-col sm:flex-row justify-between'
                      : index === 1
                      ? 'bg-blue_color col-span-6 md:col-span-3 px-[20px] md:px-[10px] lg:pl-[48.3px] 2xl:min-w-[550px] items-center flex-col sm:flex-row flex justify-between py-[48px] lg:pr-[38.7px]'
                      : index === 2
                      ? 'bg-yellow_color col-span-6 md:col-span-3 lg:pl-[48.3px] items-center flex-col sm:flex-row flex min-[600px] justify-between py-[48px] px-[20px] md:px-[10px] lg:pr-[38.7px]'
                      : 'bg-orange_color col-span-6 md:col-span-3 lg:col-span-2 lg:row-span-2  px-[20px] md:px-[10px] lg:px-[41px] items-center flex flex-col sm:flex-row lg:flex-col justify-between py-[48px] lg:pr-[38.7px] lg:pt-[100px] lg:pb-[40px] '
                  )}
                >
                  <div className="lg:h-[183px] lg:w-auto w-full">
                    <img src={content.img} alt="img" className="" />
                  </div>
                  <div
                    className={clsx(
                      'min-w-[182px] md:w-[182px] lg:w-auto',
                      (index === 1 || index === 2) &&
                        'md:w-[182px] md:px-1 min-w-[182px] lg:w-[183px]'
                    )}
                  >
                    <h5 className="text-head-75">{content.title}</h5>
                    <p className="text-sm mt-4">{content.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-6 lg:grid-cols-12">
            <div className="col-span-6 lg:col-span-4 h-[422px] pt-[64px] border-b lg:border-r">
              <h3 className="text-head-100 text-gray-450">Discover</h3>
              <div className="sm:leading-[70px] leading-[50px] text-head-200 sm:text-head-300">
                <h3 className=" text-gray-650">Our</h3>
                <h3 className=" text-black_color">Services</h3>
              </div>
              <p className="xl:w-[381px] pr-4 xl:pr-0">
                We offer a wide range of services to cater to your shopping
                needs. Whether you&apos;re an individual, or a business looking
                to streamline your operations, we&apos;ve got you covered.
              </p>
            </div>
            {SERVICES.map((service, index) => {
              return (
                <div
                  className={clsx(
                    '',
                    index === 0
                      ? 'col-span-6 md:col-span-3 lg:col-span-4 pt-[64px] pb-10 lg:pb-0 sm:px-[41px] md:border-r border-b'
                      : index === 1
                      ? 'col-span-6 md:col-span-3 lg:col-span-4 sm:px-[41px] pb-10 lg:pb-0 pt-[64px] border-b'
                      : index === 2
                      ? 'col-span-6 md:col-span-3 lg:col-span-6 place-self-center pt-[89px] pb-[64px] sm:pr-10 xl:pr-0 sm:pl-10 xl:pl-[200px] border-b md:border-b-0 md:border-r w-full'
                      : 'col-span-6 md:col-span-3 lg:col-span-6 place-self-center pt-[89px] pb-[64px] sm:pl-10 xl:pl-0'
                  )}
                  key={service.id}
                >
                  <div
                    className={clsx(
                      'w-[55px] min-w-[55px] h-[55px] border border-secondary rounded-[10px] flex items-center justify-center',
                      index === 0
                        ? 'bg-yellow_color'
                        : index === 1
                        ? 'bg-purple_color'
                        : index === 2
                        ? 'bg-blue_color'
                        : 'bg-orange_color'
                    )}
                  >
                    {service.icon}
                  </div>
                  <h5 className="text-head-75 mt-3">{service.title}</h5>
                  <p
                    className={clsx(
                      'text-sm mt-2 xl:w-[313px]',
                      index === 3 && ''
                    )}
                  >
                    {service.text}
                  </p>
                  <Button
                    variant="secondary"
                    className="mt-8 transition-colors text-white hover:text-black hover:bg-transparent hover:border hover:border-black"
                  >
                    <Link href={service.link}>{service.linkTitle}</Link>
                    <Icon height="16" width="16" id="arrow-right" />
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-secondary pt-[108px]">
        <div className="container">
          <div className="lg:w-[781px] mx-auto pb-[108px]">
            <h4 className="text-gray-450 text-head-100">Trusted by</h4>
            <div className="leading-[50px] sm:leading-[100px] text-head-200 sm:text-head-400">
              <h2 className=" text-gray-50">200+ Companies</h2>
              <h2 className=" text-gray-550">& Individuals</h2>
            </div>
            <Button className="mt-4 transition-colors text-white">
              <Link href="/">Register with us today</Link>{' '}
              <Icon height="16" width="16" id="arrow-right" />
            </Button>
          </div>
        </div>
        <div className="">
          <InfiniteLogo imgArray={INFINITE_LOGO} />
          <InfiniteLogoInverse imgArray={INFINITE_LOGO} />
        </div>
      </section>
      <section className="bg-gray-50 pb-[200px]">
        <div className="container flex flex-col lg:flex-row items-start justify-between pt-[108px]">
          <div className="pb-[108px] sm:w-[452px]">
            <h4 className="text-gray-450 text-head-100 mb-2">Frequently</h4>
            <div className="leading-[50px] sm:leading-[100px] text-head-200 sm:text-head-400">
              <h2 className="text-gray-550">Asked</h2>
              <h2 className=" text-secondary">Questions</h2>
            </div>
            <p className="mt-5">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <p>Contact us here:</p>
            <a href="" className="text-primary">
              info@losoja.com
            </a>
          </div>
          <div className="mb-10">
            <Faq faqArray={FAQ_ARRAY} />
          </div>
        </div>

        <div className="mx-10 2xl:mx-0">
          <div className="border max-w-[1440px] mx-auto border-gray-150 flex flex-col md:flex-row items-start md:items-end lg:items-center justify-between rounded-[30px] px-[10px] sm:px-[58px] py-[39px]">
            <div>
              <h3 className="text-head-75">
                Let us help you run your shopping errands today
              </h3>
              <p className="lg:w-[596px]">
                With our platform, you can experience convenience and efficiency
                in your shopping endeavors. Start experiencing the difference
                today!
              </p>
            </div>
            <Button
              variant="secondary"
              className="mt-8 transition-colors text-white hover:text-black hover:bg-transparent hover:border hover:border-black"
            >
              <Link href="/">Send us your shopping list</Link>
              <Icon height="16" width="16" id="arrow-right" />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
