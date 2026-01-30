export function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
          Hakkında
        </h2>

        <blockquote className="text-2xl sm:text-3xl font-display font-bold text-accent mb-12 italic">
          &quot;Kafana şapkadan başka bir şey takma.&quot;
        </blockquote>

        <div className="space-y-6 text-gray-400 font-body text-lg leading-relaxed">
          <p>
            I&apos;m an active game developer working with Unity(6 years+), Godot(2y+) and Unreal Engine(1y),
            creating immersive and engaging gameplay experiences. As the president of a large game development community,
            I enjoy bringing people together, leading projects, and empowering others to grow.
            I believe strong leadership starts with empathy, clear communication, and a shared vision.
          </p>
          <p>
            In addition to game development, I work on VR projects focused on healthcare and simulation
            bridging technology and well-being through innovative design.
          </p>
        </div>
      </div>
    </section>
  );
}
