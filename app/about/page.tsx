import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <p className="text-gray-500 md:text-xl/relaxed">Learn more about who I am and what I do.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold">Your Name</h2>
            <p className="text-gray-500">
              Developer, writer, and thinker passionate about technology and sharing knowledge.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
              Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.
            </p>
            <p>
              Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta
              lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "Python",
              "Django",
              "Node.js",
              "HTML/CSS",
              "UI/UX Design",
              "Content Writing",
            ].map((skill) => (
              <div key={skill} className="bg-gray-100 rounded-lg p-3 text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">My Journey</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Senior Developer at Company XYZ</h3>
              <p className="text-sm text-gray-500">2020 - Present</p>
              <p>
                Leading development of web applications using modern technologies. Mentoring junior developers and
                implementing best practices.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Web Developer at Company ABC</h3>
              <p className="text-sm text-gray-500">2017 - 2020</p>
              <p>
                Developed and maintained client websites. Collaborated with design team to implement responsive designs.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Computer Science Degree</h3>
              <p className="text-sm text-gray-500">2013 - 2017</p>
              <p>Graduated with honors. Specialized in web technologies and software engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
