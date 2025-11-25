"use client"

import { useState } from "react"
import { BuscarCodigo } from "@/components/buscar-codigo"
import { DetalleNotas } from "@/components/detalle-notas"
import { buscarEstudiante, type Estudiante } from "@/lib/data"
import { GraduationCap } from "lucide-react"

export default function Home() {
  const [estudiante, setEstudiante] = useState<Estudiante | null>(null)
  const [error, setError] = useState("")

  const handleBuscar = (codigo: string) => {
    const resultado = buscarEstudiante(codigo)
    if (resultado) {
      setEstudiante(resultado)
      setError("")
    } else {
      setError("Código no encontrado en el sistema")
    }
  }

  const handleVolver = () => {
    setEstudiante(null)
    setError("")
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Sistema de Registros Académicos</h1>
      </div>

      {estudiante ? (
        <DetalleNotas estudiante={estudiante} onVolver={handleVolver} />
      ) : (
        <BuscarCodigo onBuscar={handleBuscar} error={error} />
      )}

      <p className="text-muted-foreground/50 text-xs mt-10 tracking-wide">
        Acceso restringido. Uso exclusivo para estudiantes matriculados.
      </p>
    </main>
  )
}
