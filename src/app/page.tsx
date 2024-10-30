import Card from "@/components/ui/Card";

export default function Home() {

  return (
    <div
      className="flex items-center justify-center min-h-screen sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4">
        <div className="flex">
          <h1 className="font-normal subpixel-antialiased text-4xl">
            Welcome to my website
          </h1>
        </div>

        <div className="flex flex-col">
          <p>
            Currently this domain is primarily used for testing and development purposes and as an email server.
          </p>
        </div>

        <div className="flex">
          <p>
            Below are some links to my GitHub and other social media profiles.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-3">
          <Card url="https://github.com/Xerrion" image="/github-mark-white.svg" title="GitHub"
                description="My GitHub profile with some of my projects and contributions."/>
          <Card url="https://x.com/TheRealXerrion" image="/X_logo_2023.svg" title="X (Formerly Twitter)"
                description="My Twitter profile with some of my thoughts and opinions."/>
          <Card url="https://www.linkedin.com/in/lasse-skovgaard-nielsen/" image="/LinkedIn_icon.svg" title="LinkedIn"
                description={"My LinkedIn profile with some of my work experience and skills."}/>
        </div>
      </main>
    </div>
  );
}
