import { API_BASE_URL, API_ENDPOINTS } from "./apiConfig";

type UnAuthorizedProps = {
  onSuccess: () => void;
  onFailure: (error?: string) => void;
};

export const handleUnauthorized = async ({
  onSuccess,
  onFailure,
}: UnAuthorizedProps) => {
  try {
    // const access_token = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    const response = await fetch(
      `${API_BASE_URL}/${API_ENDPOINTS.REFRESH_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);

      onSuccess();
    } else {
      const errorData = await response.json();
      onFailure(errorData.message || "Unknown error occurred");
    }
  } catch (error) {
    // Type assertion to string only if error is a known error type
    onFailure((error as Error)?.message || "Unknown error occurred");
  }
};
