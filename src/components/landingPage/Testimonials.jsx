
const Testimonials = () => {
    return (
      <section id="testimonials" className=" py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonios de nuestros usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md">
              <p>¡Rápido, sencillo y fiable!</p>
              <p className="mt-4 font-bold">- Juan Pérez</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <p>Me ayudo a conseguir la mejor hipoteca</p>
              <p className="mt-4 font-bold">- María García</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <p>Recomendable 100%</p>
              <p className="mt-4 font-bold">- Carlos López</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  