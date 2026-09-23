export type Moment = {
  src: string;
  alt: string;
  width: number;
  height: number;
  tag: string;
  title: string;
  story: string;
};

/**
 * Moments wall. Width/height are the real pixel sizes so photos render
 * at their natural shape instead of being cropped into a fixed box.
 */
export const moments: Moment[] = [
  {
    src: "/images/linkedin/ctf-prize-single.png",
    alt: "Malvika holding the 3rd place Capture The Flag cheque at Dubai Police eCrime Hub",
    width: 576,
    height: 1024,
    tag: "Dubai Police × CTF.ae",
    title: "Third place, and a very big cheque",
    story:
      "A full day of AI × cybersecurity challenges at Dubai Police's Capture The Flag. We finished 3rd in the university track, took home AED 18,000, and I took home a slightly unhealthy love for security puzzles.",
  },
  {
    src: "/images/linkedin/columbia-university.png",
    alt: "Malvika in a Columbia hoodie in front of the Alma Mater statue in the snow",
    width: 1024,
    height: 768,
    tag: "New York",
    title: "Hello, Columbia",
    story:
      "Traded Dubai sunshine for New York snow to start my MS in Computer Science with a focus on machine learning. Alma Mater and I are still getting to know each other.",
  },
  {
    src: "/images/linkedin/deriv-presenting-2.jpg",
    alt: "Malvika presenting to Deriv's leadership team",
    width: 1024,
    height: 682,
    tag: "Deriv · Dubai",
    title: "Presenting to the leadership team",
    story:
      "Walked Deriv's leadership through the AI platforms we'd been building — how the agents triage, what the models catch, and where humans stay in the loop.",
  },
  {
    src: "/images/linkedin/ctf-team-award.png",
    alt: "Receiving the 3rd place CTF award on stage with Dubai Police officials",
    width: 1024,
    height: 673,
    tag: "Dubai Police",
    title: "On stage with Dubai Police",
    story:
      "Getting the award from Dubai Police leadership was surreal — a reminder that the things I tinker with late at night matter to the people keeping a city safe.",
  },
  {
    src: "/images/linkedin/devfest-dubai.png",
    alt: "Malvika at DevFest Dubai and Mobile Developers Week",
    width: 576,
    height: 1024,
    tag: "DevFest Dubai",
    title: "Lanyard season",
    story:
      "A day of talks, demos, and way too many sponsor walls at DevFest and Mobile Developers Week. Community events are where I pick up half my ideas.",
  },
  {
    src: "/images/linkedin/deriv-team-photo.jpg",
    alt: "Group photo with the Deriv team after the demo",
    width: 1024,
    height: 682,
    tag: "Deriv · Dubai",
    title: "The people behind the platforms",
    story:
      "After the demo, everyone squeezed in for a photo. Some of the smartest, kindest people I've gotten to build with.",
  },
  {
    src: "/images/linkedin/deriv-office.png",
    alt: "Malvika under the Deriv sign, Great Place to Work certified",
    width: 575,
    height: 1024,
    tag: "Deriv · Dubai",
    title: "Day one at Deriv",
    story:
      "First day as an AI engineering intern. I had no idea this sign would end up in the background of the next year and a half of my life.",
  },
  {
    src: "/images/linkedin/deriv-presenting-1.jpg",
    alt: "Malvika pointing at the big screen during a demo at Deriv",
    width: 1024,
    height: 682,
    tag: "Deriv · Dubai",
    title: "Big screen, bigger nerves",
    story:
      "There's nothing like pointing at your own architecture diagram on a wall-sized screen to make you double-check every arrow.",
  },
];
