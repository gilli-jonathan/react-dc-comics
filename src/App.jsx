import Header from "./components/Header"
import Main from "./components/Main"
import BannerBlu from "./components/BannerBlu"
import Footer from "./components/Footer"
import SocialFooter from "./components/SocialFooter"

function App() {

  const HeaderLinks = [
    { label: "CHARACTERS", href: "#" },
    { label: "COMICS", href: "#" },
    { label: "MOVIES", href: "#" },
    { label: "TV", href: "#" },
    { label: "GAMES", href: "#" },
    { label: "COLLECTIBLES", href: "#" },
    { label: "VIDEOS", href: "#" },
    { label: "FANS", href: "#" },
    { label: "NEWS", href: "#" },
    { label: "SHOP", href: "#" }
  ];

  // ARRAY PER IL FOOTER
  const link_dcComics = {
    title: "DC COMICS",
    link: [
      { voce: "Characters", url: "#" },
      { voce: "Comics", url: "#" },
      { voce: "Movies", url: "#" },
      { voce: "TV", url: "#" },
      { voce: "Games", url: "#" },
      { voce: "Videos", url: "#" },
      { voce: "News", url: "#" }
    ]
  }

  const link_shop = {

    title: "SHOP",
    link: [
      { voce: "Shop Dc", url: "#" },
      { voce: "Shop Dc Collectibles", url: "#" }
    ],

  }

  const link_Dc = {
    title: "DC",
    link: [
      { voce: "Terms Of Use", url: "#" },
      { voce: "Privacy policy (New)", url: "#" },
      { voce: "Ad Choices", url: "#" },
      { voce: "Advertising", url: "#" },
      { voce: "Jobs", url: "#" },
      { voce: "Subscritions", url: "#" },
      { voce: "Talent Workshop", url: "#" },
      { voce: "CPCS Certificates", url: "#" },
      { voce: "Ratings", url: "#" },
      { voce: "Shop Help", url: "#" },
      { voce: "Contact Us", url: "#" }
    ],
  }

  const link_sites = {
    title: "SITES",
    link: [
      { voce: "DC", url: "#" },
      { voce: "MAD Magazine", url: "#" },
      { voce: "DC Kids", url: "#" },
      { voce: "Dc Universe", url: "#" },
      { voce: "DC Power Visa", url: "#" },
      { voce: "Create By", url: "#" },
      { voce: "Jonathan", url: "#" }
    ]
  }


  return (
    <>
      <Header HeaderLinks={HeaderLinks} />
      <Main />
      <BannerBlu />
      <Footer link_Dc={link_Dc} link_dcComics={link_dcComics} link_shop={link_shop} link_sites={link_sites} />
      <SocialFooter />
    </>
  )
}

export default App
