import React from "react";

interface Mode {
  mode: "production" | "development";
}

const CreatePage = ({ mode = "development" }: Mode) => {
  return (
    <div className="flex flex-col justify-center items-center h-96 w-full p-4 gap-4 ">
      <div className="flex flex-col h-1/3 w-2/3 gap-4 bg-white border rounded justify-center items-center">
        <h1 className="font-bold text-secondary text-3xl">Hola! 👋</h1>
        <h1 className="text-bold text-gray-400 text-sm">We're still cooking</h1>
      </div>
      {mode === "production" && (
        <div className="w-full h-full flex-col md:flex-row gap-10 flex justify-between items-center">
          <Editor />
          <Preview />
        </div>
      )}
    </div>
  );
};

const Editor = () => {
  return (
    <div className="h-1/2 w-full md:w-2/4 border border-secondary">Editor</div>
  );
};

const Preview = () => {
  return <div className="h-1/2 w-full border border-secondary">Preview</div>;
};

export default CreatePage;
