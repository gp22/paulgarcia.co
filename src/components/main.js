import React from 'react'

import Blockquote from './blockquote'

const pClassNames = 'mb-4'

const Main = () => (
  <section className="max-w-xl mb-24">
    <h3 className="font-bold font-display text-2xl mb-2">
      Most businesses get their website all wrong
    </h3>
    <p className={pClassNames}>
      They choose their layout and design based on the preferences of someone in
      the business, and{' '}
      <span className="font-bold">
        not what their target audience would find appealing.
      </span>{' '}
      They think about <span className="italic">themselves</span> when making
      design decisions, and <span className="italic">not their customers.</span>
    </p>
    <p className={pClassNames}>
      <span className="italic">I get it.</span> They probably don’t even know
      they’re doing this.
    </p>

    <Blockquote
      quote="Website design is the main factor for 48% of users when they determine
      the credibility of a business."
      cite="Blue Corona"
    />

    <p className={pClassNames}>
      One of the biggest factors people use to judge the trustworthiness of your
      website is <span className="font-bold">how it looks</span>, and you have
      an <span className="font-bold">incredibly short amount of time</span> (a
      few seconds) to grab their attention.
    </p>
    <p className={pClassNames}>
      <span className="italic">Good design is important</span> &mdash; but
      what’s more important is design that speaks to your audience.
    </p>
    <p className={pClassNames}>
      And not only design that speaks to your audience, but that{' '}
      <span className="font-bold">encourages them to take action.</span>
    </p>
    <p className={pClassNames}>
      I can help you create an experience that{' '}
      <span className="font-bold">focuses on your customers</span> and helps you{' '}
      <span className="font-bold">achieve your goals</span>. Together, we’ll
      analyze who your customers are and use what we learn as a basis for your
      web experience.
    </p>

    <Blockquote
      quote="72% of users expect companies to have a mobile-ready website design."
      cite="Statista"
    />

    <p className="mb-6">
      Most people use their phones to browse the web these days. And{' '}
      <span className="font-bold">they expect your site to work well</span> and
      provide a good experience no matter how they’re viewing it.
    </p>
    <p className={pClassNames}>
      So I'll make sure that all of the details of mobile-friendliness and
      responsive design are handled.
    </p>
    <p className={pClassNames}>
      <span className="italic">
        You'll get a polished looking finished product that puts your best foot
        forward.
      </span>
    </p>

    <h3 className="font-bold font-display text-2xl mb-2">
      Already have designs?
    </h3>
    <p className={pClassNames}>
      If you already have designs and just need someone to bring them to life, I
      can build it for you.
    </p>
    <p className={pClassNames}>
      Need someone who can collaborate with your team?
    </p>
    <p className={pClassNames}>I've got you covered.</p>
  </section>
)

export default Main
