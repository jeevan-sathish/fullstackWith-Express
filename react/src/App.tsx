import { useState, type ChangeEvent } from "react";

const App: React.FC = () => {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [id, setId] = useState<number>();
  const [message, setMessage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  async function handleClick() {
    try {
      const response = await fetch(`http://localhost:3000/api/message/${id}`, {
        headers: {
          Authorization: "jeea",
        },
      });
      const result = await response.json();
      if (result) {
        setMessage(result.message);
      } else {
        throw new Error("eror getting data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const fi = e.target.files;
    if (!fi || fi.length === 0) return;
    setFile(fi[0]);
  }

  async function handleUpload() {
    try {
      if (!file) {
        setMessage("enter the file first");
        return;
      }
      const formdata = new FormData();
      formdata.append("image", file);
      const response = await fetch(`${SERVER_URL}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: "jeevan",
        },
        body: formdata,
      });
      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <input
        type="number"
        value={id}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setId(Number(e.target.value))
        }
      />
      <button onClick={handleClick}>getdata</button>
      <p>{message}</p>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
};

export default App;
