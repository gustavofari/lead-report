import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function DashboardError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <h1>
        {error.status} - {error.statusText}
      </h1>
    );
  }

  return <h1>Erro inesperado</h1>;
}
