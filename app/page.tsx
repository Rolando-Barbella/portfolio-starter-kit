import { BlogPosts } from 'app/components/posts'
import { Projects } from 'app/components/projects'
import Image from 'next/image'
import profilePic from './img/me.jpg'

export default function Page() {
  return (
    <section>
      <div className="mb-6 flex flex-col items-start gap-4">
        <div className="ml-[5px] aspect-square h-24 w-24 shrink-0 overflow-hidden rounded-full bg-neutral-100 shadow-[-5px_5px_0_#47a3f3] dark:bg-neutral-900">
          <Image
            src={profilePic}
            alt="Rolando Barbella"
            width={96}
            height={96}
            className="block aspect-square h-full w-full rounded-full object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            Rolando Barbella
          </h1>
          <p className="text-sm font-semibold tracking-tighter">
            Mobile Product Engineer — React Native, Expo & TypeScript
          </p>
        </div>
      </div>
      <p className="mb-2">
        {`A driven developer who gets thrilled by creating great, pleasing solutions that deliver user-friendly. In the last few years, the focus has been more on mobile apps ( IOS and Android), mainly using Expo and React Native, I have been involved in more than 5 apps published in the Apple Store and Google Play`}
      </p>
      <p className="mb-2">
        {`Apart from my 9-5 job, I work on side projects that keep me constantly learning and adapting. My LLC workflow at the moment is done by running multiple agents in Codex and Hermes`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
      <div className="my-8">
        <Projects />
      </div>
    </section>
  )
}
