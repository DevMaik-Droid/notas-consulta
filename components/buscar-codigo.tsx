"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Shield } from "lucide-react"

interface BuscarCodigoProps {
  onBuscar: (codigo: string) => void
  error?: string
}

export function BuscarCodigo({ onBuscar, error }: BuscarCodigoProps) {
  const [codigo, setCodigo] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (codigo.trim()) {
      onBuscar(codigo.trim())
    }
  }

  return (
    <Card className="w-full max-w-md border-border/50 shadow-2xl shadow-black/20">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-semibold tracking-tight">Acceso al Sistema</CardTitle>
        <p className="text-muted-foreground text-sm mt-2">
          Ingrese su registro universitario para ver resumen
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground uppercase tracking-wider">RU de Estudiante</label>
            <div className="flex gap-2">
              <Input
                placeholder="RU"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value.toUpperCase())}
                className="flex-1 bg-secondary/50 border-border/50 font-mono text-foreground placeholder:text-muted-foreground/50"
              />
              <Button type="submit" className="px-4">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {error && (
            <p className="text-[color:var(--color-danger)] text-sm text-center bg-[color:var(--color-danger)]/10 py-2 rounded">
              {error}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
