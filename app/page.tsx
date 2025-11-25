import { BlogPosts } from 'app/components/posts'
import { Projects } from 'app/components/projects'
import Image from 'next/image'
import profilePic from './img/me.jpg'

export default function Page() {
  return (
    <section>
      <div className="flex  gap-6 mb-6">
        <Image
          src={profilePic}
          alt="Rolando Barbella"
          width={80}
          height={80}
          className="p-0.5 rounded-xl border border-gray-200 shadow-sm"
          priority
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            Rolando Barbella
          </h1>
          <p className="text-sm font-semibold tracking-tighter">Developer</p>
        </div>
      </div>
      <p className="mb-2">
        {`I'm a software engineer who likes building interesting things. Last few years the foucus has been more on mobile apps ( IOS and Android).
         Apart from my 9-5 job, I work on side projects while learning new things, which you can see in this site.`}
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
