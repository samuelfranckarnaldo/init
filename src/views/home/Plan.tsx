import { useState } from "react"

const Plan = () => {
  const [cover, setCover] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [steps, setSteps] = useState<string[]>([""])
  const [isPaid, setIsPaid] = useState(false)

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setCover(file)
  }

  const handleStepChange = (index: number, value: string) => {
    const updated = [...steps]
    updated[index] = value
    setSteps(updated)
  }

  const addStep = () => setSteps([...steps, ""])

  const handleSubmit = () => {
    if (!cover || !title || !description) {
      alert("Preencha todos os campos obrigatórios.")
      return
    }

    const planData = {
      cover,
      title,
      description,
      steps: steps.filter(s => s.trim() !== ""),
      isPaid,
      createdAt: new Date().toISOString(),
    }

    console.log("Plano criado:", planData)
    alert("Plano publicado com sucesso!")
    // Aqui depois conecta com Firebase ou backend
  }

  return (
    <div className="p-4 space-y-4 text-black dark:text-white">
      {/* Capa */}
      <div className="space-y-2">
        <label className="block font-semibold">Capa do Plano (obrigatório)</label>
        <input type="file" accept="image/*" onChange={handleCoverUpload} />
        {cover && (
          <img
            src={URL.createObjectURL(cover)}
            alt="Preview"
            className="w-full h-48 object-cover rounded"
          />
        )}
      </div>

      {/* Título */}
      <div>
        <input
          type="text"
          placeholder="Título do Plano (obrigatório)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-xl font-bold bg-transparent border-b"
        />
      </div>

      {/* Descrição */}
      <div>
        <textarea
          placeholder="Descrição do Plano (obrigatório)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-transparent border rounded p-2"
          rows={4}
        />
      </div>

      {/* Passos */}
      <div>
        <h3 className="font-semibold">Etapas do Plano</h3>
        {steps.map((step, index) => (
          <input
            key={index}
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
            placeholder={`Passo ${index + 1}`}
            className="w-full bg-transparent border-b my-1"
          />
        ))}
        <button
          onClick={addStep}
          className="text-sm text-purple-600 mt-2"
        >
          + Adicionar Passo
        </button>
      </div>

      {/* Tipo de plano */}
      <div className="flex items-center justify-between mt-4">
        <label className="font-semibold">Tipo do Plano:</label>
        <div className="flex gap-4">
          <button
            onClick={() => setIsPaid(false)}
            className={`px-3 py-1 rounded ${
              !isPaid ? "bg-purple-600 text-white" : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            Gratuito
          </button>
          <button
            onClick={() => setIsPaid(true)}
            className={`px-3 py-1 rounded ${
              isPaid ? "bg-purple-600 text-white" : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            Pago
          </button>
        </div>
      </div>

      {/* Publicar */}
      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-2 rounded mt-6"
      >
        Publicar Plano
      </button>
    </div>
  )
}

export default Plan
