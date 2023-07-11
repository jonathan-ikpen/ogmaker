import Button from "./components/Button";

const HomePage = () => {
  return (
    <div className="mt-36 flex flex-col justify-center items-center">
      <h1 className="p-1 w-full md:max-w-5xl text-4xl font-bold tracking-normal text-secondary text-center md:text-7xl">
        Make
        <span className="text-primary"> OG Images </span>
        in Minutes
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="inline-block ml-1"
          >
            <path
              fill="deepskyblue"
              d="m11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2Z"
            />
          </svg>
        </span>
      </h1>
      <p className="p-6 max-w-2xl text-center md:text-lg">
        Craft visually engaging images tailored for social media, websites, and
        more to enhance your brand and captivate your audience.
      </p>
      <div className="flex gap-4 px-4 max-w-lg md:max-w-4xl">
        <Button
          to="https://github.com/jonathan-ikpen/ogmaker"
          classes="bg-white rounded text-secondary flex gap-2 "
        >
          <span>
            <svg
              aria-hidden="true"
              className="h-6 w-6 fill-secondary group-hover:fill-primary"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
            </svg>
          </span>
          <span>Contribute</span>
        </Button>
        <Button to="/create" classes="hidden bg-secondary rounded text-white">
          Start Creating
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
