"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, User, CheckCircle, BookOpen, Star, TrendingUp } from "lucide-react"
import type { Estudiante } from "@/lib/data"


interface DetalleNotasProps {
  estudiante: Estudiante
  onVolver: () => void
}

export function DetalleNotas({ estudiante, onVolver }: DetalleNotasProps) {

 

  const getColorNota = (nota: number) => {
    if (nota >= 8) return "text-[color:var(--color-success)]"
    if (nota >= 5) return "text-[color:var(--color-warning)]"
    return "text-[color:var(--color-danger)]"
  }

  const notas = [
    { label: "Asistencia", valor: estudiante.tAsistencia - estudiante.pGitHub, icon: CheckCircle },
    { label: "Prácticas", valor: estudiante.tPracticas, icon: BookOpen },
    { label: "Practica GitHub", valor: estudiante.pGitHub, icon: BookOpen },
    { label: "Extra", valor: estudiante.extra, icon: Star },
  ]

  return (
    <Card className="w-full max-w-md border-border/50 shadow-2xl shadow-black/20">
      <CardHeader className="pb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onVolver}
          className="w-fit -ml-2 mb-4 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Regresar
        </Button>
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl font-semibold">{estudiante.nombre}</CardTitle>
            <p className="text-muted-foreground text-sm font-mono mt-1">RU: {estudiante.codigo}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {notas.map(({ label, valor, icon: Icon }) => (
            <div
              key={label}
              className="bg-secondary/30 border border-border/30 rounded-lg p-4 flex flex-col items-center gap-2"
            >
              <Icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
              <span className={`text-2xl font-bold font-mono ${getColorNota(valor)}`}>{valor}</span>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Nota Final</span>
          </div>
          <span className="text-4xl font-bold text-primary font-mono">{estudiante.notaTotal}</span>
        </div>
      </CardContent>
    </Card>
  )
}
