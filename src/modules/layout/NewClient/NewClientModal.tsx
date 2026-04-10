import React, { useState } from "react";
import { Save, AlertCircle, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useMetrics } from "../../../contexts";
import { API_KEY, API_ENDPOINTS } from "../../../config/environment";

export default function NewClientPage() {
  const navigate = useNavigate();
  const { refreshData } = useMetrics();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    crmEndpoint: "",
    crmToken: "",
    crmDocLink: "",
    payloadSchema: '{\n  "nome": "string",\n  "email": "string"\n}',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      let parsedPayload = null;
      if (formData.payloadSchema.trim()) {
        try {
          parsedPayload = JSON.parse(formData.payloadSchema);
        } catch {
          throw new Error(
            "O Schema de Payload precisa ser um formato JSON válido.",
          );
        }
      }

      const response = await fetch(API_ENDPOINTS.CUSTOMERS_LIST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name,
          crmEndpoint: formData.crmEndpoint,
          crmToken: formData.crmToken,
          crmDocLink: formData.crmDocLink,
          payloadSchema: parsedPayload,
        }),
      });

      if (!response.ok) throw new Error("Falha ao criar cliente na API.");

      await refreshData();

      navigate("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-800 text-[10px] font-black uppercase tracking-widest transition-all mb-8"
        >
          <ArrowLeft size={14} /> Voltar para o Dashboard
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Adicionar Novo Cliente
          </h1>
          <p className="text-sm font-bold text-slate-400 mt-2">
            Configure o roteamento de leads e a integração com o CRM de destino.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-600 rounded-xl text-sm font-bold flex items-center gap-2">
                <AlertCircle size={18} /> {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                Nome da Concessionária
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Motors Prime"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 placeholder:text-slate-400/50 outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                  Endpoint do CRM
                </label>
                <input
                  required
                  type="url"
                  name="crmEndpoint"
                  value={formData.crmEndpoint}
                  onChange={handleChange}
                  placeholder="https://api.pipedrive.com/v1..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 placeholder:text-slate-400/50 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                  Token da API
                </label>
                <input
                  type="password"
                  name="crmToken"
                  value={formData.crmToken}
                  onChange={handleChange}
                  placeholder="Bearer eyJhbGciOi..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 placeholder:text-slate-400/50 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                Link da Documentação (Opcional)
              </label>
              <input
                type="url"
                name="crmDocLink"
                value={formData.crmDocLink}
                onChange={handleChange}
                placeholder="https://developers.pipedrive.com/docs"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 placeholder:text-slate-400/50 outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                Payload Schema (Formato JSON)
              </label>
              <textarea
                name="payloadSchema"
                value={formData.payloadSchema}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-4 bg-slate-900 border border-slate-800 rounded-xl text-sm font-mono text-emerald-400 outline-none focus:border-blue-500 transition-all resize-none shadow-inner"
              ></textarea>
              <p className="text-xs font-bold text-slate-400 mt-2">
                Mapeie as chaves esperadas pelo CRM de destino.
              </p>
            </div>
            <div className="pt-6 mt-6 flex justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-6 py-3 text-slate-500 hover:bg-slate-50 rounded-xl text-xs font-heavy uppercase transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl text-xs font-heavy uppercase shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
              >
                <Save size={16} />
                {isSubmitting ? "Provisionando..." : "Provisionar Cliente"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
