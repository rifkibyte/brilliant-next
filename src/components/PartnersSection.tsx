export default function PartnersSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-700 mb-6">
          All of our 40+ courses are crafted by award-winning teachers, researchers, and professionals from:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {['Caltech', 'MIT', 'Duke', 'Microsoft', 'Google'].map((partner) => (
            <div key={partner} className="text-gray-500 font-semibold text-lg">
              {partner}
            </div>
          ))}
          <div className="text-gray-400 text-xs">AND MANY MORE</div>
        </div>
      </div>
    </section>
  );
}