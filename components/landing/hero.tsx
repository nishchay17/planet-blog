import { Icons } from "../icons";

export default function Hero() {
  return (
    <main className="flex items-center justify-center bg-green-50 h-[65vh]">
      <div className="container">
        <div className="flex justify-center items-center px-4 text-center flex-col sm:flex-row gap-3">
          <Icons.hero height={10} width={10} />
          <h1 className="text-4xl md:text-6xl font-medium text-secondary-foreground -tracking-wider">
            Dev Planet Blog
          </h1>
        </div>
        <p className="text-center text-lg md:text-xl px-4 mx-auto mt-3">
          Exploring Javascript and everything software deveploment
        </p>
      </div>
    </main>
  );
}
