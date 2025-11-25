function Social() {
  try {
    const socials = [
      { name: 'Facebook', icon: 'facebook', url: '#', color: 'hover:text-blue-500' },
      { name: 'Instagram', icon: 'instagram', url: '#', color: 'hover:text-pink-500' },
      { name: 'GitHub', icon: 'github', url: '#', color: 'hover:text-gray-400' },
      { name: 'LinkedIn', icon: 'linkedin', url: '#', color: 'hover:text-blue-600' },
      { name: 'WhatsApp', icon: 'message-circle', url: '#', color: 'hover:text-green-500' }
    ];

    return (
      <section id="redes" className="min-h-screen flex items-center py-20 px-4" data-name="social" data-file="components/Social.js">
        <div className="max-w-6xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-12">Redes Sociales</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-lg float ${social.color}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`icon-${social.icon} text-3xl`}></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Social component error:', error);
    return null;
  }
}