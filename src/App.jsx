import React from 'react';
import Cards from './components/Cards';
const App = () => {
  return (

      <>
          <section className={"container mx-auto flex flex-col justify-between gap-2 pb-[20rem]"}>
              <div className={"w-full px-[2.5rem]"}>
                  <div className={"about-cards flex gap-10 flex-col md:flex-row"}>
                      <Cards />
                  </div>
              </div>
          </section>


      </>
  );
};

export default App;
