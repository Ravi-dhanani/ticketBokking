import React from "react";

export default function CastInMovie() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="py-3 px-4 mx-auto max-w-screen-xl  lg:py-10 lg:px-6">
          <div className="pb-3 text-center">
            <h1 className="text-3xl font-bold">Cast</h1>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 1, 1, 1, 1].map((item: any) => (
              <div className="text-center text-gray-500 dark:text-gray-400">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Bonnie Green</a>
                </h3>
                <p>CEO/Co-founder</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
