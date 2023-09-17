import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
                AI-Powered Prompts
            </span>
        </h1>
        <p className="descriptin text-center">
            This is an AI propmting tool for modern world to Discover, Create and Share creative PROMPTS
        </p>

        <Feed />
    </section>
  )
}

export default Home