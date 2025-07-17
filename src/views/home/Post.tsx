import { useState } from "react"

const Post = () => {
  const [text, setText] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setImage(file)
  }

  const handleSubmit = () => {
    if (!text.trim() && !image) {
      alert("Escreva algo ou adicione uma imagem.")
      return
    }

    const postData = {
      text,
      image,
      createdAt: new Date().toISOString(),
    }

    console.log("Post criado:", postData)
    alert("Post publicado com sucesso!")
    // Depois conecta com Firebase ou backend

    // Resetar
    setText("")
    setImage(null)
  }

  return (
    <div className="p-4 space-y-4 text-black dark:text-white">
      {/* Campo de texto */}
      <textarea
        placeholder="O que você está pensando?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-transparent border rounded p-2"
        rows={4}
      />

      {/* Upload de imagem */}
      <div>
        <label className="block font-semibold mb-1">Imagem (opcional)</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Pré-visualização"
            className="w-full h-48 object-cover mt-2 rounded"
          />
        )}
      </div>

      {/* Botão publicar */}
      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-2 rounded"
      >
        Publicar
      </button>
    </div>
  )
}

export default Post
